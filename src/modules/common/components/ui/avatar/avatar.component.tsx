import React from 'react'
import cn from 'classnames'
import * as AvatarPrimitive from '@radix-ui/react-avatar'
import styles from './avatar.module.css'

export const Root = React.forwardRef<
    React.ElementRef<typeof AvatarPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
    <AvatarPrimitive.Root
        ref={ref}
        data-testid="avatar"
        className={cn(styles.container, className)}
        {...props}
    />
))
export const AvatarRoot = Root
Root.displayName = AvatarPrimitive.Root.displayName

export const Image = React.forwardRef<
    React.ElementRef<typeof AvatarPrimitive.Image>,
    React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
    <AvatarPrimitive.Image
        ref={ref}
        className={cn(styles.image, className)}
        {...props}
    />
))
export const AvatarImage = Image
Image.displayName = AvatarPrimitive.Image.displayName

export const Fallback = React.forwardRef<
    React.ElementRef<typeof AvatarPrimitive.Fallback>,
    React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
    <AvatarPrimitive.Fallback
        ref={ref}
        className={cn(styles.fallback, className)}
        {...props}
    />
))
export const AvatarFallback = Fallback
Fallback.displayName = AvatarPrimitive.Fallback.displayName
