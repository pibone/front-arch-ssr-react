import React from 'react'
import styles from './radio-group.module.css'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import { Circle } from 'lucide-react'
import cn from 'classnames'

export const Root = React.forwardRef<
    React.ElementRef<typeof RadioGroupPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => (
    <RadioGroupPrimitive.Root
        data-testid="radio-group"
        className={cn(styles.container, className)}
        {...props}
        ref={ref}
    />
))
export const RadioGroupRoot = Root
Root.displayName = RadioGroupPrimitive.Root.displayName

export const Item = React.forwardRef<
    React.ElementRef<typeof RadioGroupPrimitive.Item>,
    React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => (
    <RadioGroupPrimitive.Item
        ref={ref}
        className={cn(styles.item, className)}
        {...props}
    >
        <RadioGroupPrimitive.Indicator className={styles.indicator}>
            <Circle className={styles.icon} />
        </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
))
export const RadioGroupItem = Item
Item.displayName = RadioGroupPrimitive.Item.displayName
