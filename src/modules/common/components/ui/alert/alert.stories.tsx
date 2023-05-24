import type { Meta, StoryObj } from '@storybook/react'
import { expect } from '@storybook/jest'
import { within } from '@storybook/testing-library'
import * as Alert from './alert.component'
import { Terminal } from 'lucide-react'

const meta: Meta<typeof Alert.Root> = {
    title: 'Alert',
    component: Alert.Root,
    argTypes: {},
}

export default meta
type Story = StoryObj<typeof Alert.Root>

export const Default: Story = {
    render: (p) => (
        <Alert.Root {...p}>
            <Alert.Title>
                <Terminal className="h-4 w-4" />
                <span className="pl-2">Heads up!</span>
            </Alert.Title>
            <Alert.Description>
                You can add new components to your app using the blueprints.
            </Alert.Description>
        </Alert.Root>
    ),
    args: {},
    async play({ canvasElement }) {
        const canvas = within(canvasElement)
        const container = canvas.getByTestId('alert')

        expect(container).toBeTruthy()
    },
}
