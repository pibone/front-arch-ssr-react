import type { Meta, StoryObj } from '@storybook/react'
import { expect } from '@storybook/jest'
import { within } from '@storybook/testing-library'
import { action } from '@storybook/addon-actions'
import * as Form from './form.component'
import { z } from 'zod'
import { Button } from '../button'
import { Input } from '../input'

const meta: Meta<typeof Form.Root> = {
    title: 'Form',
    component: Form.Root,
    argTypes: {},
}

export default meta
type Story = StoryObj<typeof Form.Root>

export const Default: Story = {
    render: function Render(p) {
        const schema = z
            .object({
                username: z
                    .string()
                    .min(2, {
                        message: 'Username must be at least 2 characters',
                    })
                    .max(50),
                password: z.string().min(8, {
                    message: 'Password must contain at least 8 characters',
                }),
                confirmPassword: z.string(),
                address: z.string().optional(),
            })
            .refine(
                ({ password, confirmPassword }) => password === confirmPassword,
                {
                    message: 'Passwords do not match',
                    path: ['confirmPassword'],
                }
            )
        const form = Form.useZodForm<z.infer<typeof schema>>({
            schema,
            defaultValues: {
                username: '',
                password: '',
                confirmPassword: '',
                address: '',
            },
            onSubmit: action('onSubmit'),
        })
        return (
            <Form.Root {...p} {...form} className="space-y-8">
                <div className="space-y-4">
                    <Form.Field
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <Form.Item>
                                <Form.Label>Username</Form.Label>
                                <Form.Input placeholder="pibone" {...field} />
                                <Form.Description>
                                    This is your display name
                                </Form.Description>
                                <Form.Message />
                            </Form.Item>
                        )}
                    />
                    <Form.Field
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <Form.Item>
                                <Form.Label>Password</Form.Label>
                                <Form.Input
                                    placeholder="*****"
                                    type="password"
                                    {...field}
                                >
                                    <input className="block w-full rounded-md border-2 border-secondary p-2" />
                                </Form.Input>
                                <Form.Description>
                                    The password you will use
                                </Form.Description>
                                <Form.Message />
                            </Form.Item>
                        )}
                    />
                    <Form.Field
                        control={form.control}
                        name="confirmPassword"
                        render={({ field }) => (
                            <Form.Item>
                                <Form.Label>Rewrite your password</Form.Label>
                                <Form.Control>
                                    <Input
                                        placeholder="*****"
                                        type="password"
                                        {...field}
                                    />
                                </Form.Control>
                                <Form.Message />
                            </Form.Item>
                        )}
                    />
                    <Form.Field
                        control={form.control}
                        name="address"
                        render={({ field }) => (
                            <Form.Item>
                                <Form.Label>Dirección</Form.Label>
                                <Form.Input>
                                    <Input
                                        placeholder="Calle Mirat"
                                        type="text"
                                        {...field}
                                    />
                                </Form.Input>
                                <Form.Message />
                            </Form.Item>
                        )}
                    />
                </div>
                <Button type="submit">Submit</Button>
            </Form.Root>
        )
    },
    args: {},
    async play({ canvasElement }) {
        const canvas = within(canvasElement)
        const container = canvas.getByTestId('form')

        expect(container).toBeTruthy()
    },
}
