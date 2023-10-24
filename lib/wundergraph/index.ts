import { createClient } from "@/.wundergraph/generated/client"

export const client = createClient({
  baseURL: "https://gg-test-repo-production.up.railway.app/",
})
