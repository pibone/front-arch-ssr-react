import type { Meta, StoryObj } from '@storybook/react'
import { expect } from '@storybook/jest'
import { within } from '@storybook/testing-library'
import { RootLayout } from './root.layout'

const meta: Meta<typeof RootLayout> = {
    title: 'RootLayout',
    component: RootLayout,
    argTypes: {},
}

export default meta
type Story = StoryObj<typeof RootLayout>

export const Default: Story = {
    args: {},
    async play({ canvasElement }) {
        const canvas = within(canvasElement)
        const container = canvas.getByTestId('root-layout')

        expect(container).toBeTruthy()
    },
}
