import { AuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions: AuthOptions = {
    session: {
        strategy: 'jwt',
    },
    pages: {
        signIn: '/auth/sign-in',
    },
    providers: [
        CredentialsProvider({
            name: 'custom-credentials',
            credentials: {
                email: { type: 'email' },
                password: { type: 'password' },
            },
            async authorize(_credentials, _req) {
                // Connect with login API in the backend
                const user = {
                    id: 1,
                    email: 'example@example.com',
                    name: 'Example',
                }
                return user ? user : null
            },
        }),
    ],
}
