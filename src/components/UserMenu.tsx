import {
  BookOpenIcon,
  Layers2Icon,
  LogIn,
  LogOutIcon,
  UserPenIcon,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Link, useNavigate } from "react-router";
import {
  useLogOutMutation,
  useUserInfoQuery,
  authApi,
} from "@/redux/API/authApi";
import { useAppDispatch } from "@/redux/hooks";

export default function UserMenu() {
  const { data, refetch } = useUserInfoQuery(undefined);
  const [logout] = useLogOutMutation();
  const user = data?.data;

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout(undefined);
    refetch();
    dispatch(authApi.util.resetApiState());
    navigate("/login");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="p-0 h-auto">
          <Avatar className="border border-primary cursor-pointer">
            <AvatarImage
              src={user?.photo || "./avatar.jpg"}
              alt="User avatar"
            />
            <AvatarFallback>{user?.name?.[0] || "U"}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-56">
        {/* User Info */}
        <DropdownMenuLabel className="flex flex-col truncate">
          <span className="text-sm font-medium text-foreground truncate">
            {user?.name || "User"}
          </span>
          <span className="text-xs text-muted-foreground truncate">
            {user?.email || ""}
          </span>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        {/* Profile Actions */}
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link to="/profile" className="flex items-center gap-2">
              <Layers2Icon size={16} className="opacity-60" />
              Profile
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem asChild>
            <Link to="/profile" className="flex items-center gap-2">
              <UserPenIcon size={16} className="opacity-60" />
              Edit Profile
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        {/* Dashboard */}
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link
              to={user?.role === "Admin" ? "/admin" : "/user"}
              className="flex items-center gap-2"
            >
              <BookOpenIcon size={16} className="opacity-60" />
              Dashboard
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        {/* Logout/Login */}
        <DropdownMenuItem>
          {user?.email ? (
            <Button
              onClick={handleLogout}
              variant="outline"
              size="sm"
              className="w-full flex items-center justify-center gap-2 text-sm"
            >
              <LogOutIcon size={16} className="opacity-60" />
              Logout
            </Button>
          ) : (
            <Button
              asChild
              size="sm"
              className="w-full flex items-center justify-center gap-2 text-sm"
            >
              <Link to="/login">
                <LogIn size={16} className="opacity-60" />
                Login
              </Link>
            </Button>
          )}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
