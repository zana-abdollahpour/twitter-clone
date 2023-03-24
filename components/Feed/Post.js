import React from "react";
import Image from "next/image";

import {
  ChartBarIcon,
  ChatBubbleLeftIcon,
  EllipsisHorizontalIcon,
  HeartIcon,
  ShareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

export default function Post({ post }) {
  return (
    <div className="flex p-3 border-b border-gray-200 cursor-pointer">
      <Image
        src={post.userImg}
        alt="user image"
        className="mr-4 rounded-full h-11 w-11 "
      />

      {/* RIGHT SIDE */}
      <div className="flex flex-col items-start">
        {/* HEADER */}
        <div className="flex items-center justify-between">
          {/* POST USER INFO */}
          <div className="flex items-center space-x-1 whitespace-nowrap">
            <h4 className="font-bold text-[15x] sm:text-[16px] hover:underline">
              {post.name}
            </h4>
            <span className="text-sm sm:text-[15px]">@{post.username} - </span>
            <span className="text-sm sm:text-[15px] hover:underline">
              {post.timestamp}
            </span>
          </div>
          {/* ICON */}
          <EllipsisHorizontalIcon className="flex items-center justify-center w-10 h-10 p-2 ml-auto rounded-full cursor-pointer hover:bg-sky-100 hover:text-sky-500" />
        </div>
        {/* POST TEXT */}
        <p className="text-gray-800 text-[15px] sm:text-[16px] mb-2">
          {post.text}
        </p>

        {/* POST IMAGE */}
        <Image
          src={post.img}
          alt="post image"
          height="440"
          width="440"
          className="rounded-2xl"
        />

        {/* ICONS */}
        <div className="flex justify-between w-full p-2 text-gray-500 ">
          <ChatBubbleLeftIcon className="flex items-center justify-center p-2 rounded-full cursor-pointer h-9 w-9 hover:bg-sky-100 text-sky-500" />
          <TrashIcon className="flex items-center justify-center p-2 text-blue-500 rounded-full cursor-pointer h-9 w-9 hover:text-red-600 hover:bg-red-100" />
          <HeartIcon className="flex items-center justify-center p-2 text-blue-500 rounded-full cursor-pointer h-9 w-9 hover:text-red-600 hover:bg-red-100" />
          <ShareIcon className="flex items-center justify-center p-2 rounded-full cursor-pointer h-9 w-9 hover:bg-sky-100 text-sky-500" />
          <ChartBarIcon className="flex items-center justify-center p-2 rounded-full cursor-pointer h-9 w-9 hover:bg-sky-100 text-sky-500" />
        </div>
      </div>
    </div>
  );
}
