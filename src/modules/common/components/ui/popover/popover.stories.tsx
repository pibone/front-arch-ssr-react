import type { Meta, StoryObj } from '@storybook/react'
import { expect } from '@storybook/jest'
import { within } from '@storybook/testing-library'
import * as Popover from './popover.component'
import { Button } from '../button'
import { Badge } from '../badge'

const meta: Meta<typeof Popover.Root> = {
    title: 'Popover',
    component: Popover.Root,
    argTypes: {},
}

export default meta
type Story = StoryObj<typeof Popover.Root>

export const Default: Story = {
    render: (p) => (
        <Popover.Root {...p}>
            <Popover.Trigger>
                <Button>Abrir</Button>
            </Popover.Trigger>
            <Popover.Content asChild>
                <div className="flex gap-1">
                    <Badge>Contenido</Badge>
                    Este es el contenido
                </div>
            </Popover.Content>
        </Popover.Root>
    ),
    args: {},
    async play({ canvasElement }) {
        const canvas = within(canvasElement)
        const container = canvas.getByTestId('popover')

        expect(container).toBeTruthy()
    },
}
