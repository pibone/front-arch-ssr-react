import React, { HTMLAttributes } from 'react'
import * as ToastPrimitives from '@radix-ui/react-toast'
import { cva } from 'class-variance-authority'
import { X } from 'lucide-react'
import cn from 'classnames'
import styles from './toast.module.css'

const Provider = React.forwardRef<
    React.ElementRef<typeof ToastPrimitives.Provider>,
    React.ComponentPropsWithoutRef<typeof ToastPrimitives.Provider>
>(({ children, ...props }, ref) => (
    <ToastPrimitives.Provider ref={ref} {...props}>
        {children}
        <ToastViewport />
    </ToastPrimitives.Provider>
))
Provider.displayName = ToastPrimitives.Provider.displayName
const ToastProvider = Provider

const ToastViewport = React.forwardRef<
    React.ElementRef<typeof ToastPrimitives.Viewport>,
    React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
    <ToastPrimitives.Viewport
        ref={ref}
        className={cn(styles.viewport, className)}
        {...props}
    />
))
ToastViewport.displayName = ToastPrimitives.Viewport.displayName

const toastVariants = cva(cn(styles.container, 'group'), {
    variants: {
        variant: {
            default: styles.default,
            danger: cn('group', styles.danger),
        },
    },
    defaultVariants: {
        variant: 'default',
    },
})

const Root = React.forwardRef<
    React.ElementRef<typeof ToastPrimitives.Root>,
    React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> & {
        variant: 'default' | 'danger'
    }
>(({ className, variant, ...props }, ref) => {
    return (
        <ToastPrimitives.Root
            data-testid="toast"
            ref={ref}
            className={cn(toastVariants({ variant }), className)}
            {...props}
        />
    )
})
const ToastRoot = Root
Root.displayName = ToastPrimitives.Root.displayName

const Content = React.forwardRef<
    HTMLDivElement,
    HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div ref={ref} className={cn(styles.content, className)} {...props} />
))
const TableContent = Content
Content.displayName = 'TableContent'

const Action = React.forwardRef<
    React.ElementRef<typeof ToastPrimitives.Action>,
    React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
    <ToastPrimitives.Action
        ref={ref}
        className={cn(styles.action, className)}
        {...props}
    />
))
const ToastAction = Action
Action.displayName = ToastPrimitives.Action.displayName

const Close = React.forwardRef<
    React.ElementRef<typeof ToastPrimitives.Close>,
    React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
    <ToastPrimitives.Close
        ref={ref}
        className={cn(styles.close, className)}
        toast-close=""
        {...props}
    >
        <X className={styles.icon} />
    </ToastPrimitives.Close>
))
const ToastClose = Close
Close.displayName = ToastPrimitives.Close.displayName

const Title = React.forwardRef<
    React.ElementRef<typeof ToastPrimitives.Title>,
    React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
    <ToastPrimitives.Title
        ref={ref}
        className={cn(styles.title, className)}
        {...props}
    />
))
const ToastTitle = Title
Title.displayName = ToastPrimitives.Title.displayName

const Description = React.forwardRef<
    React.ElementRef<typeof ToastPrimitives.Description>,
    React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
    <ToastPrimitives.Description
        ref={ref}
        className={cn(styles.description, className)}
        {...props}
    />
))
const ToastDescription = Description
Description.displayName = ToastPrimitives.Description.displayName

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>

type ToastActionElement = React.ReactElement<typeof Action>

export {
    type ToastProps,
    type ToastActionElement,
    Provider,
    Root,
    Content,
    Title,
    Description,
    Close,
    Action,
    ToastProvider,
    ToastRoot,
    TableContent,
    ToastTitle,
    ToastDescription,
    ToastClose,
    ToastAction,
}
