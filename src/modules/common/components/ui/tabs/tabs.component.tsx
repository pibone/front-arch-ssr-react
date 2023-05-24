import React from 'react'
import * as TabsPrimitive from '@radix-ui/react-tabs'
import cn from 'classnames'
import styles from './tabs.module.css'

export const Root = React.forwardRef<
    React.ElementRef<typeof TabsPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root>
>(({ className, ...props }, ref) => (
    <TabsPrimitive.Root
        data-testid="tabs"
        className={cn(styles.container, className)}
        ref={ref}
        {...props}
    />
))
export const TabsRoot = Root
Root.displayName = TabsPrimitive.Root.displayName

export const List = React.forwardRef<
    React.ElementRef<typeof TabsPrimitive.List>,
    React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
    <TabsPrimitive.List
        ref={ref}
        className={cn(styles.list, className)}
        {...props}
    />
))
export const TabsList = List
List.displayName = TabsPrimitive.List.displayName

export const Trigger = React.forwardRef<
    React.ElementRef<typeof TabsPrimitive.Trigger>,
    React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
    <TabsPrimitive.Trigger
        ref={ref}
        className={cn(styles.trigger, className)}
        {...props}
    />
))
export const TabsTrigger = Trigger
Trigger.displayName = TabsPrimitive.Trigger.displayName

export const Content = React.forwardRef<
    React.ElementRef<typeof TabsPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
    <TabsPrimitive.Content
        ref={ref}
        className={cn(styles.content, className)}
        {...props}
    />
))
export const TabsContent = Content
Content.displayName = TabsPrimitive.Content.displayName
