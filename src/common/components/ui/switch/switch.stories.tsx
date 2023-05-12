import type { Meta, StoryObj } from '@storybook/react'
import { expect } from '@storybook/jest'
import { within } from '@storybook/testing-library'
import { Switch } from './switch.component'

const meta: Meta<typeof Switch> = {
    title: 'Switch',
    component: Switch,
    argTypes: {},
}

export default meta
type Story = StoryObj<typeof Switch>

export const Default: Story = {
    args: {},
    async play({ canvasElement }) {
        const canvas = within(canvasElement)
        const container = canvas.getByTestId('switch')

        expect(container).toBeTruthy()
    },
}
