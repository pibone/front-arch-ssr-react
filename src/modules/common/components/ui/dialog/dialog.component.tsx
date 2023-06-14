import React from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import styles from './dialog.module.css'
import { X } from 'lucide-react'
import cn from 'classnames'

export const Root = DialogPrimitive.Root
export const DialogRoot = Root

export const Trigger = React.forwardRef<
    React.ElementRef<typeof DialogPrimitive.Trigger>,
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Trigger>
>(({ children, ...props }, ref) => (
    <DialogPrimitive.Trigger data-testid="dialog" ref={ref} {...props}>
        {children}
    </DialogPrimitive.Trigger>
))
export const DialogTrigger = Trigger
Trigger.displayName = 'DialogTrigger'

const Portal = ({
    className,
    children,
    ...props
}: DialogPrimitive.DialogPortalProps) => (
    <DialogPrimitive.Portal className={cn(styles.portal, className)} {...props}>
        <div className={styles.portal}>{children}</div>
    </DialogPrimitive.Portal>
)
Portal.displayName = DialogPrimitive.Portal.displayName

const Overlay = React.forwardRef<
    React.ElementRef<typeof DialogPrimitive.Overlay>,
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
    <DialogPrimitive.Overlay
        ref={ref}
        className={cn(styles.overlay, className)}
        {...props}
    />
))
Overlay.displayName = DialogPrimitive.Overlay.displayName

export const Modal = React.forwardRef<
    React.ElementRef<typeof DialogPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
    <Portal>
        <Overlay />
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
    </Portal>
))
export const DialogModal = Modal
Modal.displayName = DialogPrimitive.Content.displayName

export const Header = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={cn(styles.header, className)} {...props} />
)
export const DialogHeader = Header
Header.displayName = 'DialogHeader'

export const Footer = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={cn(styles.footer, className)} {...props} />
)
export const DialogFooter = Footer
Footer.displayName = 'DialogFooter'

export const Title = React.forwardRef<
    React.ElementRef<typeof DialogPrimitive.Title>,
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
    <DialogPrimitive.Title
        ref={ref}
        className={cn(styles.title, className)}
        {...props}
    />
))
export const DialogTitle = Title
Title.displayName = DialogPrimitive.Title.displayName

export const Description = React.forwardRef<
    React.ElementRef<typeof DialogPrimitive.Description>,
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
    <DialogPrimitive.Description
        ref={ref}
        className={cn(styles.description, className)}
        {...props}
    />
))
export const DialogDescription = Description
Description.displayName = DialogPrimitive.Description.displayName
