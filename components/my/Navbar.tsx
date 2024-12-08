"use client"

import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
// import Image from "next/image";
import { Bot, Gamepad2, Hash, House, Phone, ShipWheel } from "lucide-react";

export function Navbar() {
	const links = [
		{
			title: "Home",
			icon: (
				<House className="h-full w-full text-[#4d1414] dark:text-neutral-300" />
			),
			href: '/',
		},

		{
			title: "Timelines",
			icon: (
                <ShipWheel className="h-full w-full text-[#4d1414] dark:text-neutral-300"/>
            ),
			href: "/timelines",
		},
		{
            title: "Social",
			icon: (
				<Hash className="h-full w-full text-[#4d1414] dark:text-neutral-300" />
			),
			href: "/social",
		},
		// {
		// 	title: "Aceternity UI",
		// 	icon: (
		// 		<Image
		// 			src="https://assets.aceternity.com/logo-dark.png"
		// 			width={20}
		// 			height={20}
		// 			alt="Aceternity Logo"
		// 		/>
		// 	),
		// 	href: "#",
		// },
		{
			title: "Games",
			icon: (
				<Gamepad2 className="h-full w-full text-[#4d1414] dark:text-neutral-300" />
			),
			href: '/games',
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
	];
	return (
		<div className="w-full flex mt-12 justify-center items-center fixed z-50">
			<FloatingDock
				mobileClassName="translate-y-20" // only for demo, remove for production
				items={links}
			/>
		</div>
	);
}
