import React from 'react'
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'
import { ChevronDown } from 'lucide-react'
import cn from 'classnames'
import styles from './navigation-menu.module.css'

export const Root = React.forwardRef<
    React.ElementRef<typeof NavigationMenuPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
    <NavigationMenuPrimitive.Root
        data-testid="navigation-menu"
        ref={ref}
        className={cn(styles.container, className)}
        {...props}
    >
        {children}
        <Viewport />
    </NavigationMenuPrimitive.Root>
))
export const NavigationMenuRoot = Root
Root.displayName = NavigationMenuPrimitive.Root.displayName

export const List = React.forwardRef<
    React.ElementRef<typeof NavigationMenuPrimitive.List>,
    React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
    <NavigationMenuPrimitive.List
        ref={ref}
        className={cn(styles.list, 'group', className)}
        {...props}
    />
))
export const NavigationMenuList = List
List.displayName = NavigationMenuPrimitive.List.displayName

export const Item = NavigationMenuPrimitive.Item

export const Trigger = React.forwardRef<
    React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
    React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
    <NavigationMenuPrimitive.Trigger
        ref={ref}
        className={cn(styles.trigger, 'group', className)}
        {...props}
    >
        {children} <ChevronDown className={styles.icon} aria-hidden="true" />
    </NavigationMenuPrimitive.Trigger>
))
export const NavigationMenuItem = Item
Trigger.displayName = NavigationMenuPrimitive.Trigger.displayName

export const Content = React.forwardRef<
    React.ElementRef<typeof NavigationMenuPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
    <NavigationMenuPrimitive.Content
        ref={ref}
        className={cn(styles.content, className)}
        {...props}
    />
))
export const NavigationMenuContent = Content
Content.displayName = NavigationMenuPrimitive.Content.displayName

export const Link = NavigationMenuPrimitive.Link

export const Viewport = React.forwardRef<
    React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
    React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
    <div className={styles.viewportWrapper}>
        <NavigationMenuPrimitive.Viewport
            className={cn(styles.viewport, className)}
            ref={ref}
            {...props}
        />
    </div>
))
export const NavigationMenuNavigationMenuLink = Link
Viewport.displayName = NavigationMenuPrimitive.Viewport.displayName

export const Indicator = React.forwardRef<
    React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
    React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
    <NavigationMenuPrimitive.Indicator
        ref={ref}
        className={cn(styles.indicator, className)}
        {...props}
    >
        <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
    </NavigationMenuPrimitive.Indicator>
))
export const NavigationMenuIndicator = Indicator
Indicator.displayName = NavigationMenuPrimitive.Indicator.displayName
