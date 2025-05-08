"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { navLinks } from "@/constants";
import { Button } from "../ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const AppSidebar = () => {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarContent>
        <SignedIn>
          <SidebarGroup>
            <SidebarGroupLabel className="mb-4 mt-2">
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/assets/images/aiimagery_logo.png"
                  alt="logo"
                  width={180}
                  height={28}
                />
              </Link>
            </SidebarGroupLabel>

            <SidebarGroupContent>
              <SidebarMenu className="space-y-2 mt-4">
                {navLinks.slice(0, 6).map((link) => {
                  const isActive = pathname === link.route;

                  return (
                    <SidebarMenuItem key={link.label}>
                      <SidebarMenuButton asChild>
                        <Link
                          href={link.route}
                          className={`flex items-center gap-2 p-2 rounded-lg transition duration-50 ${
                            isActive
                               ? "bg-[#624cf5] text-white"
                              : "hover:bg-gray-800 hover:text-white"
                          }`}
                        >
                          <Image
                            src={link.icon}
                            alt={link.label}
                            width={24}
                            height={24}
                            className={`opacity-80 ${
                              isActive ? "opacity-100" : "opacity-80"
                            }`}
                          />
                          <span className="font-medium">{link.label}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <SidebarGroup className="mt-auto">
            <SidebarGroupContent>
              <SidebarMenu className="space-y-2">
                {navLinks.slice(6).map((link) => {
                  const isActive = pathname === link.route;

                  return (
                    <SidebarMenuItem key={link.label}>
                      <SidebarMenuButton asChild>
                        <Link
                          href={link.route}
                          className={`flex items-center gap-2 p-2 rounded-lg transition duration-200 ${
                            isActive
                              ? "bg-purple-600 text-white"
                              : "hover:bg-gray-800 hover:text-white"
                          }`}
                        >
                          <Image
                            src={link.icon}
                            alt={link.label}
                            width={24}
                            height={24}
                            className={`opacity-80 ${
                              isActive ? "opacity-100" : "opacity-80"
                            }`}
                          />
                          <span className="font-medium">{link.label}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}

                <li className="w-full flex items-left justify-center p-4 bg-[#624cf5] rounded-lg hover:bg-[#523cdb] active:bg-[#3b2cb5]">
                  <UserButton afterSignOutUrl="/" showName 
                  />
                </li>
              </SidebarMenu>

              <SignedOut>
                <Button asChild className="bg-purple-600 text-white w-full py-2 mt-4 rounded-lg hover:bg-purple-500">
                  <Link href="/sign-in">Sign In</Link>
                </Button>
              </SignedOut>
            </SidebarGroupContent>
          </SidebarGroup>
        </SignedIn>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
