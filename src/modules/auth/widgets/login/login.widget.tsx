import React from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { AuthForm } from '../../components/auth-form'
import styles from './login.module.css'

export type LoginWidgetProps = {}

export function LoginWidget(props: LoginWidgetProps) {
    const router = useRouter()
    const searchParams = useSearchParams()
    const callbackUrl = searchParams.get('callbackUrl') || '/profile'
    return (
        <div data-testid="login-widget" className={styles.container}>
            <AuthForm
                onSubmit={async (credentials) => {
                    const result = await signIn('credentials', {
                        redirect: false,
                        ...credentials,
                        callbackUrl,
                    })

                    console.debug('Login result:', result)

                    if (result?.error === 'CredentialsSignin') {
                        return 'Invalid credentials'
                    }

                    router.replace(callbackUrl)
                }}
            />
        </div>
    )
}
