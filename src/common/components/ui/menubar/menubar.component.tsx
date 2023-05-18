import React, { HTMLProps } from 'react'
import * as MenubarPrimitive from '@radix-ui/react-menubar'
import { Check, ChevronRight, Circle } from 'lucide-react'
import cn from 'classnames'
import styles from './menubar.module.css'

export const Menu = MenubarPrimitive.Menu
export const MenubarMenu = Menu

export const Group = MenubarPrimitive.Group
export const MenubarGroup = Group

export const Portal = MenubarPrimitive.Portal
export const MenubarPortal = Portal

export const Sub = MenubarPrimitive.Sub
export const MenubarSub = Sub

export const RadioGroup = MenubarPrimitive.RadioGroup
export const MenubarRadioGroup = RadioGroup

export const Root = React.forwardRef<
    React.ElementRef<typeof MenubarPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>
>(({ className, ...props }, ref) => (
    <MenubarPrimitive.Root
        ref={ref}
        data-testid="menubar"
        className={cn(styles.container, className)}
        {...props}
    />
))
export const MenubarRoot = Root
Root.displayName = MenubarPrimitive.Root.displayName

export const Trigger = React.forwardRef<
    React.ElementRef<typeof MenubarPrimitive.Trigger>,
    React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>
>(({ className, ...props }, ref) => (
    <MenubarPrimitive.Trigger
        ref={ref}
        className={cn(styles.trigger, className)}
        {...props}
    />
))
export const MenubarTrigger = Trigger
Trigger.displayName = MenubarPrimitive.Trigger.displayName

export const SubTrigger = React.forwardRef<
    React.ElementRef<typeof MenubarPrimitive.SubTrigger>,
    React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & {
        inset?: boolean
    }
>(({ className, inset, children, ...props }, ref) => (
    <MenubarPrimitive.SubTrigger
        ref={ref}
        className={cn(styles.subtrigger, inset && styles.inset, className)}
        {...props}
    >
        {children}
        <ChevronRight className={styles.icon} />
    </MenubarPrimitive.SubTrigger>
))
export const MenubarSubTrigger = SubTrigger
SubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName

export const SubContent = React.forwardRef<
    React.ElementRef<typeof MenubarPrimitive.SubContent>,
    React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent>
>(({ className, ...props }, ref) => (
    <MenubarPrimitive.Portal>
        <MenubarPrimitive.SubContent
            ref={ref}
            className={cn(styles.subcontent, className)}
            {...props}
        />
    </MenubarPrimitive.Portal>
))
export const MenubarSubContent = SubContent
SubContent.displayName = MenubarPrimitive.SubContent.displayName

export const Content = React.forwardRef<
    React.ElementRef<typeof MenubarPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content>
>(
    (
        {
            className,
            align = 'start',
            alignOffset = -4,
            sideOffset = 8,
            ...props
        },
        ref
    ) => (
        <MenubarPrimitive.Portal>
            <MenubarPrimitive.Content
                ref={ref}
                align={align}
                alignOffset={alignOffset}
                sideOffset={sideOffset}
                className={cn(styles.content, className)}
                {...props}
            />
        </MenubarPrimitive.Portal>
    )
)
export const MenubarContent = Content
Content.displayName = MenubarPrimitive.Content.displayName

export const Item = React.forwardRef<
    React.ElementRef<typeof MenubarPrimitive.Item>,
    React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & {
        inset?: boolean
    }
>(({ className, inset, ...props }, ref) => (
    <MenubarPrimitive.Item
        ref={ref}
        className={cn(styles.item, inset && styles.inset, className)}
        {...props}
    />
))
export const MenubarItem = Item
Item.displayName = MenubarPrimitive.Item.displayName

export const CheckboxItem = React.forwardRef<
    React.ElementRef<typeof MenubarPrimitive.CheckboxItem>,
    React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
    <MenubarPrimitive.CheckboxItem
        ref={ref}
        className={cn(styles.checkboxItem, className)}
        checked={checked}
        {...props}
    >
        <span className={styles.indicator}>
            <MenubarPrimitive.ItemIndicator>
                <Check className={styles.icon} />
            </MenubarPrimitive.ItemIndicator>
        </span>
        {children}
    </MenubarPrimitive.CheckboxItem>
))
export const MenubarCheckboxItem = CheckboxItem
CheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName

export const RadioItem = React.forwardRef<
    React.ElementRef<typeof MenubarPrimitive.RadioItem>,
    React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
    <MenubarPrimitive.RadioItem
        ref={ref}
        className={cn(styles.radioItem, className)}
        {...props}
    >
        <span className={styles.indicator}>
            <MenubarPrimitive.ItemIndicator>
                <Circle className={styles.icon} />
            </MenubarPrimitive.ItemIndicator>
        </span>
        {children}
    </MenubarPrimitive.RadioItem>
))
export const MenubarRadioItem = RadioItem
RadioItem.displayName = MenubarPrimitive.RadioItem.displayName

export const Label = React.forwardRef<
    React.ElementRef<typeof MenubarPrimitive.Label>,
    React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & {
        inset?: boolean
    }
>(({ className, inset, ...props }, ref) => (
    <MenubarPrimitive.Label
        ref={ref}
        className={cn(styles.label, inset && styles.inset, className)}
        {...props}
    />
))
export const MenubarLabel = Label
Label.displayName = MenubarPrimitive.Label.displayName

export const Separator = React.forwardRef<
    React.ElementRef<typeof MenubarPrimitive.Separator>,
    React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator>
>(({ className, ...props }, ref) => (
    <MenubarPrimitive.Separator
        ref={ref}
        className={cn(styles.separator, className)}
        {...props}
    />
))
export const MenubarSeparator = Separator
Separator.displayName = MenubarPrimitive.Separator.displayName

export const Shortcut = React.forwardRef<
    HTMLSpanElement,
    HTMLProps<HTMLSpanElement>
>(({ className, ...props }, ref) => (
    <span ref={ref} className={cn(styles.shortcut, className)} {...props} />
))
export const MenubarShortcut = Shortcut
Shortcut.displayName = 'MenubarShortcut'
