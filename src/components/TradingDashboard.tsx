import React, { useState, useEffect, useRef, memo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAuth } from '../context/useAuth';
import { toast } from 'react-toastify';

// ============================================================================
// PART 1: TRADINGVIEW WIDGETS (Standard Script Injection)
// ============================================================================

const useScriptInjection = (
  containerRef: React.RefObject<HTMLDivElement>,
  scriptSrc: string,
  scriptContent: object
) => {
  useEffect(() => {
    if (!containerRef.current) return;
    containerRef.current.innerHTML = ''; // Clear previous
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
           <div className="p-3 rounded-4 border border-secondary border-opacity-25" style={{ backgroundColor: "rgba(255,255,255,0.05)" }}>
             <label className="form-label text-info fw-bold mb-2">Select Active Asset</label>
             <select 
                className="form-select bg-dark text-white border-secondary" 
                value={selectedSymbol}
                onChange={(e) => {
                  setSelectedSymbol(e.target.value);
                  setSelectedName(e.target.selectedOptions[0].text);
                }}
             >
                <optgroup label="Commodities (Live)">
                  <option value="OANDA:XAUUSD">Gold (XAU/USD)</option>
                  <option value="OANDA:XAGUSD">Silver (XAG/USD)</option>
                  <option value="TVC:USOIL">Crude Oil (WTI)</option>
                </optgroup>
                <optgroup label="Forex (Live)">
                  <option value="FX:EURUSD">EUR/USD</option>
                  <option value="FX:GBPUSD">GBP/USD</option>
                  <option value="FX:USDJPY">USD/JPY</option>
                </optgroup>
                <optgroup label="Crypto (Live)">
                  <option value="BINANCE:BTCUSDT">Bitcoin (BTC)</option>
                  <option value="BINANCE:ETHUSDT">Ethereum (ETH)</option>
                  <option value="BINANCE:SOLUSDT">Solana (SOL)</option>
                </optgroup>
             </select>
             <small className="text-muted d-block mt-2">
               *Updates Chart & Order Form
             </small>
           </div>
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

              {/* ORDER FORM */}
              <div className="col-12">
                <div className="rounded-4 p-4 border border-secondary border-opacity-25" style={{ backgroundColor: "rgba(255,255,255,0.05)" }}>
                  <div className="row align-items-center">
                    <div className="col-md-4 mb-3 mb-md-0">
                       <h4 className="mb-0">Trade <span className="text-info">{selectedName}</span></h4>
                       <span className="badge bg-secondary mt-1">Live Execution</span>
                    </div>
                    
                    <div className="col-md-8">
                      <div className="row g-2">
                         <div className="col-6 col-sm-3">
                            <label className="form-label small text-muted">Action</label>
                            <div className="btn-group w-100">
                              <button className={`btn btn-sm ${orderType === 'buy' ? 'btn-success' : 'btn-outline-success'}`} onClick={() => setOrderType('buy')}>Buy</button>
                              <button className={`btn btn-sm ${orderType === 'sell' ? 'btn-danger' : 'btn-outline-danger'}`} onClick={() => setOrderType('sell')}>Sell</button>
                            </div>
                         </div>
                         <div className="col-6 col-sm-3">
                            <label className="form-label small text-muted">Amount ($)</label>
                            <NumberInput amount={amount} setAmount={setAmount} />
                         </div>
                         <div className="col-6 col-sm-3">
                            <label className="form-label small text-muted">Leverage</label>
                            <select className="form-select form-select-sm bg-dark text-white border-secondary" value={leverage} onChange={(e) => setLeverage(Number(e.target.value))}>
                              <option value="1">1:1</option><option value="10">1:10</option><option value="50">1:50</option><option value="100">1:100</option>
                            </select>
                         </div>
                         <div className="col-6 col-sm-3 d-flex align-items-end">
                            <button className={`btn btn-sm w-100 fw-bold ${orderType === 'buy' ? 'btn-success' : 'btn-danger'}`} onClick={handleTrade} disabled={isLoading}>
                              {isLoading ? '...' : 'Execute'}
                            </button>
                         </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
        </div>

      </div>
    </div>
  );
};

export default TradingDashboard;