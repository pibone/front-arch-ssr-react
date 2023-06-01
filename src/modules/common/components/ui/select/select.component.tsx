import React, { ComponentPropsWithoutRef } from 'react'
import * as SelectPrimitive from '@radix-ui/react-select'
import { Check, ChevronDown } from 'lucide-react'
import cn from 'classnames'
import styles from './select.module.css'

export const Root = ({
    value,
    ...props
}: ComponentPropsWithoutRef<typeof SelectPrimitive.Root>) => (
    <SelectPrimitive.Root
        value={value}
        key={value ? '' : undefined}
        data-testid="select"
        {...props}
    />
)
export const SelectRoot = Root
Root.displayName = SelectPrimitive.Root.displayName

export const Group = SelectPrimitive.Group
export const SelectGroup = Group

export const Value = SelectPrimitive.Value
export const SelectValue = Value

export const Trigger = React.forwardRef<
    React.ElementRef<typeof SelectPrimitive.Trigger>,
    React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
    <SelectPrimitive.Trigger
        ref={ref}
        className={cn(styles.trigger, className)}
        {...props}
    >
        {children}
        <SelectPrimitive.Icon asChild>
            <ChevronDown className={styles.icon} />
        </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
))
export const SelectTrigger = Trigger
Trigger.displayName = SelectPrimitive.Trigger.displayName

export const Content = React.forwardRef<
    React.ElementRef<typeof SelectPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = 'item-aligned', ...props }, ref) => (
    <SelectPrimitive.Portal>
        <SelectPrimitive.Content
            ref={ref}
            className={cn(
                styles.content,
                position === 'popper' && styles.popper,
                className
            )}
            position={position}
            {...props}
        >
            <SelectPrimitive.Viewport
                className={cn(
                    styles.viewport,
                    position === 'popper' && styles.popper
                )}
            >
                {children}
            </SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
))
export const SelectContent = Content
Content.displayName = SelectPrimitive.Content.displayName

export const Label = React.forwardRef<
    React.ElementRef<typeof SelectPrimitive.Label>,
    React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
    <SelectPrimitive.Label
        ref={ref}
        className={cn(styles.label, className)}
        {...props}
    />
))
export const SelectLabel = Label
Label.displayName = SelectPrimitive.Label.displayName

export const Item = React.forwardRef<
    React.ElementRef<typeof SelectPrimitive.Item>,
    React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
    <SelectPrimitive.Item
        ref={ref}
        className={cn(styles.item, className)}
        {...props}
    >
        <span className={styles.indicatorWrapper}>
            <SelectPrimitive.ItemIndicator>
                <Check className={styles.indicator} />
            </SelectPrimitive.ItemIndicator>
        </span>

        <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
))
export const SelectItem = Item
Item.displayName = SelectPrimitive.Item.displayName

export const Separator = React.forwardRef<
    React.ElementRef<typeof SelectPrimitive.Separator>,
    React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
    <SelectPrimitive.Separator
        ref={ref}
        className={cn(styles.separator, className)}
        {...props}
    />
))
export const SelectSeparator = Separator
Separator.displayName = SelectPrimitive.Separator.displayName
