import type { Meta, StoryObj } from '@storybook/react'
import { expect } from '@storybook/jest'
import { within } from '@storybook/testing-library'
import { Checkbox } from './checkbox.component'
import { Label } from '../label'

const meta: Meta<typeof Checkbox> = {
    title: 'Checkbox',
    component: Checkbox,
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
type Story = StoryObj<typeof Checkbox>

export const Default: Story = {
    render: (p) => (
        <div className="flex space-x-2">
            <Checkbox id="terms" {...p} />
            <Label htmlFor="terms">Acepto los términos</Label>
        </div>
    ),
    args: {},
    async play({ canvasElement }) {
        const canvas = within(canvasElement)
        const container = canvas.getByTestId('checkbox')

        expect(container).toBeTruthy()
    },
}
