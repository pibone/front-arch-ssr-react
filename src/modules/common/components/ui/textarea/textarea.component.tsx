import React from 'react'
import cn from 'classnames'
import styles from './textarea.module.css'

export interface TextareaProps
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ className, ...props }, ref) => {
        return (
            <textarea
                data-testid="textarea"
                className={cn(styles.container, className)}
                ref={ref}
                {...props}
            />
        )
    }
)
Textarea.displayName = 'Textarea'
