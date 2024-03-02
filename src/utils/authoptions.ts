import NextAuth, { NextAuthOptions, getServerSession } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google";

// import GithubProvider from "next-auth/providers/github"


  export const authOptions: NextAuthOptions = {
    // session:{
    //   strategy: 'jwt'
    // },  
    providers: [
    // CredentialsProvider({
    //     type: 'credentials',
    //     credentials: {},
    //     authorize(credentials, req) {
    //         const {email,password} = credentials as {
    //             email:string,
    //             password:string
    //         }
            
    //         if(email !== 'budi@g.com' && password !== 'budi'){
    //             return null
    //         }

    //         return {id: '1234', name: 'john', email:'budi@g.com'}
    //     },
    // })
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID ?? "",
        clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ""
        
      })

    
  ],
  
  // callbacks: {
  //   async jwt({ token, account }) {
  //     // Persist the OAuth access_token to the token right after signin
  //     if (account) {
  //       token.accessToken = account.access_token
  //     }
  //     return token
  //   },
  //   // async session({ session, token, user }) {
  //   //   // Send properties to the client, like an access_token from a provider.
  //   //   session.accessToken = token.accessToken
  //   //   return session
  //   // }
  // }
}

export default NextAuth(authOptions)
// export const getAuth = () => getServerSession(authOptions)
