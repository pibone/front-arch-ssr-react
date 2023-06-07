import { ComponentPropsWithoutRef, createContext, useContext } from 'react'
import { AxiosInstance } from 'axios'
import axiosInstance from './axios.instance'

export type ApiContext = { client: AxiosInstance }
export const DEFAULT_API_CONTEXT = Object.freeze({ client: axiosInstance })
const ApiContext = createContext<ApiContext>(DEFAULT_API_CONTEXT)

export const ApiContextProvider = ({
    value,
    ...props
}: WithOptional<
    ComponentPropsWithoutRef<typeof ApiContext.Provider>,
    'value'
>) => <ApiContext.Provider {...props} value={value || DEFAULT_API_CONTEXT} />

export const useApiContext = () => useContext(ApiContext)
