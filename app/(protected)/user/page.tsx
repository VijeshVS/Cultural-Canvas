"use client";

import React, { useEffect, useState } from "react";
import { getAllUsers } from "@/lib/actions/main";
import { useRouter } from "next/navigation";
import Spinner from "@/components/Loading";
import dummydata from "../../../public/users.json";

const dummyData = dummydata;

const UsersPage = () => {
	// const [users, setUsers] = useState<{ username: string; state: string }[]>([]);
	const [loading, setLoading] = useState(true);
	const router = useRouter();

	// useEffect(() => {
	// 	getAllUsers().then((res) => {
	// 		if (res.status === 200) {
	// 			setUsers(res.data);
	// 		}
	// 		setLoading(false);
	// 	});
	// }, []);

	// if (loading) return <Spinner />;

	return (
		<div className="min-h-screen flex flex-col items-center pt-36 px-24">
			<h1 className="text-3xl font-bold mb-6 text-[#4d1414] drop-shadow-lg">
                Our Vibrant Family 🎨
			</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-8">
				{dummyData.map((user) => (
					<div
						onClick={() => router.push(`/user/${user.username.toLowerCase()}`)}
						key={user.username}
						className="p-2 bg-white rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
					>
						<div className="flex flex-row items-center justify-around">
							<div className="text-lg font-bold text-blue-600">
								@{user.username}
							</div>
							<div className="text-md text-gray-700 font-semibold">📍 {user.state}</div>
							<div className="text-center">
								<span className="px-2 py-1 text-sm font-semibold bg-yellow-300 rounded-md text-[#4d1414] transition-all duration-300 ease-in-out cursor-pointer">
									View Profile
								</span>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default UsersPage;
