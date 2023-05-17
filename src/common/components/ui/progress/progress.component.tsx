import React from 'react'
import * as ProgressPrimitive from '@radix-ui/react-progress'
import cn from 'classnames'
import styles from './progress.module.css'

export const Progress = React.forwardRef<
    React.ElementRef<typeof ProgressPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
    <ProgressPrimitive.Root
        ref={ref}
        data-testid="progress"
        className={cn(styles.container, className)}
        {...props}
    >
        <ProgressPrimitive.Indicator
            className={styles.indicator}
            style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
        />
    </ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName
