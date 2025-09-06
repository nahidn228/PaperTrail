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
  authApi,
  useLogOutMutation,
  useUserInfoQuery,
} from "@/redux/API/authApi";
import { useAppDispatch } from "@/redux/hooks";

export default function UserMenu() {
  const { data, refetch } = useUserInfoQuery(undefined);
  const [logout] = useLogOutMutation();
  const userInfo = data?.data;

  // console.log(userInfo);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(undefined);
    refetch();
    navigate("/login");
    //reset data when logout
    dispatch(authApi.util.resetApiState());
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-auto p-0 hover:bg-transparent">
          <Avatar className="cursor-pointer border border-primary">
            <AvatarImage src="./avatar.jpg" alt="Profile image" />
            <AvatarFallback className="cursor-pointer ">
              {" "}
              {userInfo?.photo ? (
                <img src={userInfo?.photo} alt="" />
              ) : (
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp"
                  alt=""
                />
              )}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="max-w-64" align="end">
        <DropdownMenuLabel className="flex min-w-0 flex-col">
          <span className="text-foreground truncate text-sm font-medium">
            {userInfo?.name}
          </span>
          <span className="text-muted-foreground truncate text-xs font-normal">
            {userInfo?.email}
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {/* <DropdownMenuItem>
            <BoltIcon size={16} className="opacity-60" aria-hidden="true" />
            <span>Option 1</span>
          </DropdownMenuItem> */}
          <DropdownMenuItem>
            <Link to={"/profile"} className="flex gap-2">
              <Layers2Icon
                size={16}
                className="opacity-60"
                aria-hidden="true"
              />
              Profile
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <Link to={"/profile"} className="flex gap-2">
              <UserPenIcon
                size={16}
                className="opacity-60"
                aria-hidden="true"
              />
              Edit Profile
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {/* <DropdownMenuItem>
            <PinIcon size={16} className="opacity-60" aria-hidden="true" />
            <span>Option 4</span>
          </DropdownMenuItem> */}
          <DropdownMenuItem>
            <Link
              to={`${userInfo.role !== "Admin" ? "/user" : "/admin"}`}
              className="flex gap-2"
            >
              <BookOpenIcon
                size={16}
                className="opacity-60"
                aria-hidden="true"
              />
              Dashboard
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          {data?.data?.email ? (
            <Button
              onClick={handleLogout}
              variant="outline"
              size="sm"
              className="text-sm flex items-center gap-2"
            >
              <LogOutIcon size={16} className="opacity-60" aria-hidden="true" />
              Logout
            </Button>
          ) : (
            <Button asChild size="sm" className="text-sm">
              <Link to={"/login"} className="flex items-center gap-2">
                <LogIn size={16} className="opacity-60" aria-hidden="true" />
                Login
              </Link>
            </Button>
          )}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
