import type { Meta, StoryObj } from '@storybook/react'
import { expect } from '@storybook/jest'
import { within } from '@storybook/testing-library'
import { ApplicationLayout } from './application.layout'

const meta: Meta<typeof ApplicationLayout> = {
    title: 'ApplicationLayout',
    component: ApplicationLayout,
    argTypes: {},
}

export default meta
type Story = StoryObj<typeof ApplicationLayout>

export const Default: Story = {
    args: {},
    async play({ canvasElement }) {
        const canvas = within(canvasElement)
        const container = canvas.getByTestId('application-layout')

        expect(container).toBeTruthy()
    },
}
