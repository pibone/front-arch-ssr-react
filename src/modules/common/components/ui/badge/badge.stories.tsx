import type { Meta, StoryObj } from '@storybook/react'
import { expect } from '@storybook/jest'
import { within } from '@storybook/testing-library'
import { Badge } from './badge.component'

const meta: Meta<typeof Badge> = {
    title: 'Badge',
    component: Badge,
    argTypes: {},
}

export default meta
type Story = StoryObj<typeof Badge>

export const Default: Story = {
    render: (p) => <Badge {...p}>Badge</Badge>,
    args: {},
    async play({ canvasElement }) {
        const canvas = within(canvasElement)
        const container = canvas.getByTestId('badge')

        expect(container).toBeTruthy()
    },
}
