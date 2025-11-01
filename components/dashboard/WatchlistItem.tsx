import React from "react";
import { Stock } from "@/data/dummy-data";

interface WatchlistItemProps {
  stock: Stock;
}

export const WatchlistItem: React.FC<WatchlistItemProps> = ({ stock }) => {
  return (
    <div className="px-4 py-3 border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors group">
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium text-gray-900">
            {stock.symbol}
          </span>
          {stock.bse && (
            <span className="text-xs bg-gray-200 text-gray-600 px-1.5 py-0.5 rounded">
              BSE
            </span>
          )}
        </div>
        <span className="text-sm font-medium text-gray-900">
          {stock.ltp.toFixed(2)}
        </span>
      </div>
      <div className="flex items-center justify-between">
        <span
          className={`text-xs ${stock.up ? "text-green-600" : "text-red-600"}`}
        >
          {stock.change > 0 ? "+" : ""}
          {stock.change.toFixed(2)}
        </span>
        <span
          className={`text-xs ${stock.up ? "text-green-600" : "text-red-600"}`}
        >
          {stock.changePct > 0 ? "+" : ""}
          {stock.changePct.toFixed(2)}%
        </span>
      </div>
    </div>
  );
};
