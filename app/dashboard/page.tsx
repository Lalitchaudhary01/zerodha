"use client";
import React, { useState } from "react";

import {
  Search,
  Plus,
  Bell,
  ShoppingCart,
  ChevronDown,
  ChevronUp,
  TrendingUp,
  TrendingDown,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Dummy data
const watchlistData = [
  {
    symbol: "HDFCBANK",
    bse: true,
    change: -10.45,
    changePct: -1.05,
    ltp: 987.65,
    down: true,
  },
  { symbol: "INFY", change: -11.5, changePct: -0.77, ltp: 1482.3, down: true },
  {
    symbol: "TCS",
    bse: true,
    change: 22.25,
    changePct: 0.73,
    ltp: 3057.8,
    up: true,
  },
  { symbol: "ONGC", change: 0.84, changePct: 0.33, ltp: 255.37, up: true },
  {
    symbol: "HINDUNILVR",
    bse: true,
    change: -2.95,
    changePct: -0.12,
    ltp: 2466.65,
    down: true,
  },
  { symbol: "GOLDBEES", change: 0.34, changePct: 0.34, ltp: 100.02, up: true },
];

const marketIndices = [
  { name: "NIFTY 50", value: 25722.1, change: -155.75, changePct: -0.6 },
  { name: "SENSEX", value: 83938.71, change: -465.75, changePct: -0.55 },
];

const DashboardLayout = () => {
  const [activeTab, setActiveTab] = useState("equity");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation Bar */}
      <nav className="bg-white border-b border-gray-200 px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
                <span className="text-white font-bold text-lg">K</span>
              </div>
              <span className="text-gray-600 text-sm">Kite</span>
            </div>

            {/* Market Indices */}
            <div className="flex items-center space-x-6 text-sm">
              {marketIndices.map((index) => (
                <div key={index.name} className="flex items-center space-x-2">
                  <span className="font-medium text-gray-700">
                    {index.name}
                  </span>
                  <span className="text-gray-900 font-semibold">
                    {index.value.toFixed(2)}
                  </span>
                  <span className="text-red-600 flex items-center">
                    {index.change.toFixed(2)} ({index.changePct.toFixed(2)}%)
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <button className="text-blue-600 hover:text-blue-700">
              Dashboard
            </button>
            <button className="text-gray-600 hover:text-gray-700">
              Orders
            </button>
            <button className="text-gray-600 hover:text-gray-700">
              Holdings
            </button>
            <button className="text-gray-600 hover:text-gray-700">
              Positions
            </button>
            <button className="text-gray-600 hover:text-gray-700">Bids</button>
            <button className="text-gray-600 hover:text-gray-700">Funds</button>
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <div className="bg-blue-600 text-white px-3 py-1 rounded text-sm font-medium">
              BSL440
            </div>
          </div>
        </div>
      </nav>

      <div className="flex h-[calc(100vh-60px)]">
        {/* Left Sidebar - Watchlist */}
        <div className="w-[420px] bg-white border-r border-gray-200 flex flex-col">
          {/* Search Bar */}
          <div className="p-4 border-b border-gray-200">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search eg: infy bse, nifty fut, index fund, etc"
                className="pl-10 pr-4"
              />
            </div>
          </div>

          {/* Watchlist Header */}
          <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">Watchlist 1</span>
              <span className="text-xs text-gray-400">(6 / 250)</span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="text-blue-600 hover:text-blue-700"
            >
              <Plus className="h-4 w-4 mr-1" />
              New group
            </Button>
          </div>

          {/* Default Section */}
          <div className="px-4 py-2 bg-gray-50 border-b border-gray-200">
            <span className="text-xs font-medium text-gray-600">
              Default (6)
            </span>
          </div>

          {/* Watchlist Items */}
          <div className="flex-1 overflow-y-auto">
            {watchlistData.map((stock, index) => (
              <div
                key={index}
                className="px-4 py-3 border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="font-medium text-gray-900">
                      {stock.symbol}
                    </span>
                    {stock.bse && (
                      <span className="text-xs bg-gray-200 text-gray-600 px-1.5 py-0.5 rounded">
                        BSE
                      </span>
                    )}
                  </div>
                  <span className="font-semibold text-gray-900">
                    {stock.ltp}
                  </span>
                </div>
                <div className="flex items-center justify-between mt-1">
                  <span
                    className={`text-sm flex items-center ${
                      stock.up ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {stock.change.toFixed(2)}
                    {stock.up ? (
                      <ChevronUp className="h-3 w-3 ml-0.5" />
                    ) : (
                      <ChevronDown className="h-3 w-3 ml-0.5" />
                    )}
                  </span>
                  <span
                    className={`text-sm ${
                      stock.up ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {stock.changePct.toFixed(2)}%
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="border-t border-gray-200 px-4 py-3 flex items-center justify-center space-x-2">
            {[1, 2, 3, 4, 5, 6, 7].map((page) => (
              <button
                key={page}
                className={`w-8 h-8 rounded ${
                  page === 1
                    ? "bg-orange-500 text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 p-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-semibold text-gray-900 mb-8">
              Hi, Lalit
            </h1>

            <div className="grid grid-cols-2 gap-8">
              {/* Equity Card */}
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-6">
                    <TrendingUp className="h-5 w-5 text-gray-600" />
                    <h2 className="text-lg font-medium text-gray-900">
                      Equity
                    </h2>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-2 border-b border-gray-100">
                      <span className="text-sm text-gray-600">
                        Margins used
                      </span>
                      <span className="text-2xl font-bold text-gray-900">
                        0
                      </span>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <span className="text-sm text-gray-600">
                        Margin available
                      </span>
                      <span className="text-sm text-gray-900">-</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-gray-100">
                      <span className="text-sm text-gray-600">
                        Opening balance
                      </span>
                      <span className="text-sm text-gray-900">0</span>
                    </div>
                    <button className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center">
                      <span className="mr-1">◈</span> View statement
                    </button>
                  </div>
                </CardContent>
              </Card>

              {/* Commodity Card */}
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-6">
                    <TrendingDown className="h-5 w-5 text-gray-600" />
                    <h2 className="text-lg font-medium text-gray-900">
                      Commodity
                    </h2>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-2 border-b border-gray-100">
                      <span className="text-sm text-gray-600">
                        Margins used
                      </span>
                      <span className="text-2xl font-bold text-gray-900">
                        0
                      </span>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <span className="text-sm text-gray-600">
                        Margin available
                      </span>
                      <span className="text-sm text-gray-900">-</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-gray-100">
                      <span className="text-sm text-gray-600">
                        Opening balance
                      </span>
                      <span className="text-sm text-gray-900">0</span>
                    </div>
                    <button className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center">
                      <span className="mr-1">◈</span> View statement
                    </button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Empty State */}
            <div className="mt-12 text-center">
              <div className="inline-flex items-center justify-center w-32 h-32 mb-6">
                <svg viewBox="0 0 100 100" className="text-gray-300">
                  <rect
                    x="10"
                    y="20"
                    width="30"
                    height="60"
                    fill="currentColor"
                    opacity="0.3"
                  />
                  <rect
                    x="45"
                    y="35"
                    width="10"
                    height="45"
                    fill="currentColor"
                    opacity="0.3"
                  />
                  <rect
                    x="60"
                    y="10"
                    width="30"
                    height="70"
                    fill="currentColor"
                    opacity="0.3"
                  />
                </svg>
              </div>
              <p className="text-gray-600 mb-2">
                You don't have any stocks in your DEMAT yet. Get started
              </p>
              <p className="text-gray-600 mb-6">
                with absolutely free equity investments.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8">
                Start investing
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
