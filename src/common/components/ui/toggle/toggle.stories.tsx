import type { Meta, StoryObj } from '@storybook/react'
import { expect } from '@storybook/jest'
import { within } from '@storybook/testing-library'
import { Toggle } from './toggle.component'

const meta: Meta<typeof Toggle> = {
    title: 'Toggle',
    component: Toggle,
    argTypes: {},
}

export default meta
type Story = StoryObj<typeof Toggle>

export const Default: Story = {
    render: (p) => <Toggle {...p}>@</Toggle>,
    args: {},
    async play({ canvasElement }) {
        const canvas = within(canvasElement)
        const container = canvas.getByTestId('toggle')

        expect(container).toBeTruthy()
    },
}
