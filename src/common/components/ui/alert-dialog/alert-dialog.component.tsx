import React, { HTMLProps } from 'react'
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
export const AlertDialogRoot = Root
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
export const AlertDialogTrigger = Trigger
Trigger.displayName = 'AlertDialogTrigger'

const AlertDialogPortal = ({
    className,
    children,
    ...props
}: AlertDialogPrimitive.AlertDialogPortalProps) => (
    <AlertDialogPrimitive.Portal className={cn(className)} {...props}>
        <div className={styles.portal}>{children}</div>
    </AlertDialogPrimitive.Portal>
)
AlertDialogPortal.displayName = AlertDialogPrimitive.Portal.displayName

const AlertDialogOverlay = React.forwardRef<
    React.ElementRef<typeof AlertDialogPrimitive.Overlay>,
    React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
    <AlertDialogPrimitive.Overlay
        className={cn(styles.overlay, className)}
        {...props}
        ref={ref}
    />
))
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName

export const Modal = React.forwardRef<
    React.ElementRef<typeof AlertDialogPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>
>(({ className, ...props }, ref) => (
    <AlertDialogPortal>
        <AlertDialogOverlay />
        <AlertDialogPrimitive.Content
            ref={ref}
            className={cn(styles.content, className)}
            {...props}
        />
    </AlertDialogPortal>
))
export const AlertDialogModal = Modal
Modal.displayName = AlertDialogPrimitive.Content.displayName

export const Header = React.forwardRef<
    HTMLDivElement,
    HTMLProps<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div ref={ref} className={cn(styles.header, className)} {...props} />
))
export const AlertDialogHeader = Header
Header.displayName = 'AlertDialogHeader'

export const Footer = React.forwardRef<
    HTMLDivElement,
    HTMLProps<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div ref={ref} className={cn(styles.footer, className)} {...props} />
))
export const AlertDialogFooter = Footer
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
export const AlertDialogTitle = Title
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
export const AlertDialogDescription = Description
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
export const AlertDialogAction = Action
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
export const AlertDialogCancel = Cancel
Cancel.displayName = AlertDialogPrimitive.Cancel.displayName
