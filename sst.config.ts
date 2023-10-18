import { SSTConfig } from "sst"
import { Config, NextjsSite } from "sst/constructs"

export default {
  config(_input) {
    return {
      name: "gg-test-repo",
      region: "us-east-1",
    }
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      const NEXT_PUBLIC_APP_URL = new Config.Secret(
        stack,
        "NEXT_PUBLIC_APP_URL"
      )
      const NEXTAUTH_SECRET = new Config.Secret(stack, "NEXTAUTH_SECRET")
      const GITHUB_CLIENT_ID = new Config.Secret(stack, "GITHUB_CLIENT_ID")
      const GITHUB_CLIENT_SECRET = new Config.Secret(
        stack,
        "GITHUB_CLIENT_SECRET"
      )
      const DATABASE_URL = new Config.Secret(stack, "DATABASE_URL")

      const site = new NextjsSite(stack, "site", {
        bind: [
          NEXT_PUBLIC_APP_URL,
          NEXTAUTH_SECRET,
          GITHUB_CLIENT_ID,
          GITHUB_CLIENT_SECRET,
          DATABASE_URL,
        ],
      })

      stack.addOutputs({
        SiteUrl: site.url,
      })
    })
  },
} satisfies SSTConfig
