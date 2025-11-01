import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function EquityCard() {
  return (
    <div className="bg-white rounded-md shadow-sm p-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm font-medium">Equity</h3>
          <div className="text-3xl font-bold mt-2">0</div>
        </div>
        <div className="text-xs text-slate-500">
          <div>
            Margins used <span className="font-medium">0</span>
          </div>
          <div>
            Opening balance <span className="font-medium">0</span>
          </div>
          <a className="text-sky-600 text-sm block mt-2">View statement</a>
        </div>
      </div>
    </div>
  );
}
