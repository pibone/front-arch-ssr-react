import React, { PropsWithChildren } from 'react'
import styles from './application.module.css'

export type ApplicationLayoutProps = PropsWithChildren<{}>

export function ApplicationLayout(props: ApplicationLayoutProps) {
    return (
        <div data-testid="application-layout" className={styles.container}>
            {props.children}
        </div>
    )
}
