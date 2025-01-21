"use client";

import React, { useState } from "react";

const CreateGamePage = () => {
    const [questions, setQuestions] = useState(
        Array(5).fill({ question: "", options: ["", "", "", ""], correct: "" })
    );

    const handleQuestionChange = (index: number, field: string, value: string, optionIndex?: number) => {
        const updatedQuestions = [...questions];
        if (field === "question" || field === "correct") {
            updatedQuestions[index][field] = value;
        } else if (field === "options" && optionIndex !== undefined) {
            updatedQuestions[index].options[optionIndex] = value;
        }
        setQuestions(updatedQuestions);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Game submitted:", questions);
        // Handle form submission logic here
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-start py-36 px-6">
            <h1 className="text-5xl font-bold text-[#4d1414] mb-4">🎮 Create Game</h1>
            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-lg rounded-3xl w-full max-w-4xl p-8 space-y-6 border-2 border-yellow-300 h-[500px] overflow-scroll"
            >
                <div className="flex justify-between mb-6">
                    <p className="font-medium text-xl text-[#4d1414]">Which Game?</p>
                    <div className="flex gap-4">
                        {["Translation", "Odd One Out", "Quiz"].map((game) => (
                            <label key={game} className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="gameType"
                                    value={game}
                                    className="form-radio text-yellow-400"
                                    required
                                />
                                <span className="text-[#4d1414]">{game}</span>
                            </label>
                        ))}
                    </div>
                </div>

                <div className="mb-6">
                    <label htmlFor="state" className="block text-[#4d1414] font-medium mb-2">
                        Select State
                    </label>
                    <select
                        id="state"
                        className="w-full border border-yellow-300 rounded-lg p-3 bg-yellow-50 focus:outline-none focus:ring focus:ring-yellow-200"
                        required
                    >
                        <option value="" disabled selected>
                            Choose a state
                        </option>
                        {["Karnataka", "Maharashtra", "Kerala", "Tamil Nadu"].map((state) => (
                            <option key={state} value={state}>
                                {state}
                            </option>
                        ))}
                    </select>
                </div>

                {questions.map((q, index) => (
                    <div key={index} className="space-y-4">
                        <label className="block text-lg font-bold text-[#4d1414]">
                            Question {index + 1}
                        </label>
                        <textarea
                            placeholder={`Enter Question ${index + 1}`}
                            value={q.question}
                            onChange={(e) => handleQuestionChange(index, "question", e.target.value)}
                            className="w-full border border-yellow-300 rounded-lg p-3 bg-yellow-50 focus:outline-none focus:ring focus:ring-yellow-200"
                            required
                        />
                        <div className="grid grid-cols-2 gap-4">
                            {q.options.map((option, optionIndex) => (
                                <div key={optionIndex}>
                                    <label
                                        className="block text-sm font-medium text-yellow-700 mb-1"
                                        htmlFor={`option-${index}-${optionIndex}`}
                                    >
                                        Option {optionIndex + 1}
                                    </label>
                                    <input
                                        id={`option-${index}-${optionIndex}`}
                                        placeholder={`Option ${optionIndex + 1}`}
                                        value={option}
                                        onChange={(e) =>
                                            handleQuestionChange(index, "options", e.target.value, optionIndex)
                                        }
                                        className="w-full border border-yellow-300 rounded-lg p-3 bg-yellow-50 focus:outline-none focus:ring focus:ring-yellow-200"
                                        required
                                    />
                                </div>
                            ))}
                        </div>
                        <div>
                            <label
                                htmlFor={`correct-${index}`}
                                className="block text-sm font-medium text-yellow-700 mb-1"
                            >
                                Correct Answer
                            </label>
                            <textarea
                                id={`correct-${index}`}
                                placeholder="Enter Correct Answer"
                                value={q.correct}
                                onChange={(e) => handleQuestionChange(index, "correct", e.target.value)}
                                className="w-full border border-yellow-300 rounded-lg p-3 bg-yellow-50 focus:outline-none focus:ring focus:ring-yellow-200"
                                required
                            />
                        </div>
                    </div>
                ))}

                <div className="flex justify-center mt-8">
                    <button
                        type="submit"
                        className="bg-yellow-300 text-[#4d1414] font-bold rounded-full px-8 py-3 hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105"
                    >
                        🚀 Create Game
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateGamePage;
