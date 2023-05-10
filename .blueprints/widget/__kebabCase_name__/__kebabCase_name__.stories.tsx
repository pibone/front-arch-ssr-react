import type { Meta, StoryObj } from '@storybook/react'
import { expect } from '@storybook/jest'
import { within } from '@storybook/testing-library'
import { {{ pascalCase name }}Widget } from './{{ kebabCase name }}.widget'

const meta: Meta<typeof {{ pascalCase name }}Widget> = {
    title: '{{ pascalCase name }}Widget',
    component: {{ pascalCase name }}Widget,
    argTypes: {},
}

export default meta
type Story = StoryObj<typeof {{ pascalCase name }}Widget>

export const Default: Story = {
    args: {},
    async play({ canvasElement }) {
        const canvas = within(canvasElement)
        const container = canvas.getByTestId('{{ kebabCase name }}-widget')

        expect(container).toBeTruthy()
    },
}
