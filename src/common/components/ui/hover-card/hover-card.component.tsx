import React from 'react'
import * as HoverCardPrimitive from '@radix-ui/react-hover-card'
import cn from 'classnames'
import styles from './hover-card.module.css'

const HoverCardRoot = HoverCardPrimitive.Root

const HoverCardTrigger = HoverCardPrimitive.Trigger

const HoverCardContent = React.forwardRef<
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
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName

export const HoverCard: typeof HoverCardRoot & {
    Trigger: typeof HoverCardTrigger
    Content: typeof HoverCardContent
} = HoverCardRoot

HoverCard.Trigger = HoverCardTrigger
HoverCard.Content = HoverCardContent
