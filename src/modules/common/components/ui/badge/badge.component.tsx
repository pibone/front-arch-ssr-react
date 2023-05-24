import React from 'react'
import cn from 'classnames'
import { VariantProps, cva } from 'class-variance-authority'
import styles from './badge.module.css'
import { Slot } from '@radix-ui/react-slot'

export const badgeVariants = cva(styles.container, {
    variants: {
        variant: {
            primary: styles.primary,
            secondary: styles.secondary,
            danger: styles.danger,
            outline: styles.outline,
        },
    },
    defaultVariants: {
        variant: 'primary',
    },
})

export interface BadgeProps
    extends React.HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof badgeVariants> {}

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
    ({ className, variant, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : 'div'
        return (
            <Comp
                data-testid="badge"
                className={cn(badgeVariants({ variant }), className)}
                ref={ref}
                {...props}
            />
        )
    }
)

Badge.displayName = 'Badge'
