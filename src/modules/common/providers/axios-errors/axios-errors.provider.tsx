import { PropsWithChildren, useCallback, useEffect, useState } from 'react'
import { useApiContext } from '../api-context'
import { InternalAxiosRequestConfig } from 'axios'
import * as Toast from '@/common/components/ui/toast'

export const AxiosErrorsConnectionProvider = ({
    children,
}: PropsWithChildren) => {
    const apiContext = useApiContext()
    const [notificationOpen, setNotificationOpen] = useState(false)

    function notifyError() {
        console.log('notifyError')
        setNotificationOpen(true)
    }

    const requestInterceptor = useCallback(
        (req: InternalAxiosRequestConfig<any>) => {
            const requestGoesBad = false
            if (requestGoesBad) {
                notifyError()
            }
            return req
        },
        []
    )

    useEffect(() => {
        console.log('effect')
        setTimeout(() => {
            void apiContext.client.get('https://pokeapi.co/api/v2/pokemon/')
        })
        const registration =
            apiContext.client.interceptors.request.use(requestInterceptor)

        return () => apiContext.client.interceptors.request.eject(registration)
    }, [apiContext, requestInterceptor])

    return (
        <>
            {children}
            <Toast.Root
                variant="default"
                open={notificationOpen}
                onOpenChange={setNotificationOpen}
            >
                <Toast.Close>Cerrar</Toast.Close>
                <Toast.Action altText="Confirmar">Ok</Toast.Action>
                <Toast.Content>Mi mensaje</Toast.Content>
            </Toast.Root>
        </>
    )
}
