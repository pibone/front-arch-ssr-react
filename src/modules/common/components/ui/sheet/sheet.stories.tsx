import type { Meta, StoryObj } from '@storybook/react'
import { expect } from '@storybook/jest'
import { within } from '@storybook/testing-library'
import * as Sheet from './sheet.component'
import { Button } from '../button'
import { Label } from '../label'
import { Input } from '../input'

const meta: Meta<typeof Sheet.Root> = {
    title: 'Sheet',
    component: Sheet.Root,
    argTypes: {},
}

export default meta
type Story = StoryObj<typeof Sheet.Root>

export const Default: Story = {
    render: (p) => (
        <Sheet.Root {...p}>
            <Sheet.Trigger>Open</Sheet.Trigger>
            <Sheet.Modal>
                <Sheet.Header>
                    <Sheet.Title>Are you sure absolutely sure?</Sheet.Title>
                    <Sheet.Description>
                        This action cannot be undone. This will permanently
                        delete your account and remove your data from our
                        servers.
                    </Sheet.Description>
                </Sheet.Header>
            </Sheet.Modal>
        </Sheet.Root>
    ),
    args: {},
    async play({ canvasElement }) {
        const canvas = within(canvasElement)
        const container = canvas.getByTestId('sheet')

        expect(container).toBeTruthy()
    },
}

export const Complex: Story = {
    render: (p) => (
        <Sheet.Root {...p}>
            <Sheet.Trigger asChild>
                <Button variant="outline">Open</Button>
            </Sheet.Trigger>
            <Sheet.Modal position="right" size="sm">
                <Sheet.Header>
                    <Sheet.Title>Edit profile</Sheet.Title>
                    <Sheet.Description>
                        Make changes to your profile here. Click save when
                        you&apos;re done.
                    </Sheet.Description>
                </Sheet.Header>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Name
                        </Label>
                        <Input
                            id="name"
                            value="Dani Peña"
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            Username
                        </Label>
                        <Input
                            id="username"
                            value="@pibone"
                            className="col-span-3"
                        />
                    </div>
                </div>
                <Sheet.Footer>
                    <Button type="submit">Save changes</Button>
                </Sheet.Footer>
            </Sheet.Modal>
        </Sheet.Root>
    ),
    args: {},
    async play({ canvasElement }) {
        const canvas = within(canvasElement)
        const container = canvas.getByTestId('sheet')

        expect(container).toBeTruthy()
    },
}
