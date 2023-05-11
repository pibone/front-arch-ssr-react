import React, { PropsWithChildren } from 'react'
import styles from './sample-button.module.css'
import { Button } from '../ui/button'

export type SampleButtonProps = PropsWithChildren<{
    onClick?: React.MouseEventHandler<HTMLDivElement>
}>

export function SampleButton(props: SampleButtonProps) {
    return (
        <Button
            data-testid="sample-button"
            className={styles.container}
            onClick={(e) => props.onClick?.(e)}
        >
            {props.children}
        </Button>
    )
}
