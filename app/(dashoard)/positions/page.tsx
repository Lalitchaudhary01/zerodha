"use client";

import React from "react";
import { positions } from "@/data/data"; // ✅ Correct Next.js import alias

const Positions: React.FC = () => {
  return (
    <div className="p-6">
      <h3 className="text-2xl font-semibold mb-6">
        Positions ({positions.length})
      </h3>

      <div className="overflow-x-auto bg-white rounded-xl shadow">
        <table className="min-w-full text-sm text-left border-collapse">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="px-4 py-3 font-semibold text-gray-700">Product</th>
              <th className="px-4 py-3 font-semibold text-gray-700">
                Instrument
              </th>
              <th className="px-4 py-3 font-semibold text-gray-700">Qty.</th>
              <th className="px-4 py-3 font-semibold text-gray-700">Avg.</th>
              <th className="px-4 py-3 font-semibold text-gray-700">LTP</th>
              <th className="px-4 py-3 font-semibold text-gray-700">P&amp;L</th>
              <th className="px-4 py-3 font-semibold text-gray-700">Chg.</th>
            </tr>
          </thead>

          <tbody>
            {positions.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const isProfit = curValue - stock.avg * stock.qty >= 0;
              const profClass = isProfit ? "text-green-600" : "text-red-600";
              const dayClass = stock.isLoss ? "text-red-600" : "text-green-600";

              return (
                <tr
                  key={index}
                  className="border-b hover:bg-gray-50 transition-colors"
                >
                  <td className="px-4 py-2">{stock.product}</td>
                  <td className="px-4 py-2">{stock.name}</td>
                  <td className="px-4 py-2">{stock.qty}</td>
                  <td className="px-4 py-2">{stock.avg.toFixed(2)}</td>
                  <td className="px-4 py-2">{stock.price.toFixed(2)}</td>
                  <td className={`px-4 py-2 font-medium ${profClass}`}>
                    {(curValue - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={`px-4 py-2 ${dayClass}`}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Positions;
