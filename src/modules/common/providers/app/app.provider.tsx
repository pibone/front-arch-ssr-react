import { PropsWithChildren } from 'react'
import { AuthProvider } from '@/auth/providers/auth'
import { AuthToApiContextConnectionProvider } from '@/auth/providers/auth-to-apicontext-connection'
import { QueryProvider } from '../query'
import { ApiContextProvider } from '../api-context'
import { AxiosErrorsConnectionProvider } from '../axios-errors'
import { ToastProvider } from '@/common/components/ui/toast'

export const AppProvider = ({ children }: PropsWithChildren) => (
    <AuthProvider>
        <ToastProvider duration={5_000}>
            <ApiContextProvider>
                <QueryProvider>{children}</QueryProvider>
                <AuthToApiContextConnectionProvider />
                <AxiosErrorsConnectionProvider />
            </ApiContextProvider>
        </ToastProvider>
    </AuthProvider>
)
