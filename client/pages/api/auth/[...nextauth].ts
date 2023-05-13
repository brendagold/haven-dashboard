import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

// Initialize NextAuth

export default NextAuth({
    providers: [
        GoogleProvider({
          clientId: String(process.env.GOOGLE_CLIENT_ID) ,
          clientSecret: String(process.env.GOOGLE_CLIENT_SECRET),
        })
    ],
    secret: process.env.JWT_SECRET,
})