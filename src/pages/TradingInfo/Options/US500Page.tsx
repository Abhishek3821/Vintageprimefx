import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AdvancedChart } from 'react-tradingview-embed';
import { Accordion } from 'react-bootstrap';

const US500Page = () => {
  const [quantity, setQuantity] = useState(0);
  const currentPrice = 5500.25;
  const estimatedCost = quantity * currentPrice;

  return (
    <div style={{ background: '#f5fff5', minHeight: '100vh' }}>
      <div style={{ display: 'flex', height: '100vh', width: '100%', borderBottom: '2px solid #006400' }}>
        <div style={{ flexBasis: '70%', position: 'relative' }}>
          <AdvancedChart
            widgetProps={{
              symbol: 'FOREXCOM:SPXUSD',
              theme: 'light',
              style: '1',
              locale: 'en',
              autosize: false,
              width: '100%',
              height: '100%',
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

        <div
          style={{
            flexBasis: '30%',
            backgroundColor: '#f8f9fa',
            padding: '2rem',
            boxShadow: '0 0 15px rgb(0 100 0 / 0.15)',
            borderRadius: '0 0 0 12px',
            fontFamily: 'Arial, sans-serif',
          }}
        >
          <h3 className="mb-4 text-success fw-bold">Trade US500CASH</h3>

          <div className="mb-3">
            <label htmlFor="currentPrice" className="form-label fw-semibold">Current Price (USD)</label>
            <input
              type="text"
              id="currentPrice"
              className="form-control"
              value={`$${currentPrice.toFixed(2)}`}
              disabled
            />
          </div>

          <div className="mb-3">
            <label htmlFor="quantity" className="form-label fw-semibold">Quantity</label>
            <input
              type="number"
              id="quantity"
              min={0}
              className="form-control"
              value={quantity}
              onChange={(e) => setQuantity(parseFloat(e.target.value) || 0)}
              placeholder="Enter quantity"
            />
          </div>

          <div className="mb-4">
            <label className="form-label fw-semibold">Estimated Cost (USD)</label>
            <input
              type="text"
              className="form-control"
              value={`$${estimatedCost.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}`}
              disabled
              style={{ backgroundColor: '#e9f5e9', fontWeight: '600', color: '#006400' }}
            />
          </div>

          <div className="d-flex gap-3 mb-4">
            <button
              className="btn btn-success flex-grow-1"
              onClick={() => alert(`Buying ${quantity} US500 for $${estimatedCost.toFixed(2)}`)}
              disabled={quantity <= 0}
            >
              Buy
            </button>
            <button
              className="btn btn-danger flex-grow-1"
              onClick={() => alert(`Selling ${quantity} US500 for $${estimatedCost.toFixed(2)}`)}
              disabled={quantity <= 0}
            >
              Sell
            </button>
          </div>

          <hr />

          <div style={{ fontSize: '0.9rem', color: '#3a3a3a' }}>
            <p><strong>Live Spread (pips):</strong> FX/CFD: 100 pips, Option: 287.5563 pips</p>
            <p><strong>Leverage:</strong> FX/CFD: 66.67:1, Options: 66.67:1</p>
            <p><strong>Margin:</strong> 1.5%</p>
            <p><strong>Overnight Interest (daily):</strong> Sell: -0.00036%, Buy: -0.024639%</p>
            <p><strong>Lot Size:</strong> 1</p>
            <p><strong>Trading Hours (UTC):</strong></p>
            <ul>
              <li>Mon–Fri: 00:15–13:15, 13:30–20:15</li>
              <li>Sat: Closed</li>
            </ul>
            <p><strong>Symbol:</strong> US500CASH</p>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <h2 className="text-success fw-bold mb-4">About US500 Index (S&P 500)</h2>
        <p>
          The US500CASH, or S&P 500 Index, represents the top 500 publicly traded companies in the U.S. It is widely regarded as a benchmark for the U.S. equity market.
        </p>

        <h3 className="text-success fw-bold mt-5">Why Trade US500 CFDs?</h3>
        <ul>
          <li>Diversified exposure to major U.S. companies.</li>
          <li>Ability to go long or short with margin.</li>
          <li>24/5 trading access during market sessions.</li>
          <li>Efficient way to hedge U.S. equity portfolios.</li>
        </ul>

        <h3 className="text-success fw-bold mt-5">US500 Specifications</h3>
        <ul>
          <li><strong>Instrument:</strong> US500CASH</li>
          <li><strong>Currency:</strong> USD</li>
          <li><strong>Spread:</strong> FX/CFD: 100 pips, Option: 287.5563 pips</li>
          <li><strong>Leverage:</strong> 66.67:1</li>
          <li><strong>Margin:</strong> 1.5%</li>
          <li><strong>Lot Size:</strong> 1</li>
          <li><strong>Overnight Interest:</strong> Buy: -0.024639%, Sell: -0.00036%</li>
          <li><strong>Trading Hours (UTC):</strong> Mon–Fri: 00:15–13:15, 13:30–20:15</li>
        </ul>

        <h4 className="fw-semibold mt-4">Top S&P 500 Components</h4>
        <ul>
          <li>Apple Inc.</li>
          <li>Microsoft Corp.</li>
          <li>Amazon.com Inc.</li>
          <li>Alphabet Inc.</li>
          <li>Berkshire Hathaway</li>
        </ul>

        <h4 className="fw-semibold mt-4">Strategy Tips</h4>
        <p>
          Track earnings season, macroeconomic indicators, and Federal Reserve policies. Use technical indicators such as Bollinger Bands and moving averages to guide entry and exit.
        </p>

        <div className="mb-5 mt-4">
          <h2 className="fw-bold text-success mb-4">FAQs</h2>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>What is the US500 Index?</Accordion.Header>
              <Accordion.Body>
                The US500 Index tracks 500 of the largest companies listed on U.S. exchanges and serves as a key measure of U.S. stock market health.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>How volatile is the US500?</Accordion.Header>
              <Accordion.Body>
                The S&P 500 can experience high volatility, especially around major news events or economic data releases.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Can I trade US500 24/7?</Accordion.Header>
              <Accordion.Body>
                No. US500 trading is typically available Monday through Friday, during key market hours. Always check your broker's platform.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default US500Page;
