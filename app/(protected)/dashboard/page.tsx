import React from "react";
import { Mail, Phone, UserCircle } from "lucide-react";
import Image from "next/image";

const page = () => {
	return (
		<div className="min-h-screen flex flex-row pt-36 px-36 gap-6">
			<div className="flex flex-col w-1/4 bg-opacity-30 backdrop-blur-sm h-[60vh] rounded-lg bg-yellow-400 border-2 border-yellow-500 p-4 space-y-2">
				<div className="flex flex-row items-center space-x-2 text-[#4d1414]">
					<UserCircle size={50} />
					<div className="flex flex-col -space-y-1 text-left">
						<div className="text-2xl font-bold">Oojam Chaudhary</div>
						<div className="text-md font-medium italic underline">
							@oojamchaudhary69
						</div>
					</div>
				</div>
				<div className="flex flex-row items-center space-x-2 text-[#4d1414]"></div>
				<div className="flex flex-row items-center space-x-2 text-[#4d1414]">
					<Mail size={20} />
					<div className="text-lg font-medium ">oojamchaudhary@gmail.com</div>
				</div>
				<div className="flex flex-row items-center space-x-2 text-[#4d1414]">
					<Phone size={20} />
					<div className="text-lg font-medium ">+91 92390 89089</div>
				</div>
				<div className="flex h-full flex-row items-center space-x-2 justify-center">
					<Image
						src={"/statemap/rajasthan.png"}
						width={280}
						height={100}
						alt="kjbwed"
					/>
				</div>
			</div>
			<div className="w-3/4 h-[60vh] bg-yellow-300 bg-opacity-20 backdrop-blur-sm border-2 border-yellow-500 rounded-lg p-4">
				<div className="flex flex-col">
					<div className="font-semibold text-xl text-[#4d1414]">My Badges</div>
					<div className="flex flex-row h-[10vh] p-2 my-2 rounded-md bg-yellow-50 border border-yellow-500 backdrop-blur-sm overflow-scroll bg-opacity-70 -space-x-2">
						{/* add badges here */}
						<Image
							src={"/states/westbengal.jpg"}
							width={70}
							height={30}
							alt="ljhe"
							className="rounded-full"
						/>
						<Image
							src={"/states/westbengal.jpg"}
							width={70}
							height={30}
							alt="ljhe"
							className="rounded-full"
						/>
					</div>
					<div></div>
				</div>
			</div>
		</div>
	);
};

export default page;
