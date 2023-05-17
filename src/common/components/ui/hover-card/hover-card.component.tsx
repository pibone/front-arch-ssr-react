import React from 'react'
import * as HoverCardPrimitive from '@radix-ui/react-hover-card'
import cn from 'classnames'
import styles from './hover-card.module.css'

export const Root = HoverCardPrimitive.Root
export const HoverCardRoot = Root

export const Trigger = HoverCardPrimitive.Trigger
export const HoverCardTrigger = Trigger

export const Content = React.forwardRef<
    React.ElementRef<typeof HoverCardPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>
>(({ className, align = 'center', sideOffset = 4, ...props }, ref) => (
    <HoverCardPrimitive.Content
        ref={ref}
        align={align}
        sideOffset={sideOffset}
        className={cn(styles.content, className)}
        {...props}
    />
))
export const HoverCardContent = Content
Content.displayName = HoverCardPrimitive.Content.displayName
