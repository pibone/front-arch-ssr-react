import type { Meta, StoryObj } from '@storybook/react'
import { expect } from '@storybook/jest'
import { within } from '@storybook/testing-library'
import { PokemonCardWidget } from './pokemon-card.widget'

const meta: Meta<typeof PokemonCardWidget> = {
    title: 'PokemonCardWidget',
    component: PokemonCardWidget,
    argTypes: {},
}

export default meta
type Story = StoryObj<typeof PokemonCardWidget>

export const Default: Story = {
    args: {},
    async play({ canvasElement }) {
        const canvas = within(canvasElement)
        const container = canvas.getByTestId('pokemon-card-widget')

        expect(container).toBeTruthy()
    },
}
