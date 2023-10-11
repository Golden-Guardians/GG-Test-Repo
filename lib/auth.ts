import { NextAuthOptions } from "next-auth"
import OktaProvider from "next-auth/providers/okta"

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/",
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: true,
  providers: [
    OktaProvider({
      clientId: process.env.OKTA_CLIENT_ID as string,
      clientSecret: process.env.OKTA_CLIENT_SECRET as string,
      issuer: process.env.OKTA_ISSUER,
      authorization: {
        params: {
          // @see: https://developer.okta.com/docs/guides/customize-tokens-groups-claim/main/
          // If you make a request to the org authorization server for both the ID token and the
          // access token, that is considered a thin ID token and contains only base claims.
          // Profile attributes and Groups aren't returned, even if those scopes are included in
          // the request. You can use the access token to get the Groups claim from the /userinfo
          // endpoint.
          scope: "openid email profile groups",
        },
      },
    }),
  ],
  callbacks: {
    // @see: https://blog.srij.dev/nextauth-google-access-token
    async jwt({ token, account, profile }) {
      if (profile?.given_name) {
        token.given_name = profile.given_name
      }

      if (profile?.family_name) {
        token.family_name = profile.family_name
      }

      if (profile?.email_verified) {
        token.email_verified = profile.email_verified
      }

      if (profile?.groups) {
        token.groups = profile.groups
      }

      if (account?.scope) {
        token.scope = account.scope
      }

      if (account?.id_token) {
        token.id_token = account.id_token
      }

      if (account?.access_token) {
        token.access_token = account.access_token
      }
      return token
    },
  },
}
