import type { Meta, StoryObj } from '@storybook/react'
import { expect } from '@storybook/jest'
import { within } from '@storybook/testing-library'
import { NavigationMenu } from './navigation-menu.component'

const meta: Meta<typeof NavigationMenu> = {
    title: 'NavigationMenu',
    component: NavigationMenu,
    argTypes: {},
}

export default meta
type Story = StoryObj<typeof NavigationMenu>

export const Default: Story = {
    render: (p) => (
        <NavigationMenu {...p}>
            <NavigationMenu.List>
                <NavigationMenu.Item>
                    <NavigationMenu.Trigger>Item One</NavigationMenu.Trigger>
                    <NavigationMenu.Content>
                        <NavigationMenu.Link>Link</NavigationMenu.Link>
                    </NavigationMenu.Content>
                </NavigationMenu.Item>
            </NavigationMenu.List>
        </NavigationMenu>
    ),
    args: {},
    async play({ canvasElement }) {
        const canvas = within(canvasElement)
        const container = canvas.getByTestId('navigation-menu')

        expect(container).toBeTruthy()
    },
}
