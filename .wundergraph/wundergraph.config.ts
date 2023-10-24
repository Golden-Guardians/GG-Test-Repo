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

const customerCommunicationHub = introspect.prisma({
  apiNamespace: "customerCommunication",
  prismaFilePath: "../prisma/customer-communication-hub.prisma",
})

const clientPortal = introspect.planetscale({
  apiNamespace: "clientPortal",
  databaseURL: new EnvironmentVariable("CLIENT_PORTAL_DATABASE_URL"),
  introspection: {
    pollingIntervalSeconds: 5,
  },
})

const gpac = introspect.planetscale({
  apiNamespace: "gpac",
  databaseURL: new EnvironmentVariable("GPAC_DATABASE_URL"),
  introspection: {
    pollingIntervalSeconds: 5,
  },
})

const guardianOnline = introspect.planetscale({
  apiNamespace: "guardianOnline",
  databaseURL: new EnvironmentVariable("GUARDIAN_ONLINE_DATABASE_URL"),
  introspection: {
    pollingIntervalSeconds: 5,
  },
})

const livingBalanceSheet = introspect.planetscale({
  apiNamespace: "livingBalanceSheet",
  databaseURL: new EnvironmentVariable("LIVING_BALANCE_DATABASE_URL"),
})

const smartOffice = introspect.planetscale({
  apiNamespace: "smartOffice",
  databaseURL: new EnvironmentVariable("SMART_OFFICE_DATABASE_URL"),
  introspection: {
    pollingIntervalSeconds: 5,
  },
})

configureWunderGraphApplication({
  apis: [
    countries,
    customerCommunicationHub,
    weather,
    clientPortal,
    gpac,
    guardianOnline,
    livingBalanceSheet,
    smartOffice,
  ],
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
