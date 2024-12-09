import React from "react";
import { Heart, UserCircle } from "lucide-react";
const data = [
	{
		id: 1,
		user: "samkit7",
		image: "/socials/samkit7/1.png",
		caption:
			"Exploring the beauty of sunsets! 🌅 Can't get enough of these golden hues.",
		like: 73,
	},
	{
		id: 2,
		user: "adventure_girl",
		image: "/socials/adventure_girl/1.png",
		caption:
			"Hiking up the trails was tough, but the view from the top? Worth every step. 🏔️",
		like: 120,
	},
	{
		id: 3,
		user: "foodie_fan",
		image: "/socials/foodie_fan/1.png",
		caption:
			"Tried the new vegan cafe in town. Delicious, sustainable, and worth every bite! 🥗🍴",
		like: 98,
	},
	{
		id: 4,
		user: "tech_guru",
		image: "/socials/tech_guru/1.png",
		caption:
			"Just unboxed the latest gadget in town. First impressions? Mind-blowing. 🤯📱",
		like: 150,
	},
	{
		id: 5,
		user: "artsy_soul",
		image: "/socials/artsy_soul/1.png",
		caption:
			"My latest painting inspired by Van Gogh's Starry Night. Art is therapy. 🎨✨",
		like: 85,
	},
	{
		id: 6,
		user: "wanderlust_diaries",
		image: "/socials/wanderlust_diaries/1.png",
		caption:
			"Roaming through the streets of Paris. The city of lights never fails to charm. 🇫🇷🗼",
		like: 200,
	},
	{
		id: 7,
		user: "fitness_freak",
		image: "/socials/fitness_freak/1.png",
		caption:
			"Early morning workout vibes. Consistency is the key to progress! 💪🏽🏋️‍♂️",
		like: 140,
	},
	{
		id: 8,
		user: "nature_lover",
		image: "/socials/nature_lover/1.png",
		caption:
			"Spotted this serene lake during my weekend getaway. Nature truly heals. 🌳🌊",
		like: 92,
	},
];

const Page = () => {
	return (
		<div className="min-h-screen flex flex-col pt-36 px-24 items-center">
			<h2 className="text-center text-[#4d1414] font-semibold text-6xl">
				What&apos;s the buzz?
			</h2>
            <p className="w-2/3 text-lg text-center font-medium">Dive into a vibrant feed full of inspiration, joy, and unforgettable moments! From golden sunsets to thrilling adventures, heartwarming art, and delicious foodie escapades—this is your space to connect, celebrate, and share the magic of everyday life. 🌈✨</p>
			<div className="grid grid-cols-4 gap-6 h-[40vh] overflow-scroll mt-6 p-2">
				{data.map((item) => (
					<div
						key={item.id}
						className="flex flex-col rounded-xl bg-white shadow-lg"
					>
						<div className="flex flex-row justify-between p-2">
							<div className="flex flex-row space-x-2 items-center">
								<UserCircle />
								<div className="italic">{item.user}</div>
							</div>
							<div className="text-pink-500 flex flex-row space-x-2 items-center">
								<Heart fill="#ec4899" />
								<div>{item.like}</div>
							</div>
						</div>
						<div
							className="w-full h-48 bg-cover bg-center"
							style={{ backgroundImage: `url(${item.image})` }}
						></div>
						<div className="p-2">
							<span className="font-bold italic">{item.user} </span>
							{item.caption}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Page;
