import type { Meta, StoryObj } from '@storybook/react'
import { expect } from '@storybook/jest'
import { within } from '@storybook/testing-library'
import { MainView } from './main.view'

const meta: Meta<typeof MainView> = {
    title: 'MainView',
    component: MainView,
    argTypes: {},
}

export default meta
type Story = StoryObj<typeof MainView>

export const Default: Story = {
    args: {},
    async play({ canvasElement }) {
        const canvas = within(canvasElement)
        const container = canvas.getByTestId('main-view')

        expect(container).toBeTruthy()
    },
}
