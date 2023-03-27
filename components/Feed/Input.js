import React from "react";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";

import { PhotoIcon } from "@heroicons/react/24/outline";
import { FaceSmileIcon } from "@heroicons/react/24/outline";

export default function Input() {
  const { data: session } = useSession();

  return (
    <>
      {session && (
        <div className="flex p-3 space-x-3 border-b border-gray-200">
          <Image
            onClick={signOut}
            src={session.user.image}
            alt="profile Image"
            width="40"
            height="40"
            className="rounded-full cursor-pointer h-11 w-11 hover:brightness-95"
          />
          <div className="w-full divide-y divide-gray-200">
            <div className="">
              <textarea
                className="w-full text-lg tracking-wide placeholder-gray-700 border-none focus:ring-0 min-h-[50px] text-gray-700"
                rows="2"
                placeholder="What's happening?"
              ></textarea>
            </div>
            <div className="flex items-center justify-between pt-2.5">
              <div className="flex">
                <PhotoIcon className="flex items-center justify-center w-10 h-10 p-2 ml-auto rounded-full cursor-pointer hover:bg-sky-100 text-sky-500" />
                <FaceSmileIcon className="flex items-center justify-center w-10 h-10 p-2 ml-auto rounded-full cursor-pointer hover:bg-sky-100 text-sky-500" />
              </div>
              <button className="bg-blue-400 text-white px-4 py-1.5 rounded-full font-bold shadow-md hover:brightness-95 disabled:opacity-50">
                Tweet
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
