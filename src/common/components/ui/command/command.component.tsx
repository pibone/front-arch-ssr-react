import React, { Component } from 'react'
import { Command as CommandPrimitive } from 'cmdk'
import cn from 'classnames'
import styles from './command.module.css'

const CommandRoot = React.forwardRef<
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
CommandRoot.displayName = CommandPrimitive.displayName

const CommandInput = React.forwardRef<
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

CommandInput.displayName = CommandPrimitive.Input.displayName

const CommandList = React.forwardRef<
    React.ElementRef<typeof CommandPrimitive.List>,
    React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
    <CommandPrimitive.List
        ref={ref}
        className={cn(styles.list, className)}
        {...props}
    />
))

CommandList.displayName = CommandPrimitive.List.displayName

const CommandEmpty = React.forwardRef<
    React.ElementRef<typeof CommandPrimitive.Empty>,
    React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>(({ className, ...props }, ref) => (
    <CommandPrimitive.Empty
        ref={ref}
        className={cn(styles.empty, className)}
        {...props}
    />
))

CommandEmpty.displayName = CommandPrimitive.Empty.displayName

const CommandGroup = React.forwardRef<
    React.ElementRef<typeof CommandPrimitive.Group>,
    React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
    <CommandPrimitive.Group
        ref={ref}
        className={cn(styles.group, className)}
        {...props}
    />
))

CommandGroup.displayName = CommandPrimitive.Group.displayName

const CommandSeparator = React.forwardRef<
    React.ElementRef<typeof CommandPrimitive.Separator>,
    React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
    <CommandPrimitive.Separator
        ref={ref}
        className={cn(styles.separator, className)}
        {...props}
    />
))
CommandSeparator.displayName = CommandPrimitive.Separator.displayName

const CommandItem = React.forwardRef<
    React.ElementRef<typeof CommandPrimitive.Item>,
    React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
    <CommandPrimitive.Item
        ref={ref}
        className={cn(styles.item, className)}
        {...props}
    />
))

CommandItem.displayName = CommandPrimitive.Item.displayName

const CommandShortcut = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
    return <span className={cn(styles.shortcut, className)} {...props} />
}
CommandShortcut.displayName = 'CommandShortcut'

export const Command: typeof CommandRoot & {
    Dialog: typeof CommandDialog
    Input: typeof CommandInput
    List: typeof CommandList
    Empty: typeof CommandEmpty
    Group: typeof CommandGroup
    Shortcut: typeof CommandShortcut
    Item: typeof CommandItem
    Separator: typeof CommandSeparator
} = CommandRoot

Command.Input = CommandInput
Command.List = CommandList
Command.Empty = CommandEmpty
Command.Group = CommandGroup
Command.Shortcut = CommandShortcut
Command.Item = CommandItem
Command.Separator = CommandSeparator
