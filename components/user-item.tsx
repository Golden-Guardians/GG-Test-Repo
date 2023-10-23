import Link from "next/link"
import { UsersGetAllUsersResponseData } from "@/.wundergraph/generated/models"
import { User } from "@prisma/client"

import { formatDate } from "@/lib/utils"
import { Skeleton } from "@/components/ui/skeleton"

interface UserItemProps {
  user:
    | Pick<User, "id" | "name" | "createdAt">
    | NonNullable<UsersGetAllUsersResponseData["db_findManyUser"]>[0]
}
export function UserItem({ user }: UserItemProps) {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="grid gap-1">
        <Link href="#" className="font-semibold hover:underline">
          {user.name}
        </Link>
        <div>
          <p className="text-sm text-muted-foreground">
            Created at: {formatDate(user.createdAt)}
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
