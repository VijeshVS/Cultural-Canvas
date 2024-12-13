"use client";
import { useRouter } from "next/navigation";
import statedata from "../stateData.json";
import Image from "next/image";
import { div } from "framer-motion/client";
import Router from "next/router";

const StateSlugPage = ({
	params,
}: {
	params: {
		id: string;
	};
}) => {
	const id = params.id;
	const router = useRouter();
	// Ensure the slug is defined
	if (!id) {
		return (
			<div className="min-h-screen flex items-center justify-center">
				<h1 className="text-2xl font-bold text-red-500">Loading...</h1>
			</div>
		);
	}

	const state = statedata.stateDataFile;
	const stateData = state?.find((item) => item.slug === id);

	if (!stateData) {
		return (
			<div className="min-h-screen flex items-center justify-center">
				<h1 className="text-2xl font-bold text-red-500">
					Invalid State Selected! Go Back.
				</h1>
				<button
					className="mt-4 px-4 py-2 text-sm underline text-blue-500"
					onClick={() => router.push("/games/quiz")}
				>
					Back to States
				</button>
			</div>
		);
	}

	return (
		<div className="min-h-screen flex flex-col items-center pt-36 px-24 overflow-scroll ">
			<div className="flex flex-col items-center overflow-scroll scrollbar-hide h-[63vh]">
				<div className="text-6xl font-bold text-[#4d1414]">
					{stateData.title}
				</div>
				<div className="text-2xl font-semibold text-gray-800 ml-24">
					{stateData.sub}
				</div>
				<div className="text-lg text-black ">{stateData.description}</div>
				<div className="flex flex-col items-center mt-8 gap-4">
					{stateData.cards.map((card, index) => (
						<div
							key={card.badge}
							className={`bg-white justify-center items-center w-2/3 flex flex-row ${
								index % 2 === 0 ? "flex-row" : "flex-row-reverse"
							} p-3 rounded-xl bg-opacity-70 shadow-md gap-3`}
						>
							<div>
								<Image
									src={card.image}
									width={900}
									height={900}
									alt="image"
								/>
							</div>
							<div
								className={`flex flex-col ${
									index % 2 == 0 ? "justify-start" : "items-end text-end"
								}`}
							>
								<div
									className={` text-sm bg-yellow-300 font-semibold px-2 w-fit rounded-full gap-2`}
								>
									{card.badge}
								</div>
								<div className="text-md">{card.desc}</div>
							</div>
						</div>
					))}
				</div>
				<div className="w-full flex flex-col justify-center items-center mt-8">
					<h2 className="text-4xl font-semibold text-[#4d1414] mb-4">Explore games </h2>
                    <div className="flex flex-row gap-4 w-2/3 justify-around">
						<div
							onClick={() => {
								router.push(`/games/quiz/${stateData.slug}`);
							}}
							className="bg-orange-500 rounded-xl w-1/3 py-2 px-4 text-center text-xl font-semibold text-white cursor-pointer transition-all duration-300 hover:bg-orange-600 hover:scale-110 shadow-md"
						>
							Quiz
						</div>
						<div
							onClick={() => {
								router.push(`/games/quiz/${stateData.slug}`);
							}}
							className="bg-orange-500 rounded-xl w-1/3 py-2 px-4 text-center text-xl font-semibold text-white cursor-pointer transition-all duration-300 hover:bg-orange-600 hover:scale-110 shadow-md"
						>
							Odd One Out
						</div>
						<div
							onClick={() => {
								router.push(`/games/quiz/${stateData.slug}`);
							}}
							className="bg-orange-500 rounded-xl w-1/3 py-2 px-4 text-center text-xl font-semibold text-white cursor-pointer transition-all duration-300 hover:bg-orange-600 hover:scale-110 shadow-md"
						>
							Translation
						</div>
					</div>
				</div>
				<div>
					<iframe
						className="rounded-xl mt-8 shadow-md"
						width="960"
						height="540"
						src="https://www.youtube.com/embed/xX7sjeohDts?si=2NrHY58b6qsfGE58&amp;controls=0"
						title="YouTube video player"
						allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerPolicy="strict-origin-when-cross-origin"
						allowfullscreen
					></iframe>
				</div>
			</div>
		</div>
	);
};

export default StateSlugPage;
