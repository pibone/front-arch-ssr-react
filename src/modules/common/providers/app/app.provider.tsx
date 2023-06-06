import { PropsWithChildren } from 'react'
import { AuthProvider } from '../../../auth/providers/auth'
import { QueryProvider } from '../query'
import { AxiosProvider } from '../axios'

export const AppProvider = ({ children }: PropsWithChildren) => (
    <AuthProvider>
        <AxiosProvider>
            <QueryProvider>{children}</QueryProvider>
        </AxiosProvider>
    </AuthProvider>
)
