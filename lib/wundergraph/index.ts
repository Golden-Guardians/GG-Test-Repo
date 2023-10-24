import { createClient } from "@/generated/client"

export const client = createClient({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://gg-test-repo-production.up.railway.app"
      : "http://localhost:9991",
})
