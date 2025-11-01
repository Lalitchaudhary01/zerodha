"use client";
import React from "react";
import { Bell, ShoppingCart } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between px-6 py-3 border-b bg-white sticky top-0 z-50">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-3">
          <span className="text-orange-500 font-bold text-xl">⟰</span>
          <div>
            <div className="text-sm font-medium">Hi, Lalit</div>
            <div className="text-xs text-slate-500">Welcome back</div>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-4 text-sm text-slate-600">
          <div>
            NIFTY 50 <span className="text-red-500 ml-2">25722.10 -0.60%</span>
          </div>
          <div>
            SENSEX <span className="text-red-500 ml-2">83938.71 -0.55%</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <nav className="hidden md:flex gap-6 text-sm text-slate-600">
          <a href="/dashboard" className="hover:text-sky-600">
            Dashboard
          </a>
          <a href="/orders" className="hover:text-sky-600">
            Orders
          </a>
          <a href="/holdings" className="hover:text-sky-600">
            Holdings
          </a>
          <a href="/positions" className="hover:text-sky-600">
            Positions
          </a>
          <a href="/bids" className="hover:text-sky-600">
            Bids
          </a>
          <a href="/funds" className="hover:text-sky-600">
            Funds
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Bell className="w-5 h-5 text-slate-600" />
          </Button>
          <Button variant="ghost" size="icon">
            <ShoppingCart className="w-5 h-5 text-slate-600" />
          </Button>
          <Avatar>
            <AvatarFallback className="bg-pink-500 text-white">
              L
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
