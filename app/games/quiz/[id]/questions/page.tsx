"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import gamedata from "../../../gamedata.json";

const QuizQuestions = ({ params }: { params: { id: string } }) => {
	const { id } = params;
	const router = useRouter();
	const game = gamedata.quiz.find((item) => item.slug === id);

	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [selectedOption, setSelectedOption] = useState<string | null>(null);
	const [isAnswered, setIsAnswered] = useState(false);

	if (!game || !game.questions) {
		return (
			<div className="min-h-screen flex items-center justify-center">
				<h1 className="text-2xl font-bold text-red-500">
					No questions available for this quiz. Go Back.
				</h1>
				<button
					className="mt-4 px-4 py-2 text-sm underline text-blue-500"
					onClick={() => router.push("/game/quiz")}
				>
					Back to States
				</button>
			</div>
		);
	}

	const question = game.questions[currentQuestionIndex];

	const handleOptionClick = (option: string) => {
		if (isAnswered) return;
		setSelectedOption(option);
		setIsAnswered(true);
		setTimeout(() => {
			if (currentQuestionIndex < game.questions.length - 1) {
				setCurrentQuestionIndex(currentQuestionIndex + 1);
				setSelectedOption(null);
				setIsAnswered(false);
			} else {
				alert("Quiz Completed!");
				router.push("/games/quiz");
			}
		}, 2000);
	};

	return (
		<div className="min-h-screen flex flex-col items-center justify-center p-6 space-y-6">
			<h1 className="text-2xl font-bold text-[#4d1414]">{game.title}</h1>
			<div className="w-full max-w-xl bg-white p-6 rounded-lg shadow-lg">
				<h2 className="text-lg font-semibold mb-4">{question.question}</h2>
				<div className="grid grid-cols-1 gap-4">
					{question.options.map((option) => (
						<button
							key={option}
							onClick={() => handleOptionClick(option)}
							className={`px-4 py-2 text-left border rounded-lg ${
								isAnswered
									? option === question.answer
										? "bg-green-300"
										: option === selectedOption
										? "bg-red-300"
										: "bg-gray-200"
									: "bg-gray-200 hover:bg-gray-300"
							}`}
							disabled={isAnswered}
						>
							{option}
						</button>
					))}
				</div>
			</div>
		</div>
	);
};

export default QuizQuestions;
