"use client";

import React, { useEffect, useState } from "react";
import { Heart, Mail, PencilLine, Phone, UserCircle } from "lucide-react";
import Image from "next/image";
import Spinner from "@/components/Loading";
import { getUser } from "@/lib/actions/main";

const data = [
  {
    id: 1,
    user: "samkit7",
    image: "/socials/samkit7/1.png",
    caption:
      "Exploring the beauty of sunsets! 🌅 Can't get enough of these golden hues.",
    like: 73,
  },
  {
    id: 2,
    user: "adventure_girl",
    image: "/socials/adventure_girl/1.png",
    caption:
      "Hiking up the trails was tough, but the view from the top? Worth every step. 🏔️",
    like: 120,
  },
  {
    id: 3,
    user: "foodie_fan",
    image: "/socials/foodie_fan/1.png",
    caption:
      "Tried the new vegan cafe in town. Delicious, sustainable, and worth every bite! 🥗🍴",
    like: 98,
  },
  {
    id: 4,
    user: "tech_guru",
    image: "/socials/tech_guru/1.png",
    caption:
      "Just unboxed the latest gadget in town. First impressions? Mind-blowing. 🤯📱",
    like: 150,
  },
  {
    id: 5,
    user: "artsy_soul",
    image: "/socials/artsy_soul/1.png",
    caption:
      "My latest painting inspired by Van Gogh's Starry Night. Art is therapy. 🎨✨",
    like: 85,
  },
  {
    id: 6,
    user: "wanderlust_diaries",
    image: "/socials/wanderlust_diaries/1.png",
    caption:
      "Roaming through the streets of Paris. The city of lights never fails to charm. 🇫🇷🗼",
    like: 200,
  },
  {
    id: 7,
    user: "fitness_freak",
    image: "/socials/fitness_freak/1.png",
    caption:
      "Early morning workout vibes. Consistency is the key to progress! 💪🏽🏋️‍♂️",
    like: 140,
  },
  {
    id: 8,
    user: "nature_lover",
    image: "/socials/nature_lover/1.png",
    caption:
      "Spotted this serene lake during my weekend getaway. Nature truly heals. 🌳🌊",
    like: 92,
  },
];

const page = () => {
  const [loading, setLoading] = useState(true);

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [state, setState] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");

  useEffect(() => {
    getUser(localStorage.getItem("token") || "").then((res) => {
      const data = res.data as {
        name: string;
        username: string;
        state: string;
        email: string;
        token: number;
        id: number;
        password: string;
        bio: string;
      };
      setName(data.name);
      setEmail(data.email);
      setState(data.state);
      setUsername(data.username);
      setBio(data.bio);
      setLoading(false);
    });
  }, []);

  if (loading) return <Spinner />;

  return (
    <div className="min-h-screen flex flex-row pt-36 px-24 gap-6">
      <div className="flex flex-col w-1/4 bg-opacity-30 backdrop-blur-sm h-[60vh] rounded-lg bg-yellow-400 border-2 border-yellow-500 p-4 space-y-2">
        <div className="flex flex-row items-center space-x-2 text-[#4d1414]">
          <UserCircle size={50} />
          <div className="flex flex-col -space-y-1 text-left">
            <div className="text-2xl font-bold">{name}</div>
            <div className="text-md font-medium italic underline">
              @{username}
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center space-x-2 text-[#4d1414]"></div>
        <div className="flex flex-row items-center space-x-2 text-[#4d1414]">
          <Mail size={20}/>
          <div className="text-base font-medium ">{email}</div>
        </div>
        <div className="flex flex-ro ">{bio.slice(0, 100)}</div>
        <div className="flex h-full flex-row items-center space-x-2 justify-center">
          <Image
            src={`/statemap/${state}.png`}
            width={280}
            height={100}
            alt="kjbwed"
          />
        </div>
      </div>
      <div className="w-3/4 h-[60vh] bg-yellow-300 bg-opacity-20 backdrop-blur-sm border-2 border-yellow-500 rounded-lg p-4 overflow-scroll">
        <div className="flex flex-col">
          <div className="font-semibold text-xl text-[#4d1414]">My Badges</div>
          <div className="flex flex-row h-[10vh] p-2 my-2 rounded-md bg-yellow-50 border border-yellow-500 backdrop-blur-sm overflow-scroll bg-opacity-70 -space-x-2">
            {/* add badges here */}
            <Image
              src={"/states/westbengal.jpg"}
              width={70}
              height={30}
              alt="ljhe"
              className="rounded-full hover:scale-110 transition-all duration-300 ease-in-out hover:shadow-lg hover:z-10"
            />
            <Image
              src={"/states/westbengal.jpg"}
              width={70}
              height={30}
              alt="ljhe"
              className="rounded-full"
            />
          </div>
          <div className="font-semibold text-xl text-[#4d1414]">
            My Contributions
          </div>
          <div className="grid grid-cols-3 gap-6 mt-2 p-2">
            {data.map((item) => (
              <div
                key={item.id}
                className="flex flex-col rounded-xl bg-white shadow-lg"
              >
                <div className="flex flex-row justify-between p-2">
                  <div className="flex flex-row space-x-2 items-center">
                    <UserCircle />
                    <div className="italic">{item.user}</div>
                  </div>
                  <div className="text-pink-500 flex flex-row space-x-2 items-center">
                    <Heart fill="#ec4899" />
                    <div>{item.like}</div>
                  </div>
                </div>
                <div
                  className="w-full h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.image})` }}
                ></div>
                <div className="p-2">
                  <span className="font-bold italic">{item.user} </span>
                  {item.caption}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
