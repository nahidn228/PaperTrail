import * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";

import { Link } from "react-router";
import { getSidebarItem } from "@/utils/getSidebarItems";
import { useUserInfoQuery } from "@/redux/API/authApi";
import PaperTrailLogo from "./ui/PaperTrailLogo";
import { NavUser } from "./nav-user";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { data: userData } = useUserInfoQuery(undefined);
  const user = userData?.data;

  const data = {
    navMain: getSidebarItem(userData?.data.role),
    // navMain: adminSidebarItems,
  };

  return (
    <Sidebar {...props}>
      <SidebarHeader className="flex">
        <Link to={"/"}>
          <PaperTrailLogo />
        </Link>
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link to={item.url}>{item.title}</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <NavUser
        user={{
          name: user?.name,
          email: user?.email,
          avatar: user?.photo
            ? user?.photo
            : "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
        }}
      />

      <SidebarRail />
    </Sidebar>
  );
}
