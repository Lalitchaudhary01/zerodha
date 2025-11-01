import React from "react";
import { Search, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { WatchlistItem } from "./WatchlistItem";
import { watchlistData } from "@/data/dummy-data";

export const Watchlist = () => {
  return (
    <div className="w-[420px] bg-white border-r border-gray-200 flex flex-col">
      {/* Search Bar */}
      <div className="p-4 border-b border-gray-200">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search eg: infy bse, nifty fut, index fund, etc"
            className="pl-10 pr-4"
          />
        </div>
      </div>

      {/* Watchlist Header */}
      <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600">Watchlist 1</span>
          <span className="text-xs text-gray-400">(6 / 250)</span>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="text-blue-600 hover:text-blue-700"
        >
          <Plus className="h-4 w-4 mr-1" />
          New group
        </Button>
      </div>

      {/* Default Section */}
      <div className="px-4 py-2 bg-gray-50 border-b border-gray-200">
        <span className="text-xs font-medium text-gray-600">Default (6)</span>
      </div>

      {/* Watchlist Items */}
      <div className="flex-1 overflow-y-auto">
        {watchlistData.map((stock, index) => (
          <WatchlistItem key={index} stock={stock} />
        ))}
      </div>

      {/* Pagination */}
      <div className="border-t border-gray-200 px-4 py-3 flex items-center justify-center space-x-2">
        {[1, 2, 3, 4, 5, 6, 7].map((page) => (
          <button
            key={page}
            className={`w-8 h-8 rounded ${
              page === 1
                ? "bg-orange-500 text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};
