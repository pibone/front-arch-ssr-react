import { PropsWithChildren } from 'react'
import { AuthProvider } from '../../../auth/providers/auth'

export const AppProvider = ({ children }: PropsWithChildren) => (
    <AuthProvider>{children}</AuthProvider>
)
