"use client";
import React, { useState } from "react";
import Link from "next/link";

const Menu: React.FC = () => {
  const [selectedMenu, setSelectedMenu] = useState<number>(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] =
    useState<boolean>(false);

  const handleMenuClick = (index: number) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const menus = [
    { name: "Dashboard", href: "/" },
    { name: "Orders", href: "/orders" },
    { name: "Holdings", href: "/holdings" },
    { name: "Positions", href: "/positions" },
    { name: "Funds", href: "/funds" },
    { name: "Apps", href: "/apps" },
  ];

  return (
    <div className="flex items-center justify-between px-6 py-3 shadow-sm bg-white">
      {/* Left Section (Logo + Menu) */}
      <div className="flex items-center gap-10">
        {/* Logo */}
        <img
          src="https://kite.zerodha.com/static/images/kite-logo.svg"
          alt="logo"
          className="w-12 h-12 object-contain ml-2"
        />

        {/* Menu Items */}
        <ul className="flex items-center gap-6">
          {menus.map((menu, index) => (
            <li key={index}>
              <Link href={menu.href}>
                <p
                  onClick={() => handleMenuClick(index)}
                  className={`cursor-pointer text-sm font-medium transition-all ${
                    selectedMenu === index
                      ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                      : "text-gray-700 hover:text-blue-500"
                  }`}
                >
                  {menu.name}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Profile Section */}
      <div
        className="relative flex items-center gap-2 cursor-pointer mr-4"
        onClick={handleProfileClick}
      >
        <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-semibold">
          ZU
        </div>
        <p className="text-sm font-medium text-gray-800">USERID</p>

        {/* Dropdown */}
        {isProfileDropdownOpen && (
          <div className="absolute right-0 top-10 bg-white border border-gray-200 shadow-md rounded-md w-36">
            <ul className="text-sm text-gray-700">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Profile
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Settings
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-600">
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
