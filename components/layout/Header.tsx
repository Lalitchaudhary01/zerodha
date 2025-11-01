"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { marketIndices } from "@/data/dummy-data";

export const Header = () => {
  const pathname = usePathname();

  const navItems = [
    { name: "Dashboard", href: "/" },
    { name: "Orders", href: "/orders" },
    { name: "Holdings", href: "/holdings" },
    { name: "Positions", href: "/positions" },
    { name: "Bids", href: "/bids" },
    { name: "Funds", href: "/funds" },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-8">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
              <span className="text-white font-bold text-lg">K</span>
            </div>
            <span className="text-gray-600 text-sm">Kite</span>
          </Link>

          {/* Market Indices */}
          <div className="flex items-center space-x-6 text-sm">
            {marketIndices.map((index) => (
              <div key={index.name} className="flex items-center space-x-2">
                <span className="font-medium text-gray-700">{index.name}</span>
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

        {/* Right Navigation */}
        <div className="flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`${
                pathname === item.href
                  ? "text-blue-600"
                  : "text-gray-600 hover:text-gray-700"
              } transition-colors`}
            >
              {item.name}
            </Link>
          ))}
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
  );
};
