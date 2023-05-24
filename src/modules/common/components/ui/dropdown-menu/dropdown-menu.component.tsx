import React, { Component } from 'react'
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { ChevronRight } from 'lucide-react'
import cn from 'classnames'
import styles from './dropdown-menu.module.css'

export const Root = DropdownMenuPrimitive.Root
export const DropdownMenuRoot = Root

export const Trigger = DropdownMenuPrimitive.Trigger
export const DropdownMenuTrigger = Trigger

export const Group = DropdownMenuPrimitive.Group
export const DropdownMenuGroup = Group

export const Portal = DropdownMenuPrimitive.Portal
export const DropdownMenuPortal = Portal

export const Sub = DropdownMenuPrimitive.Sub
export const DropdownMenuSub = Sub

export const RadioGroup = DropdownMenuPrimitive.RadioGroup
export const DropdownMenuRadioGroup = RadioGroup

export const SubTrigger = React.forwardRef<
    React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
    React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
        inset?: boolean
    }
>(({ className, inset, children, ...props }, ref) => (
    <DropdownMenuPrimitive.SubTrigger
        ref={ref}
        className={cn(styles.subtrigger, inset && styles.inset, className)}
        {...props}
    >
        {children}
        <ChevronRight className={styles.icon} />
    </DropdownMenuPrimitive.SubTrigger>
))
export const DropdownMenuSubTrigger = SubTrigger
SubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName

export const SubContent = React.forwardRef<
    React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
    React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
    <DropdownMenuPrimitive.SubContent
        ref={ref}
        className={cn(styles.subcontent, className)}
        {...props}
    />
))
export const DropdownMenuSubContent = SubContent
SubContent.displayName = DropdownMenuPrimitive.SubContent.displayName

export const Content = React.forwardRef<
    React.ElementRef<typeof DropdownMenuPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
    <DropdownMenuPrimitive.Portal>
        <DropdownMenuPrimitive.Content
            ref={ref}
            sideOffset={sideOffset}
            className={cn(styles.content, className)}
            {...props}
        />
    </DropdownMenuPrimitive.Portal>
))
export const DropdownMenuContent = Content
Content.displayName = DropdownMenuPrimitive.Content.displayName

export const Item = React.forwardRef<
    React.ElementRef<typeof DropdownMenuPrimitive.Item>,
    React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
        inset?: boolean
    }
>(({ className, inset, ...props }, ref) => (
    <DropdownMenuPrimitive.Item
        ref={ref}
        className={cn(styles.item, inset && styles.inset, className)}
        {...props}
    />
))
export const DropdownMenuItem = Item
Item.displayName = DropdownMenuPrimitive.Item.displayName

export const CheckboxItem = React.forwardRef<
    React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
    React.ComponentPropsWithoutRef<
        typeof DropdownMenuPrimitive.CheckboxItem
    > & {
        Icon: Component<{ className: string }>
    }
>(({ className, children, Icon, checked, ...props }, ref) => (
    <DropdownMenuPrimitive.CheckboxItem
        ref={ref}
        className={cn(styles.checkboxItem, className)}
        checked={checked}
        {...props}
    >
        <span className={styles.checkboxItem}>
            <DropdownMenuPrimitive.ItemIndicator>
                <Icon className={styles.icon} />
            </DropdownMenuPrimitive.ItemIndicator>
        </span>
        {children}
    </DropdownMenuPrimitive.CheckboxItem>
))
export const DropdownMenuCheckboxItem = CheckboxItem
CheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName

export const RadioItem = React.forwardRef<
    React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
    React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem> & {
        Icon: Component<{ className: string }>
    }
>(({ className, children, Icon, ...props }, ref) => (
    <DropdownMenuPrimitive.RadioItem
        ref={ref}
        className={cn(styles.radioItem, className)}
        {...props}
    >
        <span className={styles.radioItemWrapper}>
            <DropdownMenuPrimitive.ItemIndicator>
                <Icon className={styles.icon} />
            </DropdownMenuPrimitive.ItemIndicator>
        </span>
        {children}
    </DropdownMenuPrimitive.RadioItem>
))
export const DropdownMenuRadioItem = RadioItem
RadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName

export const Label = React.forwardRef<
    React.ElementRef<typeof DropdownMenuPrimitive.Label>,
    React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
        inset?: boolean
    }
>(({ className, inset, ...props }, ref) => (
    <DropdownMenuPrimitive.Label
        ref={ref}
        className={cn(styles.label, inset && styles.inset, className)}
        {...props}
    />
))
export const DropdownMenuLabel = Label
Label.displayName = DropdownMenuPrimitive.Label.displayName

export const Separator = React.forwardRef<
    React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
    React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
    <DropdownMenuPrimitive.Separator
        ref={ref}
        className={cn(styles.separator, className)}
        {...props}
    />
))
export const DropdownMenuSeparator = Separator
Separator.displayName = DropdownMenuPrimitive.Separator.displayName

export const Shortcut = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
    return <span className={cn(styles.shortcut, className)} {...props} />
}
export const DropdownMenuShortcut = Shortcut
Shortcut.displayName = 'DropdownMenuShortcut'
