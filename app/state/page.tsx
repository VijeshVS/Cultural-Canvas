"use client";
import stateData from "./stateData.json";
import React from "react";
import { useRouter } from "next/navigation";

const states = stateData.stateDataFile;

console.log(states);

const Page = () => {

    const router = useRouter();
	return (
		<div className="flex flex-col min-h-screen pt-36 px-24">
			<div className="grid grid-cols-4 gap-4 text-center">
				{states.map((state) => {
					return (
						<div
                        onClick={()=>{router.push(`/state/${state.slug}`)}}
							key={state.slug}
							className="bg-yellow-200 bg-opacity-80 rounded-md shadow-md py-6 text-3xl font-semibold hover:scale-110 duration-300 transition-all hover:bg-yellow-300 cursor-pointer"
						>
							{state.slug.charAt(0).toUpperCase()}
							{state.slug.slice(1)}
							<div className="text-[#4d1414] text-xl">{state.title}</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Page;
