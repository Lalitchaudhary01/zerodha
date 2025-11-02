"use client";
import React, { useEffect, useRef } from "react";
import { TrendingUp, TrendingDown } from "lucide-react";
import { MarginCard } from "./MarginCard";
import { EmptyState } from "./EmptyState";
import * as Chart from "chart.js";

export const MainContent = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");

      // Destroy existing chart if it exists
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      // Register Chart.js components
      Chart.Chart.register(
        Chart.CategoryScale,
        Chart.LinearScale,
        Chart.PointElement,
        Chart.LineElement,
        Chart.LineController,
        Chart.Title,
        Chart.Tooltip,
        Chart.Legend,
        Chart.Filler
      );

      // Generate sample data for NIFTY 50
      const labels = [];
      const data = [];
      const baseValue = 24500;

      for (let i = 0; i < 180; i++) {
        const date = new Date();
        date.setDate(date.getDate() - (180 - i));
        labels.push(
          date.toLocaleDateString("en-US", { month: "short", day: "numeric" })
        );

        // Generate realistic fluctuating data
        const fluctuation = Math.sin(i / 10) * 500 + Math.random() * 400 - 200;
        data.push(baseValue + fluctuation + i * 5);
      }

      chartInstance.current = new Chart.Chart(ctx, {
        type: "line",
        data: {
          labels: labels,
          datasets: [
            {
              label: "NIFTY 50",
              data: data,
              borderColor: "#4285f4",
              backgroundColor: "rgba(66, 133, 244, 0.1)",
              borderWidth: 2,
              pointRadius: 0,
              pointHoverRadius: 4,
              pointHoverBackgroundColor: "#4285f4",
              tension: 0.4,
              fill: true,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              mode: "index",
              intersect: false,
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              padding: 12,
              titleColor: "#fff",
              bodyColor: "#fff",
              borderColor: "#4285f4",
              borderWidth: 1,
              displayColors: false,
              callbacks: {
                label: function (context) {
                  return "₹" + context.parsed.y.toFixed(2);
                },
              },
            },
          },
          scales: {
            x: {
              display: true,
              grid: {
                display: false,
              },
              ticks: {
                maxTicksLimit: 6,
                color: "#666",
              },
            },
            y: {
              display: true,
              grid: {
                color: "rgba(0, 0, 0, 0.05)",
              },
              ticks: {
                color: "#666",
                callback: function (value) {
                  return "₹" + value.toFixed(0);
                },
              },
            },
          },
          interaction: {
            mode: "nearest",
            axis: "x",
            intersect: false,
          },
        },
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="p-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-normal text-gray-900 mb-10">Hi, Lalit</h1>
        <div className="grid grid-cols-2 gap-8 mb-8">
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

        {/* Market Overview Chart */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
          <div className="flex items-center mb-6">
            <svg
              className="w-5 h-5 mr-2 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              />
            </svg>
            <h2 className="text-lg font-medium text-gray-700">
              Market overview
            </h2>
          </div>
          <div className="relative" style={{ height: "300px" }}>
            <canvas ref={chartRef}></canvas>
          </div>
          <div className="mt-4 flex items-center">
            <span className="inline-block w-3 h-3 rounded-full bg-blue-500 mr-2"></span>
            <span className="text-sm text-gray-600">NIFTY 50</span>
          </div>
        </div>

        {/* Empty State */}
        <EmptyState />
      </div>
    </div>
  );
};
