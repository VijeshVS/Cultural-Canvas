"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import statedata from "../stateData.json";
import Image from "next/image";
import { Volume2, XCircle } from "lucide-react"; // Import icons from Lucide React

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

    // Text-to-Speech Functionality
    const speakText = (text: string) => {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 0.9; // Adjust speed
        utterance.pitch = 0.9; // Adjust pitch
        utterance.lang = "en-IN"; // Set language
        speechSynthesis.speak(utterance);
    };

    const stopSpeaking = () => {
        speechSynthesis.cancel();
    };

    useEffect(() => {
        const handleKeydown = (e: KeyboardEvent) => {
            if (e.ctrlKey && e.shiftKey && e.key === "L") {
                const entireText = `${stateData.title}. ${stateData.sub}. ${stateData.description}. ${stateData.cards
                    .map((card) => card.desc)
                    .join(". ")}`;
                speakText(entireText);
            }
        };

        window.addEventListener("keydown", handleKeydown);
        return () => window.removeEventListener("keydown", handleKeydown);
    }, [stateData]);

    return (
        <div className="min-h-screen flex flex-col items-center pt-36 px-24 overflow-scroll">
            <div className="flex flex-col items-center overflow-scroll scrollbar-hide h-[63vh]">
                <div className="text-6xl font-bold text-[#4d1414]">
                    {stateData.title}
                </div>
                <div className="text-2xl font-semibold text-gray-800 ml-24">
                    {stateData.sub}
                </div>
                <div className="text-lg text-black">{stateData.description}</div>
                <div className="flex flex-row gap-2 mt-4">
                    <button
                        className="p-2 bg-yellow-500 text-white rounded-full shadow-md hover:bg-yellow-600 transition-all duration-150"
                        onClick={() => speakText(stateData.description)}
                    >
                        <Volume2 size={20} />
                    </button>
                    <button
                        className="p-2 bg-red-500 text-white rounded-full shadow-md hover:bg-red-600 transition-all duration-150"
                        onClick={stopSpeaking}
                    >
                        <XCircle size={20} />
                    </button>
                </div>
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
                                    className={`text-sm bg-yellow-300 font-semibold px-2 w-fit rounded-full gap-2`}
                                >
                                    {card.badge}
                                </div>
                                <div className="text-md">{card.desc}</div>
                            </div>
                            <button
                                className="p-2 bg-yellow-500 text-white rounded-full shadow-md hover:bg-yellow-600 transition-all duration-150"
                                onClick={() => speakText(card.desc)}
                            >
                                <Volume2 size={20} />
                            </button>
                        </div>
                    ))}
                </div>
                <div className="w-full flex flex-col justify-center items-center mt-8">
                    <h2 className="text-4xl font-semibold text-[#4d1414] mb-4">
                        Explore games
                    </h2>
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
                        src={stateData.videoSrc}
                        title="YouTube video player"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default StateSlugPage;
