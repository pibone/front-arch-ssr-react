import type { Meta, StoryObj } from '@storybook/react'
import { expect } from '@storybook/jest'
import { within } from '@storybook/testing-library'
import * as AlertDialog from './alert-dialog.component'
import { Button } from '../button'

const meta: Meta<typeof AlertDialog.Root> = {
    title: 'AlertDialog',
    component: AlertDialog.Root,
    argTypes: {},
}

export default meta
type Story = StoryObj<typeof AlertDialog.Root>

export const Default: Story = {
    render: (p) => (
        <AlertDialog.Root {...p}>
            <AlertDialog.Trigger asChild>
                <Button variant="outline">Show Dialog</Button>
            </AlertDialog.Trigger>
            <AlertDialog.Modal>
                <AlertDialog.Header>
                    <AlertDialog.Title>Are you sure?</AlertDialog.Title>
                    <AlertDialog.Description>
                        This action cannot be undone
                    </AlertDialog.Description>
                </AlertDialog.Header>
                <AlertDialog.Footer>
                    <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
                    <AlertDialog.Action>Continue</AlertDialog.Action>
                </AlertDialog.Footer>
            </AlertDialog.Modal>
        </AlertDialog.Root>
    ),
    args: {},
    async play({ canvasElement }) {
        const canvas = within(canvasElement)
        const container = canvas.getByTestId('alert-dialog')

        expect(container).toBeTruthy()
    },
}
