import type { Meta, StoryObj } from '@storybook/react'
import { expect } from '@storybook/jest'
import { within } from '@storybook/testing-library'
import { Separator } from './separator.component'

const meta: Meta<typeof Separator> = {
    title: 'Separator',
    component: Separator,
    argTypes: {
        orientation: {
            control: 'select',
            options: ['horizontal', 'vertical'],
        },
    },
}

export default meta
type Story = StoryObj<typeof Separator>

export const Default: Story = {
    render: (p) => <Separator {...p} />,
    args: {},
    async play({ canvasElement }) {
        const canvas = within(canvasElement)
        const container = canvas.getByTestId('separator')

        expect(container).toBeTruthy()
    },
}
