import React from 'react'
import * as SwitchPrimitives from '@radix-ui/react-switch'
import cn from 'classnames'
import styles from './switch.module.css'

export const Switch = React.forwardRef<
    React.ElementRef<typeof SwitchPrimitives.Root>,
    React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
    <SwitchPrimitives.Root
        data-testid="switch"
        className={cn(styles.container, className)}
        {...props}
        ref={ref}
    >
        <SwitchPrimitives.Thumb className={styles.thumb} />
    </SwitchPrimitives.Root>
))
Switch.displayName = SwitchPrimitives.Root.displayName
