import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],

  callbacks: {
    async signIn({ account, profile }) {
      // if (account.provider === "google") {
      //   return profile.email_verified && profile.email.endsWith("@omniadefi.com");
      // }
      return true;
    },
    async session({ session, token, user }) {
      if (token) {
        session.id = token.id;
      }
      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,

  theme: {
    colorScheme: "light",
  },
});
