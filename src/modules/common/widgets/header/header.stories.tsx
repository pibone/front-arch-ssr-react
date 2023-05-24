import type { Meta, StoryObj } from '@storybook/react'
import { expect } from '@storybook/jest'
import { within } from '@storybook/testing-library'
import { HeaderWidget } from './header.widget'

const meta: Meta<typeof HeaderWidget> = {
    title: 'HeaderWidget',
    component: HeaderWidget,
    argTypes: {},
}

export default meta
type Story = StoryObj<typeof HeaderWidget>

export const Default: Story = {
    args: {},
    async play({ canvasElement }) {
        const canvas = within(canvasElement)
        const container = canvas.getByTestId('header-widget')

        expect(container).toBeTruthy()
    },
}
