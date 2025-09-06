import { role, type TRole } from "@/constants/role";
import { adminSidebarItems } from "@/routs/adminSidebarItems";
import { userSidebarItems } from "@/routs/userSidebarItems";

export const getSidebarItem = (userRole: TRole) => {
  switch (userRole) {
    case role.admin:
      return [...adminSidebarItems, ...userSidebarItems];

    case role.user:
      return [...userSidebarItems];

    default:
      return [];
  }
};
