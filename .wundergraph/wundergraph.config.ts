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

const clientPortal = introspect.prisma({
  apiNamespace: "clientPortal",
  prismaFilePath: "../prisma/simulated-services/client-portal.prisma",
})

const gpac = introspect.prisma({
  apiNamespace: "gpac",
  prismaFilePath: "../prisma/simulated-services/gpac.prisma",
})

const guardianOnline = introspect.prisma({
  apiNamespace: "guardianOnline",
  prismaFilePath: "../prisma/simulated-services/guardian-online.prisma",
})

const livingBalanceSheet = introspect.prisma({
  apiNamespace: "livingBalanceSheet",
  prismaFilePath: "../prisma/simulated-services/living-balance-sheet.prisma",
})

const smartOffice = introspect.prisma({
  apiNamespace: "smartOffice",
  prismaFilePath: "../prisma/simulated-services/smart-office.prisma",
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
