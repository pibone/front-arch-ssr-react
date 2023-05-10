import React, { PropsWithChildren } from 'react'
import classNames from 'classnames'
import styles from './button.module.css'

export type ButtonProps = PropsWithChildren<{
    onClick?: React.MouseEventHandler<HTMLDivElement>
}>

export function Button(props: ButtonProps) {
    return (
        <div
            data-testid="button"
            className={classNames(styles.container)}
            onClick={(e) => props.onClick?.(e)}
        >
            {props.children}
        </div>
    )
}
