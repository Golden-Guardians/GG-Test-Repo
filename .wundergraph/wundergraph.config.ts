import {
  EnvironmentVariable,
  configureWunderGraphApplication,
  cors,
  introspect,
} from "@wundergraph/sdk"

import generate from "./wundergraph.generate"
import operations from "./wundergraph.operations"
import server from "./wundergraph.server"

const countries = introspect.graphql({
  apiNamespace: "countries",
  url: "https://countries.trevorblades.com/",
})

const weather = introspect.graphql({
  id: "weather",
  apiNamespace: "weather",
  url: "https://weather-api.wundergraph.com/",
  introspection: {
    pollingIntervalSeconds: 5,
  },
})

const db = introspect.prisma({
  apiNamespace: "db",
  prismaFilePath: "../prisma/schema.prisma",
})

configureWunderGraphApplication({
  apis: [countries, db, weather],
  server,
  operations,
  generate,
  cors: {
    ...cors.allowAll,
    allowedOrigins:
      process.env.NODE_ENV === "production"
        ? [
            new EnvironmentVariable("NEXTAUTH_URL"),
            "https://gg-test-repo.vercel.app/",
            "https://d2vp238439bu7d.cloudfront.net",
            "https://gg-test-repo-production.up.railway.app",
            new EnvironmentVariable("DATABASE_URL"),
          ]
        : [
            "http://localhost:3000",
            new EnvironmentVariable("WG_ALLOWED_ORIGIN"),
            new EnvironmentVariable("DATABASE_URL"),
          ],
  },
  security: {
    enableGraphQLEndpoint:
      process.env.NODE_ENV !== "production" ||
      process.env.GITPOD_WORKSPACE_ID !== undefined,
  },
})
