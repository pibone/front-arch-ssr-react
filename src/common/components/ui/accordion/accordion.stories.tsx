import type { Meta, StoryObj } from '@storybook/react'
import { expect } from '@storybook/jest'
import { within } from '@storybook/testing-library'
import * as Accordion from './accordion.component'

const meta: Meta<typeof Accordion.Root> = {
    title: 'Accordion',
    component: Accordion.Root,
    argTypes: {},
}

export default meta
type Story = StoryObj<typeof Accordion.Root>

export const Default: Story = {
    render: (props) => (
        <Accordion.Root {...props}>
            <Accordion.Item value="item-1">
                <Accordion.Trigger>Sección 1</Accordion.Trigger>
                <Accordion.Content>Contenido 1</Accordion.Content>
            </Accordion.Item>
            <Accordion.Item value="item-2" onClick={() => console.log('hola')}>
                <Accordion.Trigger>Sección 2</Accordion.Trigger>
                <Accordion.Content>Contenido 2</Accordion.Content>
            </Accordion.Item>
        </Accordion.Root>
    ),
    args: {},
    async play({ canvasElement }) {
        const canvas = within(canvasElement)
        const container = canvas.getByTestId('accordion')

        expect(container).toBeTruthy()
    },
}
