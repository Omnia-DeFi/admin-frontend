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
      if (account.provider === "google") {
        return profile.email_verified && profile.email.endsWith("@omniadefi.com");
      }
      return true; // Do different verification for other providers that don't have `email_verified`
    },
    async session({ session, token, user }) {
      if (token) {
        session.id = token.id;
      }
      return session;
    },
  },

  theme: {
    colorScheme: "light",
  },
});
