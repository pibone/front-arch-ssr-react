import type { Meta, StoryObj } from '@storybook/react'
import { expect } from '@storybook/jest'
import { within } from '@storybook/testing-library'
import { AppMainView } from './app-main.view'

const meta: Meta<typeof AppMainView> = {
    title: 'AppMainView',
    component: AppMainView,
    argTypes: {},
}

export default meta
type Story = StoryObj<typeof AppMainView>

export const Default: Story = {
    args: {},
    async play({ canvasElement }) {
        const canvas = within(canvasElement)
        const container = canvas.getByTestId('app-main-view')

        expect(container).toBeTruthy()
    },
}
