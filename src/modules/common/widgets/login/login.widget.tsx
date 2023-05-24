import React from 'react'
import styles from './login.module.css'
import { useSession } from 'next-auth/react'

export type LoginWidgetProps = {}

export function LoginWidget(props: LoginWidgetProps) {
    const { status } = useSession()
    console.log(status)
    return <div data-testid="login-widget" className={styles.container}></div>
}
