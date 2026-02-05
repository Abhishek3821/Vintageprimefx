import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AdvancedChart  } from "react-tradingview-embed";
import { useState, useEffect } from 'react';
import { Accordion } from 'react-bootstrap';


const BtcUsdPage: React.FC = () => {
  const [quantity, setQuantity] = useState<number>(0);
  const [currentPrice] = useState<number>(60830.47); // Example static price, replace with live data if needed
  const [estimatedCost, setEstimatedCost] = useState<number>(0);

  useEffect(() => {
    setEstimatedCost(quantity * currentPrice);
  }, [quantity, currentPrice]);

  return (
    <div style={{ background: '#f5fff5', minHeight: '100vh' }}>
      {/* Top Split Section: Chart Left (70%), Purchase Right (30%) */}
    <div
        style={{
          display: 'flex',
          height: '100vh',
          width: '100%',
          borderBottom: '2px solid #006400',
        }}
      >
        {/* Left side: Chart */}
        <div style={{ flexBasis: '70%', position: 'relative' }}>
          <AdvancedChart
            widgetProps={{
              symbol: "BITSTAMP:BTCUSD",
              theme: "light",
              style: "1",
              locale: "en",
              autosize: false,
              width: "100%",
              height: "100%",
            }}
            widgetPropsAny={{
              style: {
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: 'none',
              },
            }}
          />
        </div>

        {/* Right side: Professional Buy/Sell Panel */}
        <div
          style={{
            flexBasis: '30%',
            backgroundColor: '#f8f9fa',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '2rem',
            boxShadow: '0 0 15px rgb(0 100 0 / 0.15)',
            borderRadius: '0 0 0 12px',
            fontFamily: 'Arial, sans-serif',
          }}
        >
          <h3 className="mb-4" style={{ color: '#006400', fontWeight: '700' }}>
            Trade BTCUSD
          </h3>

          <div className="mb-3">
            <label className="form-label fw-semibold" htmlFor="currentPrice">
              Current Price (USD)
            </label>
            <input
              type="text"
              id="currentPrice"
              className="form-control btc-input-style"
              value={`$${currentPrice.toLocaleString()}`}
              disabled
            />
          </div>

          <div className="mb-3">
            <label htmlFor="quantity" className="form-label fw-semibold">
              Quantity (BTC)
            </label>
            <input
              type="number"
              min={0}
              step={0.0001}
              id="quantity"
              className="form-control"
              placeholder="Enter BTC amount"
              value={quantity}
              onChange={(e) => setQuantity(parseFloat(e.target.value) || 0)}
            />
          </div>

          <div className="mb-4">
            <label className="form-label fw-semibold">Estimated Cost (USD)</label>
            <input
              type="text"
              className="form-control"
              value={`$${estimatedCost.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`}
              disabled
              style={{ backgroundColor: '#e9f5e9', fontWeight: '600', color: '#006400' }}
            />
          </div>

          <div className="d-flex gap-3 mb-4">
            <button
              className="btn btn-success flex-grow-1"
              onClick={() => alert(`Buying ${quantity} BTC for $${estimatedCost.toFixed(2)}`)}
              disabled={quantity <= 0}
            >
              Buy BTC
            </button>
            <button
              className="btn btn-danger flex-grow-1"
              onClick={() => alert(`Selling ${quantity} BTC for $${estimatedCost.toFixed(2)}`)}
              disabled={quantity <= 0}
            >
              Sell BTC
            </button>
          </div>

          <hr />

          <div style={{ fontSize: '0.9rem', color: '#3a3a3a' }}>
            <p><strong>Balance:</strong> 2.5 BTC</p>
            <p><strong>Leverage:</strong> Up to 2:1</p>
            <p><strong>Spread:</strong> Dynamic</p>
            <p><strong>Margin:</strong> 50%</p>
          </div>
        </div>
      </div>

      {/* Below full width content sections */}
      <div className="container py-5">
        <h1 className="fw-bold mb-4" style={{ color: '#006400' }}>BTCUSD - Bitcoin Price Chart</h1>
        <p className="text-muted mb-5">Real-time price data and instrument information for BTC/USD</p>

        {/* Market Highlights */}
        <div className="row g-4 text-center mb-5">
          <div className="col-md-4">
            <div className="p-4 border rounded shadow-sm" style={{ backgroundColor: '#90EE90' }}>
              <h5 className="fw-bold">High/Low</h5>
              <p className="mb-1">61,003.99 / 60,432.18</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-4 border rounded shadow-sm" style={{ backgroundColor: '#90EE90' }}>
              <h5 className="fw-bold">Buy/Sell</h5>
              <p className="mb-1">60,830.47 / 60,769.88</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-4 border rounded shadow-sm" style={{ backgroundColor: '#90EE90' }}>
              <h5 className="fw-bold">Change</h5>
              <p className="mb-1">+0.21%</p>
            </div>
          </div>
        </div>

        {/* Instrument Info */}
        <div className="mb-5">
          <h2 className="fw-bold" style={{ color: '#006400' }}>BTCUSD Instrument Info</h2>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 mt-3">
            <div className="col">
              <div className="border rounded p-3 bg-white h-100">
                <strong>Spread:</strong> Dynamic
              </div>
            </div>
            <div className="col">
              <div className="border rounded p-3 bg-white h-100">
                <strong>Leverage:</strong> Up to 2:1
              </div>
            </div>
            <div className="col">
              <div className="border rounded p-3 bg-white h-100">
                <strong>Margin:</strong> 50%
              </div>
            </div>
            <div className="col">
              <div className="border rounded p-3 bg-white h-100">
                <strong>Overnight Interest Buy:</strong> -0.0502%
              </div>
            </div>
            <div className="col">
              <div className="border rounded p-3 bg-white h-100">
                <strong>Overnight Interest Sell:</strong> -0.0274%
              </div>
            </div>
            <div className="col">
              <div className="border rounded p-3 bg-white h-100">
                <strong>Initial Margin:</strong> 50%
              </div>
            </div>
          </div>
        </div>

        {/* What is BTCUSD? */}
        <div className="mb-5">
          <h2 className="fw-bold" style={{ color: '#006400' }}>What is BTCUSD?</h2>
          <p>
            BTCUSD is the ticker symbol for the Bitcoin and US dollar exchange rate. BTCUSD charts and market data let traders monitor the performance of this pair.
          </p>
          <p>
            Bitcoin (BTC) is a decentralized digital currency, while the US dollar (USD) is the world’s leading fiat currency. Trading BTCUSD means speculating on the price of Bitcoin relative to the dollar.
          </p>
        </div>

        {/* Bitcoin History */}
        <div className="mb-5">
          <h2 className="fw-bold" style={{ color: '#006400' }}>Bitcoin’s History</h2>
          <p>
            Introduced in 2009 by Satoshi Nakamoto, Bitcoin has since transformed from a peer-to-peer digital currency to a global investment asset. Bitcoin reached its first major milestone in 2017, surpassing $19,000 before experiencing major price volatility in subsequent years.
          </p>
        </div>

        {/* BTCUSD Evolution */}
        <div className="mb-5">
          <h2 className="fw-bold" style={{ color: '#006400' }}>BTCUSD Evolution (2021–2025)</h2>
          <ul>
            <li>2021: Record high of over $68,000.</li>
            <li>2022–2023: Bearish correction, macroeconomic uncertainty.</li>
            <li>2024: Anticipation of halving event and renewed interest.</li>
            <li>2025: Growing institutional adoption and volatility.</li>
          </ul>
        </div>

        {/* USD Overview */}
        <div className="mb-5">
          <h2 className="fw-bold" style={{ color: '#006400' }}>What is USD?</h2>
          <p>
            The United States dollar is the world’s most traded currency. It acts as a global reserve currency and is used in most global commodities.
          </p>
        </div>

        {/* Regulations */}
        <div className="mb-5">
          <h2 className="fw-bold" style={{ color: '#006400' }}>BTCUSD Regulations</h2>
          <p>
            Cryptocurrency markets are affected by government regulations, institutional adoption, and macroeconomic data. US-based trading of BTCUSD is highly regulated under the SEC and CFTC.
          </p>
        </div>

        {/* BTCUSD in 2025 */}
        <div className="mb-5">
          <h2 className="fw-bold" style={{ color: '#006400' }}>BTCUSD in 2025</h2>
          <p>
            Bitcoin's price in 2025 will depend on institutional demand, regulatory clarity, and macroeconomic conditions. Traders expect increased volatility and trading volume around halving events and ETF news.
          </p>
        </div>

{/* FAQs */}
<div className="mb-5">
  <h2 className="fw-bold text-success mb-4">Frequently Asked Questions</h2>
  <Accordion>
    <Accordion.Item eventKey="0">
      <Accordion.Header>What affects the BTCUSD rate?</Accordion.Header>
      <Accordion.Body>
        Supply and demand dynamics, investor sentiment, macroeconomic trends, and government regulations all influence the BTCUSD exchange rate.
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="1">
      <Accordion.Header>Can I trade BTCUSD?</Accordion.Header>
      <Accordion.Body>
        Yes, BTCUSD can be traded through brokers offering cryptocurrency CFDs or via cryptocurrency exchanges.
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="2">
      <Accordion.Header>Is BTCUSD highly volatile?</Accordion.Header>
      <Accordion.Body>
        Absolutely. BTCUSD is known for significant price swings and rapid movements, which can offer both opportunities and risks for traders.
      </Accordion.Body>
    </Accordion.Item>
  </Accordion>
</div>


      </div>
    </div>
  );
};

export default BtcUsdPage;
