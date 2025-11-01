import React from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { Stock } from "@/data/dummy-data";

interface WatchlistItemProps {
  stock: Stock;
}

export const WatchlistItem: React.FC<WatchlistItemProps> = ({ stock }) => {
  return (
    <div className="px-4 py-3 border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="font-medium text-gray-900">{stock.symbol}</span>
          {stock.bse && (
            <span className="text-xs bg-gray-200 text-gray-600 px-1.5 py-0.5 rounded">
              BSE
            </span>
          )}
        </div>
        <span className="font-semibold text-gray-900">{stock.ltp}</span>
      </div>
      <div className="flex items-center justify-between mt-1">
        <span
          className={`text-sm flex items-center ${
            stock.up ? "text-green-600" : "text-red-600"
          }`}
        >
          {stock.change.toFixed(2)}
          {stock.up ? (
            <ChevronUp className="h-3 w-3 ml-0.5" />
          ) : (
            <ChevronDown className="h-3 w-3 ml-0.5" />
          )}
        </span>
        <span
          className={`text-sm ${stock.up ? "text-green-600" : "text-red-600"}`}
        >
          {stock.changePct.toFixed(2)}%
        </span>
      </div>
    </div>
  );
};
