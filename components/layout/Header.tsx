"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    <nav className="bg-white border-b border-gray-200 px-6 py-3 flex-shrink-0">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 flex items-center justify-center">
            <svg viewBox="0 0 40 40" className="w-full h-full">
              <path d="M20 5 L35 20 L20 35 L5 20 Z" fill="#FF6B35" />
            </svg>
          </div>
        </Link>

        {/* Center Navigation */}
        <div className="flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm ${
                pathname === item.href
                  ? "text-orange-500 font-medium"
                  : "text-gray-600 hover:text-gray-800"
              } transition-colors`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right Navigation */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="text-gray-600">
            <ShoppingCart className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-600">
            <Bell className="h-5 w-5" />
          </Button>
          <div className="text-gray-700 text-sm font-medium">BSL440</div>
        </div>
      </div>
    </nav>
  );
};
