import type { Meta, StoryObj } from '@storybook/react'
import { expect } from '@storybook/jest'
import { within } from '@storybook/testing-library'
import * as ContextMenu from './context-menu.component'

const meta: Meta<typeof ContextMenu.Root> = {
    title: 'ContextMenu',
    component: ContextMenu.Root,
    argTypes: {},
}

export default meta
type Story = StoryObj<typeof ContextMenu.Root>

export const Default: Story = {
    render: (p) => (
        <ContextMenu.Root {...p}>
            <ContextMenu.Trigger>Right click</ContextMenu.Trigger>
            <ContextMenu.Content>
                <ContextMenu.Item>Profile</ContextMenu.Item>
                <ContextMenu.Item>Billing</ContextMenu.Item>
                <ContextMenu.Item>Team</ContextMenu.Item>
                <ContextMenu.Item>Subscription</ContextMenu.Item>
            </ContextMenu.Content>
        </ContextMenu.Root>
    ),
    args: {},
    async play({ canvasElement }) {
        const canvas = within(canvasElement)
        const container = canvas.getByTestId('context-menu')

        expect(container).toBeTruthy()
    },
}

export const Complex: Story = {
    render: (p) => (
        <ContextMenu.Root {...p}>
            <ContextMenu.Trigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
                Right click here
            </ContextMenu.Trigger>
            <ContextMenu.Content className="w-64">
                <ContextMenu.Item inset>
                    Back
                    <ContextMenu.Shortcut>⌘[</ContextMenu.Shortcut>
                </ContextMenu.Item>
                <ContextMenu.Item inset disabled>
                    Forward
                    <ContextMenu.Shortcut>⌘]</ContextMenu.Shortcut>
                </ContextMenu.Item>
                <ContextMenu.Item inset>
                    Reload
                    <ContextMenu.Shortcut>⌘R</ContextMenu.Shortcut>
                </ContextMenu.Item>
                <ContextMenu.Sub>
                    <ContextMenu.SubTrigger inset>
                        More Tools
                    </ContextMenu.SubTrigger>
                    <ContextMenu.SubContent className="w-48">
                        <ContextMenu.Item>
                            Save Page As...
                            <ContextMenu.Shortcut>⇧⌘S</ContextMenu.Shortcut>
                        </ContextMenu.Item>
                        <ContextMenu.Item>Create Shortcut...</ContextMenu.Item>
                        <ContextMenu.Item>Name Window...</ContextMenu.Item>
                        <ContextMenu.Separator />
                        <ContextMenu.Item>Developer Tools</ContextMenu.Item>
                    </ContextMenu.SubContent>
                </ContextMenu.Sub>
                <ContextMenu.Separator />
                <ContextMenu.CheckboxItem checked>
                    Show Bookmarks Bar
                    <ContextMenu.Shortcut>⌘⇧B</ContextMenu.Shortcut>
                </ContextMenu.CheckboxItem>
                <ContextMenu.CheckboxItem>
                    Show Full URLs
                </ContextMenu.CheckboxItem>
                <ContextMenu.Separator />
                <ContextMenu.RadioGroup value="dani">
                    <ContextMenu.Label inset>People</ContextMenu.Label>
                    <ContextMenu.Separator />
                    <ContextMenu.RadioItem value="dani">
                        Daniel Peña
                    </ContextMenu.RadioItem>
                </ContextMenu.RadioGroup>
            </ContextMenu.Content>
        </ContextMenu.Root>
    ),
    args: {},
    async play({ canvasElement }) {
        const canvas = within(canvasElement)
        const container = canvas.getByTestId('context-menu')

        expect(container).toBeTruthy()
    },
}
