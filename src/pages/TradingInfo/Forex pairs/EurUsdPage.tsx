import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AdvancedChart } from 'react-tradingview-embed';
import { Accordion } from 'react-bootstrap';

const EurUsdPage: React.FC = () => {
  const [quantity, setQuantity] = useState<number>(0);
  const navigate = useNavigate();
  const currentPrice = 1.16483;
  const estimatedCost = quantity * currentPrice;

  return (
    <div style={{ background: '#f5fff5', minHeight: '100vh' }}>
      <div style={{ display: 'flex', height: '100vh', width: '100%', borderBottom: '2px solid #006400' }}>
        <div style={{ flexBasis: '70%', position: 'relative' }}>
          <AdvancedChart
            widgetProps={{
              symbol: 'FX:EURUSD',
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
          <h3 className="mb-4 text-success fw-bold">Trade EUR/USD</h3>

          <div className="mb-3">
            <label htmlFor="currentPrice" className="form-label fw-semibold">Current Price</label>
            <input
              type="text"
              id="currentPrice"
              className="form-control"
              value={`$${currentPrice.toFixed(5)}`}
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
              placeholder="Enter trade quantity"
            />
          </div>

          <div className="mb-4">
            <label className="form-label fw-semibold">Estimated Cost</label>
            <input
              type="text"
              className="form-control"
              value={`$${estimatedCost.toFixed(5)}`}
              disabled
              style={{ backgroundColor: '#e9f5e9', fontWeight: '600', color: '#006400' }}
            />
          </div>

          <div className="d-flex gap-3 mb-4">
            <button
              className="btn btn-success flex-grow-1"
              onClick={() => navigate(`/dashboard?tab=trading&instrument=EUR_USD&side=buy`)}
              disabled={quantity <= 0}
            >
              Buy
            </button>
            <button
              className="btn btn-danger flex-grow-1"
              onClick={() => navigate(`/dashboard?tab=trading&instrument=EUR_USD&side=sell`)}
              disabled={quantity <= 0}
            >
              Sell
            </button>
          </div>

          <hr />

          <div style={{ fontSize: '0.9rem', color: '#3a3a3a' }}>
            <p><strong>High:</strong> 1.16581</p>
            <p><strong>Low:</strong> 1.16141</p>
            <p><strong>Spread:</strong> 0.8</p>
            <p><strong>Leverage:</strong> 400:1</p>
            <p><strong>Margin:</strong> 0.25%</p>
            <p><strong>Minimum Nominal Trade Size:</strong> 1000</p>
            <p><strong>Overnight Interest (daily):</strong> Buy -0.0076%, Sell 0.0017%</p>
            <p><strong>Trading Hours (GMT):</strong> 24/5</p>
            <p><strong>MT5/MT4 Symbol:</strong> EURUSD</p>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <h2 className="text-success fw-bold mb-4">EUR/USD Trading</h2>
        <p>
          The EUR/USD is the world’s most traded currency pair and represents the euro against the US dollar. Its massive liquidity ensures tight spreads and consistent trading opportunities.
        </p>
        <h3 className="text-success fw-bold mt-5">What Influences EUR/USD?</h3>
        <ul>
          <li>Interest rates set by the ECB and the Fed</li>
          <li>Economic indicators such as Nonfarm Payrolls and European employment reports</li>
          <li>Geopolitical events and fiscal policies in the US and Europe</li>
          <li>Market sentiment and global economic conditions</li>
        </ul>
        <h4 className="fw-semibold mt-4">Why Trade EUR/USD?</h4>
        <ul>
          <li>Unmatched liquidity</li>
          <li>Tightest spreads</li>
          <li>High volatility suitable for short- and long-term strategies</li>
          <li>Transparent economic data</li>
        </ul>
        <h5 className="fw-semibold mt-4">Getting Started</h5>
        <ol>
          <li>Open a trading account</li>
          <li>Deposit funds</li>
          <li>Search for EUR/USD and place your trade</li>
        </ol>

        <div className="mb-5 mt-5">
          <h2 className="fw-bold text-success mb-4">EUR/USD Trading FAQ</h2>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Why is EUR/USD so popular?</Accordion.Header>
              <Accordion.Body>
                Because of the consistent liquidity, tight spreads, and deep market, EUR/USD is a preferred pair for both institutional and retail traders.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Is EUR/USD good for beginners?</Accordion.Header>
              <Accordion.Body>
                Yes, due to its stability, clear price movements, and wide availability of market information.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>What's a simple strategy for EUR/USD?</Accordion.Header>
              <Accordion.Body>
                Using support and resistance levels to identify potential breakouts or pullbacks is an effective strategy.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default EurUsdPage;
