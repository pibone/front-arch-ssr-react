import axios from 'axios'

const isServer = typeof window === 'undefined'
const baseURL =
    (isServer
        ? process.env.API_URL ?? process.env.NEXT_PUBLIC_API_URL
        : process.env.NEXT_PUBLIC_API_URL) || '/api'

const axiosInstance = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json',
    },
})

axiosInstance.interceptors.request.use(async (config) => {
    console.log('request intercepted')
    if (isServer) {
        const { cookies } = await import('next/headers'),
            token = cookies().get('token')?.value

        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`
        }
    } else {
        const token = document.cookie.replace(
            /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
            '$1'
        )

        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`
        }
    }

    return config
})

export default axiosInstance
