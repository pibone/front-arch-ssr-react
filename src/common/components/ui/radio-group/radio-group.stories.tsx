import type { Meta, StoryObj } from '@storybook/react'
import { expect } from '@storybook/jest'
import { within } from '@storybook/testing-library'
import * as RadioGroup from './radio-group.component'
import { Label } from '../label'

const meta: Meta<typeof RadioGroup.Root> = {
    title: 'RadioGroup',
    component: RadioGroup.Root,
    argTypes: {},
}

export default meta
type Story = StoryObj<typeof RadioGroup.Root>

export const Default: Story = {
    render: (p) => (
        <RadioGroup.Root defaultValue="option-one" {...p}>
            <div className="flex items-center space-x-2">
                <RadioGroup.Item value="option-one" id="option-one" />
                <Label htmlFor="option-one">Option One</Label>
            </div>
            <div className="flex items-center space-x-2">
                <RadioGroup.Item value="option-two" id="option-two" />
                <Label htmlFor="option-two">Option Two</Label>
            </div>
        </RadioGroup.Root>
    ),
    args: {},
    async play({ canvasElement }) {
        const canvas = within(canvasElement)
        const container = canvas.getByTestId('radio-group')

        expect(container).toBeTruthy()
    },
}
