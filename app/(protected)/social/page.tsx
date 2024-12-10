"use client";
import React, { useEffect, useState } from "react";
import { Heart, UserCircle } from "lucide-react";
import CreatePost from "@/components/custom/CreatePost";
import { getPosts } from "@/lib/actions/main";

const Page = () => {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    getPosts().then((res) => {
      if (res.status == 200) {
        setData(res.posts);
      }
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col pt-36 px-24 items-center">
      <CreatePost />
      <h2 className="text-center text-[#4d1414] font-semibold text-6xl">
        What&apos;s the buzz?
      </h2>
      <p className="w-2/3 text-lg text-center font-medium">
        Dive into a vibrant feed full of inspiration, joy, and unforgettable
        moments! From golden sunsets to thrilling adventures, heartwarming art,
        and delicious foodie escapades—this is your space to connect, celebrate,
        and share the magic of everyday life. 🌈✨
      </p>
      <div className="grid grid-cols-4 gap-6 h-[40vh] overflow-scroll mt-6 p-2">
        {data.map((item: any) => (
          <div
            key={item.id}
            className="flex flex-col rounded-xl bg-white shadow-lg"
          >
            <div className="flex flex-row justify-between p-2">
              <div className="flex flex-row space-x-2 items-center">
                <UserCircle />
                <div className="italic">{item.user.name}</div>
              </div>
              <div className="text-pink-500 flex flex-row space-x-2 items-center">
                <Heart fill="#ec4899" />
                <div>{item.likes}</div>
              </div>
            </div>
            <div
              className="w-full h-48 bg-cover bg-center"
              style={{ backgroundImage: `url(${item.pictures[0].image_url})` }}
            ></div>
            <div className="p-2">
              <span className="font-bold italic">{item.state} </span>
              {item.caption}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
