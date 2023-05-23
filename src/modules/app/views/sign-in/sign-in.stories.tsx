import type { Meta, StoryObj } from '@storybook/react'
import { expect } from '@storybook/jest'
import { within } from '@storybook/testing-library'
import { SignInView } from './sign-in.view'

const meta: Meta<typeof SignInView> = {
    title: 'SignInView',
    component: SignInView,
    argTypes: {},
}

export default meta
type Story = StoryObj<typeof SignInView>

export const Default: Story = {
    args: {},
    async play({ canvasElement }) {
        const canvas = within(canvasElement)
        const container = canvas.getByTestId('sign-in-view')

        expect(container).toBeTruthy()
    },
}
