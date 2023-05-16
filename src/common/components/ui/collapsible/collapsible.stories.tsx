import type { Meta, StoryObj } from '@storybook/react'
import { expect } from '@storybook/jest'
import { within } from '@storybook/testing-library'
import * as Collapsible from './collapsible.component'
import { Button } from '../button'

const meta: Meta<typeof Collapsible.Root> = {
    title: 'Collapsible',
    component: Collapsible.Root,
    argTypes: {},
}

export default meta
type Story = StoryObj<typeof Collapsible.Root>

export const Default: Story = {
    render: (p) => (
        <Collapsible.Root {...p}>
            <Collapsible.Trigger>
                <Button>Abrir</Button>
            </Collapsible.Trigger>
            <Collapsible.Content>Contenido</Collapsible.Content>
        </Collapsible.Root>
    ),
    args: {},
    async play({ canvasElement }) {
        const canvas = within(canvasElement)
        const container = canvas.getByTestId('collapsible')

        expect(container).toBeTruthy()
    },
}
