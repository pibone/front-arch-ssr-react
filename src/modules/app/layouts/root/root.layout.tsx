import React, { PropsWithChildren } from 'react'
import styles from './root.module.css'
import { AppProvider } from '../../providers/app'

export type RootLayoutProps = PropsWithChildren<{}>

export function RootLayout(props: RootLayoutProps) {
    return (
        <html lang="en">
            <head></head>
            <body>
                <div data-testid="root-layout" className={styles.container}>
                    <AppProvider>{props.children}</AppProvider>
                </div>
            </body>
        </html>
    )
}
