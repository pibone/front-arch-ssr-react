import type { Meta, StoryObj } from '@storybook/react'
import { expect } from '@storybook/jest'
import { within } from '@storybook/testing-library'
import { Accordion } from './accordion.component'

const meta: Meta<typeof Accordion> = {
    title: 'Accordion',
    component: Accordion,
    argTypes: {},
}

export default meta
type Story = StoryObj<typeof Accordion>

export const Default: Story = {
    render: (props) => (
        <Accordion {...props}>
            <Accordion.Item value="item-1">
                <Accordion.Trigger>Sección 1</Accordion.Trigger>
                <Accordion.Content>Contenido 1</Accordion.Content>
            </Accordion.Item>
            <Accordion.Item value="item-2" onClick={() => console.log('hola')}>
                <Accordion.Trigger>Sección 2</Accordion.Trigger>
                <Accordion.Content>Contenido 2</Accordion.Content>
            </Accordion.Item>
        </Accordion>
    ),
    args: {},
    async play({ canvasElement }) {
        const canvas = within(canvasElement)
        const container = canvas.getByTestId('accordion')

        expect(container).toBeTruthy()
    },
}
