import type { Meta, StoryObj } from '@storybook/react'
import { expect } from '@storybook/jest'
import { within } from '@storybook/testing-library'
import { Progress } from './progress.component'

const meta: Meta<typeof Progress> = {
    title: 'Progress',
    component: Progress,
    argTypes: {
        max: {
            control: { type: 'number ' },
        },
        percentage: {
            control: { type: 'range', min: 0, max: 100 },
        },
    },
}

export default meta
type Story = StoryObj<typeof Progress>

export const Default: Story = {
    render: (p) => <Progress {...p} />,
    args: {},
    async play({ canvasElement }) {
        const canvas = within(canvasElement)
        const container = canvas.getByTestId('progress')

        expect(container).toBeTruthy()
    },
}
