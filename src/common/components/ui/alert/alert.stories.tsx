import type { Meta, StoryObj } from '@storybook/react'
import { expect } from '@storybook/jest'
import { within } from '@storybook/testing-library'
import { Alert } from './alert.component'
import { Terminal } from 'lucide-react'

const meta: Meta<typeof Alert> = {
    title: 'Alert',
    component: Alert,
    argTypes: {},
}

export default meta
type Story = StoryObj<typeof Alert>

export const Default: Story = {
    render: (p) => (
        <Alert {...p}>
            <Alert.Title>
                <Terminal className="h-4 w-4" />
                <span className="pl-2">Heads up!</span>
            </Alert.Title>
            <Alert.Description>
                You can add new components to your app using the blueprints.
            </Alert.Description>
        </Alert>
    ),
    args: {},
    async play({ canvasElement }) {
        const canvas = within(canvasElement)
        const container = canvas.getByTestId('alert')

        expect(container).toBeTruthy()
    },
}
