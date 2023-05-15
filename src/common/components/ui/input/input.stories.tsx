import type { Meta, StoryObj } from '@storybook/react'
import { expect } from '@storybook/jest'
import { within } from '@storybook/testing-library'
import { Input } from './input.component'

const meta: Meta<typeof Input> = {
    title: 'Input',
    component: Input,
    argTypes: {},
}

export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {
    render: (p) => <Input type="email" placeholder="Email" {...p} />,
    args: {},
    async play({ canvasElement }) {
        const canvas = within(canvasElement)
        const container = canvas.getByTestId('input')

        expect(container).toBeTruthy()
    },
}
