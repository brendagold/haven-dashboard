import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import axios from "axios";
import SignToken from "./../../../utils/signinToken";
import {saveToLocalStorage, called} from "./../../../utils/localStorage";


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
    async signIn({ user }) {
      try {
        //   const userData = {
        //   name: profile?.name,
        //   email: profile?.email,
        //   avatar: profile?.picture,
        // };
        //console.log(`This is user, ${user}`)
        //console.log(profile)
        //console.log(`This is account, ${account}`)
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
          user.userId = response.data._id 
          user.allProperties = response.data.allProperties
        // user = {...user, data}
        //signIn.user = response.data
        //   console.log(response.data);
        //   saveToLocalStorage('user', response.data)
        //   called("Hello, I am Brenda")
        //   if (typeof window !== undefined){
        //     console.log("Hello");
        //     //localStorage.setItem("user", JSON.stringify(response.data))
        //     }
          return true;
          
        } else {
          return Promise.reject();
        }
      } catch (error) {
        console.log(error);
      }
    },
    async jwt({ token, user }) {
  //    console.log(user)
  //    if (user) {
  //     token = { userId: user.userId, allProperties: user.allProperties }
  // }
  //     return {...token, ...user};
  user && (token.user = user)
        return token
    },
    async session({ session, token }) {
      // session.userId = token.userId,
      // session.allProperties = token.allProperties
      //session.user = token as any;
      // return session;
      session.user = token.user
        return session
    },
  },
});

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