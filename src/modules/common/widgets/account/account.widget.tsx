import React from 'react'
import styles from './account.module.css'
import classNames from 'classnames'
import { useSession } from 'next-auth/react'

export type AccountWidgetProps = {
    className: string
}

export function AccountWidget(props: AccountWidgetProps) {
    const { status } = useSession()
    return (
        <div
            data-testid="account-widget"
            className={classNames(styles.container, props.className)}
        >
            {status}
        </div>
    )
}
