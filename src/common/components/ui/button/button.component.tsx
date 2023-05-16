import React from 'react'
import styles from './button.module.css'
import { Slot } from '@radix-ui/react-slot'
import { VariantProps, cva } from 'class-variance-authority'
import cn from 'classnames'

export const buttonVariants = cva(styles.container, {
    variants: {
        variant: {
            primary: styles.primary,
            secondary: styles.secondary,
            danger: styles.danger,
            muted: styles.muted,
            outline: styles.outline,
            ghost: styles.ghost,
            link: styles.link,
        },
        size: {
            sm: styles.sm,
            md: styles.md,
            lg: styles.lg,
        },
    },
    defaultVariants: {
        variant: 'primary',
        size: 'md',
    },
})

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : 'button'
        return (
            <Comp
                data-testid="button"
                className={cn(buttonVariants({ variant, size }), className)}
                ref={ref}
                {...props}
            />
        )
    }
)

Button.displayName = 'Button'
