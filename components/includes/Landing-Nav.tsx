"use client"; // Important for client-side rendering

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu";

import { cn } from "@/lib/utils"; // Utility function from ChadCN for classnames
import Link from "next/link";
import { usePathname } from "next/navigation"; // To highlight the active page
import { useState } from "react";
import Image from "next/image";
import { DropdownMenu, DropdownMenuContent } from "../ui/dropdown-menu";
import { Menu, X } from "lucide-react";

const LandingNavbar = () => {
  const pathname = usePathname(); // Get the current pathname for active link
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  const navLinks = [
    {
      route: "",
      label: "About us",
    },
    {
      route: "/#treatable-cases",
      label: "Treatable Cases",
    },
    {
      route: "/#faq",
      label: "FAQs ",
    },
    {
      route: "",
      label: "Find Your Nearest Doctor",
    },
    {
      route: "",
      label: "For Doctors",
    },
  ];
  return (
    <>
      <div className="flex justify-between items-center h-[72px] bg-[#FCFCFD] p-4 lg:px-[120px] md:px-[60px] fixed w-screen top-0 left-0 z-[9999]">
        {/* Brand Logo */}
        <Link href="/">
          <Image
            src="/images/blueLogo.png"
            width={151}
            height={40}
            alt="logo"
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden p-2 mr-2 rounded-md text-black focus:outline-none"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navigation Menu */}
        <div className={cn("hidden lg:flex items-center space-x-6")}>
          <NavigationMenu>
            <NavigationMenuList className=" hidden lg:flex space-x-6 gap-4">
              {/* Navigation Links */}
              {navLinks.map((link) => (
                <NavigationMenuItem key={link.label}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={link.route}
                      className={cn(
                        "p-2 rounded-lg hover:bg-white text-[#5F5E5D]",
                        pathname == link.route &&
                          "text-[#262261] rounded-none border-b border-[#262261]"
                      )}
                    >
                      {link.label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>

      {/* Mobile Drop Down Menu */}
      <DropdownMenu open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <DropdownMenuContent className=" !bg-white flex flex-col items-center gap-5 min-w-[400px] border-none !w-full absolute left-2 top-20 p-3">
          {navLinks.map((link) => (
            <Link
              href={link.route}
              className={cn(
                "p-2 rounded-lg hover:bg-white text-[#5F5E5D]",
                pathname === link.route &&
                  "text-customBlue rounded-none border-customBlue"
              )}
            >
              {link.label}
            </Link>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default LandingNavbar;
