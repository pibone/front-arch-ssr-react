import { PropsWithChildren } from 'react'
import { AuthProvider } from '@/auth/providers/auth'
import { AuthToApiContextConnectionProvider } from '@/auth/providers/auth-to-apicontext-connection'
import { QueryProvider } from '../query'
import { ApiContextProvider } from '../api-context'

export const AppProvider = ({ children }: PropsWithChildren) => (
    <AuthProvider>
        <ApiContextProvider>
            <QueryProvider>{children}</QueryProvider>
            <AuthToApiContextConnectionProvider />
        </ApiContextProvider>
    </AuthProvider>
)
