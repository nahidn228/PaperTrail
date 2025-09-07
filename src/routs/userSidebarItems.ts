import BorrowSummary from "@/pages/admin/BorrowSummary";
import Analytics from "@/pages/Dashbord/Analytics";
import type { ISidebarItem } from "@/types";

export const userSidebarItems: ISidebarItem[] = [
  {
    title: "Operations",
    items: [
      {
        title: "Analytics",
        url: "/user/analytics",
        Component: Analytics,
      },
      {
        title: "Borrow Summery",
        url: "/user/borrow-summary",
        Component: BorrowSummary,
      },
    ],
  },
];
