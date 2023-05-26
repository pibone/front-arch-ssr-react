import NextAuth from 'next-auth/next'
import { authOptions } from '@/auth/providers/auth/auth.options'

const handler: unknown = NextAuth(authOptions)

export { handler as GET, handler as POST }
