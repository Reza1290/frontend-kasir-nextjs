import axios from "axios";
import { AuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
// import authoptions from "@/utils/authoptions";


// @ts-ignore
const backendURL = process.env.NEXT_PUBLIC_DOMAIN_API ;

 const authOptions = {
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60, // 30 days
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const credentialDetails = {
          username : credentials.username,
          password : credentials.password
        };

        const response = await axios.post(`${process.env.NEXT_PUBLIC_DOMAIN_API}/api/login`, credentialDetails, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
    
        const user = response.data;
        
        if (user.ok) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user?.token) {
        token.token = user.token;
      }
      
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      session.token = token,
      session.user = {accessToken: token.access_token , ...token.user}
      

      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "api/auth/signin",

  },
  
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };