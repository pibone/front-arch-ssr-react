import React from 'react'
import cn from 'classnames'
import styles from './input.module.css'

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, ...props }, ref) => {
        return (
            <input
                data-testid="input"
                type={type}
                className={cn(styles.input, className)}
                ref={ref}
                {...props}
            />
        )
    }
)

Input.displayName = 'Input'
