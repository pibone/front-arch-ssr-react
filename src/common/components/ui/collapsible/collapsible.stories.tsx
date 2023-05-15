import type { Meta, StoryObj } from '@storybook/react'
import { expect } from '@storybook/jest'
import { within } from '@storybook/testing-library'
import { Collapsible } from './collapsible.component'
import { Button } from '../button'

const meta: Meta<typeof Collapsible> = {
    title: 'Collapsible',
    component: Collapsible,
    argTypes: {},
}

export default meta
type Story = StoryObj<typeof Collapsible>

export const Default: Story = {
    render: (p) => (
        <Collapsible {...p}>
            <Collapsible.Trigger>
                <Button>Abrir</Button>
            </Collapsible.Trigger>
            <Collapsible.Content>Contenido</Collapsible.Content>
        </Collapsible>
    ),
    args: {},
    async play({ canvasElement }) {
        const canvas = within(canvasElement)
        const container = canvas.getByTestId('collapsible')

        expect(container).toBeTruthy()
    },
}
