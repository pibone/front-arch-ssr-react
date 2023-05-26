import type { Meta, StoryObj } from '@storybook/react'
import { expect } from '@storybook/jest'
import { within } from '@storybook/testing-library'
import { AccountWidget } from './account.widget'
import { AuthProvider } from '@/auth/providers/auth'

const meta: Meta<typeof AccountWidget> = {
    title: 'AccountWidget',
    component: AccountWidget,
    argTypes: {},
}

export default meta
type Story = StoryObj<typeof AccountWidget>

export const LoggedIn: Story = {
    render: (p) => (
        <AuthProvider
            session={{
                user: {
                    email: 'example@pibone.com',
                    name: 'Dani Peña Iglesias',
                    image: 'https://github.com/pibone.png',
                },
            }}
        >
            <AccountWidget {...p} />
        </AuthProvider>
    ),
    args: {},
    async play({ canvasElement }) {
        const canvas = within(canvasElement)
        const container = canvas.getByTestId('account-widget')

        expect(container).toBeTruthy()
    },
}

export const LoggedOut: Story = {
    render: (p) => (
        <AuthProvider session={undefined}>
            <AccountWidget {...p} />
        </AuthProvider>
    ),
    args: {},
    async play({ canvasElement }) {
        const canvas = within(canvasElement)
        const container = canvas.getByTestId('account-widget')

        expect(container).toBeTruthy()
    },
}
