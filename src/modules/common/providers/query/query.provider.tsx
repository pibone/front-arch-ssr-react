import { useSession } from 'next-auth/react'
import { PropsWithChildren, useEffect } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

export const QueryProvider = ({ children }: PropsWithChildren) => {
    const { status } = useSession()
    useEffect(() => {
        if (status === 'unauthenticated') {
            void queryClient.invalidateQueries()
        }
    }, [status])

    return (
        <QueryClientProvider client={queryClient}>
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    )
}
