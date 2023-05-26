import React from 'react'
import styles from './account.module.css'
import classNames from 'classnames'
import { useSession, signIn } from 'next-auth/react'
import * as Avatar from '@/common/components/ui/avatar'
import { LoadingButton } from '@/common/components/loading-button'

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
            {selectComponent(status)}
        </div>
    )
}

function selectComponent(authStatus: ReturnType<typeof useSession>['status']) {
    return authStatus === 'authenticated' ? (
        <LoggedInUser />
    ) : (
        <LoadingButton
            loading={authStatus === 'loading'}
            onClick={() => signIn()}
        >
            Sign In
        </LoadingButton>
    )
}

function LoggedInUser() {
    const { data: session } = useSession()
    return (
        <Avatar.Root>
            <Avatar.Image src={session.user?.image} />
            <Avatar.Fallback>
                {(session.user?.name ?? '')
                    .split(/\s+/)
                    .map((v) => v[0].toUpperCase())
                    .join('') || 'Unknown user'}
            </Avatar.Fallback>
        </Avatar.Root>
    )
}
