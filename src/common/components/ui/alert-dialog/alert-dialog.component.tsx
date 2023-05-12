import React from 'react'
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog'
import cn from 'classnames'
import { buttonVariants } from '../button'
import styles from './alert-dialog.module.css'

const AlertDialogRoot = React.forwardRef<
    React.ElementRef<typeof AlertDialogPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Root>
>(({ children, ...props }, ref) => (
    <AlertDialogPrimitive.Root ref={ref} {...props}>
        {children}
    </AlertDialogPrimitive.Root>
))
AlertDialogRoot.displayName = 'AlertDialogRoot'

const AlertDialogTrigger = React.forwardRef<
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
AlertDialogTrigger.displayName = 'AlertDialogTrigger'

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

const AlertDialogContent = React.forwardRef<
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
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName

const AlertDialogHeader = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={cn(styles.header, className)} {...props} />
)
AlertDialogHeader.displayName = 'AlertDialogHeader'

const AlertDialogFooter = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={cn(styles.footer, className)} {...props} />
)
AlertDialogFooter.displayName = 'AlertDialogFooter'

const AlertDialogTitle = React.forwardRef<
    React.ElementRef<typeof AlertDialogPrimitive.Title>,
    React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
>(({ className, ...props }, ref) => (
    <AlertDialogPrimitive.Title
        ref={ref}
        className={cn(styles.title, className)}
        {...props}
    />
))
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName

const AlertDialogDescription = React.forwardRef<
    React.ElementRef<typeof AlertDialogPrimitive.Description>,
    React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>
>(({ className, ...props }, ref) => (
    <AlertDialogPrimitive.Description
        ref={ref}
        className={cn(styles.description, className)}
        {...props}
    />
))
AlertDialogDescription.displayName =
    AlertDialogPrimitive.Description.displayName

const AlertDialogAction = React.forwardRef<
    React.ElementRef<typeof AlertDialogPrimitive.Action>,
    React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>
>(({ className, ...props }, ref) => (
    <AlertDialogPrimitive.Action
        ref={ref}
        className={cn(buttonVariants(), className)}
        {...props}
    />
))
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName

const AlertDialogCancel = React.forwardRef<
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
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName

export const AlertDialog: typeof AlertDialogRoot & {
    Trigger: typeof AlertDialogTrigger
    Content: typeof AlertDialogContent
    Header: typeof AlertDialogHeader
    Footer: typeof AlertDialogFooter
    Title: typeof AlertDialogTitle
    Description: typeof AlertDialogDescription
    Action: typeof AlertDialogAction
    Cancel: typeof AlertDialogCancel
} = AlertDialogRoot

AlertDialog.Trigger = AlertDialogTrigger
AlertDialog.Content = AlertDialogContent
AlertDialog.Header = AlertDialogHeader
AlertDialog.Footer = AlertDialogFooter
AlertDialog.Title = AlertDialogTitle
AlertDialog.Description = AlertDialogDescription
AlertDialog.Action = AlertDialogAction
AlertDialog.Cancel = AlertDialogCancel
