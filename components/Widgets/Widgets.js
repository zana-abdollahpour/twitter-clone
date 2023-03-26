/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

import News from "./News";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function Widgets({ newsResults, userResults }) {
  const [articleNum, setArticleNum] = useState(3);
  const [userNum, setUserNum] = useState(3);

  return (
    <div className="hidden lg:inline xl:w-[600px] ml-8 space-y-5">
      <div className="w-[90%] xl:first-letter:w-[75%] sticky top-0 bg-white py-1.5 z-50">
        <div className="relative flex items-center p-3 rounded-full">
          <MagnifyingGlassIcon className="z-50 h-5 text-gray-500 " />
          <input
            type="text"
            placeholder="Search Twitter"
            className="absolute inset-0 text-gray-700 bg-gray-100 border-gray-500 rounded-full pl-11 focus:shadow-lg focus:bg-white"
          />
        </div>
      </div>

      <div className="space-y-3 text-gray-700 bg-gray-100 rounded-xl pt-2 w-[90%] xl:w-[75%]">
        <h4 className="px-4 text-xl font-bold">What&apos;s happening</h4>
        {newsResults.slice(0, articleNum).map((article) => (
          <News key={article.title} article={article} />
        ))}
        <button
          className="pb-3 pl-4 text-blue-300 hover:text-blue-400"
          onClick={() => setArticleNum((prevState) => prevState + 3)}
        >
          Show more
        </button>
      </div>

      <div className="sticky top-16 space-y-3 text-gray-700 bg-gray-100 pt-2 rounded-xl w-[90%] xl:w-[75%]">
        <h4 className="px-4 text-xl font-bold">Who to follow</h4>
        {userResults.slice(0, userNum).map((randomUser) => (
          <div
            key={randomUser.login.username}
            className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-200"
          >
            <img
              src={randomUser.picture.thumbnail}
              width="40"
              height="40"
              alt="User image thumbnail"
              className="rounded-full"
            />
            <div className="ml-4 leading-5 truncate">
              <h4 className="font-bold hover:underline text-[14px] truncate">
                {randomUser.login.username}
              </h4>
              <h5 className="text-[13px] text-gray-500 truncate">
                {randomUser.name.first + " " + randomUser.name.last}
              </h5>
            </div>
            <button className="ml-auto text-sm text-white bg-black rounded-full px-3.5 py-1.5 font-bold">
              Follow
            </button>
          </div>
        ))}
        <button
          className="pb-3 pl-4 text-blue-300 hover:text-blue-400"
          onClick={() => setUserNum((prevState) => prevState + 3)}
        >
          Show more
        </button>
      </div>
    </div>
  );
}
