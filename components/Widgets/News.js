/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function News({ article }) {
  return (
    <a href={article.url} target="_blank">
      <div className="flex items-center justify-between px-4 py-2 space-x-1 transition duration-200 hover:bg-gray-200">
        <div className="space-y-0.5 mr-4">
          <h6 className="text-sm font-bold">{article.title}</h6>
          <p className="text-xs font-medium text-gray-500">
            {article.source.name}
          </p>
        </div>
        <img
          src={article.urlToImage}
          alt="Image"
          width="140"
          height="140"
          className="rounded-xl"
        />
      </div>
    </a>
  );
}
