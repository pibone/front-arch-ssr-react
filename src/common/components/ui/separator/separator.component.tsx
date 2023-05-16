import React from 'react'
import * as SeparatorPrimitive from '@radix-ui/react-separator'
import cn from 'classnames'
import styles from './separator.module.css'

export const Separator = React.forwardRef<
    React.ElementRef<typeof SeparatorPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(
    (
        { className, orientation = 'horizontal', decorative = true, ...props },
        ref
    ) => (
        <SeparatorPrimitive.Root
            ref={ref}
            data-testid="separator"
            decorative={decorative}
            orientation={orientation}
            className={cn(
                styles.container,
                orientation === 'horizontal'
                    ? styles.horizontal
                    : styles.vertical,
                className
            )}
            {...props}
        />
    )
)
Separator.displayName = SeparatorPrimitive.Root.displayName
