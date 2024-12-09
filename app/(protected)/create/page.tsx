"use client";

import Image from "next/image";
import React, { useState } from "react";

const CreatePostPage = () => {
	const [caption, setCaption] = useState("");
	const [hashtags, setHashtags] = useState("");
	const [imageLink, setImageLink] = useState("");

    const convertToRawGitHubURL = (url: string): string => {
		try {
			const githubPrefix = "https://github.com/";
			const rawPrefix = "https://raw.githubusercontent.com/";

			if (url.startsWith(githubPrefix)) {
				const parts = url.replace(githubPrefix, "").split("/");
				if (parts.length >= 5 && parts[2] === "blob") {
					const [username, repo, , branch, ...pathParts] = parts;
					return `${rawPrefix}${username}/${repo}/${branch}/${pathParts.join("/")}`;
				}
			}
			return url; // Return the original URL if it's not a valid GitHub link
		} catch (error) {
			console.error("Error converting GitHub URL:", error);
			return url;
		}
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

        interface PostData {
            caption: string;
            hashtags: string[];
            imageLink: string;
        }

        const postData: PostData = {
            caption,
            hashtags: hashtags
                .split(" ") // Split by spaces
                .map((tag) => tag.trim()) // Trim any leading/trailing spaces
                .filter((tag) => tag), // Remove empty strings
            imageLink: convertToRawGitHubURL(imageLink),
        };
        

		console.log("Post Data:", postData);
		alert("Your post is live! 🎉");

		// Reset form
		setCaption("");
		setHashtags("");
		setImageLink("");
	};

	return (
		<div className="min-h-screen flex flex-col items-center pt-36 px-24">
			<h2 className="text-center text-[#4d1414] font-bold text-5xl mb-2">
				✨ Create Your Magic ✨
			</h2>
			<p className="text-lg text-center text-yellow-700 font-medium mb-8">
				🎭 Capture your moments, sprinkle some hashtags, and upload your
				masterpiece! Let the world see your sparkle. 🌟
			</p>
			<form
				onSubmit={handleSubmit}
				className="flex flex-col bg-white bg-opacity-40 backdrop-blur-sm shadow-lg rounded-3xl p-8 space-y-6 w-2/3 border-2 border-yellow-400"
			>
				<div className="flex flex-row justify-around gap-6">
					<div className="flex flex-col w-1/2">
						<div className="flex flex-col">
							<label
								htmlFor="caption"
								className="font-medium text-yellow-600 mb-2"
							>
								📝 Caption
							</label>
							<textarea
								id="caption"
								value={caption}
								onChange={(e) => setCaption(e.target.value)}
								placeholder="What’s on your mind? 🌈"
								className="border border-yellow-300 rounded-lg p-3 h-28 bg-yellow-50 focus:outline-none focus:ring focus:ring-yellow-200"
								required
							/>
						</div>

						<div className="flex flex-col mt-4">
							<label
								htmlFor="hashtags"
								className="font-medium text-yellow-600 mb-2"
							>
								🏷️ Hashtags
							</label>
							<input
								type="text"
								id="hashtags"
								value={hashtags}
								onChange={(e) => setHashtags(e.target.value)}
								placeholder="Add some tags for extra vibes! (e.g., #joy, #adventure)"
								className="border border-yellow-300 rounded-lg p-3 bg-yellow-50 focus:outline-none focus:ring focus:ring-yellow-200"
							/>
						</div>
					</div>

					<div className="flex flex-col w-1/2">
						<label
							htmlFor="imageLink"
							className="font-medium text-yellow-600 mb-2"
						>
							📸 Image Link
						</label>
						<input
							type="text"
							id="imageLink"
							value={imageLink}
							onChange={(e) => setImageLink(e.target.value)}
							placeholder="Paste your image link from GitHub!"
							className="border border-yellow-300 rounded-lg p-3 bg-yellow-50 focus:outline-none focus:ring focus:ring-yellow-200"
							required
						/>
						{imageLink && (
							<Image
                                src={convertToRawGitHubURL(imageLink)}
								alt="Preview"
                                width={427}
                                height={200}
								className="mt-4 rounded-lg max-h-64 object-cover shadow-md"
							/>
						)}
					</div>
				</div>

				<div className="flex justify-center items-center">
					<button
						type="submit"
						className="bg-yellow-300 text-[#4d1414] font-bold rounded-full w-fit px-4 py-2 hover:bg-yellow-400 transition-all duration-300 transform hover:scale-110"
					>
						🚀 Share Your Joy
					</button>
				</div>
			</form>
		</div>
	);
};

export default CreatePostPage;
