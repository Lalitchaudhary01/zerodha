"use client";
import React, { useContext } from "react";
import { Search, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { WatchlistItem } from "./WatchlistItem";
import { watchlistData } from "@/data/dummy-data";
import GeneralContext from "./GeneralContext";
import { DoughnutChart } from "./DoughnutChart";

export const WatchList: React.FC = () => {
  const generalCtx = useContext(GeneralContext);
  const [activePage, setActivePage] = React.useState(1);

  const handleBuyNow = (uid: string) => {
    generalCtx.openBuyWindow(uid);
  };

  return (
    <aside className="w-[400px] bg-white border-r border-gray-200 flex flex-col flex-shrink-0 h-full overflow-hidden">
      {/* 🔍 Search Bar */}
      <div className="p-3 border-b border-gray-200 flex-shrink-0">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search eg: infy bse, nifty fut, index fund, etc"
            className="pl-10 pr-10 h-10 text-sm border-gray-300"
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
            Ctrl + K
          </button>
        </div>
      </div>

      {/* 🧾 Watchlist Header */}
      <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between flex-shrink-0">
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-700">Watchlist 2</span>
          <span className="text-xs text-gray-400">(0 / 250)</span>
        </div>
        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center">
          + New group
        </button>
      </div>

      {/* 📂 Default Section */}
      <div className="px-4 py-2 bg-gray-50 text-xs text-gray-600 flex-shrink-0">
        Default (6)
      </div>

      {/* 📊 Doughnut Chart */}
      {/* <div className="p-4 border-b border-gray-200 flex items-center justify-center">
        <div className="w-40 h-40">
          <DoughnutChart />
        </div>
      </div> */}

      {/* 🧠 Watchlist Items */}
      <div className="flex-1 overflow-y-auto">
        {activePage === 1 &&
          watchlistData.map((stock, index) => (
            <div
              key={index}
              className="flex items-center justify-between px-4 py-2 hover:bg-gray-50 transition-all duration-150"
            >
              <WatchlistItem stock={stock} />
              <Button
                variant="outline"
                size="sm"
                className="text-xs text-orange-600 border-orange-400 hover:bg-orange-50"
                onClick={() => handleBuyNow(stock.uid)}
              >
                Buy Now
              </Button>
            </div>
          ))}

        {activePage !== 1 && (
          <div className="flex flex-col items-center justify-center h-full py-20">
            <div className="w-16 h-16 mb-4 text-gray-300">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M3 7h18M3 12h18M3 17h18" strokeLinecap="round" />
              </svg>
            </div>
            <p className="text-gray-500 text-sm">
              You don't have any stocks in your watchlist.
            </p>
            <Button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white">
              Add a stock
            </Button>
          </div>
        )}
      </div>

      {/* ⏩ Pagination */}
      <div className="border-t border-gray-200 px-4 py-3 flex items-center justify-between flex-shrink-0">
        <div className="flex items-center space-x-1">
          {[1, 2, 3, 4, 5, 6, 7].map((page) => (
            <button
              key={page}
              onClick={() => setActivePage(page)}
              className={`w-8 h-8 rounded text-sm font-medium transition-colors ${
                page === activePage
                  ? "bg-orange-500 text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {page}
            </button>
          ))}
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="text-gray-600 hover:text-gray-800"
        >
          <MoreVertical className="h-4 w-4" />
        </Button>
      </div>
    </aside>
  );
};
