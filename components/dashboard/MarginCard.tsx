import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface MarginCardProps {
  title: string;
  icon: LucideIcon;
  marginsUsed: number;
  openingBalance: number;
}

export const MarginCard: React.FC<MarginCardProps> = ({
  title,
  icon: Icon,
  marginsUsed,
  openingBalance,
}) => {
  return (
    <Card className="border border-gray-200 shadow-sm">
      <CardContent className="p-6">
        <div className="flex items-center space-x-2 mb-6">
          <Icon className="h-5 w-5 text-gray-500" />
          <h2 className="text-base font-medium text-gray-900">{title}</h2>
        </div>

        <div className="space-y-4">
          <div className="flex items-baseline justify-between">
            <span className="text-6xl font-semibold text-gray-900">
              {marginsUsed}
            </span>
          </div>
          <div className="text-sm text-gray-600">Margin available</div>

          <div className="pt-4 border-t border-gray-200 space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Margins used</span>
              <span className="text-gray-900">{marginsUsed}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Opening balance</span>
              <span className="text-gray-900">{openingBalance}</span>
            </div>
          </div>

          <button className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center pt-2">
            <span className="mr-1">◈</span> View statement
          </button>
        </div>
      </CardContent>
    </Card>
  );
};
