import type { Meta, StoryObj } from '@storybook/react'
import { expect } from '@storybook/jest'
import { within } from '@storybook/testing-library'
import * as Select from './select.component'

const meta: Meta<typeof Select.Root> = {
    title: 'Select',
    component: Select.Root,
    argTypes: {},
}

export default meta
type Story = StoryObj<typeof Select.Root>

export const Default: Story = {
    render: ({ position, ...p }) => (
        <Select.Root {...p}>
            <Select.Trigger className="w-[180px]">
                <Select.Value placeholder="Theme" />
            </Select.Trigger>
            <Select.Content position={position as string}>
                <Select.Group>
                    <Select.Label>Hola</Select.Label>
                    <Select.Item value="light">Light</Select.Item>
                    <Select.Item value="dark">Dark</Select.Item>
                </Select.Group>
                <Select.Item value="system">System</Select.Item>
            </Select.Content>
        </Select.Root>
    ),
    args: {},
    argTypes: {
        position: {
            options: ['item-aligned', 'popper'],
            control: 'radio',
        },
    },
    async play({ canvasElement }) {
        const canvas = within(canvasElement)
        const container = canvas.getByTestId('select')

        expect(container).toBeTruthy()
    },
}
