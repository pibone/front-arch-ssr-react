import React, { HTMLProps } from 'react'
import * as SheetPrimitive from '@radix-ui/react-dialog'
import { VariantProps, cva } from 'class-variance-authority'
import { X } from 'lucide-react'
import cn from 'classnames'
import styles from './sheet.module.css'

export const Root = React.forwardRef<
    React.ElementRef<typeof SheetPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof SheetPrimitive.Root>
>((props, ref) => (
    <SheetPrimitive.Root ref={ref} data-testid="sheet" {...props} />
))
export const SheetRoot = Root
Root.displayName = SheetPrimitive.Root.displayName

export const Trigger = SheetPrimitive.Trigger
export const SheetTrigger = Trigger

const portalVariants = cva(styles.portal, {
    variants: {
        position: {
            top: 'items-start',
            bottom: 'items-end',
            left: 'justify-start',
            right: 'justify-end',
        },
    },
    defaultVariants: { position: 'right' },
})

interface SheetPortalProps
    extends SheetPrimitive.DialogPortalProps,
        VariantProps<typeof portalVariants> {}

const SheetPortal = ({ position, children, ...props }: SheetPortalProps) => (
    <SheetPrimitive.Portal {...props}>
        <div className={portalVariants({ position })}>{children}</div>
    </SheetPrimitive.Portal>
)
SheetPortal.displayName = SheetPrimitive.Portal.displayName

const SheetOverlay = React.forwardRef<
    React.ElementRef<typeof SheetPrimitive.Overlay>,
    React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
    <SheetPrimitive.Overlay
        className={cn(styles.overlay, className)}
        {...props}
        ref={ref}
    />
))
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName

const sheetVariants = cva(styles.container, {
    variants: {
        position: {
            top: 'animate-in slide-in-from-top w-full duration-300',
            bottom: 'animate-in slide-in-from-bottom w-full duration-300',
            left: 'animate-in slide-in-from-left h-full duration-300',
            right: 'animate-in slide-in-from-right h-full duration-300',
        },
        size: {
            content: '',
            default: '',
            sm: '',
            lg: '',
            xl: '',
            full: '',
        },
    },
    compoundVariants: [
        {
            position: ['top', 'bottom'],
            size: 'content',
            class: 'max-h-screen',
        },
        {
            position: ['top', 'bottom'],
            size: 'default',
            class: 'h-1/3',
        },
        {
            position: ['top', 'bottom'],
            size: 'sm',
            class: 'h-1/4',
        },
        {
            position: ['top', 'bottom'],
            size: 'lg',
            class: 'h-1/2',
        },
        {
            position: ['top', 'bottom'],
            size: 'xl',
            class: 'h-5/6',
        },
        {
            position: ['top', 'bottom'],
            size: 'full',
            class: 'h-screen',
        },
        {
            position: ['right', 'left'],
            size: 'content',
            class: 'max-w-screen',
        },
        {
            position: ['right', 'left'],
            size: 'default',
            class: 'w-1/3',
        },
        {
            position: ['right', 'left'],
            size: 'sm',
            class: 'w-1/4',
        },
        {
            position: ['right', 'left'],
            size: 'lg',
            class: 'w-1/2',
        },
        {
            position: ['right', 'left'],
            size: 'xl',
            class: 'w-5/6',
        },
        {
            position: ['right', 'left'],
            size: 'full',
            class: 'w-screen',
        },
    ],
    defaultVariants: {
        position: 'right',
        size: 'default',
    },
})

export interface DialogContentProps
    extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
        VariantProps<typeof sheetVariants> {}

export const Modal = React.forwardRef<
    React.ElementRef<typeof SheetPrimitive.Content>,
    DialogContentProps
>(({ position, size, className, children, ...props }, ref) => (
    <SheetPortal position={position}>
        <SheetOverlay />
        <SheetPrimitive.Content
            ref={ref}
            className={cn(sheetVariants({ position, size }), className)}
            {...props}
        >
            {children}
            <SheetPrimitive.Close className={styles.close}>
                <X className={styles.icon} />
                <span className="sr-only">Close</span>
            </SheetPrimitive.Close>
        </SheetPrimitive.Content>
    </SheetPortal>
))
export const SheetModal = Modal
Modal.displayName = SheetPrimitive.Content.displayName

export const Header = React.forwardRef<
    HTMLDivElement,
    HTMLProps<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div ref={ref} className={cn(styles.header, className)} {...props} />
))
export const SheetHeader = Header
Header.displayName = 'SheetHeader'

export const Footer = React.forwardRef<
    HTMLDivElement,
    HTMLProps<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div ref={ref} className={cn(styles.footer, className)} {...props} />
))
export const SheetFooter = Footer
Footer.displayName = 'SheetFooter'

export const Title = React.forwardRef<
    React.ElementRef<typeof SheetPrimitive.Title>,
    React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
    <SheetPrimitive.Title
        ref={ref}
        className={cn(styles.title, className)}
        {...props}
    />
))
export const SheetTitle = Title
Title.displayName = SheetPrimitive.Title.displayName

export const Description = React.forwardRef<
    React.ElementRef<typeof SheetPrimitive.Description>,
    React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
    <SheetPrimitive.Description
        ref={ref}
        className={cn(styles.description, className)}
        {...props}
    />
))
export const SheetDescription = Description
Description.displayName = SheetPrimitive.Description.displayName
