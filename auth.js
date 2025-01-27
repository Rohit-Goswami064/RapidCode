import NextAuth from "next-auth"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import GitHub from "next-auth/providers/github"
import clientPromise from "./libs/mango"
import Google from "next-auth/providers/google"

// First, define the auth configuration
export const authOptions = {
    providers: [
        GitHub({
            clientId: process.env.AUTH_GITHUB_ID,
            clientSecret: process.env.AUTH_GITHUB_SECRET,
        }),
        Google({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOLE_SECRET,
        })
    ],
    callbacks: {
        async session({ session, user }) {
            if (session?.user) {
                session.user.id = user.id
            }
            return session
        },
    },
    adapter: MongoDBAdapter(clientPromise),
}

// Create the NextAuth handler
const handler = NextAuth(authOptions)

// Export the handler methods
export { handler as GET, handler as POST }