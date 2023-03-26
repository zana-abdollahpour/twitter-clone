import React, { useState } from "react";

import News from "./News";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function Widgets({ newsResults }) {
  const [articleNum, setArticleNum] = useState(3);

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
        <h4 className="px-4 text-xl font-bold">What&apos;s happening?</h4>{" "}
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
    </div>
  );
}
