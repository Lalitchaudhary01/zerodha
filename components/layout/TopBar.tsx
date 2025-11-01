"use client";

import React from "react";
import { marketIndices } from "@/data/dummy-data";

export const TopBar = () => {
  return (
    <div className="bg-white border-b border-gray-200 px-4 py-2 flex items-center space-x-6 text-sm flex-shrink-0">
      {marketIndices.map((index) => (
        <div key={index.name} className="flex items-center space-x-2">
          <span className="font-medium text-gray-700">{index.name}</span>
          <span className="text-gray-900 font-semibold">
            {index.value.toFixed(2)}
          </span>
          <span
            className={`flex items-center ${
              index.change >= 0 ? "text-green-600" : "text-red-600"
            }`}
          >
            {index.change.toFixed(2)} ({index.changePct.toFixed(2)}%)
          </span>
        </div>
      ))}
    </div>
  );
};
