import type { Meta, StoryObj } from '@storybook/react'
import { expect } from '@storybook/jest'
import { within } from '@storybook/testing-library'
import { Label } from './label.component'

const meta: Meta<typeof Label> = {
    title: 'Label',
    component: Label,
    argTypes: {},
}

export default meta
type Story = StoryObj<typeof Label>

export const Default: Story = {
    render: (p) => (
        <Label htmlFor="terms" {...p}>
            Accept terms and conditions
        </Label>
    ),
    args: {},
    async play({ canvasElement }) {
        const canvas = within(canvasElement)
        const container = canvas.getByTestId('label')

        expect(container).toBeTruthy()
    },
}
