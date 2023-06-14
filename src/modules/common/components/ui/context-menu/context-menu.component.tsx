import React from 'react'
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu'
import { Check, ChevronRight, Circle } from 'lucide-react'
import cn from 'classnames'
import styles from './context-menu.module.css'

export const Root = ContextMenuPrimitive.Root
export const ContextMenuRoot = Root

export const Trigger = ContextMenuPrimitive.Trigger
export const ContextMenuTrigger = Trigger

export const Group = ContextMenuPrimitive.Group
export const ContextMenuGroup = Group

export const Portal = ContextMenuPrimitive.Portal
export const ContextMenuPortal = Portal

export const Sub = ContextMenuPrimitive.Sub
export const ContextMenuSub = Sub

export const RadioGroup = ContextMenuPrimitive.RadioGroup
export const ContextMenuRadioGroup = RadioGroup

export const SubTrigger = React.forwardRef<
    React.ElementRef<typeof ContextMenuPrimitive.SubTrigger>,
    React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubTrigger> & {
        inset?: boolean
    }
>(({ className, inset, children, ...props }, ref) => (
    <ContextMenuPrimitive.SubTrigger
        ref={ref}
        className={cn(styles.subtrigger, inset && styles.inset, className)}
        {...props}
    >
        {children}
        <ChevronRight className={styles.subtriggerIcon} />
    </ContextMenuPrimitive.SubTrigger>
))
export const ContextMenuSubTrigger = SubTrigger
SubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName

export const SubContent = React.forwardRef<
    React.ElementRef<typeof ContextMenuPrimitive.SubContent>,
    React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
    <ContextMenuPrimitive.SubContent
        ref={ref}
        className={cn(styles.subcontent, className)}
        {...props}
    />
))
export const ContextMenuSubContent = SubContent
SubContent.displayName = ContextMenuPrimitive.SubContent.displayName

export const Content = React.forwardRef<
    React.ElementRef<typeof ContextMenuPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
    <ContextMenuPrimitive.Portal>
        <ContextMenuPrimitive.Content
            ref={ref}
            className={cn(styles.content, className)}
            {...props}
        />
    </ContextMenuPrimitive.Portal>
))
export const ContextMenuContent = Content
Content.displayName = ContextMenuPrimitive.Content.displayName

export const Item = React.forwardRef<
    React.ElementRef<typeof ContextMenuPrimitive.Item>,
    React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> & {
        inset?: boolean
    }
>(({ className, inset, ...props }, ref) => (
    <ContextMenuPrimitive.Item
        ref={ref}
        className={cn(styles.item, inset && styles.inset, className)}
        {...props}
    />
))
export const ContextMenuItem = Item
Item.displayName = ContextMenuPrimitive.Item.displayName

export const CheckboxItem = React.forwardRef<
    React.ElementRef<typeof ContextMenuPrimitive.CheckboxItem>,
    React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
    <ContextMenuPrimitive.CheckboxItem
        ref={ref}
        className={cn(styles.checkboxItem, className)}
        checked={checked}
        {...props}
    >
        <span className={styles.itemIndicatorWrapper}>
            <ContextMenuPrimitive.ItemIndicator>
                <Check className={styles.checkboxItemIndicator} />
            </ContextMenuPrimitive.ItemIndicator>
        </span>
        {children}
    </ContextMenuPrimitive.CheckboxItem>
))
export const ContextMenuCheckboxItem = CheckboxItem
CheckboxItem.displayName = ContextMenuPrimitive.CheckboxItem.displayName

export const RadioItem = React.forwardRef<
    React.ElementRef<typeof ContextMenuPrimitive.RadioItem>,
    React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
    <ContextMenuPrimitive.RadioItem
        ref={ref}
        className={cn(styles.radioItem, className)}
        {...props}
    >
        <span className={styles.itemIndicatorWrapper}>
            <ContextMenuPrimitive.ItemIndicator>
                <Circle className={styles.radioItemIndicator} />
            </ContextMenuPrimitive.ItemIndicator>
        </span>
        {children}
    </ContextMenuPrimitive.RadioItem>
))
export const ContextMenuRadioItem = RadioItem
RadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName

export const Label = React.forwardRef<
    React.ElementRef<typeof ContextMenuPrimitive.Label>,
    React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> & {
        inset?: boolean
    }
>(({ className, inset, ...props }, ref) => (
    <ContextMenuPrimitive.Label
        ref={ref}
        className={cn(styles.label, inset && styles.inset, className)}
        {...props}
    />
))
export const ContextMenuLabel = Label
Label.displayName = ContextMenuPrimitive.Label.displayName

export const Separator = React.forwardRef<
    React.ElementRef<typeof ContextMenuPrimitive.Separator>,
    React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
    <ContextMenuPrimitive.Separator
        ref={ref}
        className={cn(styles.separator, className)}
        {...props}
    />
))
export const ContextMenuSeparator = Separator
Separator.displayName = ContextMenuPrimitive.Separator.displayName

export const Shortcut = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
    return <span className={cn(styles.menuSeparator, className)} {...props} />
}
export const ContextMenuShortcut = Shortcut
Shortcut.displayName = 'ContextMenuShortcut'
