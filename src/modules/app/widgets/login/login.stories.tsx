import type { Meta, StoryObj } from '@storybook/react'
import { expect } from '@storybook/jest'
import { within } from '@storybook/testing-library'
import { LoginWidget } from './login.widget'

const meta: Meta<typeof LoginWidget> = {
    title: 'LoginWidget',
    component: LoginWidget,
    argTypes: {},
}

export default meta
type Story = StoryObj<typeof LoginWidget>

export const Default: Story = {
    args: {},
    async play({ canvasElement }) {
        const canvas = within(canvasElement)
        const container = canvas.getByTestId('login-widget')

        expect(container).toBeTruthy()
    },
}
