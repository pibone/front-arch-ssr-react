import React, { PropsWithChildren } from 'react'
import classNames from 'classnames'
import styles from './sample-button.module.css'

export type SampleButtonProps = PropsWithChildren<{
    onClick?: React.MouseEventHandler<HTMLDivElement>
}>

export function SampleButton(props: SampleButtonProps) {
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
