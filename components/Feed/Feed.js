import React from "react";
import { SparklesIcon } from "@heroicons/react/24/outline";

import Input from "./Input";
import Post from "./Post";

import myImg from "../../public/images/me.png";
import post1 from "../../public/images/post1.jpg";
import post2 from "../../public/images/post2.jpg";

export default function Feed() {
  const posts = [
    {
      id: "1",
      name: "Zana AP",
      username: "Zana_AP",
      userImg: myImg,
      img: post1,
      text: "nice view!",
      timestamp: "4 hours ago",
    },
    {
      id: "2",
      name: "Zana AP",
      username: "Zana_AP",
      userImg: myImg,
      img: post2,
      text: "great view!",
      timestamp: "14 hours ago",
    },
  ];

  return (
    <div className="xl:ml-[370px] border-gray-200 border-x xl:min-w-[576px] sm:ml-[74px] flex-grow max-w-xl">
      <div className="sticky top-0 z-50 flex items-center px-3 py-2 bg-white border-b border-gray-200">
        <h2 className="text-lg font-bold cursor-pointer sm:text-xl">Home</h2>
        <div className="flex items-center justify-center ml-auto rounded-full cursor-pointer w-9 h-9 xl:h-auto xl:w-auto hover:bg-gray-200 xl:p-3">
          <SparklesIcon className="h-5" />
        </div>
      </div>
      <Input />
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
