import React, { ComponentPropsWithoutRef } from 'react'
import * as PopoverPrimitive from '@radix-ui/react-popover'
import cn from 'classnames'
import styles from './popover.module.css'

const PopoverRoot = React.forwardRef<
    typeof PopoverPrimitive.Root,
    ComponentPropsWithoutRef<typeof PopoverPrimitive.Root>
>(({ children, ...props }, ref) => (
    <PopoverPrimitive.Root ref={ref} {...props}>
        {children}
    </PopoverPrimitive.Root>
))
PopoverRoot.displayName = 'PopoverRoot'

const PopoverTrigger = React.forwardRef<
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
PopoverTrigger.displayName = 'PopoverTrigger'

const PopoverContent = React.forwardRef<
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
PopoverContent.displayName = 'PopoverContent'

export const Popover: typeof PopoverRoot & {
    Trigger: typeof PopoverTrigger
    Content: typeof PopoverContent
} = PopoverRoot

Popover.Trigger = PopoverTrigger
Popover.Content = PopoverContent
