import { PropsWithChildren } from 'react'
import { AuthProvider } from '../../../auth/providers/auth'
import { QueryProvider } from '../query'
import { ApiContextProvider } from '../api-context'

export const AppProvider = ({ children }: PropsWithChildren) => (
    <AuthProvider>
        <ApiContextProvider>
            <QueryProvider>{children}</QueryProvider>
        </ApiContextProvider>
    </AuthProvider>
)
