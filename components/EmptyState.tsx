import React from "react";

export default function EmptyState() {
  return (
    <div className="text-center py-10">
      <div className="mx-auto w-40 h-40 rounded-md flex items-center justify-center bg-slate-50 text-slate-300">
        {/* suitcase icon placeholder */}
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
          <path
            d="M7 7V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"
            stroke="#cbd5e1"
            strokeWidth="1.5"
          ></path>
          <rect
            x="3"
            y="7"
            width="18"
            height="12"
            rx="2"
            stroke="#cbd5e1"
            strokeWidth="1.5"
          ></rect>
        </svg>
      </div>

      <h3 className="text-lg font-semibold mt-4">
        You don't have any stocks in your DEMAT yet.
      </h3>
      <p className="text-sm text-slate-500 mt-2">
        Get started with absolutely free equity investments.
      </p>
      <div className="mt-4">
        <button className="bg-sky-600 text-white px-4 py-2 rounded">
          Start investing
        </button>
      </div>
    </div>
  );
}
