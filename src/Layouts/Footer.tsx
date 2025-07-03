import PaperTrailLogo from "@/components/ui/PaperTrailLogo";
import { NavLink } from "react-router";

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-border">
      <div className="max-w-screen-2xl mx-auto px-6 py-10 sm:flex sm:justify-between sm:items-center">
        {/* Left side: logo + copyright */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
          <PaperTrailLogo />
          <p className="text-sm text-gray-700 dark:text-gray-300 select-none">
            &copy; {new Date().getFullYear()} PaperTrail. All rights reserved.
          </p>
        </div>

        {/* Center: navigation links */}
        <nav className="mt-8 sm:mt-0">
          <ul className="flex flex-wrap justify-center gap-6 text-sm text-gray-700 dark:text-gray-300">
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
                      ? "text-[#4ECDC4] underline underline-offset-4 font-semibold"
                      : "hover:text-[#4ECDC4] transition font-medium"
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right side: social media icons */}
        <div className="mt-8 sm:mt-0 flex justify-center gap-6">
          {/* Keep your SVGs */}
          {[
            { href: "https://facebook.com", label: "Facebook" },
            { href: "https://twitter.com", label: "Twitter" },
            { href: "https://linkedin.com", label: "LinkedIn" },
          ].map(({ href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-gray-700 dark:text-gray-300 hover:text-[#4ECDC4] transition"
            >
              {/* keep your svg inside here */}
            </a>
          ))}
        </div>
      </div>

      {/* Optional legal links */}
      <div className="max-w-screen-2xl mx-auto px-6 py-4 border-t border-border text-center text-xs text-gray-600 dark:text-gray-400 select-none">
        <p>
          <NavLink
            to="/privacy-policy"
            className="hover:text-[#4ECDC4] transition mx-2"
          >
            Privacy Policy
          </NavLink>
          |
          <NavLink to="/terms" className="hover:text-[#4ECDC4] transition mx-2">
            Terms of Service
          </NavLink>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
