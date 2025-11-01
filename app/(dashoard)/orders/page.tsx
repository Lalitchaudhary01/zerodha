"use client";

import React from "react";
import Link from "next/link";

const Orders: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-gray-50 text-center p-6 rounded-2xl shadow-sm">
      <div className="max-w-md">
        <p className="text-lg text-gray-700 mb-6">
          You haven't placed any orders today.
        </p>

        <Link
          href="/"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Orders;
