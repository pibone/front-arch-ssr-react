import type { Meta, StoryObj } from '@storybook/react'
import { expect } from '@storybook/jest'
import { within } from '@storybook/testing-library'
import { AccountWidget } from './account.widget'

const meta: Meta<typeof AccountWidget> = {
    title: 'AccountWidget',
    component: AccountWidget,
    argTypes: {},
}

export default meta
type Story = StoryObj<typeof AccountWidget>

export const Default: Story = {
    args: {},
    async play({ canvasElement }) {
        const canvas = within(canvasElement)
        const container = canvas.getByTestId('account-widget')

        expect(container).toBeTruthy()
    },
}
