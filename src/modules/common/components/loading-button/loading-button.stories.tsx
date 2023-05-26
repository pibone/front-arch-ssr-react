import type { Meta, StoryObj } from '@storybook/react'
import { expect } from '@storybook/jest'
import { within } from '@storybook/testing-library'
import { LoadingButton } from './loading-button.component'

const meta: Meta<typeof LoadingButton> = {
    title: 'LoadingButton',
    component: LoadingButton,
    argTypes: {},
}

export default meta
type Story = StoryObj<typeof LoadingButton>

export const Default: Story = {
    args: {},
    async play({ canvasElement }) {
        const canvas = within(canvasElement)
        const container = canvas.getByTestId('loading-button')

        expect(container).toBeTruthy()
    },
}
