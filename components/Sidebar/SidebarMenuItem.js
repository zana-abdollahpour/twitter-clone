import React from "react";

export default function SidebarMenuItem({ text, Icon, active }) {
  return (
    <div className="flex items-center justify-center w-12 h-12 space-x-3 text-lg text-gray-700 rounded-full cursor-pointer hover:bg-gray-200 xl:w-auto xl:h-auto xl:p-3 xl:justify-start">
      <Icon className="h-7" />
      <span className={`${active ? "font-bold" : ""} hidden xl:inline`}>
        {text}
      </span>
    </div>
  );
}
