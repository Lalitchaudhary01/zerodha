"use client";

import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

interface DoughnutChartProps {
  data?: any;
}

export const DoughnutChart: React.FC<DoughnutChartProps> = ({ data }) => {
  // ✅ Default data fallback
  const defaultData = {
    labels: ["Stocks", "Mutual Funds", "Bonds", "Gold", "Crypto"],
    datasets: [
      {
        label: "Portfolio Allocation",
        data: [40, 25, 15, 10, 10],
        backgroundColor: [
          "#3b82f6", // blue
          "#f97316", // orange
          "#10b981", // green
          "#facc15", // yellow
          "#a855f7", // purple
        ],
        borderWidth: 1,
      },
    ],
  };

  const chartData = data || defaultData;

  return (
    <div className="p-4 bg-white rounded-2xl shadow-md mt-4 w-full max-w-[250px] mx-auto">
      <Doughnut data={chartData} />
    </div>
  );
};
