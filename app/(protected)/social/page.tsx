"use client";
import React, { useEffect, useState } from "react";
import { Heart, Heart as HeartFilled, UserCircle } from "lucide-react";
import CreatePost from "@/components/custom/CreatePost";
import { getPosts, updateLikes } from "@/lib/actions/main";
import Spinner from "@/components/Loading";
import { convertToRawGitHubURL } from "@/lib/utils";
import { useRouter } from "next/navigation";

const Page = () => {
	const [data, setData] = useState<any>([]);
	const [loading, setLoading] = useState(true);
	const router = useRouter();

	// Load likes from local storage and initialize the state
	const loadLikesFromLocalStorage = () => {
		const savedLikes = JSON.parse(localStorage.getItem("likedPosts") || "[]");
		return savedLikes;
	};

	const saveLikesToLocalStorage = (updatedLikes: number[]) => {
		localStorage.setItem("likedPosts", JSON.stringify(updatedLikes));
	};

	useEffect(() => {
		getPosts().then((res) => {
			if (res.status === 200) {
				// Load existing likes from localStorage
				const savedLikes = loadLikesFromLocalStorage();

				// Initialize liked state for each post based on localStorage
				const postsWithLikedState = res.posts.map((post: any) => {
					const liked = savedLikes.includes(post.id); // Check if the post is liked
					return {
						...post,
						liked,
					};
				});

				setData(postsWithLikedState);
				setLoading(false);
			}
		});
	}, []);

	// const wordsArray: string[] = str.split(" ");

	const handleLike = async (postId: number) => {
		try {
			const updatedPosts = data.map((post: any) => {
				if (post.id === postId) {
					const newLikedState = !post.liked;
					const updatedPost = {
						...post,
						likes: newLikedState ? post.likes + 1 : post.likes - 1,
						liked: newLikedState,
					};

					// Save to local storage
					const savedLikes = loadLikesFromLocalStorage();
					if (newLikedState) {
						savedLikes.push(postId);
					} else {
						const index = savedLikes.indexOf(postId);
						if (index > -1) savedLikes.splice(index, 1);
					}
					saveLikesToLocalStorage(savedLikes);

					return updatedPost;
				}
				return post;
			});

			setData(updatedPosts);

			// Update likes in the backend
			await updateLikes(
				postId,
				!data.find((post: any) => post.id === postId)?.liked
			); // Pass true if currently unliked, false if liked
		} catch (error) {
			console.error("Failed to update likes", error);
		}
	};

	if (loading) return <Spinner />;

	return (
		<div className="min-h-screen flex flex-col pt-36 px-24 items-center">
			<CreatePost />
			<div className="h-[65vh] overflow-scroll scrollbar-hide flex flex-col items-center">
				<h2 className="text-center text-[#4d1414] font-semibold text-6xl ">
					What&apos;s the buzz?
				</h2>
				<p className="w-2/3 text-lg text-center font-medium">
					Dive into a vibrant feed full of inspiration, joy, and unforgettable
					moments! From golden sunsets to thrilling adventures, heartwarming
					art, and delicious foodie escapades—this is your space to connect,
					celebrate, and share the magic of everyday life. 🌈✨
				</p>
				<div className="grid grid-cols-4 gap-6 mt-6 p-2">
					{data.map((item: any) => (
						<div
							key={item.id}
							className="flex flex-col rounded-xl bg-white shadow-lg w-full"
						>
							<div className="flex flex-row justify-between p-2">
								<div
									onClick={() =>
										router.push(`/user/${item.user.username.toLowerCase()}`)
									}
									className="flex flex-row cursor-pointer space-x-2 items-center"
								>
									<UserCircle />
									<div className="italic">{item.user.name}</div>
								</div>
								<div
									className="text-pink-500 flex flex-row space-x-2 items-center cursor-pointer"
									onClick={() => handleLike(item.id)}
								>
									{item.liked ? <HeartFilled fill="#ec4899" /> : <Heart />}
									<div>{item.likes}</div>
								</div>
							</div>
							<div
								className="w-full h-48 bg-cover bg-center"
								style={{
									backgroundImage: `url(${convertToRawGitHubURL(
										item.pictures[0].image_url
									)})`,
								}}
							></div>
							<div className="p-2">
								<span className="font-bold italic">{item.state} </span>
								{item.caption}
								<div className="mt-2">
									{item.tags.split(" ").map((x: string) => (
										<span key={x} className="text-blue-600 mr-2">
											#{x}
										</span>
									))}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Page;
