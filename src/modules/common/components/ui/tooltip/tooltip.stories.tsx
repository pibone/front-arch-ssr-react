import type { Meta, StoryObj } from '@storybook/react'
import { expect } from '@storybook/jest'
import { within } from '@storybook/testing-library'
import * as Tooltip from './tooltip.component'

const meta: Meta<typeof Tooltip.Root> = {
    title: 'Tooltip',
    component: Tooltip.Root,
    argTypes: {},
}

export default meta
type Story = StoryObj<typeof Tooltip.Root>

export const Default: Story = {
    render: (p) => (
        <Tooltip.Provider>
            <Tooltip.Root {...p}>
                <Tooltip.Trigger>Hover</Tooltip.Trigger>
                <Tooltip.Content>
                    <p>Add to library</p>
                </Tooltip.Content>
            </Tooltip.Root>
        </Tooltip.Provider>
    ),
    args: {},
    async play({ canvasElement }) {
        const canvas = within(canvasElement)
        const container = canvas.getByTestId('tooltip')

        expect(container).toBeTruthy()
    },
}
