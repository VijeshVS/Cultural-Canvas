"use client";
import { useRouter } from "next/navigation";
import gamedata from "../../gamedata.json";

const OddOneOutSlugPage = ({
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

	const game = gamedata.oddoneout;
	const stateData = game?.find((item) => item.slug === id);

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
		<div className="min-h-screen flex flex-col items-center justify-center p-6 space-y-6">
			<h1 className="text-4xl font-bold text-[#4d1414]">{stateData.title}</h1>
			<p className="text-lg text-[#4d1414] text-center">
				{stateData.description}
			</p>
			<div className="flex flex-col space-y-4 items-center">
				<button
					onClick={() => router.push(`/games/oddoneout/${id}/questions`)}
					className="px-6 py-3 bg-yellow-400 text-[#4d1414] rounded-lg shadow-md hover:bg-yellow-500"
				>
					Start Game
				</button>
				<button
					className="px-4 py-2 text-sm underline text-[#4d1414]"
					onClick={() => router.push("/games/quiz")}
				>
					Go Back to States
				</button>
			</div>
		</div>
	);
};

export default OddOneOutSlugPage;
