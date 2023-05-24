import React, { PropsWithChildren } from 'react'
import styles from './application.module.css'
import { HeaderWidget } from '../../widgets/header'
import { FooterWidget } from '../../widgets/footer'
import { AppProvider } from '../../providers/app'

export type ApplicationLayoutProps = PropsWithChildren<{}>

export function ApplicationLayout(props: ApplicationLayoutProps) {
    return (
        <div data-testid="application-layout" className={styles.container}>
            <AppProvider>
                <HeaderWidget />
                {props.children}
                <FooterWidget />
            </AppProvider>
        </div>
    )
}
