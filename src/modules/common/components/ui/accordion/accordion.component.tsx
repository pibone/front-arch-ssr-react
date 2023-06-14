import React from 'react'
import cn from 'classnames'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'
import styles from './accordion.module.css'

export const Root = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root>
>(({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Root
        data-testid="accordion"
        ref={ref}
        className={cn(styles.container, className)}
        {...props}
    >
        {children}
    </AccordionPrimitive.Root>
))
export const AccordionRoot = Root
Root.displayName = 'AccordionRoot'

export const Item = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Item>,
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
    <AccordionPrimitive.Item
        ref={ref}
        className={cn(styles.item, className)}
        {...props}
    />
))
export const AccordionItem = Item

Item.displayName = 'AccordionItem'

export const Trigger = React.forwardRef<
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
export const AccordionTrigger = Trigger

Trigger.displayName = 'AccordionTrigger'

export const Content = React.forwardRef<
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
export const AccordionContent = Content

Content.displayName = 'AccordionContent'
