import React from 'react'
import * as MenubarPrimitive from '@radix-ui/react-menubar'
import { Check, ChevronRight, Circle } from 'lucide-react'
import cn from 'classnames'
import styles from './menubar.module.css'

const MenubarMenu = MenubarPrimitive.Menu

const MenubarGroup = MenubarPrimitive.Group

const MenubarPortal = MenubarPrimitive.Portal

const MenubarSub = MenubarPrimitive.Sub

const MenubarRadioGroup = MenubarPrimitive.RadioGroup

const MenubarRoot = React.forwardRef<
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
MenubarRoot.displayName = MenubarPrimitive.Root.displayName

const MenubarTrigger = React.forwardRef<
    React.ElementRef<typeof MenubarPrimitive.Trigger>,
    React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>
>(({ className, ...props }, ref) => (
    <MenubarPrimitive.Trigger
        ref={ref}
        className={cn(styles.trigger, className)}
        {...props}
    />
))
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName

const MenubarSubTrigger = React.forwardRef<
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
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName

const MenubarSubContent = React.forwardRef<
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
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName

const MenubarContent = React.forwardRef<
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
MenubarContent.displayName = MenubarPrimitive.Content.displayName

const MenubarItem = React.forwardRef<
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
MenubarItem.displayName = MenubarPrimitive.Item.displayName

const MenubarCheckboxItem = React.forwardRef<
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
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName

const MenubarRadioItem = React.forwardRef<
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
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName

const MenubarLabel = React.forwardRef<
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
MenubarLabel.displayName = MenubarPrimitive.Label.displayName

const MenubarSeparator = React.forwardRef<
    React.ElementRef<typeof MenubarPrimitive.Separator>,
    React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator>
>(({ className, ...props }, ref) => (
    <MenubarPrimitive.Separator
        ref={ref}
        className={cn(styles.separator, className)}
        {...props}
    />
))
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName

const MenubarShortcut = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
    return <span className={cn(styles.shortcut, className)} {...props} />
}
MenubarShortcut.displayname = 'MenubarShortcut'

export const Menubar: typeof MenubarRoot & {
    Menu: typeof MenubarMenu
    Trigger: typeof MenubarTrigger
    Content: typeof MenubarContent
    Item: typeof MenubarItem
    Separator: typeof MenubarSeparator
    Label: typeof MenubarLabel
    CheckboxItem: typeof MenubarCheckboxItem
    RadioGroup: typeof MenubarRadioGroup
    RadioItem: typeof MenubarRadioItem
    Portal: typeof MenubarPortal
    SubContent: typeof MenubarSubContent
    SubTrigger: typeof MenubarSubTrigger
    Group: typeof MenubarGroup
    Sub: typeof MenubarSub
    Shortcut: typeof MenubarShortcut
} = MenubarRoot

Menubar.Menu = MenubarMenu
Menubar.Trigger = MenubarTrigger
Menubar.Content = MenubarContent
Menubar.Item = MenubarItem
Menubar.Separator = MenubarSeparator
Menubar.Label = MenubarLabel
Menubar.CheckboxItem = MenubarCheckboxItem
Menubar.RadioGroup = MenubarRadioGroup
Menubar.RadioItem = MenubarRadioItem
Menubar.Portal = MenubarPortal
Menubar.SubContent = MenubarSubContent
Menubar.SubTrigger = MenubarSubTrigger
Menubar.Group = MenubarGroup
Menubar.Sub = MenubarSub
Menubar.Shortcut = MenubarShortcut
