"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const page = () => {
	return (
		<div className="min-h-screen flex flex-col items-center p-6 space-y-8 pt-36 px-24">
			<div className="text-center space-y-2">
				<h1 className="text-4xl font-extrabold tracking-wide flex flex-row justify-center items-center space-x-2 text-[#4d1414]">
					<div>Namaste! Let&apos;s Connect! 🌺</div>
				</h1>
				<p className="text-xl text-[#4d1414]">
					Whether it&apos;s a cheerful <b>Diwali greeting</b>, a curious query
					about our cultural treasures, or a dash of festival cheer, we&apos;re
					all ears (and tikkas)! 🪔 Fill out the form, and we&apos;ll get back
					to you quicker than a kite soars during <b>Makar Sankranti</b>!
				</p>
			</div>

			{/* Contact Form Card */}
			<Card className="w-[50vw] bg-yellow-300 bg-opacity-30 backdrop-blur-sm rounded-lg shadow-lg">
				<CardHeader>
					<CardTitle className="text-[#4d1414]">
						Get in Touch with Sanskriti
					</CardTitle>
				</CardHeader>
				<CardContent>
					<form className="flex flex-col space-y-2">
						{/* Name and Email Fields Side by Side */}
						<div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
							{/* Name Field */}
							<div className="flex-1">
								<label
									htmlFor="name"
									className="block text-sm font-medium text-[#4d1414]"
								>
									Your Name
								</label>
								<Input
									id="name"
									type="text"
									placeholder="What shall we call you? 🌼"
									className="mt-1 bg-yellow-100 text-[#4d1414]"
								/>
							</div>

							{/* Email Field */}
							<div className="flex-1">
								<label
									htmlFor="email"
									className="block text-sm font-medium text-[#4d1414]"
								>
									Your Email
								</label>
								<Input
									id="email"
									type="email"
									placeholder="Promise, no spam chakris! 🎇"
									className="mt-1 bg-yellow-100 text-[#4d1414]"
								/>
							</div>
						</div>

						{/* Message Field */}
						<div>
							<label
								htmlFor="message"
								className="block text-sm font-medium text-[#4d1414]"
							>
								Your Message
							</label>
							<Textarea
								id="message"
								placeholder="Share your festive vibes with us! ✨"
								rows={2}
								className="mt-1 bg-yellow-100 text-[#4d1414]"
							/>
						</div>

						{/* Submit Button */}
						<div className="flex justify-center items-center">
							<button className="w-fit flex justify-center items-center font-bold bg-yellow-400 hover:bg-yellow-500 py-1 px-3 rounded-lg transition-all shadow-md text-[#4d1414] mt-2">
								Send My Message! 🪷
							</button>
						</div>
					</form>
				</CardContent>
			</Card>

			{/* Additional Contact Options */}
			<div className="text-center space-y-2">
				<p className="text-[#4d1414]">
					Prefer traditional routes? 📞 Give us a call at{" "}
					<span className="text-yellow-600 font-bold">+91 9239 089 089</span>
				</p>
				<p className="text-[#4d1414]">
					Or write to us at{" "}
					<a
						href="mailto:contact@sanskriti.com"
						className="text-yellow-600 font-bold underline"
					>
						contact@sanskriti.com
					</a>
				</p>
			</div>
		</div>
	);
};

export default page;
