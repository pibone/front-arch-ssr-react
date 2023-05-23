import { AuthOptions } from 'next-auth'
import NextAuth from 'next-auth/next'
import CredentialsProvider from 'next-auth/providers/credentials'
const authOptions: AuthOptions = {
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
                email: {
                    label: 'Email',
                    type: 'email',
                    placeholder: 'example@example.com',
                },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(_credentials, _req) {
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

const handler: unknown = NextAuth(authOptions)

export { handler as GET, handler as POST }
