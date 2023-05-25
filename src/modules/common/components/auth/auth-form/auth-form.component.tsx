import React from 'react'
import cn from 'classnames'
import { Button } from '@/common/components/ui/button'
import * as Form from '../../ui/form'
import { z } from 'zod'

export type AuthFormProps = Omit<
    React.HTMLAttributes<HTMLDivElement>,
    'onSubmit'
> & {
    onSubmit(credentials: { email: string; password: string }): Promise
}

export function AuthForm({ className, onSubmit, ...props }: AuthFormProps) {
    const form = Form.useZodForm({
        criteriaMode: 'firstError',
        schema: z.object({
            username: z
                .string()
                .min(2, {
                    message: 'Username must be at least 2 characters',
                })
                .max(50),
            password: z.string().min(8, {
                message: 'Password must contain at least 8 characters',
            }),
        }),
        onSubmit,
    })
    return (
        <div
            data-testid="auth-form"
            className={cn('grid gap-6', className)}
            {...props}
        >
            <Form.Root {...form} className="grid gap-4">
                <div className="grid gap-2">
                    <Form.Field
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <Form.Item>
                                <Form.Label>Username</Form.Label>
                                <Form.Input placeholder="pibone" {...field} />
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
                                />
                                <Form.Message />
                            </Form.Item>
                        )}
                    />
                </div>
                <Button type="submit">Sign In</Button>
            </Form.Root>
        </div>
    )
}
