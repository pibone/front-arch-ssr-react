import type { Meta, StoryObj } from '@storybook/react'
import { expect } from '@storybook/jest'
import { within } from '@storybook/testing-library'
import { Progress } from './progress.component'

const meta: Meta<typeof Progress> = {
    title: 'Progress',
    component: Progress,
    argTypes: {},
}

export default meta
type Story = StoryObj<typeof Progress>

export const Default: Story = {
    args: {},
    async play({ canvasElement }) {
        const canvas = within(canvasElement)
        const container = canvas.getByTestId('progress')

        expect(container).toBeTruthy()
    },
}
