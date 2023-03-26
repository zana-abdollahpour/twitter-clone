import React from "react";
import Image from "next/image";

import SidebarMenuItem from "./SidebarMenuItem";

import twitterLogo from "../../public/images/twitter-logo.png";
import { HomeIcon } from "@heroicons/react/24/solid";
import { HashtagIcon } from "@heroicons/react/24/outline";
import { BellIcon } from "@heroicons/react/24/outline";
import { InboxIcon } from "@heroicons/react/24/outline";
import { BookmarkIcon } from "@heroicons/react/24/outline";
import { ClipboardIcon } from "@heroicons/react/24/outline";
import { UserIcon } from "@heroicons/react/24/outline";
import { EllipsisHorizontalCircleIcon } from "@heroicons/react/24/outline";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";

import myImg from "../../public/images/me.png";

const menuItems = [
  { text: "Home", Icon: HomeIcon, active: true },
  { text: "Explore", Icon: HashtagIcon },
  { text: "Notifications", Icon: BellIcon },
  { text: "Messages", Icon: InboxIcon },
  { text: "Bookmarks", Icon: BookmarkIcon },
  { text: "Lists", Icon: ClipboardIcon },
  { text: "Profile", Icon: UserIcon },
  { text: "More", Icon: EllipsisHorizontalCircleIcon },
];

export default function Sidebar() {
  return (
    <div className="fixed flex-col hidden h-full p-2 sm:flex xl:items-start xl:ml-20">
      {/* TWITTER LOGO */}
      <div>
        <Image
          src={twitterLogo}
          width="40"
          height="40"
          alt="Twitter Logo"
          className="w-12 h-12 p-0 rounded-full cursor-pointer hover:bg-blue-100 xl:w-auto xl:h-auto xl:p-3"
        ></Image>
      </div>

      {/* MENU */}
      <div className="mt-4 mb-2.5 xl:items-start">
        {menuItems.map((item) => (
          <SidebarMenuItem
            key={item.text}
            text={item.text}
            Icon={item.Icon}
            active={item.active}
          />
        ))}
      </div>

      {/* BUTTON */}
      <button className="hidden w-56 h-10 text-lg font-bold text-white bg-blue-400 rounded-full shadow-md hover:brightness-90 xl:inline">
        Tweet
      </button>

      {/* MINI-PROFILE */}
      <div className="flex items-center justify-center w-12 h-12 mt-auto text-gray-700 rounded-full cursor-pointer xl:justify-start hover:bg-gray-200 xl:w-auto xl:h-auto xl:p-3">
        <Image
          src={myImg}
          alt="profile Image"
          width="40"
          height="40"
          className="rounded-full xl:mr-2"
        />
        <div className="hidden leading-5 xl:inline">
          <h4 className="font-bold">Zana Abdollahpour</h4>
          <p className="text-gray-500">@Zana_AP</p>
        </div>
        <EllipsisHorizontalIcon className="hidden h-5 xl:ml-8 xl:inline" />
      </div>
    </div>
  );
}
