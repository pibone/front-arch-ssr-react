import React from 'react'
import styles from './tooltip.module.css'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import cn from 'classnames'

export const Provider = TooltipPrimitive.Provider
export const TooltipProvider = Provider

export const Root = TooltipPrimitive.Root
export const TooltipRoot = Root

export const Trigger = TooltipPrimitive.Trigger
export const TooltipTrigger = Trigger

export const Content = React.forwardRef<
    React.ElementRef<typeof TooltipPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
    <TooltipPrimitive.Portal>
        <TooltipPrimitive.Content
            ref={ref}
            sideOffset={sideOffset}
            className={cn(styles.content, className)}
            {...props}
        />
    </TooltipPrimitive.Portal>
))
export const TooltipContent = Content
Content.displayName = TooltipPrimitive.Content.displayName
