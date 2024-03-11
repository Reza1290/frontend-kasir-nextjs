import axios from "axios";
import { AuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
// import authoptions from "@/utils/authoptions";


// @ts-ignore
const backendURL = process.env.DOMAIN_API;

 const authOptions = {
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
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
          "username" : credentials.username,
          "password": credentials.password
        };

        const resp = await fetch("${process.env.DOMAIN_API}/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(credentialDetails),
        });
        const user = await resp.json();
        
        
        if (user.ok) {
          console.log("nextauth daki user: " + user.ok);
          return user;
        } else {
          console.log("check your credentials");
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
      
      // console.log("a")

      return session;
    },
  },
  // secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/login',
    
  },
  
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };