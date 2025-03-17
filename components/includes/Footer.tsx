"use client";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  const navLinks = [
    {
      route: "/",
      label: "About us",
    },
    {
      route: "/#treatable-cases",
      label: "Treatable Cases",
    },
    {
      route: "/#faq",
      label: "FAQ",
    },
  ];
  return (
    <>
      <div className="bg-[#262261] flex flex-col items-start md:pt-[72px] md:pb-[12px] md:px-[143px]">
        {/* Logo */}
        <div className="my-8">
          <img src="/images/whiteLogo.png" />
        </div>
        <div className="w-full flex flex-col justify-between items-start gap-6 px-6 md:flex-row my-10">
          {/* social media */}
          <div className="flex items-center gap-6">
            <img src="/images/Facebook.png" />
            <p className="text-white">|</p>
            <img src="/images/Instagram.png" />
            <p className="text-white">|</p>
            <img src="/images/x.png" />
            <p className="text-white">|</p>
            <img src="/images/Youtube.png" />
          </div>
          {/* Links */}
          <div className={cn("flex flex-col gap-4")}>
            <h2 className="text-white">Quick Links</h2>
            <NavigationMenu>
              <NavigationMenuList className="flex flex-col space-y-2 gap-4">
                {/* Navigation Links */}
                {navLinks.map((link) => (
                  <NavigationMenuItem key={link.label}>
                    <Link
                      href={link.route}
                      className={cn(
                        "p-2 rounded-xl hover:bg-[#1B1946] text-white",
                        pathname === link.route && "bg-[#1B1946]"
                      )}
                    >
                      {link.label}
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          {/* Newsletters */}
          <div className={cn("flex flex-col gap-6")}>
            <h2 className="text-white">Newsletters</h2>
            <p className="text-white">
              Subscribe our newsletter to get our latest update & news
            </p>
            <div className="relative w-full max-w-md">
              <input
                type="text"
                placeholder="Enter your email address"
                className="w-full py-2 pr-12 pl-4 border text-white border-[#484D99] bg-[#262261] rounded-xl focus:outline-none"
              />
              <button className="absolute top-1 bottom-1 right-1 px-3 text-[#262261] bg-white rounded-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <hr className="w-[70%] mx-auto text-[#484D99]" />
        <p className="text-white w-full text-center mt-3 mb-2">
          © Copyright 2023 .Midligner. All Right Reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
