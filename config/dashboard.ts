import { DashboardConfig } from "types"

export const toolsConfig: DashboardConfig = {
  mainNav: [
    {
      title: "Dashboard",
      href: "/dashboard/overview",
    },
    {
      title: "Tasks",
      href: "/dashboard/tasks",
    },
    {
      title: "Customers",
      href: "/dashboard/customers",
      disabled: true,
    },
    {
      title: "Products",
      href: "/dashboard/products",
      disabled: true,
    },
    {
      title: "Tools",
      href: "/tools",
    },
  ],
  sidebarNav: [],
}
