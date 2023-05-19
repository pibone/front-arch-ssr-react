import React from 'react'
import * as TogglePrimitive from '@radix-ui/react-toggle'
import { VariantProps, cva } from 'class-variance-authority'
import cn from 'classnames'
import styles from './toggle.module.css'

const toggleVariants = cva(styles.container, {
    variants: {
        variant: {
            default: styles.default,
            outline: styles.outline,
        },
        size: {
            sm: styles.sm,
            md: styles.md,
            lg: styles.lg,
        },
    },
    defaultVariants: {
        variant: 'default',
        size: 'md',
    },
})

export const Toggle = React.forwardRef<
    React.ElementRef<typeof TogglePrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
        VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
    <TogglePrimitive.Root
        data-testid="toggle"
        ref={ref}
        className={cn(toggleVariants({ variant, size, className }))}
        {...props}
    />
))
Toggle.displayName = TogglePrimitive.Root.displayName
