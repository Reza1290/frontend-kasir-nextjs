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
        return axios
          .post(`${process.env.NEXT_PUBLIC_DOMAIN_API}/auth/login`, {
            username: credentials.username,
            password: credentials.password,
          })
          .then((response) => {
            return response.data;
          })
          .catch((error) => {
            console.log(error.response);
            throw new Error(error.response.data.message);
          }) || null;
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