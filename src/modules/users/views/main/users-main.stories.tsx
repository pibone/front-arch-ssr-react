import type { Meta, StoryObj } from '@storybook/react'
import { expect } from '@storybook/jest'
import { within } from '@storybook/testing-library'
import { UsersMainView } from './users-main.view'

const meta: Meta<typeof UsersMainView> = {
    title: 'UsersMainView',
    component: UsersMainView,
    argTypes: {},
}

export default meta
type Story = StoryObj<typeof UsersMainView>

export const Default: Story = {
    args: {},
    async play({ canvasElement }) {
        const canvas = within(canvasElement)
        const container = canvas.getByTestId('users-main-view')

        expect(container).toBeTruthy()
    },
}
