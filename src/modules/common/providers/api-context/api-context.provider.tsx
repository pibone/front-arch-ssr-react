import { ComponentPropsWithoutRef, createContext, useContext } from 'react'
import { ApiContext, DEFAULT_API_CONTEXT } from './api-context.default'

const Api_Context = createContext<ApiContext>(DEFAULT_API_CONTEXT)

export const ApiContextProvider = ({
    value,
    ...props
}: WithOptional<
    ComponentPropsWithoutRef<typeof Api_Context.Provider>,
    'value'
>) => <Api_Context.Provider {...props} value={value || DEFAULT_API_CONTEXT} />

export const useApiContext = () => useContext(Api_Context)
