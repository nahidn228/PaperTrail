
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
    ],
  },
];
