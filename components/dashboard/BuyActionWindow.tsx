"use client";
import React, { useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import { Input } from "../ui/input";

interface BuyActionWindowProps {
  uid: string;
}

const BuyActionWindow: React.FC<BuyActionWindowProps> = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState<number>(1);
  const [stockPrice, setStockPrice] = useState<number>(0.0);
  const { closeBuyWindow } = useContext(GeneralContext);

  const handleBuyClick = async () => {
    await axios.post("http://localhost:3002/newOrder", {
      name: uid,
      qty: stockQuantity,
      price: stockPrice,
      mode: "BUY",
    });
    closeBuyWindow();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg p-6 w-[90%] md:w-[400px]">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Buy <span className="text-blue-600">{uid}</span>
        </h3>

        <div className="space-y-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-col w-1/2">
              <label className="text-sm text-gray-500 mb-1">Quantity</label>
              <Input
                type="number"
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500"
                value={stockQuantity}
                onChange={(e) => setStockQuantity(Number(e.target.value))}
              />
            </div>
            <div className="flex flex-col w-1/2">
              <label className="text-sm text-gray-500 mb-1">Price</label>
              <Input
                type="number"
                step="0.05"
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500"
                value={stockPrice}
                onChange={(e) => setStockPrice(Number(e.target.value))}
              />
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mt-6">
          <span className="text-sm text-gray-500">Margin required ₹140.65</span>
          <div className="flex gap-3">
            <button
              onClick={handleBuyClick}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700"
            >
              Buy
            </button>
            <button
              onClick={closeBuyWindow}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
