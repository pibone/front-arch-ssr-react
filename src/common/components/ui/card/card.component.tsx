import React from 'react'
import cn from 'classnames'
import styles from './card.module.css'

export const Root = React.forwardRef<
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
Root.displayName = 'CardRoot'

export const Header = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div ref={ref} className={cn(styles.header, className)} {...props} />
))
Header.displayName = 'CardHeader'

export const Title = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn(styles.title, className)} {...props} />
))
Title.displayName = 'CardTitle'

export const Description = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
    <p ref={ref} className={cn(styles.description, className)} {...props} />
))
Description.displayName = 'CardDescription'

export const Content = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div ref={ref} className={cn(styles.content, className)} {...props} />
))
Content.displayName = 'CardContent'

export const Footer = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div ref={ref} className={cn(styles.footer, className)} {...props} />
))
Footer.displayName = 'CardFooter'
