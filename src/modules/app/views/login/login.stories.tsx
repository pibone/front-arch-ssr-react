import type { Meta, StoryObj } from '@storybook/react'
import { expect } from '@storybook/jest'
import { within } from '@storybook/testing-library'
import { LoginView } from './login.view'

const meta: Meta<typeof LoginView> = {
    title: 'LoginView',
    component: LoginView,
    argTypes: {},
}

export default meta
type Story = StoryObj<typeof LoginView>

export const Default: Story = {
    args: {},
    async play({ canvasElement }) {
        const canvas = within(canvasElement)
        const container = canvas.getByTestId('login-view')

        expect(container).toBeTruthy()
    },
}
