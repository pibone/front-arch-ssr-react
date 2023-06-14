import type { Meta, StoryObj } from '@storybook/react'
import { expect } from '@storybook/jest'
import { within } from '@storybook/testing-library'
import * as Dialog from './dialog.component'
import { Button } from '../button'

const meta: Meta<typeof Dialog.Root> = {
    title: 'Dialog',
    component: Dialog.Root,
    argTypes: {},
}

export default meta
type Story = StoryObj<typeof Dialog.Root>

export const Default: Story = {
    render: (p) => (
        <Dialog.Root {...p}>
            <Dialog.Trigger asChild>
                <Button>Open</Button>
            </Dialog.Trigger>
            <Dialog.Modal>
                <Dialog.Header>
                    <Dialog.Title>
                        This is a sample text to confirm
                    </Dialog.Title>
                    <Dialog.Description>
                        This action cannot be undone. This will permanently
                        delete your account and remove your data from our
                        servers.
                    </Dialog.Description>
                </Dialog.Header>
            </Dialog.Modal>
        </Dialog.Root>
    ),
    args: {},
    async play({ canvasElement }) {
        const canvas = within(canvasElement)
        const container = canvas.getByTestId('dialog')

        expect(container).toBeTruthy()
    },
}
