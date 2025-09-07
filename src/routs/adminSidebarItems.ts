import AllUser from "@/components/modules/admin/AllUser";
import AddBook from "@/pages/AddBook";
import Analytics from "@/pages/Dashbord/Analytics";

import type { ISidebarItem } from "@/types";
// import { lazy } from "react";

// const Analytics = lazy(() => import("@/pages/admin/Analytics"));
// const AddTour = lazy(() => import("@/pages/admin/AddTour"));

export const adminSidebarItems: ISidebarItem[] = [
  {
    title: "Dashboard",
    items: [
      {
        title: "Analytics",
        url: "/admin/analytics",
        Component: Analytics,
      },
      {
        title: "All Users",
        url: "/admin/all-users",
        Component: AllUser,
      },
      {
        title: "Add Book",
        url: "/admin/create-book",
        Component: AddBook,
      },
    ],
  },
];
