import React, { ComponentPropsWithoutRef } from 'react'
import * as CollapsiblePrimitive from '@radix-ui/react-collapsible'
import cn from 'classnames'
import styles from './collapsible.module.css'

const CollapsibleRoot = React.forwardRef<
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
CollapsibleRoot.displayName = 'CollapsibleRoot'

const CollapsibleTrigger = React.forwardRef<
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
CollapsibleTrigger.displayName = 'CollapsibleTrigger'

const CollapsibleContent = React.forwardRef<
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
CollapsibleContent.displayName = 'CollapsibleContent'

export const Collapsible: typeof CollapsibleRoot & {
    Trigger: typeof CollapsibleTrigger
    Content: typeof CollapsibleContent
} = CollapsibleRoot

Collapsible.Trigger = CollapsibleTrigger
Collapsible.Content = CollapsibleContent
