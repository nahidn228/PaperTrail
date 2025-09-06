import AllUser from "@/components/modules/admin/AllUser";
import type { ISidebarItem } from "@/types";

export const userSidebarItems: ISidebarItem[] = [
  {
    title: "Operations",
    items: [
      {
        title: "All User",
        url: "/user/send-money",
        Component: AllUser,
      },
    ],
  },
];
