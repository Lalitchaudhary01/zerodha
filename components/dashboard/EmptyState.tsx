import React from "react";
import { Button } from "@/components/ui/button";

export const EmptyState = () => {
  return (
    <div className="mt-16 text-center">
      <div className="inline-flex items-center justify-center w-40 h-40 mb-8">
        <svg viewBox="0 0 200 200" className="text-gray-300">
          <rect
            x="20"
            y="80"
            width="50"
            height="100"
            fill="currentColor"
            opacity="0.2"
            rx="4"
          />
          <rect
            x="80"
            y="60"
            width="40"
            height="120"
            fill="currentColor"
            opacity="0.2"
            rx="4"
          />
          <rect
            x="130"
            y="40"
            width="50"
            height="140"
            fill="currentColor"
            opacity="0.2"
            rx="4"
          />
          <path
            d="M 20 160 L 40 140 L 60 150 L 80 130 L 100 135 L 120 125 L 140 115 L 160 105 L 180 100"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            opacity="0.3"
          />
        </svg>
      </div>
      <p className="text-gray-600 text-base mb-2">
        You don't have any stocks in your DEMAT yet. Get started
      </p>
      <p className="text-gray-600 text-base mb-8">
        with absolutely free equity investments.
      </p>
      <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 rounded">
        Start investing
      </Button>
    </div>
  );
};
