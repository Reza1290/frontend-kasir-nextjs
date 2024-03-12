import axios from "axios";
import { AuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
// import GoogleProvider from "next-auth/providers/google"
// import CredentialsProvider from "next-auth/providers/credentials"
// import Providers from 'next-auth/providers'
import Credentials from "next-auth/providers/credentials";

// import authoptions from "@/utils/authoptions";


// @ts-ignore
const backendURL = process.env.NEXT_PUBLIC_DOMAIN_API ;

 const authOptions = {
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60, // 30 days
  },
  providers: [
    Credentials({
      name: "credentials",
      // credentials: {
      //   username: {
      //     label: "Username",
      //     type: "text",
      //   },
      //   password: { label: "Password", type: "password" },
      // },
      authorize : async (credentials) => {
        // try {
        //   const user = await axios.post('http://localhost:8000/api/login',
        //   {
        //     user: {
        //       username: credentials.username,
        //       password: credentials.password
        //     }
        //   },
        //   {
        //     headers: {
        //       accept: '*/*',
        //       'Content-Type': 'application/json'
        //     }
        //   })
        //   if(user.status === 201){
        //     console.log(user)
        //     return user;
        //   }
        //   if (user) {
        //     return {status: 'success', data: user}
        //   } 
        // } catch (e) {
        //   const errorMessage = e.response.data.message
        //   // Redirecting to the login page with error message          in the URL
        //   console.log(e)
        //   throw new Error(errorMessage + '&email=' + e.response)
        // }
        return axios
          .post(`http://167.172.70.125:8000/api/login`, {
            username: credentials.username,
            password: credentials.password,
          })
          .then((response) => {
            return response.data;
          })
          .catch((error) => {
            console.log(error);
            throw new Error(error.response.data.message);
          }) || null;
      //   try {
      //     const {username, password } = credentials;
      
      //     const response = await postFetchNoInterceptor({ fetchData: {username, password }, url: apiAuth });
      
      //     const { data: { body: { message = '', token = '', user = {} } = {}, statusCode = 0 } = {} } = response;
      
      //     if (statusCode === 200) {
      //         return user;
      //     }
      
      //     throw new Error(message);
      // } catch (err) {
      //     throw new Error('Next Auth - Authorize: Authentication error');
      //     return null
      // }
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
  // pages: {
  //   signIn: "api/auth/signin",

  // },
  
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };