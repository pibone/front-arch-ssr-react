import type { Meta, StoryObj } from '@storybook/react'
import { expect } from '@storybook/jest'
import { within } from '@storybook/testing-library'
import { {{ pascalCase name }} } from './{{ kebabCase name }}.component'

const meta: Meta<typeof {{ pascalCase name }}> = {
    title: '{{ pascalCase name }}',
    component: {{ pascalCase name }},
    argTypes: {},
}

export default meta
type Story = StoryObj<typeof {{ pascalCase name }}>

export const Default: Story = {
    args: {},
    async play({ canvasElement }) {
        const canvas = within(canvasElement)
        const container = canvas.getByTestId('{{ kebabCase name }}')

        expect(container).toBeTruthy()
    },
}
