import React, { Component } from 'react'
import { Command as CommandPrimitive } from 'cmdk'
import cn from 'classnames'
import styles from './command.module.css'

export const Root = React.forwardRef<
    React.ElementRef<typeof CommandPrimitive>,
    React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
    <CommandPrimitive
        data-testid="command"
        ref={ref}
        className={cn(styles.container, className)}
        {...props}
    />
))
export const CommandRoot = Root
Root.displayName = CommandPrimitive.displayName

export const Input = React.forwardRef<
    React.ElementRef<typeof CommandPrimitive.Input>,
    React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input> & {
        IconComponent: Component<{ className: string }>
    }
>(({ className, IconComponent, ...props }, ref) => (
    <div className={styles.commandWrapper} cmdk-input-wrapper="">
        <IconComponent className={styles.commandIcon} />
        <CommandPrimitive.Input
            ref={ref}
            className={cn(styles.input, className)}
            {...props}
        />
    </div>
))
export const CommandInput = Input

Input.displayName = CommandPrimitive.Input.displayName

export const List = React.forwardRef<
    React.ElementRef<typeof CommandPrimitive.List>,
    React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
    <CommandPrimitive.List
        ref={ref}
        className={cn(styles.list, className)}
        {...props}
    />
))
export const CommandList = List
List.displayName = CommandPrimitive.List.displayName

export const Empty = React.forwardRef<
    React.ElementRef<typeof CommandPrimitive.Empty>,
    React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>(({ className, ...props }, ref) => (
    <CommandPrimitive.Empty
        ref={ref}
        className={cn(styles.empty, className)}
        {...props}
    />
))
export const CommandEmpty = Empty

Empty.displayName = CommandPrimitive.Empty.displayName

export const Group = React.forwardRef<
    React.ElementRef<typeof CommandPrimitive.Group>,
    React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
    <CommandPrimitive.Group
        ref={ref}
        className={cn(styles.group, className)}
        {...props}
    />
))
export const CommandGroup = Group

Group.displayName = CommandPrimitive.Group.displayName

export const Separator = React.forwardRef<
    React.ElementRef<typeof CommandPrimitive.Separator>,
    React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
    <CommandPrimitive.Separator
        ref={ref}
        className={cn(styles.separator, className)}
        {...props}
    />
))
export const CommandSeparator = Separator
Separator.displayName = CommandPrimitive.Separator.displayName

export const Item = React.forwardRef<
    React.ElementRef<typeof CommandPrimitive.Item>,
    React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
    <CommandPrimitive.Item
        ref={ref}
        className={cn(styles.item, className)}
        {...props}
    />
))
export const CommandItem = Item
Item.displayName = CommandPrimitive.Item.displayName

export const Shortcut = React.forwardRef<
    HTMLSpanElement,
    React.HTMLProps<HTMLSpanElement>
>(({ className, ...props }, ref) => (
    <span ref={ref} className={cn(styles.shortcut, className)} {...props} />
))
export const CommandShortcut = Shortcut
Shortcut.displayName = 'CommandShortcut'
