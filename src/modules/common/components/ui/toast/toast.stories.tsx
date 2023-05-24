import type { Meta, StoryObj } from '@storybook/react'
import { expect } from '@storybook/jest'
import { within } from '@storybook/testing-library'
import * as Toast from './toast.component'

const meta: Meta<typeof Toast.Root> = {
    title: 'Toast',
    component: Toast.Root,
    argTypes: {},
}

export default meta
type Story = StoryObj<typeof Toast>

export const Default: Story = {
    render: (p) => (
        <Toast.Provider>
            <Toast.Root {...p}>
                <Toast.Content>
                    <Toast.Title>Scheduled: Catch up</Toast.Title>
                    <Toast.Description>
                        Friday, February 10, 2023 at 5:57 PM
                    </Toast.Description>
                </Toast.Content>
                <Toast.Close />
            </Toast.Root>
        </Toast.Provider>
    ),
    args: {},
    async play({ canvasElement }) {
        const canvas = within(canvasElement)
        const container = canvas.getByTestId('toast')

        expect(container).toBeTruthy()
    },
}
