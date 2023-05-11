import React from 'react'
import styles from './button.module.css'
import { Slot } from '@radix-ui/react-slot'
import { VariantProps, cva } from 'class-variance-authority'

const buttonVariants = cva(styles.container, {
    variants: {
        variant: {
            primary: styles.primary,
            secondary: styles.secondary,
            destructive: styles.destructive,
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

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : 'button'
        return (
            <Comp
                data-testid="button"
                className={buttonVariants({ variant, size, className })}
                ref={ref}
                {...props}
            />
        )
    }
)

Button.displayName = 'Button'

export { Button }
