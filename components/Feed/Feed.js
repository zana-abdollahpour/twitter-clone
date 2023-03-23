import React from "react";
import { SparklesIcon } from "@heroicons/react/24/outline";

import Input from "./Input";

export default function Feed() {
  return (
    <div className="xl:ml-[370px] border-gray-200 border-x xl:min-w-[576px] sm:ml-[74px] flex-grow max-w-xl">
      <div className="sticky top-0 z-50 flex items-center px-3 py-2 bg-white border-b border-gray-200">
        <h2 className="text-lg font-bold cursor-pointer sm:text-xl">Home</h2>
        <div className="flex items-center justify-center ml-auto rounded-full cursor-pointer w-9 h-9 xl:h-auto xl:w-auto hover:bg-gray-200 xl:p-3">
          <SparklesIcon className="h-5" />
        </div>
      </div>
      <Input />
    </div>
  );
}
