import React, { HTMLProps } from 'react'
import cn from 'classnames'
import styles from './skeleton.module.css'

export const Skeleton = React.forwardRef<
    HTMLDivElement,
    HTMLProps<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div ref={ref} className={cn(styles.container, className)} {...props} />
))

Skeleton.displayName = 'Skeleton'
