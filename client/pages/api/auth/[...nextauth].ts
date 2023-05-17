import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { CredentialResponse } from "@/interfaces/google";
import { parseJwt } from "@/utils/parse-jwt";
import axios from "axios";
import SignToken from "./../../../utils/signinToken";
import {saveToLocalStorage} from "./../../../utils/localStorage";

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
        //console.log(user)
        const response = await axios.post(
          "http://localhost:8080/api/v1/users",
          user,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        //const data = await response.json();
        if (response.status === 200) {
          console.log(response.data);
          saveToLocalStorage("user", response.data)
          
          return true;
        } else {
          return Promise.reject();
        }
      } catch (error) {
        console.log(error);
      }
    },
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
  },
});

// const response = await axios.post(
//   "http://localhost:9000/v1/auth/userExists",
//   { email: profile?.email }
// );
// if (response && response.data?.value === true) {
//     return true;
// }
