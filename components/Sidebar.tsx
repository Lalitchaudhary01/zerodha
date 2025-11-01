"use client";
import React, { useState } from "react";
import WatchlistCard from "./WatchlistCard";
import { watchlist } from "@/data/watchlist";

export default function Sidebar() {
  const [query, setQuery] = useState("");
  const filtered = watchlist.filter((w) =>
    w.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="p-4">
      <div className="mb-4">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search eg: infy bse"
          className="w-full border rounded px-3 py-2 text-sm"
        />
      </div>

      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold">Watchlist (6)</h3>
        <button className="text-sm text-sky-600">+ New group</button>
      </div>

      <div className="space-y-1">
        {filtered.map((w) => (
          <WatchlistCard key={w.name} stock={w} />
        ))}
      </div>

      <div className="mt-6 text-xs text-slate-500">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 bg-orange-400 rounded-full" />
          <span>Live updates</span>
        </div>
      </div>
    </div>
  );
}
