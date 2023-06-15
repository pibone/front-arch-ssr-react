import { AxiosInstance } from 'axios'
import axiosInstance from './axios.instance'

export type ApiContext = {
    client: AxiosInstance
    setAuthorizationToken: (token?: string) => void
}

export const DEFAULT_API_CONTEXT = Object.freeze({
    client: axiosInstance,
    setAuthorizationToken(token?: string) {
        axiosInstance.defaults.headers.common.Authorization = token
            ? `Bearer ${token}`
            : undefined
    },
})

export function getApiContext() {
    return DEFAULT_API_CONTEXT
}
