import type { Meta, StoryObj } from '@storybook/react'
import { expect } from '@storybook/jest'
import { within } from '@storybook/testing-library'
import { SampleButton } from './sample-button.component'

const meta: Meta<typeof SampleButton> = {
    title: 'SampleButton',
    component: SampleButton,
    argTypes: {
        onClick: {
            action: 'sample button clicked',
        },
    },
}

export default meta
type Story = StoryObj<typeof SampleButton>

export const Default: Story = {
    render: (props) => <SampleButton {...props}>Sample</SampleButton>,
    args: {},
    async play({ canvasElement }) {
        const canvas = within(canvasElement)
        const container = canvas.getByTestId('sample-button')

        expect(container).toBeTruthy()
    },
}
