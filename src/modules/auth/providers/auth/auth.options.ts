import { getApiContext } from '@/common/providers/api-context/api-context.default'
import { AuthOptions, User } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions: AuthOptions = {
    session: {
        strategy: 'jwt',
    },
    pages: {
        signIn: '/auth/sign-in',
    },
    callbacks: {
        async session({ session, token }) {
            if (token?.accessToken && session) {
                // Update server side API_CONTEXT
                getApiContext().setAuthorizationToken(token.accessToken)
                session.apiSession = {
                    accessToken: token.accessToken,
                    refreshToken: token.refreshToken,
                }
            }
            return session
        },
        async jwt({ token, user }) {
            if (user?.apiSession) {
                token.accessToken = user.apiSession.accessToken
                token.refreshToken = user.apiSession.refreshToken
            }
            return token
        },
    },
    providers: [
        CredentialsProvider({
            name: 'custom-credentials',
            credentials: {
                email: { type: 'email' },
                password: { type: 'password' },
            },
            authorize: async (credentials, _req) => {
                // TODO: Connect with login API in the backend
                const user: User = {
                    id: '1',
                    email: 'dpenai@pibone.com',
                    name: 'Dani Peña Iglesias',
                    role: 'admin',
                    // TODO: Set the incoming api token here, if needed
                    apiSession: {
                        accessToken: 'jwt-token',
                        // refreshToken: 'refresh-token-if-any',
                    },
                }

                return credentials?.password === 'safe-password' ? user : null
            },
        }),
    ],
}
