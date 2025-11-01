"use client";

import React from "react";
import Link from "next/link";

const Funds: React.FC = () => {
  return (
    <div className="p-6">
      {/* Top Section */}
      <div className="flex flex-col sm:flex-row items-center justify-between bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
        <p className="text-sm text-gray-700 mb-3 sm:mb-0">
          💸 Instant, zero-cost fund transfers with UPI
        </p>
        <div className="flex gap-3">
          <Link
            href="#"
            className="bg-green-600 hover:bg-green-700 text-white text-sm font-medium px-4 py-2 rounded-md"
          >
            Add funds
          </Link>
          <Link
            href="#"
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-md"
          >
            Withdraw
          </Link>
        </div>
      </div>

      {/* Main Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        {/* Equity Column */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-5">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Equity</h2>

          <div className="space-y-3">
            <div className="flex justify-between">
              <p>Available margin</p>
              <p className="font-semibold text-green-600">₹4,043.10</p>
            </div>
            <div className="flex justify-between">
              <p>Used margin</p>
              <p className="font-semibold">₹3,757.30</p>
            </div>
            <div className="flex justify-between">
              <p>Available cash</p>
              <p className="font-semibold">₹4,043.10</p>
            </div>

            <hr className="my-3" />

            <div className="flex justify-between">
              <p>Opening Balance</p>
              <p>₹4,043.10</p>
            </div>
            <div className="flex justify-between">
              <p>Closing Balance</p>
              <p>₹3,736.40</p>
            </div>
            <div className="flex justify-between">
              <p>Payin</p>
              <p>₹4,064.00</p>
            </div>
            <div className="flex justify-between">
              <p>SPAN</p>
              <p>₹0.00</p>
            </div>
            <div className="flex justify-between">
              <p>Delivery margin</p>
              <p>₹0.00</p>
            </div>
            <div className="flex justify-between">
              <p>Exposure</p>
              <p>₹0.00</p>
            </div>
            <div className="flex justify-between">
              <p>Options premium</p>
              <p>₹0.00</p>
            </div>

            <hr className="my-3" />

            <div className="flex justify-between">
              <p>Collateral (Liquid funds)</p>
              <p>₹0.00</p>
            </div>
            <div className="flex justify-between">
              <p>Collateral (Equity)</p>
              <p>₹0.00</p>
            </div>
            <div className="flex justify-between">
              <p className="font-semibold">Total Collateral</p>
              <p className="font-semibold">₹0.00</p>
            </div>
          </div>
        </div>

        {/* Commodity Column */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 flex flex-col items-center justify-center text-center">
          <p className="text-gray-700 mb-4">
            You don’t have a commodity account
          </p>
          <Link
            href="#"
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-md"
          >
            Open Account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Funds;
