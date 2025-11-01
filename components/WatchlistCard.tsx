"use client";
import React from "react";

type Stock = {
  name: string;
  exchange?: string;
  price: number;
  change: number;
  percent: number;
};

export default function WatchlistCard({ stock }: { stock: Stock }) {
  const changeColor = stock.change >= 0 ? "text-green-600" : "text-red-500";
  const arrow = stock.change >= 0 ? "▲" : "▼";

  return (
    <div className="flex items-center justify-between p-3 border rounded hover:bg-slate-50">
      <div>
        <div className="text-sm font-medium">
          {stock.name}{" "}
          <span className="text-xs text-slate-400"> {stock.exchange}</span>
        </div>
        <div className="text-xs text-slate-500">
          {" "}
          {stock.percent.toFixed(2)}%
        </div>
      </div>
      <div className="text-right">
        <div className={`font-semibold ${changeColor}`}>
          {stock.price.toFixed(2)}
        </div>
        <div className={`text-xs ${changeColor}`}>
          {arrow} {stock.change.toFixed(2)}
        </div>
      </div>
    </div>
  );
}
