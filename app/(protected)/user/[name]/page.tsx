"use client";

import React, { useEffect, useState } from "react";
import { Heart, Mail, UserCircle } from "lucide-react";
import Image from "next/image";
import Spinner from "@/components/Loading";
import { convertToRawGitHubURL } from "@/lib/utils";
import dummydata from "../../../../public/users.json";

const Page = ({
  params,
}: {
  params: {
    name: string;
  };
}) => {
  const [loading, setLoading] = useState(true);
  const usernameToBeFound = params.name;
  const [userData, setUserData] = useState<any | null>(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    // Find the user based on the username
    const foundUser = dummydata.find((user) => user.username === usernameToBeFound);

    if (foundUser) {
      setUserData(foundUser);
    } else {
      setNotFound(true);
    }
    setLoading(false);
  }, [usernameToBeFound]);

  if (notFound) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-5xl font-bold text-red-500">User not found</h1>
      </div>
    );
  }

  if (loading || !userData) return <Spinner />;

  const { name, username, email, bio, state, posts, badges } = userData;

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
        <div className="flex flex-row items-center space-x-2 text-[#4d1414]">
          <Mail size={20} />
          <div className="text-base font-medium ">{email}</div>
        </div>
        <div className="flex flex-row">{bio.slice(0, 100)}</div>
        <div className="flex h-full flex-row items-center space-x-2 justify-center">
          <Image
            src={`/statemap/${state}.png`}
            width={280}
            height={100}
            alt={`${state} Map`}
          />
        </div>
      </div>
      <div className="w-3/4 h-[60vh] bg-yellow-300 bg-opacity-20 backdrop-blur-sm border-2 border-yellow-500 rounded-lg p-4 overflow-scroll">
        <div className="flex flex-col">
          <div className="font-semibold text-xl text-[#4d1414]">Badges</div>
          <div className="flex flex-row h-[10vh] p-2 my-2 rounded-md bg-yellow-50 border border-yellow-500 backdrop-blur-sm overflow-scroll bg-opacity-70 -space-x-2">
            {badges.map((badge: string, index: number) => (
              <Image
                key={index}
                src={`/badges/${badge}.jpg`}
                alt="badge"
                width={70}
                height={70}
                className=" rounded-full hover:scale-110 transition-all duration-300 ease-in-out hover:shadow-lg hover:z-10"
              />
            ))}
          </div>
          <div className="font-semibold text-xl text-[#4d1414]">
            Contributions
          </div>
          <div className="grid grid-cols-3 gap-6 mt-2 p-2">
            {posts.map((post: any, index: number) => (
              <div
                key={index}
                className="flex flex-col rounded-xl bg-white shadow-lg"
              >
                <div className="flex flex-row justify-between p-2">
                  <div className="flex flex-row space-x-2 items-center">
                    <UserCircle />
                    <div className="italic">{name}</div>
                  </div>
                  <div className="text-pink-500 flex flex-row space-x-2 items-center">
                    <Heart fill="#ec4899" />
                    <div>{post.likes}</div>
                  </div>
                </div>
                <div
                  className="w-full h-48 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${convertToRawGitHubURL(
                      post.image_url
                    )})`,
                  }}
                ></div>
                <div className="p-2">
                  <span className="font-bold italic">{state} </span>
                  {post.caption}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
