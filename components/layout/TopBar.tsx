"use client";

import React from "react";
import Menu from "./Menu";

const TopBar: React.FC = () => {
  return (
    <div className="flex items-center justify-between bg-white border-b border-gray-200 px-4 py-2 shadow-sm">
      {/* Indices Section */}
      <div className="flex gap-6">
        {/* NIFTY */}
        <div className="flex items-center gap-2">
          <p className="text-sm font-semibold text-gray-800">NIFTY 50</p>
          <p className="text-sm font-medium text-blue-600">{100.2}</p>
          <p className="text-xs text-green-500">+0.25%</p>
        </div>

        {/* SENSEX */}
        <div className="flex items-center gap-2">
          <p className="text-sm font-semibold text-gray-800">SENSEX</p>
          <p className="text-sm font-medium text-blue-600">{100.2}</p>
          <p className="text-xs text-red-500">-0.12%</p>
        </div>
      </div>

      {/* Menu Component */}
      <Menu />
    </div>
  );
};

export default TopBar;
