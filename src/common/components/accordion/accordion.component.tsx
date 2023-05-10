import React from 'react'
import cn from 'classnames'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'
import styles from './accordion.module.css'

const AccordionRoot = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root>
>(({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Root
        data-testid="accordion"
        ref={ref}
        className={className}
        {...props}
    >
        {children}
    </AccordionPrimitive.Root>
))
AccordionRoot.displayName = 'AccordionRoot'

const AccordionItem = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Item>,
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
    <AccordionPrimitive.Item
        ref={ref}
        className={cn(styles.item, className)}
        {...props}
    />
))

AccordionItem.displayName = 'AccordionItem'

const AccordionTrigger = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Trigger>,
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Header className={styles.header}>
        <AccordionPrimitive.Trigger
            ref={ref}
            className={cn(styles.trigger, className)}
            {...props}
        >
            {children}
            <ChevronDown className={styles.icon} />
        </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
))

AccordionTrigger.displayName = 'AccordionTrigger'

const AccordionContent = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Content
        ref={ref}
        className={cn(styles.content, className)}
        {...props}
    >
        <div className={styles.contentWrapper}>{children}</div>
    </AccordionPrimitive.Content>
))

AccordionContent.displayName = 'AccordionContent'

export const Accordion: typeof AccordionRoot & {
    Item: typeof AccordionItem
    Trigger: typeof AccordionTrigger
    Content: typeof AccordionContent
} = AccordionRoot

Accordion.Item = AccordionItem
Accordion.Trigger = AccordionTrigger
Accordion.Content = AccordionContent
