import React from "react";
import { Search, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { WatchlistItem } from "./WatchlistItem";
import { watchlistData } from "@/data/dummy-data";

export const Watchlist = () => {
  return (
    <aside className="w-[400px] bg-white border-r border-gray-200 flex flex-col flex-shrink-0 h-full overflow-hidden">
      {/* Search Bar */}
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

      {/* Watchlist Header */}
      <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between flex-shrink-0">
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-700">Watchlist 1</span>
          <span className="text-xs text-gray-400">(6 / 250)</span>
        </div>
        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center">
          + New group
        </button>
      </div>

      {/* Default Section */}
      <div className="px-4 py-2 bg-gray-50 text-xs text-gray-600 flex-shrink-0">
        Default (6)
      </div>

      {/* Watchlist Items */}
      <div className="flex-1 overflow-y-auto">
        {watchlistData.map((stock, index) => (
          <WatchlistItem key={index} stock={stock} />
        ))}
      </div>

      {/* Pagination */}
      <div className="border-t border-gray-200 px-4 py-3 flex items-center justify-between flex-shrink-0">
        <div className="flex items-center space-x-1">
          {[1, 2, 3, 4, 5, 6, 7].map((page) => (
            <button
              key={page}
              className={`w-8 h-8 rounded text-sm ${
                page === 1
                  ? "bg-orange-500 text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {page}
            </button>
          ))}
        </div>
        <Button className="text-gray-600 hover:text-gray-800">
          <MoreVertical className="h-4 w-4" />
        </Button>
      </div>
    </aside>
  );
};
