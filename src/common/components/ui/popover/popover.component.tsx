import React, { ComponentPropsWithoutRef } from 'react'
import * as PopoverPrimitive from '@radix-ui/react-popover'
import cn from 'classnames'
import styles from './popover.module.css'

export const Root = React.forwardRef<
    typeof PopoverPrimitive.Root,
    ComponentPropsWithoutRef<typeof PopoverPrimitive.Root>
>(({ children, ...props }, ref) => (
    <PopoverPrimitive.Root ref={ref} {...props}>
        {children}
    </PopoverPrimitive.Root>
))
export const PopoverRoot = Root
Root.displayName = 'PopoverRoot'

export const Trigger = React.forwardRef<
    typeof PopoverPrimitive.Trigger,
    ComponentPropsWithoutRef<typeof PopoverPrimitive.Trigger>
>(({ className, ...props }, ref) => (
    <PopoverPrimitive.Trigger
        data-testid="popover"
        ref={ref}
        className={cn(styles.trigger, className)}
        {...props}
    />
))
export const PopoverTrigger = Trigger
Trigger.displayName = 'PopoverTrigger'

export const Content = React.forwardRef<
    React.ElementRef<typeof PopoverPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = 'center', sideOffset = 4, ...props }, ref) => (
    <PopoverPrimitive.Portal>
        <PopoverPrimitive.Content
            ref={ref}
            align={align}
            sideOffset={sideOffset}
            className={cn(styles.content, className)}
            {...props}
        />
    </PopoverPrimitive.Portal>
))
export const PopoverContent = Content
Content.displayName = 'PopoverContent'
