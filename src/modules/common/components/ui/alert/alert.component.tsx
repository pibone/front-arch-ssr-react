import React from 'react'
import { VariantProps, cva } from 'class-variance-authority'
import cn from 'classnames'
import styles from './alert.module.css'

export const alertVariants = cva(styles.container, {
    variants: {
        variant: {
            default: styles.defaultVariant,
            danger: styles.danger,
        },
    },
    defaultVariants: {
        variant: 'default',
    },
})

export const Root = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
    <div
        ref={ref}
        role="alert"
        data-testid="alert"
        className={cn(alertVariants({ variant }), className)}
        {...props}
    />
))
export const AlertRoot = Root
Root.displayName = 'AlertRoot'

export const Title = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
    <h5 ref={ref} className={cn(styles.title, className)} {...props} />
))
export const AlertTitle = Title
Title.displayName = 'AlertTitle'

export const Description = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
    <div ref={ref} className={cn(styles.description, className)} {...props} />
))
export const AlertDescription = Description
Description.displayName = 'AlertDescription'
