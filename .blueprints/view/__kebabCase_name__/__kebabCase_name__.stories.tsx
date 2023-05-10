import type { Meta, StoryObj } from '@storybook/react'
import { expect } from '@storybook/jest'
import { within } from '@storybook/testing-library'
import { {{ pascalCase name }}View } from './{{ kebabCase name }}.view'

const meta: Meta<typeof {{ pascalCase name }}View> = {
    title: '{{ pascalCase name }}View',
    component: {{ pascalCase name }}View,
    argTypes: {},
}

export default meta
type Story = StoryObj<typeof {{ pascalCase name }}View>

export const Default: Story = {
    args: {},
    async play({ canvasElement }) {
        const canvas = within(canvasElement)
        const container = canvas.getByTestId('{{ kebabCase name }}-view')

        expect(container).toBeTruthy()
    },
}
