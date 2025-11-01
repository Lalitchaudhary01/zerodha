"use client";
import React, { useState, ReactNode, createContext } from "react";
import BuyActionWindow from "./BuyActionWindow";


interface GeneralContextType {
  openBuyWindow: (uid: string) => void;
  closeBuyWindow: () => void;
}

const GeneralContext = createContext<GeneralContextType>({
  openBuyWindow: () => {},
  closeBuyWindow: () => {},
});

interface GeneralContextProviderProps {
  children: ReactNode;
}

export const GeneralContextProvider: React.FC<GeneralContextProviderProps> = ({
  children,
}) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");

  const openBuyWindow = (uid: string) => {
    setSelectedStockUID(uid);
    setIsBuyWindowOpen(true);
  };

  const closeBuyWindow = () => {
    setSelectedStockUID("");
    setIsBuyWindowOpen(false);
  };

  return (
    <GeneralContext.Provider value={{ openBuyWindow, closeBuyWindow }}>
      {children}
      {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
