import React from 'react'
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog'
import cn from 'classnames'
import { buttonVariants } from '../button'
import styles from './alert-dialog.module.css'

export const Root = React.forwardRef<
    React.ElementRef<typeof AlertDialogPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Root>
>(({ children, ...props }, ref) => (
    <AlertDialogPrimitive.Root ref={ref} {...props}>
        {children}
    </AlertDialogPrimitive.Root>
))
Root.displayName = 'AlertDialogRoot'

export const Trigger = React.forwardRef<
    React.ElementRef<typeof AlertDialogPrimitive.Trigger>,
    React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Trigger>
>(({ children, ...props }, ref) => (
    <AlertDialogPrimitive.Trigger
        data-testid="alert-dialog"
        ref={ref}
        {...props}
    >
        {children}
    </AlertDialogPrimitive.Trigger>
))
Trigger.displayName = 'AlertDialogTrigger'

const Portal = ({
    className,
    children,
    ...props
}: AlertDialogPrimitive.AlertDialogPortalProps) => (
    <AlertDialogPrimitive.Portal className={cn(className)} {...props}>
        <div className={styles.portal}>{children}</div>
    </AlertDialogPrimitive.Portal>
)
Portal.displayName = AlertDialogPrimitive.Portal.displayName

const Overlay = React.forwardRef<
    React.ElementRef<typeof AlertDialogPrimitive.Overlay>,
    React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
    <AlertDialogPrimitive.Overlay
        className={cn(styles.overlay, className)}
        {...props}
        ref={ref}
    />
))
Overlay.displayName = AlertDialogPrimitive.Overlay.displayName

export const Modal = React.forwardRef<
    React.ElementRef<typeof AlertDialogPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>
>(({ className, ...props }, ref) => (
    <Portal>
        <Overlay />
        <AlertDialogPrimitive.Content
            ref={ref}
            className={cn(styles.content, className)}
            {...props}
        />
    </Portal>
))
Modal.displayName = AlertDialogPrimitive.Content.displayName

export const Header = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={cn(styles.header, className)} {...props} />
)
Header.displayName = 'AlertDialogHeader'

export const Footer = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={cn(styles.footer, className)} {...props} />
)
Footer.displayName = 'AlertDialogFooter'

export const Title = React.forwardRef<
    React.ElementRef<typeof AlertDialogPrimitive.Title>,
    React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
>(({ className, ...props }, ref) => (
    <AlertDialogPrimitive.Title
        ref={ref}
        className={cn(styles.title, className)}
        {...props}
    />
))
Title.displayName = AlertDialogPrimitive.Title.displayName

export const Description = React.forwardRef<
    React.ElementRef<typeof AlertDialogPrimitive.Description>,
    React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>
>(({ className, ...props }, ref) => (
    <AlertDialogPrimitive.Description
        ref={ref}
        className={cn(styles.description, className)}
        {...props}
    />
))
Description.displayName = AlertDialogPrimitive.Description.displayName

export const Action = React.forwardRef<
    React.ElementRef<typeof AlertDialogPrimitive.Action>,
    React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>
>(({ className, ...props }, ref) => (
    <AlertDialogPrimitive.Action
        ref={ref}
        className={cn(buttonVariants(), className)}
        {...props}
    />
))
Action.displayName = AlertDialogPrimitive.Action.displayName

export const Cancel = React.forwardRef<
    React.ElementRef<typeof AlertDialogPrimitive.Cancel>,
    React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>
>(({ className, ...props }, ref) => (
    <AlertDialogPrimitive.Cancel
        ref={ref}
        className={cn(
            buttonVariants({ variant: 'outline' }),
            styles.cancel,
            className
        )}
        {...props}
    />
))
Cancel.displayName = AlertDialogPrimitive.Cancel.displayName
