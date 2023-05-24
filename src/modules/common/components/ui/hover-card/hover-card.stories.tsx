import type { Meta, StoryObj } from '@storybook/react'
import * as HoverCard from './hover-card.component'
import { CalendarDays } from 'lucide-react'
import { Button } from '../button'
import * as Avatar from '../avatar'

const meta: Meta<typeof HoverCard.Root> = {
    title: 'HoverCard',
    component: HoverCard.Root,
    argTypes: {},
}

export default meta
type Story = StoryObj<typeof HoverCard.Root>

export const Default: Story = {
    render: (p) => (
        <HoverCard.Root {...p}>
            <HoverCard.Trigger>Hover</HoverCard.Trigger>
            <HoverCard.Content>
                The React Framework – created and maintained by @vercel.
            </HoverCard.Content>
        </HoverCard.Root>
    ),
}

export const Complex: Story = {
    render: (p) => (
        <HoverCard.Root {...p}>
            <HoverCard.Trigger asChild>
                <Button variant="link">@nextjs</Button>
            </HoverCard.Trigger>
            <HoverCard.Content className="w-80">
                <div className="flex justify-between space-x-4">
                    <Avatar.Root>
                        <Avatar.Image src="https://github.com/vercel.png" />
                        <Avatar.Fallback>VC</Avatar.Fallback>
                    </Avatar.Root>
                    <div className="space-y-1">
                        <h4 className="text-sm font-semibold">@nextjs</h4>
                        <p className="text-sm">
                            The React Framework – created and maintained by
                            @vercel.
                        </p>
                        <div className="flex items-center pt-2">
                            <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{' '}
                            <span className="text-xs text-muted-fg">
                                Joined December 2021
                            </span>
                        </div>
                    </div>
                </div>
            </HoverCard.Content>
        </HoverCard.Root>
    ),
}
