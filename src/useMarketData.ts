import { useState, useEffect } from "react";
import { io, Socket } from "socket.io-client";

interface MarketRate {
  symbol: string;
  price: string;
  change: string;
  change_p: string;
  bid: string;
  ask: string;
  timestamp: number;
}

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export const useMarketData = (instruments: string[]) => {
  const [rates, setRates] = useState<Record<string, MarketRate>>({});
  const [isConnected, setIsConnected] = useState(false);
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    // Initialize socket connection
    const newSocket = io(API_URL);

    newSocket.on("connect", () => {
      console.log("Connected to market data service");
      setIsConnected(true);

      // Subscribe to market updates
      newSocket.emit("subscribe", instruments);
    });

    newSocket.on("market-update", (data) => {
      const formattedRates: Record<string, MarketRate> = {};

      data.forEach((rate: MarketRate) => {
        formattedRates[rate.symbol] = rate;
      });

      setRates(formattedRates);
    });

    newSocket.on("disconnect", () => {
      console.log("Disconnected from market data service");
      setIsConnected(false);
    });

    setSocket(newSocket);

    // Cleanup on unmount
    return () => {
      newSocket.disconnect();
    };
  }, []);

  // Update subscriptions when instruments change
  useEffect(() => {
    if (socket && isConnected && instruments.length > 0) {
      socket.emit("subscribe", instruments);
    }
  }, [socket, isConnected, instruments]);

  return { rates, isConnected };
};
