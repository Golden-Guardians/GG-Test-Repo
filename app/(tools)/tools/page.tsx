import { redirect } from "next/navigation"

import { authOptions } from "@/lib/auth"
import { db } from "@/lib/db"
import { getCurrentUser } from "@/lib/session"
import { EmptyPlaceholder } from "@/components/empty-placeholder"
import { DashboardHeader } from "@/components/header"
import { DashboardShell } from "@/components/shell"
import { UserItem } from "@/components/user-item"

export const metadata = {
  title: "Dashboard",
}

export default async function DashboardPage() {
  const user = await getCurrentUser()

  if (!user) {
    redirect(authOptions?.pages?.signIn || "/login")
  }

  const users = await db.user.findMany({
    take: 10,
  })

  return (
    <DashboardShell>
      <DashboardHeader heading="Users" text="Manage users." />
      <div>
        {users?.length ? (
          <div className="divide-y divide-border rounded-md border">
            {users.map((user) => (
              <UserItem key={user.id} user={user} />
            ))}
          </div>
        ) : (
          <EmptyPlaceholder>
            <EmptyPlaceholder.Icon name="user" />
            <EmptyPlaceholder.Title>No users found</EmptyPlaceholder.Title>
            <EmptyPlaceholder.Description>
              You don&apos;t have any users yet, or they couldn&apos;t be found.
            </EmptyPlaceholder.Description>
          </EmptyPlaceholder>
        )}
      </div>
    </DashboardShell>
  )
}
