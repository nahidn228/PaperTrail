import { Link } from "react-router";
import { Github, Twitter, BookOpen, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="container px-4 md:px-0 relative bg-background border-t border-[#7420E6]/20 overflow-hidden max-w-screen-xl mx-auto">
      {/* Background orbs - matching banner style */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-br from-[#7420E6]/60 to-[#7420E6]/40 rounded-full blur-3xl opacity-40 dark:opacity-60 animate-pulse"></div>
      <div className="absolute -top-10 right-1/3 w-48 h-48 bg-gradient-to-br from-[#7420E6]/50 to-[#7420E6]/30 rounded-full blur-3xl opacity-30 dark:opacity-50 animate-pulse delay-1000"></div>
      <div className="absolute bottom-0 left-1/2 w-56 h-56 bg-gradient-to-br from-[#7420E6]/50 to-[#7420E6]/30 rounded-full blur-3xl opacity-30 dark:opacity-50 animate-pulse delay-2000"></div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent"></div>

      <div className="relative z-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to={"/"}>
              <div className="flex items-center gap-2 md:gap-3">
                <BookOpen className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                <span className="text-lg md:text-xl lg:text-2xl font-semibold  ">
                  PaperTrail
                </span>
              </div>
            </Link>
            <p className="text-base text-muted-foreground leading-relaxed">
              Your modern digital library management system. Discover, borrow,
              and manage books effortlessly.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/books"
                  className="text-base text-muted-foreground hover:text-[#7420E6] transition-colors duration-200"
                >
                  Browse Books
                </Link>
              </li>
             
              <li>
                <Link
                  to="/all-borrow-summary"
                  className="text-base text-muted-foreground hover:text-[#7420E6] transition-colors duration-200"
                >
                  Borrow Summary
                </Link>
              </li>
               <li>
                <Link
                  to="/pricing"
                  className="text-base text-muted-foreground hover:text-[#7420E6] transition-colors duration-200"
                >
                  Pricing
                </Link>
              </li>
               <li>
                <Link
                  to="/contact"
                  className="text-base text-muted-foreground hover:text-[#7420E6] transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              Categories
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="#"
                  className="text-base text-muted-foreground hover:text-[#7420E6] transition-colors duration-200"
                >
                  Fiction
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-base text-muted-foreground hover:text-[#7420E6] transition-colors duration-200"
                >
                  Science
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-base text-muted-foreground hover:text-[#7420E6] transition-colors duration-200"
                >
                  History
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-base text-muted-foreground hover:text-[#7420E6] transition-colors duration-200"
                >
                  Fantasy
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Connect</h3>
            <div className="flex space-x-2">
              <a
                href="https://github.com/nahidn228"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-muted-foreground hover:text-[#7420E6] hover:bg-[#7420E6]/10 transition-all duration-200 cursor-pointer"
                >
                  <Github className="h-8 w-8" />
                </Button>
              </a>

              <a
                href="https://x.com/nahidn228"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-muted-foreground hover:text-[#7420E6] hover:bg-[#7420E6]/10 transition-all duration-200 cursor-pointer"
                >
                  <Twitter className="h-8 w-8" />
                </Button>
              </a>

              <a
                href="https://www.linkedin.com/in/nahid-hasan01/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-muted-foreground hover:text-[#7420E6] hover:bg-[#7420E6]/10 transition-all duration-200 cursor-pointer"
                >
                  <Linkedin className="h-8 w-8" />
                </Button>
              </a>
            </div>

            <p className="text-sm text-muted-foreground">
              Built with React, TypeScript, <br /> and shadcn/ui
            </p>
          </div>
        </div>

        {/* Bottom section with glassmorphism effect */}
        <div className="mt-8 pt-8 border-t border-[#7420E6]/20 text-center">
          <div className="backdrop-blur-sm bg-card/30 rounded-lg p-4 border border-[#7420E6]/10">
            <p className="text-base text-muted-foreground font-mono">
              © {new Date().getFullYear()} Paper
              <span className="text-[#7420E6]">Trail</span>. All rights
              reserved. Built for educational purposes.
            </p>
            <p className="text-base text-[#7420E6] dark:text-[#7420E6]/80 mt-2">
              <a
                href="https://nahidhasan-portfolio.vercel.app/"
                target="_blank"
              >
                Built by Nahid Hasan
              </a>
            </p>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-8 w-1 h-16 bg-gradient-to-t from-[#7420E6]/40 to-transparent opacity-40"></div>
        <div className="absolute bottom-0 right-8 w-1 h-16 bg-gradient-to-t from-[#7420E6]/40 to-transparent opacity-40"></div>
      </div>
    </footer>
  );
};

export default Footer;
