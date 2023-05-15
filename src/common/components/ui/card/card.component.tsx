import React from 'react'
import cn from 'classnames'
import styles from './card.module.css'

const CardRoot = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        data-testid="card"
        ref={ref}
        className={cn(styles.container, className)}
        {...props}
    />
))
CardRoot.displayName = 'CardRoot'

const CardHeader = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div ref={ref} className={cn(styles.header, className)} {...props} />
))
CardHeader.displayName = 'CardHeader'

const CardTitle = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn(styles.title, className)} {...props} />
))
CardTitle.displayName = 'CardTitle'

const CardDescription = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
    <p ref={ref} className={cn(styles.description, className)} {...props} />
))
CardDescription.displayName = 'CardDescription'

const CardContent = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div ref={ref} className={cn(styles.content, className)} {...props} />
))
CardContent.displayName = 'CardContent'

const CardFooter = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div ref={ref} className={cn(styles.footer, className)} {...props} />
))
CardFooter.displayName = 'CardFooter'

export { CardHeader, CardFooter, CardTitle, CardDescription, CardContent }

export const Card: typeof CardRoot & {
    Header: typeof CardHeader
    Footer: typeof CardFooter
    Title: typeof CardTitle
    Description: typeof CardDescription
    Content: typeof CardContent
} = CardRoot

Card.Header = CardHeader
Card.Footer = CardFooter
Card.Title = CardTitle
Card.Description = CardDescription
Card.Content = CardContent
