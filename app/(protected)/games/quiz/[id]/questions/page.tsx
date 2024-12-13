"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import gamedata from "../../../gamedata.json";
import Image from "next/image";
import { assignBadge } from "@/lib/actions/main";
import { toast } from "sonner";

const QuizQuestions = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const router = useRouter();
  const game = gamedata.quiz.find((item) => item.slug === id);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [progress, setProgress] = useState<number[]>([]); // Tracks progress: 1 for correct, -1 for incorrect
  const [showScoreCard, setShowScoreCard] = useState(false);

  function handleBadgeAssign(curr: boolean) {
    let finalScore = progress.reduce((acc, curr) => {
      if (curr) acc += 1;
      return acc;
    }, 0);

    finalScore += Number(curr);
    if (finalScore === game?.questions.length) {
      assignBadge(localStorage.getItem("token") || "", id).then((res) => {
        const status = res?.status;

        if (status == 200) {
        } else if (status == 500) {
          toast.error("Server error !!");
        }
      });
    }
  }

  if (!game || !game.questions) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold text-red-500">
          No questions available for this quiz. Go Back.
        </h1>
        <button
          className="mt-4 px-4 py-2 text-sm underline text-blue-500"
          onClick={() => router.push("/games")}
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

    // Update progress
    const isCorrect = option === question.answer;
    setProgress([...progress, isCorrect ? 1 : -1]);

    handleBadgeAssign(isCorrect);

    setTimeout(() => {
      if (currentQuestionIndex < game.questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedOption(null);
        setIsAnswered(false);
      } else {
        setShowScoreCard(true);
      }
    }, 2000);
  };

  const score = progress.filter((val) => val === 1).length;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 space-y-6">
      <h1 className="text-2xl font-bold text-[#4d1414]">{game.title}</h1>

      {/* Progress Bar */}
      <div className="w-full max-w-xl h-4 bg-gray-300 rounded-lg overflow-hidden">
        <div
          className="h-full"
          style={{
            width: `${(progress.length / game.questions.length) * 100}%`,
            backgroundColor:
              progress[progress.length - 1] === 1 ? "green" : "red",
          }}
        ></div>
      </div>

      {/* Question Card */}
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

      {/* Score Card */}
      {showScoreCard && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center space-y-4">
            <h2 className="text-2xl font-bold">Quiz Completed! 🎉</h2>
            <p className="text-lg">
              Your Score: <span className="font-bold">{score}</span> /{" "}
              {game.questions.length}
            </p>
            {score === game.questions.length && (
              <div className="flex flex-col items-center">
                <p className="text-lg text-green-700 font-semibold">
                  Congratulations! You&apos;ve earned the{" "}
                  {game.slug.charAt(0).toUpperCase()}
                  {game.slug.slice(1)} badge! 🏅
                </p>
                {/* Dynamic Image */}
                <Image
                  src={game.badge || ""}
                  alt={`Badge for ${game.title}`}
                  width={100}
                  height={100}
                  className="mt-4 rounded-full"
                />
              </div>
            )}
            <button
              className="px-4 py-2 bg-yellow-500 text-white font-bold rounded-lg hover:bg-yellow-600 duration-300 transition-all"
              onClick={() => {
                setShowScoreCard(false);
                router.push("/games");
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizQuestions;
