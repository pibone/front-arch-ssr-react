import type { Meta, StoryObj } from '@storybook/react'
import { expect } from '@storybook/jest'
import { within } from '@storybook/testing-library'
import { AuthForm } from './auth-form.component'

const meta: Meta<typeof AuthForm> = {
    title: 'AuthForm',
    component: AuthForm,
    argTypes: {},
}

export default meta
type Story = StoryObj<typeof AuthForm>

export const Default: Story = {
    args: {},
    async play({ canvasElement }) {
        const canvas = within(canvasElement)
        const container = canvas.getByTestId('auth-form')

        expect(container).toBeTruthy()
    },
}
