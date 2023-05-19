import type { Meta, StoryObj } from '@storybook/react'
import { expect } from '@storybook/jest'
import { within } from '@storybook/testing-library'
import * as Tabs from './tabs.component'
import * as Card from '../card'
import { Label } from '../label'
import { Input } from '../input'
import { Button } from '../button'

const meta: Meta<typeof Tabs.Root> = {
    title: 'Tabs',
    component: Tabs.Root,
    argTypes: {},
}

export default meta
type Story = StoryObj<typeof Tabs.Root>

export const Default: Story = {
    render: (p) => (
        <Tabs.Root
            defaultValue="account"
            className="w-[400px] flex flex-col items-center rounded-md"
            {...p}
        >
            <Tabs.List>
                <Tabs.Trigger value="account">Account</Tabs.Trigger>
                <Tabs.Trigger value="password">Password</Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="account">
                Make changes to your account here.
            </Tabs.Content>
            <Tabs.Content value="password">
                Change your password here.
            </Tabs.Content>
        </Tabs.Root>
    ),
    args: {},
    async play({ canvasElement }) {
        const canvas = within(canvasElement)
        const container = canvas.getByTestId('tabs')

        expect(container).toBeTruthy()
    },
}

export const Complex: Story = {
    render: (p) => (
        <Tabs.Root
            defaultValue="account"
            className="w-[400px] flex flex-col items-center rounded-md"
            {...p}
        >
            <Tabs.List className="grid w-full grid-cols-2">
                <Tabs.Trigger value="account">Account</Tabs.Trigger>
                <Tabs.Trigger value="password">Password</Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="account">
                <Card.Root>
                    <Card.Header>
                        <Card.Title>Account</Card.Title>
                        <Card.Description>
                            Make changes to your account here. Click save when
                            you&apos;re done.
                        </Card.Description>
                    </Card.Header>
                    <Card.Content className="space-y-2">
                        <div className="space-y-1">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" defaultValue="Dani Peña" />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="username">Username</Label>
                            <Input id="username" defaultValue="@pibone" />
                        </div>
                    </Card.Content>
                    <Card.Footer>
                        <Button>Save changes</Button>
                    </Card.Footer>
                </Card.Root>
            </Tabs.Content>
            <Tabs.Content value="password">
                <Card.Root>
                    <Card.Header>
                        <Card.Title>Password</Card.Title>
                        <Card.Description>
                            Change your password here. After saving, you&apos;ll
                            be logged out.
                        </Card.Description>
                    </Card.Header>
                    <Card.Content className="space-y-2">
                        <div className="space-y-1">
                            <Label htmlFor="current">Current password</Label>
                            <Input id="current" type="password" />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="new">New password</Label>
                            <Input id="new" type="password" />
                        </div>
                    </Card.Content>
                    <Card.Footer>
                        <Button>Save password</Button>
                    </Card.Footer>
                </Card.Root>
            </Tabs.Content>
        </Tabs.Root>
    ),
    args: {},
    async play({ canvasElement }) {
        const canvas = within(canvasElement)
        const container = canvas.getByTestId('tabs')

        expect(container).toBeTruthy()
    },
}
