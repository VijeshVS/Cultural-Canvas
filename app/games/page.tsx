import React from "react";

const page = () => {
	return (
		<div className="flex flex-1 min-h-screen pt-36 px-24">
			<div className=" font-bold text-[#4d1414] w-full justify-center text-center">
				<div className="text-6xl">Play and Win</div>
				<div className="flex flex-row gap-12 mt-12 justify-center items-center">
					<div className="w-1/3 bg-yellow-300 border-2 border-yellow-600 h-[40vh] rounded-3xl shadow-md hover:scale-105 transition-all duration-300">
						<div className="text-4xl p-4 font-semibold drop-shadow">Quiz</div>
						<video
							className="mx-auto my-4 border-2 border-black bg-gray-600 rounded-md"
							src=""
						></video>
						<div className="pb-2">10 Tokens</div>
						<button className="text-md bg-[#4d1414] text-white px-2 py-1 rounded-md hover:scale-110 duration-200 transition-all">
							Play Now
						</button>
					</div>
					<div className="w-1/3 bg-yellow-300 border-2 border-yellow-600 h-[40vh] rounded-3xl shadow-md hover:scale-105 transition-all duration-300">
						<div className="text-4xl p-4 font-semibold drop-shadow">Quiz</div>
						<video
							className="mx-auto my-4 border-2 border-black bg-gray-600 rounded-md"
							src=""
						></video>
						<div className="pb-2">10 Tokens</div>
						<button className="text-md bg-[#4d1414] text-white px-2 py-1 rounded-md hover:scale-110 duration-200 transition-all">
							Play Now
						</button>
					</div>
					<div className="w-1/3 bg-yellow-300 border-2 border-yellow-600 h-[40vh] rounded-3xl shadow-md hover:scale-105 transition-all duration-300">
						<div className="text-4xl p-4 font-semibold drop-shadow">Quiz</div>
						<video
							className="mx-auto my-4 border-2 border-black bg-gray-600 rounded-md"
							src=""
						></video>
						<div className="pb-2">10 Tokens</div>
						<button className="text-md bg-[#4d1414] text-white px-2 py-1 rounded-md hover:scale-110 duration-200 transition-all">
							Play Now
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default page;
