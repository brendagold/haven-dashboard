import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
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
    async signIn({ user }) {
      try {
        const response = await axios.post(
          "http://localhost:8080/api/v1/users",
          user,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response.status === 200) {
          user.userId = response.data._id;
          user.allProperties = response.data.allProperties;
          return true;
        } else {
          return Promise.reject();
        }
      } catch (error) {
        console.log(error);
      }
    },
    async jwt({ token, user }) {
      user && (token.user = user);
      return token;
    },
    async session({ session, token }) {
      session.user = token.user;
      return session;
    },
  },
});


