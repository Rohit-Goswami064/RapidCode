import NextAuth from "next-auth"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import GitHub from "next-auth/providers/github"
import clientPromise from "./libs/mango"
import Google from "next-auth/providers/google"



export const { handlers, signIn, signOut, auth } = NextAuth({
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
    adapter: MongoDBAdapter(clientPromise),
})