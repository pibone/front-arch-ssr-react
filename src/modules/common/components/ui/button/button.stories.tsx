import type { Meta, StoryObj } from '@storybook/react'
import { expect } from '@storybook/jest'
import { within } from '@storybook/testing-library'
import { Button } from './button.component'

const meta: Meta<typeof Button> = {
    title: 'Button',
    component: Button,
    argTypes: {},
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
    render: (p) => <Button {...p}>Sample</Button>,
    args: {},
    async play({ canvasElement }) {
        const canvas = within(canvasElement)
        const container = canvas.getByTestId('button')

        expect(container).toBeTruthy()
    },
}
