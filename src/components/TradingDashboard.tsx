import React, { useState, useEffect, useRef, memo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAuth } from '../context/useAuth';
import { toast } from 'react-toastify';

// ============================================================================
// PART 1: TRADINGVIEW WIDGETS (Standard Script Injection)
// ============================================================================

// FIX: Updated type to allow 'HTMLDivElement | null' to fix the Vercel TS error
const useScriptInjection = (
  containerRef: React.RefObject<HTMLDivElement | null>,
  scriptSrc: string,
  scriptContent: object
) => {
  useEffect(() => {
    // If ref is null (not mounted yet), skip
    if (!containerRef.current) return;
    
    // Clear previous widget to prevent duplicates
    containerRef.current.innerHTML = '';
    
    const script = document.createElement('script');
    script.src = scriptSrc;
    script.async = true;
    script.type = 'text/javascript';
    script.innerHTML = JSON.stringify(scriptContent);
    
    containerRef.current.appendChild(script);
    
    return () => {
      if (containerRef.current) containerRef.current.innerHTML = '';
    };
  }, [scriptSrc, JSON.stringify(scriptContent)]);
};

// 1. Ticker Tape (Live)
const TVTickerTape = memo(() => {
  const containerRef = useRef<HTMLDivElement>(null);
  const config = {
    symbols: [
      { proName: "FOREXCOM:SPXUSD", title: "S&P 500" },
      { proName: "FOREXCOM:NSXUSD", title: "US 100" },
      { proName: "FX_IDC:EURUSD", title: "EUR/USD" },
      { proName: "BITSTAMP:BTCUSD", title: "Bitcoin" },
      { proName: "BITSTAMP:ETHUSD", title: "Ethereum" },
      { proName: "OANDA:XAUUSD", title: "Gold" }
    ],
    showSymbolLogo: true,
    colorTheme: "dark",
    isTransparent: true,
    displayMode: "adaptive",
    locale: "en"
  };
  useScriptInjection(containerRef, "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js", config);
  return <div ref={containerRef} className="tradingview-widget-container" style={{ width: '100%' }} />;
});

// 2. Advanced Real-Time Chart (Fixed for Live Data)
const TVAdvancedChart = memo(({ symbol, theme = "dark", autosize = true }: { symbol: string, theme?: string, autosize?: boolean }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const config = {
    autosize,
    symbol,
    interval: "D",
    timezone: "Etc/UTC",
    theme,
    style: "1",
    locale: "en",
    enable_publishing: false,
    allow_symbol_change: true,
    calendar: false,
    support_host: "https://www.tradingview.com"
  };
  
  // key={symbol} forces a full re-render when symbol changes, preventing "stuck" charts
  useScriptInjection(containerRef, "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js", config);
  
  return (
    <div key={symbol} className="tradingview-widget-container" ref={containerRef} style={{ height: '100%', width: '100%' }}>
      <div className="tradingview-widget-container__widget" style={{ height: '100%', width: '100%' }}></div>
    </div>
  );
});

// 3. Market Overview (Live OANDA/FX feeds)
const TVMarketOverview = memo(({ height = "500" }: { height?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const config = {
    colorTheme: "dark",
    dateRange: "12M",
    showChart: true,
    locale: "en",
    largeChartUrl: "",
    isTransparent: true,
    showSymbolLogo: true,
    width: "100%",
    height: height,
    tabs: [
      {
        title: "Commodities",
        symbols: [
          { s: "OANDA:XAUUSD", d: "Gold" },
          { s: "OANDA:XAGUSD", d: "Silver" },
          { s: "TVC:USOIL", d: "Oil" }
        ]
      },
      {
        title: "Forex",
        symbols: [
          { s: "FX:EURUSD", d: "EUR/USD" },
          { s: "FX:GBPUSD", d: "GBP/USD" },
          { s: "FX:USDJPY", d: "USD/JPY" }
        ]
      },
      {
        title: "Crypto",
        symbols: [
          { s: "BINANCE:BTCUSDT", d: "Bitcoin" },
          { s: "BINANCE:ETHUSDT", d: "Ethereum" },
          { s: "BINANCE:SOLUSDT", d: "Solana" }
        ]
      },
      {
        title: "Indices",
        symbols: [
          { s: "FOREXCOM:SPXUSD", d: "S&P 500" },
          { s: "FOREXCOM:NSXUSD", d: "Nasdaq" }
        ]
      }
    ]
  };
  useScriptInjection(containerRef, "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js", config);
  return <div ref={containerRef} className="tradingview-widget-container" style={{ height: height, width: '100%' }} />;
});

// ============================================================================
// PART 2: DASHBOARD LOGIC & COMPONENT
// ============================================================================

interface AuthContextType {
  user: { id: string; name: string } | null;
  isAuthenticated: boolean;
  token?: string | null;
}

interface NumberInputProps {
  amount: number;
  setAmount: (value: number) => void;
}

const NumberInput: React.FC<NumberInputProps> = ({ amount, setAmount }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (!isNaN(value)) setAmount(value);
  };
  return (
    <input
      type="number"
      className="form-control bg-dark text-white border-secondary"
      value={amount}
      onChange={handleChange}
      min="1"
      step="1"
      required
      id="amount-input"
    />
  );
};

const TradingDashboard: React.FC = () => {
  // Default to OANDA:XAUUSD (Gold) which is reliable and live
  const [selectedSymbol, setSelectedSymbol] = useState<string>("OANDA:XAUUSD");
  const [selectedName, setSelectedName] = useState<string>("Gold (XAU/USD)");
  const [orderType, setOrderType] = useState<'buy' | 'sell'>('buy');
  const [amount, setAmount] = useState<number>(100);
  const [leverage, setLeverage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  const { isAuthenticated } = useAuth() as AuthContextType;

  const handleTrade = async () => {
    if (!isAuthenticated) return toast.error("Please log in to place a trade");
    if (!amount || amount <= 0) return toast.error("Please enter a valid amount");

    try {
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000)); 
      toast.success(`${orderType.toUpperCase()} order placed for ${selectedName} at market price.`);
    } catch (error) {
      console.error(error);
      toast.error('Failed to place trade');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container-fluid py-4 px-3 text-white" style={{ background: "linear-gradient(to bottom right, #000000, #1a1a1a)", minHeight: "100vh" }}>
      
      {/* 1. TOP TICKER TAPE */}
      <div className="mb-4 w-100" style={{ height: '46px' }}>
        <TVTickerTape />
      </div>

      <div className="row g-4 h-100">
        
        {/* 2. LEFT COLUMN: LIVE MARKET OVERVIEW */}
        <div className="col-lg-4 col-xl-3 d-flex flex-column gap-4">
           <div className="rounded-4 overflow-hidden shadow-lg border border-secondary border-opacity-25" style={{ height: '600px', backgroundColor: "#1e222d" }}>
             <TVMarketOverview height="600" />
           </div>

           {/* Quick Symbol Selector - CRITICAL for changing the chart */}
        </div>

        {/* 3. RIGHT COLUMN: CHART & ORDER FORM */}
        <div className="col-lg-8 col-xl-9">
            <div className="row g-4">
              
              {/* LIVE CHART */}
              <div className="col-12">
                <div className="rounded-4 overflow-hidden shadow-sm border border-secondary border-opacity-25" style={{ height: '500px', backgroundColor: "#1e222d" }}>
                  <TVAdvancedChart symbol={selectedSymbol} />
                </div>
              </div>

            </div>
        </div>

      </div>
    </div>
  );
};

export default TradingDashboard;