import React from 'react'
import * as LabelPrimitive from '@radix-ui/react-label'
import { VariantProps, cva } from 'class-variance-authority'
import cn from 'classnames'
import styles from './label.module.css'

const labelVariants = cva(styles.container)

const Label = React.forwardRef<
    React.ElementRef<typeof LabelPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
        VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
    <LabelPrimitive.Root
        ref={ref}
        data-testid="label"
        className={cn(labelVariants(), className)}
        {...props}
    />
))
Label.displayName = LabelPrimitive.Root.displayName

export { Label }
