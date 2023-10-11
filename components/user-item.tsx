import Link from "next/link"
import { user } from "@prisma/client"

import { formatDate } from "@/lib/utils"
import { Skeleton } from "@/components/ui/skeleton"

interface UserItemProps {
  user: Pick<user, "id" | "first_name" | "last_name" | "created_at">
}

export function UserItem({ user }: UserItemProps) {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="grid gap-1">
        <Link
          href={`/editor/${user.id}`}
          className="font-semibold hover:underline"
        >
          {user.first_name} {user.last_name}
        </Link>
        <div>
          <p className="text-sm text-muted-foreground">
            {formatDate(user.created_at?.toDateString())}
          </p>
        </div>
      </div>
    </div>
  )
}

UserItem.Skeleton = function UserItemSkeleton() {
  return (
    <div className="p-4">
      <div className="space-y-3">
        <Skeleton className="h-5 w-2/5" />
        <Skeleton className="h-4 w-4/5" />
      </div>
    </div>
  )
}
