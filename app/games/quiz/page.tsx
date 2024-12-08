"use client";

import { useRouter } from "next/navigation";
import gamedata from "../gamedata.json";

const QuizPage = () => {
	const router = useRouter();
	const game = gamedata.quiz;

	// Check if quiz data is available
	if (!game || game.length === 0) {
		return (
			<div className="min-h-screen flex flex-col items-center justify-center p-6">
				<h1 className="text-4xl font-bold text-[#4d1414] mb-8">
					No quiz data available.
				</h1>
				<p className="text-lg text-[#4d1414]">
					Please check back later for more fun quizzes!
				</p>
			</div>
		);
	}

	const handleStateSelection = (stateSlug: string) => {
		router.push(`/games/quiz/${stateSlug}`);
	};

	return (
		<div className="min-h-screen flex flex-col items-center justify-center p-6">
			<h1 className="text-4xl font-bold text-[#4d1414] mb-8">
				Select Your State
			</h1>
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
				{game.map(({ slug, image }) => (
					<button
						key={slug}
						onClick={() => handleStateSelection(slug)}
						className="w-48 h-20 bg-yellow-300 border-2 border-yellow-600 text-[#4d1414] font-bold rounded-lg shadow-md hover:bg-yellow-400 transition-all relative overflow-hidden"
					>
						{/* Add background image */}
						<div
							className="absolute inset-0 bg-cover bg-center opacity-0 hover:opacity-80 duration-300 transition-all"
							style={{ backgroundImage: `url('${image}')` }}
						></div>
						{/* Text overlay */}
						<span className="relative z-10">
							{slug.charAt(0).toUpperCase() + slug.slice(1)}
						</span>
					</button>
				))}
			</div>
		</div>
	);
};

export default QuizPage;
