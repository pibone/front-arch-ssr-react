import React from 'react'
import * as SliderPrimitive from '@radix-ui/react-slider'
import cn from 'classnames'
import styles from './slider.module.css'

const Slider = React.forwardRef<
    React.ElementRef<typeof SliderPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
    <SliderPrimitive.Root
        ref={ref}
        data-testid="slider"
        className={cn(styles.container, className)}
        {...props}
    >
        <SliderPrimitive.Track className={styles.track}>
            <SliderPrimitive.Range className={styles.range} />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb className={styles.thumb} />
    </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
