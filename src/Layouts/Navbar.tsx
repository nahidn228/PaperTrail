import { Link, NavLink, useNavigate } from "react-router";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import { ModeToggle } from "../components/mode-toggle";
import PaperTrailLogo from "@/components/ui/PaperTrailLogo";
import { useUserInfoQuery } from "@/redux/API/authApi";

const Navbar = () => {
  const navigate = useNavigate();
  const { data } = useUserInfoQuery(undefined);

  const user = data?.data;
  console.log(user);

  const navLinks = (
    <>
      {[
        { label: "Home", to: "/" },
        { label: "All Books", to: "/books" },
        { label: "Add Book", to: "/create-book" },
        { label: "Borrow Summary", to: "/borrow-summary" },
        { label: "Register", to: "/registration" },
        { label: "Login", to: "/login" },
      ].map(({ label, to }) => (
        <li key={to}>
          <NavLink
            to={to}
            className={({ isActive }) =>
              isActive
                ? "font-medium text-[#7420E6] underline underline-offset-5"
                : "font-medium text-foreground hover:text-[#7420E6] transition"
            }
          >
            {label}
          </NavLink>
        </li>
      ))}
    </>
  );

  return (
    <div className="sticky top-0 z-50 border-b border-border bg-white  dark:bg-background max-w-screen-xl mx-auto ">
      <div className="  py-2 flex items-center justify-between">
        {/* Left: Logo & mobile menu */}
        <div className="flex items-center gap-4">
          <div className="lg:hidden">
            <div className="dropdown">
              <button tabIndex={0} className="btn btn-ghost text-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-[#152942] dark:bg-background rounded-box w-52 space-y-1 border border-border"
              >
                {navLinks}
              </ul>
            </div>
          </div>
          <Link to={"/"}>
            <PaperTrailLogo />
          </Link>
        </div>

        {/* Center nav links */}
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal gap-4">{navLinks}</ul>
        </div>

        {/* Right: Mode toggle & user */}
        <div className="flex items-center gap-3">
          <ModeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div
                className="tooltip tooltip-bottom"
                data-tip={`${user ? user.name : "User"}`}
              >
                <div className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full overflow-hidden ring-2 ring-[#7420E6] hover:ring-[#7420E6]/80 transition">
                    <img
                      alt="User avatar"
                      src={`${
                        user?.photo
                          ? user?.photo
                          : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                      }`}
                    />
                  </div>
                </div>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end">
              <DropdownMenuLabel className="truncate">
                My Account
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem onClick={() => navigate("/profile")}>
                  Profile
                  <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer">
                Log in
                <DropdownMenuShortcut>⇧⌘</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
