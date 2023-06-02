import { PropsWithChildren } from 'react'
import { QueryProvider } from '../query'
import { AuthProvider } from '../../../auth/providers/auth'

export const AppProvider = ({ children }: PropsWithChildren) => (
    <AuthProvider>
        <QueryProvider>{children}</QueryProvider>
    </AuthProvider>
)
