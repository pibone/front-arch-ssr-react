import { AuthOptions, User } from 'next-auth'
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
            authorize: async (credentials, _req) => {
                // Connect with login API in the backend
                const user: User = {
                    id: '1',
                    email: 'dpenai@pibone.com',
                    name: 'Dani Peña Iglesias',
                }

                return credentials?.password === 'safe-password' ? user : null
            },
        }),
    ],
}
