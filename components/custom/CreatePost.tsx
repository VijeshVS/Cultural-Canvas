"use client";

import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const CreatePost = () => {
	const router = useRouter();
	return (
		<div className="fixed top-16 right-24 z-50">
			<button
				className="flex flex-row space-x-2 px-6 py-2 text-[#4d1414] bg-yellow-300 rounded-full hover:scale-110 font-semibold hover:bg-yellow-400  transition-all duration-300"
				onClick={() => {
					router.push("/create");
				}}
			>
				<Plus />
				<div>Create Post</div>
			</button>
		</div>
	);
};

export default CreatePost;
