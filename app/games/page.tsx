import React from "react";
import Link from "next/link";

const Page = () => {
	return (
		<div className="flex flex-1 min-h-screen pt-36 px-24">
			<div className="font-bold text-[#4d1414] w-full text-center">
				<div className="text-6xl drop-shadow-md">🌟 Play and Win Big! 🎉</div>
				<p className="text-xl mt-4 text-[#4d1414]">
					Explore fun games, test your skills, and collect tokens. Let the fun
					begin! 🚀
				</p>
				<div className="flex flex-row gap-12 mt-12 justify-center items-center">
					{/* Quiz Game Card */}
					<div className="w-1/3 h-[40vh] hover:scale-105 transition-all duration-300 bg-yellow-300 bg-opacity-20 backdrop-blur-sm rounded-lg shadow-lg border-2 border-yellow-300">
						<div className="text-4xl p-4 font-semibold drop-shadow flex justify-center items-center">
							Quiz 🤓
						</div>
						<video
							className="mx-auto my-4 border-2 border-black bg-gray-600 rounded-md"
							src="" // Add your video source here
						></video>
						<div className="text-lg pb-2 text-[#4d1414] font-medium">
							🎯 Earn 10 Tokens
						</div>
						<Link href="/games/quiz">
							<button className="text-md bg-yellow-300 text-[#4d1414] px-4 py-2 rounded-md hover:scale-110 duration-200 transition-all">
								Play Now! 🕹️
							</button>
						</Link>
					</div>

					{/* Odd One Out Game Card */}
					<div className="w-1/3 h-[40vh] hover:scale-105 transition-all duration-300 bg-yellow-300 bg-opacity-20 backdrop-blur-sm rounded-lg shadow-lg border-2 border-yellow-300">
						<div className="text-4xl p-4 font-semibold drop-shadow flex justify-center items-center">
							Odd One Out 🔍
						</div>
						<video
							className="mx-auto my-4 border-2 border-black bg-gray-600 rounded-md"
							src="" // Add your video source here
						></video>
						<div className="text-lg pb-2 text-[#4d1414] font-medium">
							🎯 Earn 10 Tokens
						</div>
						<Link href="/games/odd-one-out/maharashtra">
							<button className="text-md bg-yellow-300 text-[#4d1414] px-4 py-2 rounded-md hover:scale-110 duration-200 transition-all">
								Play Now! 🕹️
							</button>
						</Link>
					</div>

					{/* Translation Game Card */}
					<div className="w-1/3 h-[40vh] hover:scale-105 transition-all duration-300 bg-yellow-300 bg-opacity-20 backdrop-blur-sm rounded-lg shadow-lg border-2 border-yellow-300">
						<div className="text-4xl p-4 font-semibold drop-shadow flex justify-center items-center">
							Translation 🌐
						</div>
						<video
							className="mx-auto my-4 border-2 border-black bg-gray-600 rounded-md"
							src="" // Add your video source here
						></video>
						<div className="text-lg pb-2 text-[#4d1414] font-medium">
							🎯 Earn 10 Tokens
						</div>
						<Link href="/games/translation/maharashtra">
							<button className="text-md bg-yellow-300 text-[#4d1414] px-4 py-2 rounded-md hover:scale-110 duration-200 transition-all">
								Play Now! 🕹️
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Page;
