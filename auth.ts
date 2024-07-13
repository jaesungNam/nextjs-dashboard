import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Okta from "next-auth/providers/okta"

export const { handlers,auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [Okta],
});
