import React from 'react'
import * as ProgressPrimitive from '@radix-ui/react-progress'
import cn from 'classnames'
import styles from './progress.module.css'

export const Progress = React.forwardRef<
    React.ElementRef<typeof ProgressPrimitive.Root>,
    Omit<
        React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>,
        'value'
    > & { percentage: number }
>(({ className, percentage, ...props }, ref) => {
    const clampedPercentage = Math.max(Math.min(percentage || 0, 100), 0)
    return (
        <ProgressPrimitive.Root
            ref={ref}
            data-testid="progress"
            value={clampedPercentage}
            className={cn(styles.container, className)}
            {...props}
        >
            <ProgressPrimitive.Indicator
                className={styles.indicator}
                style={{
                    transform: `translateX(-${100 - clampedPercentage}%)`,
                }}
            />
        </ProgressPrimitive.Root>
    )
})
Progress.displayName = ProgressPrimitive.Root.displayName
