import BorrowSummary from "@/pages/admin/BorrowSummary";
import Books from "@/pages/Books";
import Analytics from "@/pages/Dashbord/Analytics";
import type { ISidebarItem } from "@/types";


export const userSidebarItems: ISidebarItem[] = [
  {
    title: "User Operations",
    items: [
      {
        title: "Analytics",
        url: "/user/analytics",
        Component: Analytics,
    
      },
      {
        title: "All Books",
        url: "/user/all-books",
        Component: Books,
      },
      {
        title: "Borrow Summery",
        url: "/user/borrow-summary",
        Component: BorrowSummary,
      },
    ],
  },
];
