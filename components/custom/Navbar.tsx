"use client";

import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  Award,
  Bot,
  Gamepad2,
  Globe,
  Hash,
  House,
  LayoutDashboard,
  Phone,
  ShipWheel,
} from "lucide-react";

export function Navbar() {
  const links = [
    {
      title: "Home",
      icon: (
        <House className="h-full w-full text-[#4d1414] dark:text-neutral-300" />
      ),
      href: "/",
    },

    {
      title: "Timelines",
      icon: (
        <ShipWheel className="h-full w-full text-[#4d1414] dark:text-neutral-300" />
      ),
      href: "/timeline",
    },
    {
      title: "Social",
      icon: (
        <Hash className="h-full w-full text-[#4d1414] dark:text-neutral-300" />
      ),
      href: "/social",
    },
    {
      title: "Games",
      icon: (
        <Gamepad2 className="h-full w-full text-[#4d1414] dark:text-neutral-300" />
      ),
      href: "/games",
    },

    {
      title: "Chat",
      icon: (
        <Bot className="h-full w-full text-[#4d1414] dark:text-neutral-300" />
      ),
      href: "/chat",
    },
    {
      title: "Contact",
      icon: (
        <Phone className="h-full w-full text-[#4d1414] dark:text-neutral-300" />
      ),
      href: "/contact",
    },
    {
      title: "Family",
      icon: (
        <Globe className="h-full w-full text-[#4d1414] dark:text-neutral-300" />
      ),
      href: "/user",
    },
    {
      title: "Badges",
      icon: (
        <Award className="h-full w-full text-[#4d1414] dark:text-neutral-300" />
      ),
      href: "/badges",
    },
    {
      title: "Dashboard",
      icon: (
        <LayoutDashboard className="h-full w-full text-[#4d1414] dark:text-neutral-300" />
      ),
      href: "/dashboard",
    },
  ];
  return (
    <div className=" z-10 w-full flex mt-12 justify-center items-center fixed">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
