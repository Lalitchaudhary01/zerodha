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
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-center space-x-2 mb-6">
          <Icon className="h-5 w-5 text-gray-600" />
          <h2 className="text-lg font-medium text-gray-900">{title}</h2>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between py-2 border-b border-gray-100">
            <span className="text-sm text-gray-600">Margins used</span>
            <span className="text-2xl font-bold text-gray-900">
              {marginsUsed}
            </span>
          </div>
          <div className="flex items-center justify-between py-2">
            <span className="text-sm text-gray-600">Margin available</span>
            <span className="text-sm text-gray-900">-</span>
          </div>
          <div className="flex items-center justify-between py-2 border-b border-gray-100">
            <span className="text-sm text-gray-600">Opening balance</span>
            <span className="text-sm text-gray-900">{openingBalance}</span>
          </div>
          <button className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center">
            <span className="mr-1">◈</span> View statement
          </button>
        </div>
      </CardContent>
    </Card>
  );
};
