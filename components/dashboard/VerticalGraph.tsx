"use client";

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options: ChartOptions<"bar"> = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Holdings",
    },
  },
};

interface VerticalGraphProps {
  data: ChartData<"bar">;
}

const VerticalGraph: React.FC<VerticalGraphProps> = ({ data }) => {
  return (
    <div className="w-full max-w-3xl mx-auto bg-white shadow-md rounded-2xl p-6">
      <Bar options={options} data={data} />
    </div>
  );
};

export default VerticalGraph;
