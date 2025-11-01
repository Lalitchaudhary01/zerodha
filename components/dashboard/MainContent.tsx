import React from "react";
import { TrendingUp, TrendingDown } from "lucide-react";
import { MarginCard } from "./MarginCard";
import { EmptyState } from "./EmptyState";

export const MainContent = () => {
  return (
    <div className="flex-1 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-semibold text-gray-900 mb-8">Hi, Lalit</h1>

        <div className="grid grid-cols-2 gap-8">
          {/* Equity Card */}
          <MarginCard
            title="Equity"
            icon={TrendingUp}
            marginsUsed={0}
            openingBalance={0}
          />

          {/* Commodity Card */}
          <MarginCard
            title="Commodity"
            icon={TrendingDown}
            marginsUsed={0}
            openingBalance={0}
          />
        </div>

        {/* Empty State */}
        <EmptyState />
      </div>
    </div>
  );
};
