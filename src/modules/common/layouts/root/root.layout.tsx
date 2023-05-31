import React, { PropsWithChildren } from 'react'
import styles from './root.module.css'

export type RootLayoutProps = PropsWithChildren<{}>

export function RootLayout(props: RootLayoutProps) {
    return (
        <html lang="en">
            <body>
                <div data-testid="root-layout" className={styles.container}>
                    {props.children}
                </div>
            </body>
        </html>
    )
}
