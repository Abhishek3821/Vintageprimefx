import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AdvancedChart } from 'react-tradingview-embed';
import { Accordion } from 'react-bootstrap';

const CrudeOilPage: React.FC = () => {
  const [quantity, setQuantity] = useState<number>(0);
  const currentPrice = 68.18;
  const estimatedCost = quantity * currentPrice;

  return (
    <div style={{ background: '#fffaf5', minHeight: '100vh' }}>
      <div style={{ display: 'flex', height: '100vh', width: '100%', borderBottom: '2px solid #964B00' }}>
        <div style={{ flexBasis: '70%', position: 'relative' }}>
          <AdvancedChart
            widgetProps={{
              symbol: 'NYMEX:CL1!',
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
            backgroundColor: '#fdf5f0',
            padding: '2rem',
            boxShadow: '0 0 15px rgb(150 75 0 / 0.15)',
            borderRadius: '0 0 0 12px',
            fontFamily: 'Arial, sans-serif',
          }}
        >
          <h3 className="mb-4 text-warning fw-bold">Trade Crude Oil</h3>

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
            <label htmlFor="quantity" className="form-label fw-semibold">Quantity (Barrels)</label>
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
              style={{ backgroundColor: '#fcefe2', fontWeight: '600', color: '#964B00' }}
            />
          </div>

          <div className="d-flex gap-3 mb-4">
            <button
              className="btn btn-warning flex-grow-1"
              onClick={() => alert(`Buying ${quantity} Barrels for $${estimatedCost.toFixed(2)}`)}
              disabled={quantity <= 0}
            >
              Buy Crude
            </button>
            <button
              className="btn btn-secondary flex-grow-1"
              onClick={() => alert(`Selling ${quantity} Barrels for $${estimatedCost.toFixed(2)}`)}
              disabled={quantity <= 0}
            >
              Sell Crude
            </button>
          </div>

          <hr />

          <div style={{ fontSize: '0.9rem', color: '#3a3a3a' }}>
            <p><strong>High:</strong> 68.55</p>
            <p><strong>Low:</strong> 67.50</p>
            <p><strong>Buy:</strong> 68.21</p>
            <p><strong>Sell:</strong> 68.18</p>
            <p><strong>Instrument:</strong> Crude Oil</p>
            <p><strong>Currency:</strong> USD</p>
            <p><strong>Spread:</strong> $0.01 over market</p>
            <p><strong>Minimum Trade Size:</strong> 10</p>
            <p><strong>Leverage:</strong> 100:1</p>
            <p><strong>Margin:</strong> 1%</p>
            <p><strong>Increment:</strong> 0.01</p>
            <p><strong>Overnight Interest (daily):</strong> Buy -0.0246%, Sell -0.0004%</p>
            <p><strong>Trading Hours (GMT):</strong> 22:01–20:59</p>
            <p><strong>Quoted Months:</strong> Monthly</p>
            <p><strong>Exchange:</strong> NYMEX</p>
            <p><strong>Units:</strong> Barrel</p>
            <p><strong>MT5/MT4 Symbol:</strong> CrudeOIL</p>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <h2 className="text-warning fw-bold mb-4">Crude Oil CFD Trading</h2>
        <h4 className="fw-semibold">Crude Oil Trading – How & When to Trade Oil?</h4>

        <h5 className="mt-4 fw-bold">What is Crude Oil?</h5>
        <p>
          Crude oil, also known as petroleum, is a liquid hydrocarbon found in the Earth's crust. It is refined into fuel like gasoline and diesel. The most valuable crude is light and sweet due to low density and sulfur.
        </p>

        <h5 className="mt-4 fw-bold">Types of Crude Oil</h5>
        <p>
          There are over 160 types of crude, with Brent Crude and WTI being the two benchmarks.
        </p>
        <ul>
          <li><strong>Brent Crude:</strong> Sourced from the North Sea, light and sweet. Traded on ICE EUROPE.</li>
          <li><strong>WTI:</strong> Extracted in the U.S., very light and sweet. Traded on NYMEX.</li>
        </ul>

        <h5 className="mt-4 fw-bold">Market Influences</h5>
        <ul>
          <li><strong>Supply:</strong> Influenced by OPEC decisions, U.S. inventory levels, rig counts, and geopolitical events.</li>
          <li><strong>Demand:</strong> Affected by economic conditions, alternative energy development, and currency fluctuations.</li>
        </ul>

        <h5 className="mt-4 fw-bold">How to Trade Oil</h5>
        <p>
          Traders use fundamental analysis (like OPEC meetings, supply data) and technical indicators (RSI, MACD) to trade oil via CFDs, ETFs, stocks, and futures. Oil CFDs offer leverage, liquidity, and no need for physical delivery.
        </p>

        <h5 className="mt-4 fw-bold">Why Trade Oil on AvaTrade?</h5>
        <ul>
          <li>Leverage up to 200:1</li>
          <li>No commissions or margin interest</li>
          <li>Secure banking options</li>
          <li>24/7 support</li>
          <li>Access to powerful trading platforms & resources</li>
        </ul>

        <div className="mb-5 mt-4">
          <h2 className="fw-bold text-warning mb-4">FAQs</h2>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Why trade crude oil?</Accordion.Header>
              <Accordion.Body>
                Crude oil is one of the most liquid and volatile commodities. It offers strong trading opportunities due to global demand and supply dynamics.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Should I trade Brent or WTI?</Accordion.Header>
              <Accordion.Body>
                Both are high-quality crudes. Brent is more global; WTI has stronger U.S. influence. Choose based on your market view and preferred volatility.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Best strategy for trading crude?</Accordion.Header>
              <Accordion.Body>
                Start with fundamental analysis to understand global supply/demand. Combine with technical analysis for timing entries and exits.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default CrudeOilPage;
