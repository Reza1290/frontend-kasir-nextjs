import NextAuth from "next-auth/next";
import GoogleProviders from "next-auth/providers/google"
// import authoptions from "@/utils/authoptions";

export const authOptions = {
    providers : [
        GoogleProviders({
            clientId : process.env.GOOGLE_CLIENT_ID ?? "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ""
        })
    ],
    pages: {
        signIn: '/login',
        signOut: '/login',
        error: '/login', // Error code passed in query string as ?error=
        // verifyRequest: '/auth/verify-request', // (used for check email message)
        // newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
    }
}

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };