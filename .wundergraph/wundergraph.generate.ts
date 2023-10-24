import { configureWunderGraphGeneration } from "@wundergraph/sdk"

export default configureWunderGraphGeneration({
  codeGenerators: [],
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
