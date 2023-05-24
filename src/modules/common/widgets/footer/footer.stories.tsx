import type { Meta, StoryObj } from '@storybook/react'
import { expect } from '@storybook/jest'
import { within } from '@storybook/testing-library'
import { FooterWidget } from './footer.widget'

const meta: Meta<typeof FooterWidget> = {
    title: 'FooterWidget',
    component: FooterWidget,
    argTypes: {},
}

export default meta
type Story = StoryObj<typeof FooterWidget>

export const Default: Story = {
    args: {},
    async play({ canvasElement }) {
        const canvas = within(canvasElement)
        const container = canvas.getByTestId('footer-widget')

        expect(container).toBeTruthy()
    },
}
