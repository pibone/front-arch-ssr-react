import React from 'react'
import { VariantProps, cva } from 'class-variance-authority'
import cn from 'classnames'
import styles from './alert.module.css'

const alertVariants = cva(styles.container, {
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

const AlertRoot = React.forwardRef<
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
AlertRoot.displayName = 'AlertRoot'

const AlertTitle = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
    <h5 ref={ref} className={cn(styles.title, className)} {...props} />
))
AlertTitle.displayName = 'AlertTitle'

const AlertDescription = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
    <div ref={ref} className={cn(styles.description, className)} {...props} />
))
AlertDescription.displayName = 'AlertDescription'

export const Alert: typeof AlertRoot & {
    Description: typeof AlertDescription
    Title: typeof AlertTitle
} = AlertRoot

Alert.Description = AlertDescription
Alert.Title = AlertTitle
