import React from "react";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function Widgets() {
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
    </div>
  );
}
