import React, { ComponentPropsWithoutRef } from 'react'
import * as CollapsiblePrimitive from '@radix-ui/react-collapsible'
import cn from 'classnames'
import styles from './collapsible.module.css'

export const Root = React.forwardRef<
    HTMLDivElement,
    ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Root>
>(({ className, children, ...props }, ref) => (
    <CollapsiblePrimitive.Root
        ref={ref}
        data-testid="collapsible"
        className={cn(styles.container, className)}
        {...props}
    >
        {children}
    </CollapsiblePrimitive.Root>
))
export const CollapsibleRoot = Root
Root.displayName = 'CollapsibleRoot'

export const Trigger = React.forwardRef<
    HTMLButtonElement,
    ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
    <CollapsiblePrimitive.Trigger
        ref={ref}
        className={cn(styles.trigger, className)}
        {...props}
    >
        {children}
    </CollapsiblePrimitive.Trigger>
))
export const CollapsibleTrigger = Trigger
Trigger.displayName = 'CollapsibleTrigger'

export const Content = React.forwardRef<
    HTMLDivElement,
    ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Content>
>(({ className, children, ...props }, ref) => (
    <CollapsiblePrimitive.Content
        ref={ref}
        className={cn(styles.content, className)}
        {...props}
    >
        {children}
    </CollapsiblePrimitive.Content>
))
export const CollapsibleContent = Content
Content.displayName = 'CollapsibleContent'
