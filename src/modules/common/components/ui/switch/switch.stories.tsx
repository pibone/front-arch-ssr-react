import type { Meta, StoryObj } from '@storybook/react'
import { expect } from '@storybook/jest'
import { within } from '@storybook/testing-library'
import { Switch } from './switch.component'

const meta: Meta<typeof Switch> = {
    title: 'Switch',
    component: Switch,
    argTypes: {
        onCheckedChange: {
            type: 'function',
        },
        checked: {
            type: 'boolean',
            control: 'radio',
            options: [true, false, undefined],
        },
        defaultChecked: {
            type: 'boolean',
        },
        disabled: {
            type: 'boolean',
        },
        required: {
            type: 'boolean',
        },
        name: {
            type: 'string',
        },
        value: {
            type: 'string',
        },
    },
}

export default meta
type Story = StoryObj<typeof Switch>

export const Default: Story = {
    render: (p) => <Switch {...p} />,
    args: {},
    async play({ canvasElement }) {
        const canvas = within(canvasElement)
        const container = canvas.getByTestId('switch')

        expect(container).toBeTruthy()
    },
}
