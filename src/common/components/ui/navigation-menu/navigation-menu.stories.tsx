import type { Meta, StoryObj } from '@storybook/react'
import { expect } from '@storybook/jest'
import { within } from '@storybook/testing-library'
import * as NavigationMenu from './navigation-menu.component'
import cn from 'classnames'
import * as Avatar from '../avatar'

const meta: Meta<typeof NavigationMenu.Root> = {
    title: 'NavigationMenu',
    component: NavigationMenu.Root,
    argTypes: {},
}

export default meta
type Story = StoryObj<typeof NavigationMenu.Root>

export const Default: Story = {
    render: (p) => (
        <NavigationMenu.Root {...p}>
            <NavigationMenu.List>
                <NavigationMenu.Item>
                    <NavigationMenu.Trigger>Item One</NavigationMenu.Trigger>
                    <NavigationMenu.Content>
                        <NavigationMenu.Link>Link</NavigationMenu.Link>
                    </NavigationMenu.Content>
                </NavigationMenu.Item>
            </NavigationMenu.List>
        </NavigationMenu.Root>
    ),
    args: {},
    async play({ canvasElement }) {
        const canvas = within(canvasElement)
        const container = canvas.getByTestId('navigation-menu')

        expect(container).toBeTruthy()
    },
}

export const Complex: Story = {
    render: (p) => (
        <NavigationMenu.Root {...p}>
            <NavigationMenu.List>
                <NavigationMenu.Item>
                    <NavigationMenu.Trigger>
                        Getting started
                    </NavigationMenu.Trigger>
                    <NavigationMenu.Content>
                        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                                <NavigationMenu.Link asChild>
                                    <a
                                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                        href="/"
                                    >
                                        <Avatar.Root>
                                            <Avatar.Image
                                                src="https://github.com/pibone.png"
                                                alt="@pibone"
                                            />
                                            <Avatar.Fallback>
                                                PI
                                            </Avatar.Fallback>
                                        </Avatar.Root>
                                        <div className="mb-2 mt-4 text-lg font-medium">
                                            Arquetipo de Next.js
                                        </div>
                                        <p className="text-sm leading-tight text-muted-fg">
                                            Sistema de diseño listo para usar
                                        </p>
                                    </a>
                                </NavigationMenu.Link>
                            </li>
                            <ListItem href="/docs" title="Introduction">
                                Re-usable components built using Radix UI and
                                Tailwind CSS.
                            </ListItem>
                            <ListItem
                                href="/docs/installation"
                                title="Installation"
                            >
                                How to install dependencies and structure your
                                app.
                            </ListItem>
                            <ListItem
                                href="/docs/primitives/typography"
                                title="Typography"
                            >
                                Styles for headings, paragraphs, lists...etc
                            </ListItem>
                        </ul>
                    </NavigationMenu.Content>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
                    <NavigationMenu.Trigger>Components</NavigationMenu.Trigger>
                    <NavigationMenu.Content>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                            {components.map((component) => (
                                <ListItem
                                    key={component.title}
                                    title={component.title}
                                    href={component.href}
                                >
                                    {component.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenu.Content>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
                    <a href="/docs" legacyBehavior passHref>
                        <NavigationMenu.Link>Documentation</NavigationMenu.Link>
                    </a>
                </NavigationMenu.Item>
            </NavigationMenu.List>
        </NavigationMenu.Root>
    ),
    args: {},
    async play({ canvasElement }) {
        const canvas = within(canvasElement)
        const container = canvas.getByTestId('navigation-menu')

        expect(container).toBeTruthy()
    },
}

const components: { title: string; href: string; description: string }[] = [
    {
        title: 'Alert Dialog',
        href: 'http://localhost:6006/?path=/story/alertdialog',
        description:
            'A modal dialog that interrupts the user with important content and expects a response.',
    },
    {
        title: 'Hover Card',
        href: 'http://localhost:6006/?path=/story/hovercard',
        description:
            'For sighted users to preview content available behind a link.',
    },
    {
        title: 'Progress',
        href: 'http://localhost:6006/?path=/story/progress',
        description:
            'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
    },
    {
        title: 'Scroll-area',
        href: 'http://localhost:6006/?path=/story/scrollarea',
        description: 'Visually or semantically separates content.',
    },
    {
        title: 'Tabs',
        href: 'http://localhost:6006/?path=/story/tabs',
        description:
            'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
    },
    {
        title: 'Tooltip',
        href: 'http://localhost:6006/?path=/story/tooltip',
        description:
            'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
    },
]

const ListItem = React.forwardRef<
    React.ElementRef<'a'>,
    React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenu.Link asChild>
                <a
                    ref={ref}
                    className={cn(
                        'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-fg focus:bg-accent focus:text-accent-fg',
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-bold leading-none">
                        {title}
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-fg">
                        {children}
                    </p>
                </a>
            </NavigationMenu.Link>
        </li>
    )
})
ListItem.displayName = 'ListItem'
