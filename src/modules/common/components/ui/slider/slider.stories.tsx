import type { Meta, StoryObj } from '@storybook/react'
import { expect } from '@storybook/jest'
import { within } from '@storybook/testing-library'
import { Slider } from './slider.component'

const meta: Meta<typeof Slider> = {
    title: 'Slider',
    component: Slider,
    argTypes: {
        defaultValue: {
            control: 'object',
        },
        min: {
            type: 'number',
        },
        max: {
            type: 'number',
        },
        step: {
            type: 'number',
        },
    },
}

export default meta
type Story = StoryObj<typeof Slider>

export const Default: Story = {
    render: (p) => <Slider defaultValue={[33]} max={100} step={10} {...p} />,
    argTypes: {},
    async play({ canvasElement }) {
        const canvas = within(canvasElement)
        const container = canvas.getByTestId('slider')

        expect(container).toBeTruthy()
    },
}
