import type { Meta, StoryObj } from '@storybook/react'
import { expect } from '@storybook/jest'
import { within } from '@storybook/testing-library'
import { {{ pascalCase name }}Layout } from './{{ kebabCase name }}.layout'

const meta: Meta<typeof {{ pascalCase name }}Layout> = {
    title: '{{ pascalCase name }}Layout',
    component: {{ pascalCase name }}Layout,
    argTypes: {},
}

export default meta
type Story = StoryObj<typeof {{ pascalCase name }}Layout>

export const Default: Story = {
    args: {},
    async play({ canvasElement }) {
        const canvas = within(canvasElement)
        const container = canvas.getByTestId('{{ kebabCase name }}-layout')

        expect(container).toBeTruthy()
    },
}
