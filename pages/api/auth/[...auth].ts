import type { NextApiRequest, NextApiResponse } from "next";
import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import GoogleProvider from "next-auth/providers/google";

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  return await NextAuth(req, res, {
    // Configure one or more authentication providers
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_ID as string,
        clientSecret: process.env.GOOGLE_SECRET as string,
      }),
    ],

    callbacks: {
      async signIn({ user, account, profile, email, credentials }) {
        if (account?.provider === "google") {
          return (
            profile?.email_verified &&
            profile?.email?.endsWith("@omniadefi.com")
          );
        } else {
          // Or you can return a URL to redirect to:
          // return '/unauthorized'
          return false; // Do different verification for other providers that don't have `email_verified`}
        }
      },

      async session({ session, token, user }) {
        return session;
      },
    },
  });
}
