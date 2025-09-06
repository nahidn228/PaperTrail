import { Separator } from "@/components/ui/separator";

import { Outlet } from "react-router";

import { Mail, Phone, Shield, User, Wallet } from "lucide-react";
import { useUserInfoQuery } from "@/redux/API/authApi";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { ModeToggle } from "@/components/mode-toggle";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AppSidebar } from "@/components/app-sidebar";

export default function DashboardLayout() {
  const { data: user } = useUserInfoQuery(undefined);

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="container">
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          <ModeToggle />
        </header>

        {/* User Info */}
        <div className="grid md:grid-cols-2 p-4 gap-6 items-stretch">
          {/* User Info Card */}
          <Card className="w-full shadow-lg border border-muted flex flex-col">
            <CardHeader>
              <CardTitle className="text-2xl font-bold flex items-center gap-2">
                <User className="h-6 w-6 text-blue-600" />
                {user?.data?.name || "Unknown User"}
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-3 text-gray-700 flex-1">
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-gray-500" />
                <span className="font-medium">Email:</span> {user?.data?.email}
              </p>

              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-gray-500" />
                <span className="font-medium">Phone:</span> {user?.data?.phone}
              </p>

              <p className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-gray-500" />
                <span className="font-medium">Role:</span> {user?.data?.role}
              </p>
            </CardContent>
          </Card>

          {/* Wallet Card */}
          <Card className="w-full shadow-lg hover:shadow-xl transition rounded-2xl flex flex-col">
            <CardHeader className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Wallet className="w-6 h-6 text-indigo-600" />
                <h2 className="text-lg font-semibold">Wallet Overview</h2>
              </div>
              <p className={`px-2 py-1 rounded-md text-sm text-white`}>data</p>
            </CardHeader>

            <Separator />

            <CardContent className="space-y-3 mt-3 flex-1">
              <p className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4" /> email
              </p>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Balance</span>
                <span className="text-2xl font-bold text-indigo-600">
                  {/* ${data?.balance.toLocaleString()} */}
                  Balance
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-1 flex-col gap-4 p-4">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
