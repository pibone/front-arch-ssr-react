import React from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import styles from './dialog.module.css'
import { X } from 'lucide-react'
import cn from 'classnames'

const DialogRoot = React.forwardRef<
    React.ElementRef<typeof DialogPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Root>
>(({ children, ...props }, ref) => (
    <DialogPrimitive.Root ref={ref} {...props}>
        {children}
    </DialogPrimitive.Root>
))
DialogRoot.displayName = 'DialogRoot'

const DialogTrigger = React.forwardRef<
    React.ElementRef<typeof DialogPrimitive.Trigger>,
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Trigger>
>(({ children, ...props }, ref) => (
    <DialogPrimitive.Trigger data-testid="dialog" ref={ref} {...props}>
        {children}
    </DialogPrimitive.Trigger>
))
DialogTrigger.displayName = 'DialogTrigger'

const DialogPortal = ({
    className,
    children,
    ...props
}: DialogPrimitive.DialogPortalProps) => (
    <DialogPrimitive.Portal className={className} {...props}>
        <div className={styles.portal}>{children}</div>
    </DialogPrimitive.Portal>
)
DialogPortal.displayName = DialogPrimitive.Portal.displayName

const DialogOverlay = React.forwardRef<
    React.ElementRef<typeof DialogPrimitive.Overlay>,
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
    <DialogPrimitive.Overlay
        ref={ref}
        className={cn(styles.overlay, className)}
        {...props}
    />
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

const DialogContent = React.forwardRef<
    React.ElementRef<typeof DialogPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
    <DialogPortal>
        <DialogOverlay />
        <DialogPrimitive.Content
            ref={ref}
            className={cn(styles.content, className)}
            {...props}
        >
            {children}
            <DialogPrimitive.Close className={styles.close}>
                <X className={styles.icon} />
                <span className={styles.text}>Close</span>
            </DialogPrimitive.Close>
        </DialogPrimitive.Content>
    </DialogPortal>
))
DialogContent.displayName = DialogPrimitive.Content.displayName

const DialogHeader = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={cn(styles.header, className)} {...props} />
)
DialogHeader.displayName = 'DialogHeader'

const DialogFooter = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={cn(styles.footer, className)} {...props} />
)
DialogFooter.displayName = 'DialogFooter'

const DialogTitle = React.forwardRef<
    React.ElementRef<typeof DialogPrimitive.Title>,
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
    <DialogPrimitive.Title
        ref={ref}
        className={cn(styles.title, className)}
        {...props}
    />
))
DialogTitle.displayName = DialogPrimitive.Title.displayName

const DialogDescription = React.forwardRef<
    React.ElementRef<typeof DialogPrimitive.Description>,
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
    <DialogPrimitive.Description
        ref={ref}
        className={cn(styles.description, className)}
        {...props}
    />
))
DialogDescription.displayName = DialogPrimitive.Description.displayName

export const Dialog: typeof DialogRoot & {
    Content: typeof DialogContent
    Description: typeof DialogDescription
    Footer: typeof DialogFooter
    Trigger: typeof DialogTrigger
    Header: typeof DialogHeader
    Title: typeof DialogTitle
} = DialogRoot

Dialog.Content = DialogContent
Dialog.Description = DialogDescription
Dialog.Footer = DialogFooter
Dialog.Trigger = DialogTrigger
Dialog.Header = DialogHeader
Dialog.Title = DialogTitle
