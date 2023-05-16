import type { Meta, StoryObj } from '@storybook/react'
import { expect } from '@storybook/jest'
import { within } from '@storybook/testing-library'
import * as Card from './card.component'
import { Button } from '../button'
import { BellRing, Check } from 'lucide-react'
import { Switch } from '../switch'

const meta: Meta<typeof Card.Root> = {
    title: 'Card',
    component: Card.Root,
    argTypes: {},
}

export default meta
type Story = StoryObj<typeof Card.Root>

export const Default: Story = {
    render: (p) => (
        <Card.Root {...p}>
            <Card.Header>
                <Card.Title>Card Title</Card.Title>
                <Card.Description>Card Description</Card.Description>
            </Card.Header>
            <Card.Content>
                <p>Card Content</p>
            </Card.Content>
            <Card.Footer>
                <p>Card Footer</p>
            </Card.Footer>
        </Card.Root>
    ),
    args: {},
    async play({ canvasElement }) {
        const canvas = within(canvasElement)
        const container = canvas.getByTestId('card')

        expect(container).toBeTruthy()
    },
}

export const Complex: Story = {
    render: (p) => {
        const notifications = [
            {
                title: 'Your call has been confirmed.',
                description: '1 hour ago',
            },
            {
                title: 'You have a new message!',
                description: '1 hour ago',
            },
            {
                title: 'Your subscription is expiring soon!',
                description: '2 hours ago',
            },
        ]
        return (
            <Card.Root className="w-[380px]" {...p}>
                <Card.Header>
                    <Card.Title>Notifications</Card.Title>
                    <Card.Description>
                        You have 3 unread messages.
                    </Card.Description>
                </Card.Header>
                <Card.Content className="grid gap-4">
                    <div className=" flex items-center space-x-4 rounded-md border p-4">
                        <BellRing />
                        <div className="flex-1 space-y-1">
                            <p className="text-sm font-medium leading-none">
                                Push Notifications
                            </p>
                            <p className="text-sm text-muted-foreground">
                                Send notifications to device.
                            </p>
                        </div>
                        <Switch />
                    </div>
                    <div>
                        {notifications.map((notification, index) => (
                            <div
                                key={index}
                                className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                            >
                                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-ring" />
                                <div className="space-y-1">
                                    <p className="text-sm font-medium leading-none">
                                        {notification.title}
                                    </p>
                                    <p className="text-sm text-muted-fg">
                                        {notification.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Card.Content>
                <Card.Footer>
                    <Button className="w-full">
                        <Check className="mr-2 h-4 w-4" /> Mark all as read
                    </Button>
                </Card.Footer>
            </Card.Root>
        )
    },
    args: {},
    async play({ canvasElement }) {
        const canvas = within(canvasElement)
        const container = canvas.getByTestId('card')

        expect(container).toBeTruthy()
    },
}
