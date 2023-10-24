import { configureWunderGraphGeneration, templates } from "@wundergraph/sdk"

export default configureWunderGraphGeneration({
  codeGenerators: [
    {
      templates: [templates.typescript.client],
      path: "../generated",
    },
  ],
  operationsGenerator: (config) => {
    config.includeNamespaces(
      "customerCommunication",
      "clientPortal",
      "gpac",
      "guardianOnline",
      "livingBalanceSheet",
      "smartOffice"
    )
  },
})
