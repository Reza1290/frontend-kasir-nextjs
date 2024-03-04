import axios from "axios";
import { AuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google"
// import authoptions from "@/utils/authoptions";


// @ts-ignore

const authOptions = {
    providers : [
        GoogleProvider({
            clientId : process.env.GOOGLE_CLIENT_ID ?? "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
            
        })
    ],
    pages: {
        signIn: '/login',
        signOut: '/login',
        error: '/login', // Error code passed in query string as ?error=
        // verifyRequest: '/auth/verify-request', // (used for check email message)
        newUser: '/profile' // New users will be directed here on first sign in (leave the property out if not of interest)
    },
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            // first axios request to ascertain if our user exists in our custom DB
            const response = await axios.post(
              "http://139.59.223.229:1290/exists",
              { email: profile?.email }
            );
            const data = {
              username: profile.given_name + " " + profile?.family_name,
              email: profile?.email,
              profileUrl: profile?.picture,
            };
            if (response && response.data?.exists === true) {
              // user exists return true passing control to the next callback
              return true;
            } else {
              // second axios call which creates a new user in our database
              
              const response = await axios.post(
                "http://139.59.223.229:1290/store",
                data
              );
                
              // retruns true thereby passing control to the next callback
            }
            const cookie = await axios.post(
              "http://139.59.223.229:1290/login",
              {
                email: profile?.email
              }
            )

            user.backend = cookie.data;
            return true;
          },
          async jwt({token,user}){
            if(user){
              token = { ...token, backend: user.backend}
            }

            return token
          },
          async session({session,token}){
            session.backend = token.backend
            return session
          }
          // async session({ session, token, user }) {
          //   // Send properties to the client, like an access_token and user id from a provider.
          //   session = {...session}
          //   session.backend = token.accessToken
          //   // session.user.id = token.id
          //   return session
          // }
    }
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };