import React, { useContext } from 'react'
import axiosInstance from './axios.instance'

const AxiosContext = React.createContext({
    axios: axiosInstance,
})

export const AxiosProvider = ({ children }: React.PropsWithChildren) => (
    <AxiosContext.Provider value={{ axios: axiosInstance }}>
        {children}
    </AxiosContext.Provider>
)

export const useAxiosInstance = () => useContext(AxiosContext)
