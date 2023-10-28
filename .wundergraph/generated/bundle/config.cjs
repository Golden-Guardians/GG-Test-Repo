"use strict";

// wundergraph.config.ts
var import_sdk3 = require("@wundergraph/sdk");

// wundergraph.generate.ts
var import_sdk = require("@wundergraph/sdk");
var wundergraph_generate_default = (0, import_sdk.configureWunderGraphGeneration)({
  codeGenerators: [
    {
      templates: [import_sdk.templates.typescript.client],
      path: "../generated"
    }
  ],
  operationsGenerator: (config) => {
    config.includeNamespaces(
      "customerCommunication",
      "clientPortal",
      "gpac",
      "guardianOnline",
      "livingBalanceSheet",
      "smartOffice"
    );
  }
});

// wundergraph.operations.ts
var import_sdk2 = require("@wundergraph/sdk");
var wundergraph_operations_default = (0, import_sdk2.configureWunderGraphOperations)({
  operations: {
    defaultConfig: {
      authentication: {
        required: false
      }
    },
    queries: (config) => ({
      ...config,
      caching: {
        enable: false,
        staleWhileRevalidate: 60,
        maxAge: 60,
        public: true
      },
      liveQuery: {
        enable: true,
        pollingIntervalSeconds: 1
      }
    }),
    mutations: (config) => ({
      ...config
    }),
    subscriptions: (config) => ({
      ...config
    }),
    custom: {}
  }
});

// wundergraph.server.ts
var import_server = require("@wundergraph/sdk/server");
var wundergraph_server_default = (0, import_server.configureWunderGraphServer)(() => ({
  hooks: {
    queries: {
      Countries: {
        preResolve: async ({ operations }) => {
        }
      }
    },
    mutations: {}
  }
}));

// wundergraph.config.ts
var countries = import_sdk3.introspect.graphql({
  apiNamespace: "countries",
  url: "https://countries.trevorblades.com/"
});
var weather = import_sdk3.introspect.graphql({
  id: "weather",
  apiNamespace: "weather",
  url: "https://weather-api.wundergraph.com/",
  introspection: {
    pollingIntervalSeconds: 5
  }
});
var customerCommunicationHub = import_sdk3.introspect.prisma({
  apiNamespace: "customerCommunication",
  prismaFilePath: "../prisma/customer-communication-hub.prisma"
});
var clientPortal = import_sdk3.introspect.planetscale({
  apiNamespace: "clientPortal",
  databaseURL: new import_sdk3.EnvironmentVariable("CLIENT_PORTAL_DATABASE_URL")
});
var gpac = import_sdk3.introspect.planetscale({
  apiNamespace: "gpac",
  databaseURL: new import_sdk3.EnvironmentVariable("GPAC_DATABASE_URL")
});
var guardianOnline = import_sdk3.introspect.planetscale({
  apiNamespace: "guardianOnline",
  databaseURL: new import_sdk3.EnvironmentVariable("GUARDIAN_ONLINE_DATABASE_URL")
});
var livingBalanceSheet = import_sdk3.introspect.planetscale({
  apiNamespace: "livingBalanceSheet",
  databaseURL: new import_sdk3.EnvironmentVariable("LIVING_BALANCE_DATABASE_URL")
});
var smartOffice = import_sdk3.introspect.planetscale({
  apiNamespace: "smartOffice",
  databaseURL: new import_sdk3.EnvironmentVariable("SMART_OFFICE_DATABASE_URL")
});
(0, import_sdk3.configureWunderGraphApplication)({
  apis: [
    countries,
    customerCommunicationHub,
    weather,
    clientPortal,
    gpac,
    guardianOnline,
    livingBalanceSheet,
    smartOffice
  ],
  server: wundergraph_server_default,
  operations: wundergraph_operations_default,
  generate: wundergraph_generate_default,
  cors: {
    ...import_sdk3.cors.allowAll,
    allowedOrigins: process.env.NODE_ENV === "production" ? [
      new import_sdk3.EnvironmentVariable("NEXTAUTH_URL"),
      "https://gg-test-repo.vercel.app/",
      "https://d2vp238439bu7d.cloudfront.net",
      "https://gg-test-repo-production.up.railway.app",
      new import_sdk3.EnvironmentVariable("DATABASE_URL")
    ] : [
      "http://localhost:3000",
      new import_sdk3.EnvironmentVariable("WG_ALLOWED_ORIGIN"),
      new import_sdk3.EnvironmentVariable("DATABASE_URL")
    ]
  },
  security: {
    enableGraphQLEndpoint: process.env.NODE_ENV !== "production" || process.env.GITPOD_WORKSPACE_ID !== void 0
  }
});
//# sourceMappingURL=config.cjs.map
