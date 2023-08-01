import type { Meta, StoryObj } from '@storybook/react'
import { expect } from '@storybook/jest'
import { within } from '@storybook/testing-library'
import { PokemonListWidget } from './pokemon-list.widget'

const meta: Meta<typeof PokemonListWidget> = {
    title: 'PokemonListWidget',
    component: PokemonListWidget,
    argTypes: {},
}

export default meta
type Story = StoryObj<typeof PokemonListWidget>

export const Default: Story = {
    args: {},
    async play({ canvasElement }) {
        const canvas = within(canvasElement)
        const container = canvas.getByTestId('pokemon-list-widget')

        expect(container).toBeTruthy()
    },
}
