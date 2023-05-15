import type { Meta, StoryObj } from '@storybook/react'
import { expect } from '@storybook/jest'
import { within } from '@storybook/testing-library'
import { Command } from './command.component'
import { Search } from 'lucide-react'

const meta: Meta<typeof Command> = {
    title: 'Command',
    component: Command,
    argTypes: {},
}

export default meta
type Story = StoryObj<typeof Command>

export const Default: Story = {
    render: (p) => (
        <Command {...p}>
            <Command.Input
                IconComponent={Search}
                placeholder="Busca una opción"
            />
            <Command.List>
                <Command.Empty>Sin resultados</Command.Empty>
                <Command.Group>
                    <Command.Item>Calendario</Command.Item>
                    <Command.Item>
                        Utilidades
                        <Command.Shortcut>Ctrl+P</Command.Shortcut>
                    </Command.Item>
                </Command.Group>
            </Command.List>
        </Command>
    ),

    args: {},
    async play({ canvasElement }) {
        const canvas = within(canvasElement)
        const container = canvas.getByTestId('command')

        expect(container).toBeTruthy()
    },
}
