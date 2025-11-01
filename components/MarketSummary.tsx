import React from "react";
import { summary } from "@/data/summary";

export default function MarketSummary() {
  return (
    <div className="bg-white p-4 rounded-md shadow-sm flex items-center justify-between">
      <div className="flex items-center gap-8">
        {summary.map((s) => (
          <div key={s.label} className="text-sm">
            <div className="text-xs text-slate-500">{s.label}</div>
            <div
              className={`font-semibold ${
                s.change < 0 ? "text-red-500" : "text-green-600"
              }`}
            >
              {s.value} <span className="text-xs">{s.change}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="text-sm text-slate-500">Last updated: a moment ago</div>
    </div>
  );
}
