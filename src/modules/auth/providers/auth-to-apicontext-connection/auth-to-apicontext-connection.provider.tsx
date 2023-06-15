import { useApiContext } from '@/common/providers/api-context'
import { useSession } from 'next-auth/react'
import { PropsWithChildren, useLayoutEffect } from 'react'

export const AuthToApiContextConnectionProvider = ({
    children,
}: PropsWithChildren) => {
    const apiContext = useApiContext()
    const { data: session } = useSession()
    const apiSession = session?.apiSession

    useLayoutEffect(() => {
        apiContext.setAuthorizationToken(apiSession?.accessToken)
    }, [apiContext, apiSession])

    return <>{children}</>
}
