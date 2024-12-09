"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { register } from "@/lib/actions/auth";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const states = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];

const SignUpPage = () => {
  const router = useRouter();

  function registerHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const username = formData.get("username") as string;
    const state = formData.get("state") as string;
    const textarea = formData.get("textarea") as string;

    const res = register(name, username, email, password, state, textarea).then(
      (res) => {
        const statusCode = res.status;

        if (statusCode == 200) {
          localStorage.setItem("token", res.token);
          toast.success("Registered successfully !!");
          router.push("/dashboard");
        } else {
          toast.error("Server error");
        }
      }
    );

    toast.promise(res, {
      loading: "Registering !!",
    });
  }

  return (
    <div className="min-h-screen flex flex-col items-center p-6 space-y-8 pt-36 px-24">
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-extrabold tracking-wide flex flex-row justify-center items-center space-x-2 text-[#4d1414]">
          <div>Join the Sanskriti Family! 🌸</div>
        </h1>
        <p className="text-xl text-[#4d1414]">
          We&apos;re thrilled to have you! Sign up and become a part of our
          vibrant community, celebrating <b>festivals</b>, <b>art</b>, and more.
          🎉 Let&apos;s make magic together!
        </p>
      </div>

      {/* Sign Up Form Card */}
      <Card className="w-[50vw] bg-yellow-300 bg-opacity-30 backdrop-blur-sm rounded-lg shadow-lg">
        <CardHeader>
          <CardTitle className="text-[#4d1414]">Create Your Account</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={registerHandler} className="flex flex-col space-y-6">
            {/* Name and Email Fields in One Line */}
            <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
              <div className="flex-1">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[#4d1414]"
                >
                  Your Name
                </label>
                <Input
                  name="name"
                  id="name"
                  type="text"
                  placeholder="What shall we call you? 🌼"
                  className="mt-1 bg-yellow-100 text-[#4d1414]"
                />
              </div>

              <div className="flex-1">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[#4d1414]"
                >
                  Email Address
                </label>
                <Input
                  name="email"
                  id="email"
                  type="email"
                  placeholder="Promise, no spam chakris! 🎇"
                  className="mt-1 bg-yellow-100 text-[#4d1414]"
                />
              </div>
            </div>

            {/* Username and Password Fields in One Line */}
            <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
              <div className="flex-1">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-[#4d1414]"
                >
                  Choose a Username
                </label>
                <Input
                  name="username"
                  id="username"
                  type="text"
                  placeholder="Unique and festive, like you! 🌸"
                  className="mt-1 bg-yellow-100 text-[#4d1414]"
                />
              </div>

              <div className="flex-1">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-[#4d1414]"
                >
                  Password
                </label>
                <Input
                  name="password"
                  id="password"
                  type="password"
                  placeholder="Secure and strong like a diya flame 🔒"
                  className="mt-1 bg-yellow-100 text-[#4d1414]"
                />
              </div>
            </div>

            {/* State Dropdown */}
            <div>
              <label
                htmlFor="state"
                className="block text-sm font-medium text-[#4d1414]"
              >
                Select Your State
              </label>
              <select
                name="state"
                id="state"
                className="mt-1 bg-yellow-100 text-[#4d1414] p-2 rounded-md w-full"
              >
                <option value="">Select a state</option>
                {states.map((state, index) => (
                  <option key={index} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>

            {/* Bio Field (Optional) */}
            <div>
              <label
                htmlFor="bio"
                className="block text-sm font-medium text-[#4d1414]"
              >
                Tell us about yourself (Optional)
              </label>
              <Textarea
                name="textarea"
                id="bio"
                placeholder="Share your story or what excites you about Sanskriti! ✨"
                rows={3}
                className="mt-1 bg-yellow-100 text-[#4d1414]"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center items-center">
              <button
                type="submit"
                className="w-fit flex justify-center items-center font-bold bg-yellow-400 hover:bg-yellow-500 py-2 px-4 rounded-lg transition-all shadow-md text-[#4d1414] mt-4"
              >
                Sign Up Now! 🎉
              </button>
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Additional Options */}
      <div className="text-center space-y-2">
        <p className="text-[#4d1414]">
          Already have an account?{" "}
          <a href="/login" className="text-yellow-600 font-bold underline">
            Log in here! ✨
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
