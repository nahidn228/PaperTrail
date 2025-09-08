import { Link, NavLink } from "react-router";
import { ModeToggle } from "@/components/mode-toggle";
import PaperTrailLogo from "@/components/ui/PaperTrailLogo";
import { useUserInfoQuery } from "@/redux/API/authApi";
import { Button } from "@/components/ui/button";
import UserMenu from "@/components/UserMenu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";

const Navbar = () => {
  const { data } = useUserInfoQuery(undefined);
  const user = data?.data;

  const links = [
    { label: "Home", to: "/" },
    { label: "All Books", to: "/books" },
    { label: "Borrow Summary", to: "/all-borrow-summary" },
    { label: "Pricing", to: "/pricing" },
    { label: "Faq", to: "/faq" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b border-border shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-3 px-4 md:px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <PaperTrailLogo />
        </Link>

        {/* Desktop links */}
        <nav className="hidden lg:flex gap-6">
          {links.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `relative font-medium transition-colors after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-primary after:transition-all ${
                  isActive
                    ? "text-primary after:w-full"
                    : "text-foreground hover:text-primary hover:after:w-full"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Right section */}
        <div className="flex items-center gap-3">
          <ModeToggle />

          {user ? (
            <UserMenu />
          ) : (
            <Button asChild size="sm" variant="default">
              <Link to="/login">Sign In</Link>
            </Button>
          )}

          {/* Mobile menu */}
          <div className="lg:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="w-6 h-6" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 p-2">
                {links.map(({ label, to }) => (
                  <DropdownMenuItem key={to} asChild>
                    <Link to={to}>{label}</Link>
                  </DropdownMenuItem>
                ))}
                <div className="border-t border-border mt-2 pt-2">
                  {user ? <UserMenu /> : null}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
