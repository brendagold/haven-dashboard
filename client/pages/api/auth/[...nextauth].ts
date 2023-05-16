import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { CredentialResponse } from "@/interfaces/google";
import { parseJwt } from "@/utils/parse-jwt";
import axios from "axios";

// Initialize NextAuth

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: String(process.env.GOOGLE_CLIENT_ID),
      clientSecret: String(process.env.GOOGLE_CLIENT_SECRET),
    }),
  ],

  secret: process.env.JWT_SECRET,
  callbacks: {
    async signIn({ user, account, profile }) {
      try {
      //   const userData = {
      //   name: profile?.name,
      //   email: profile?.email,
      //   avatar: profile?.picture,
      // };
      console.log(user)
      const response = await axios.post(
        "http://localhost:8080/api/v1/users",
        user, {
          headers: {
            'Content-Type': 'application/json'
          }}
      );
  //console.log(response.data)
  //const data = await response.json();
      if (response.status === 200 && typeof window !== 'undefined') {
        localStorage.setItem(
          'user',
          JSON.stringify(response.data),
        );
      } else {
        return Promise.reject();
      }
      } catch (error) {
        console.log(error)
      }
      
   
   },
  },
});

// const response = await axios.post(
//   "http://localhost:9000/v1/auth/userExists",
//   { email: profile?.email }
// );
// if (response && response.data?.value === true) {
//     return true;
// }

// async jwt({ token, user, account }) {
//   if (account) {
//     const userLoggedIn = await SignToken(user?.email as string);
//     token.loggedUser = userLoggedIn;
//   }
//   return token;
// },
// async session({ session, token, user }) {
//   session.loggedUser = token.loggedUser;
//   return session;
// },


   