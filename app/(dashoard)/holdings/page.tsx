"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import VerticalGraph from "@/components/dashboard/VerticalGraph";

interface Holding {
  name: string;
  qty: number;
  avg: number;
  price: number;
  net: string;
  day: string;
  isLoss?: boolean;
}

const Holdings: React.FC = () => {
  const [allHoldings, setAllHoldings] = useState<Holding[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3002/allHoldings")
      .then((res) => {
        setAllHoldings(res.data);
      })
      .catch((err) => console.error("Error fetching holdings:", err));
  }, []);

  const labels = allHoldings.map((item) => item.name);

  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: "rgba(59, 130, 246, 0.6)", // Tailwind blue-500 with opacity
      },
    ],
  };

  return (
    <div className="p-6 bg-gray-50 rounded-2xl shadow-sm">
      {/* Title */}
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">
        Holdings ({allHoldings.length})
      </h3>

      {/* Table */}
      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="min-w-full text-sm text-left text-gray-700 bg-white rounded-lg">
          <thead className="bg-gray-100 text-gray-900">
            <tr>
              <th className="px-4 py-3">Instrument</th>
              <th className="px-4 py-3">Qty.</th>
              <th className="px-4 py-3">Avg. cost</th>
              <th className="px-4 py-3">LTP</th>
              <th className="px-4 py-3">Cur. val</th>
              <th className="px-4 py-3">P&L</th>
              <th className="px-4 py-3">Net chg.</th>
              <th className="px-4 py-3">Day chg.</th>
            </tr>
          </thead>
          <tbody>
            {allHoldings.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const profit = curValue - stock.avg * stock.qty;
              const isProfit = profit >= 0;
              const profClass = isProfit
                ? "text-green-600 font-medium"
                : "text-red-600 font-medium";
              const dayClass = stock.isLoss
                ? "text-red-600 font-medium"
                : "text-green-600 font-medium";

              return (
                <tr
                  key={index}
                  className="border-b hover:bg-gray-50 transition-colors"
                >
                  <td className="px-4 py-3">{stock.name}</td>
                  <td className="px-4 py-3">{stock.qty}</td>
                  <td className="px-4 py-3">{stock.avg.toFixed(2)}</td>
                  <td className="px-4 py-3">{stock.price.toFixed(2)}</td>
                  <td className="px-4 py-3">{curValue.toFixed(2)}</td>
                  <td className={`px-4 py-3 ${profClass}`}>
                    {profit.toFixed(2)}
                  </td>
                  <td className={`px-4 py-3 ${profClass}`}>{stock.net}</td>
                  <td className={`px-4 py-3 ${dayClass}`}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
        <div className="bg-white p-4 rounded-lg shadow-sm text-center">
          <h5 className="text-xl font-semibold text-gray-800">
            29,875.<span className="text-gray-500">55</span>
          </h5>
          <p className="text-gray-500 text-sm">Total investment</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm text-center">
          <h5 className="text-xl font-semibold text-gray-800">
            31,428.<span className="text-gray-500">95</span>
          </h5>
          <p className="text-gray-500 text-sm">Current value</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm text-center">
          <h5 className="text-xl font-semibold text-green-600">
            1,553.40 (+5.20%)
          </h5>
          <p className="text-gray-500 text-sm">P&L</p>
        </div>
      </div>

      {/* Graph */}
      <div className="mt-8">
        <VerticalGraph data={data} />
      </div>
    </div>
  );
};

export default Holdings;
