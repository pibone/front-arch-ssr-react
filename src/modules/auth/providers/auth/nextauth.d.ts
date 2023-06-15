import { ApiSession, DefaultSession } from 'next-auth'
import { DefaultJWT } from 'next-auth/jwt'

declare module 'next-auth' {
    declare type Role = 'user' | 'admin'
    declare interface ApiSession {
        accessToken: string
        refreshToken?: string
    }
    declare interface User {
        id: string
        role: Role
        image?: string
        name?: string
        email?: string
        apiSession?: ApiSession
    }

    declare interface Session extends DefaultSession {
        apiSession?: ApiSession
    }
}

declare module 'next-auth/jwt' {
    declare interface JWT
        extends WithOptional<ApiSession, 'accessToken'>,
            DefaultJWT {}
}
