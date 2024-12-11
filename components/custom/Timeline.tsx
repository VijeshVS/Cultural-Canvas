"use client";

import React, { useState, useRef, useEffect, MouseEvent } from "react";

interface TimelineItem {
	year: number;
	content: string;
	image: string;
}

const TimelineComponent: React.FC = () => {
	const [activeYear, setActiveYear] = useState<number | null>(null);
	const timelineRef = useRef<HTMLDivElement>(null);

	const timelineData: TimelineItem[] = [
		{
			year: 1990,
			content:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nulla sit amet aliquam lacinia, nisl nisl aliquam nisl, nec aliquam nisl nisl sit amet lorem.",
			image: "/api/placeholder/300/200",
		},
		{
			year: 1995,
			content:
				"Praesent euismod, nulla sit amet aliquam lacinia, nisl nisl aliquam nisl, nec aliquam nisl nisl sit amet lorem. Fusce euismod, nulla sit amet aliquam lacinia.",
			image: "/api/placeholder/300/200",
		},
		{
			year: 2000,
			content:
				"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.",
			image: "/api/placeholder/300/200",
		},
		{
			year: 2005,
			content:
				"Pellentesque in ipsum id orci porta dapibus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur non nulla sit amet nisl tempus convallis.",
			image: "/api/placeholder/300/200",
		},
		{
			year: 2010,
			content:
				"Cras ultricies ligula sed magna dictum porta. Nulla quis lorem ut libero malesuada feugiat. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.",
			image: "/api/placeholder/300/200",
		},
		{
			year: 2015,
			content:
				"Sed porttitor lectus nibh. Nulla porttitor accumsan tincidunt. Vivamus suscipit tortor eget felis porttitor volutpat. Praesent sapien massa, convallis a pellentesque nec.",
			image: "/api/placeholder/300/200",
		},
		{
			year: 2020,
			content:
				"Donec rutrum congue leo eget malesuada. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Proin eget tortor risus. Donec sollicitudin molestie malesuada.",
			image: "/api/placeholder/300/200",
		},
		{
			year: 2024,
			content:
				"Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla porttitor accumsan tincidunt. Vivamus suscipit tortor eget felis porttitor volutpat.",
			image: "/api/placeholder/300/200",
		},
	];

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
			if (!timelineRef.current) return;

			const timelineRect = timelineRef.current.getBoundingClientRect();
			const mouseY = e.clientY - timelineRect.top;

			const entries = Array.from(
				timelineRef.current.querySelectorAll(
					"[data-year]"
				) as NodeListOf<HTMLElement>
			);

			entries.forEach((entry) => {
				const entryRect = entry.getBoundingClientRect();
				const entryTop = entryRect.top - timelineRect.top;
				const entryBottom = entryTop + entryRect.height;

				if (mouseY >= entryTop && mouseY <= entryBottom) {
					const year = entry.getAttribute("data-year");
					if (year) {
						setActiveYear(parseInt(year, 10));
					}
				}
			});
		};

		const currentRef = timelineRef.current;
		if (currentRef) {
			currentRef.addEventListener(
				"mousemove",
				handleMouseMove as unknown as EventListener
			);
		}

		return () => {
			if (currentRef) {
				currentRef.removeEventListener(
					"mousemove",
					handleMouseMove as unknown as EventListener
				);
			}
		};
	}, []);

	return (
		<div
			ref={timelineRef}
			className="relative w-full max-w-5xl mx-auto h-[600px] overflow-y-scroll py-10 scroll-smooth scrollbar-hide"
		>
			{timelineData.map((item) => (
				<div
					key={item.year}
					data-year={item.year}
					className={`
            flex items-center mb-10 transition-all duration-300 ease-in-out
            ${activeYear === item.year ? "scale-[1.03]" : "scale-100"}
          `}
				>
					{/* Year Column */}
					<div
						className={`
              w-40 text-right pr-10 font-bold transition-all duration-300
              ${
								activeYear === item.year
									? "text-3xl text-black"
									: "text-2xl text-black/70"
							}
            `}
					>
						{item.year}
					</div>

					{/* Image Box */}
					<div
						className={`w-96 h-52 mr-4 overflow-hidden rounded-lg shadow-lg transition-all duration-300
              ${
								activeYear === item.year
									? "scale-[1.02] border-2 border-gray-300"
									: "scale-100 border-2 border-transparent"
							}
            `}
					>
						<img
							src={item.image}
							alt={`Timeline image for ${item.year}`}
							className="w-full h-full object-cover"
						/>
					</div>

					{/* Content Box */}
					<div
						className={`
              bg-yellow-50 p-6 rounded-lg shadow-lg w-96 transition-all duration-300
              ${
								activeYear === item.year
									? "scale-[1.02] border-2 border-gray-300"
									: "scale-100 border border-gray-200"
							}
            `}
					>
						<div className="h-full overflow-hidden">{item.content}</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default TimelineComponent;
