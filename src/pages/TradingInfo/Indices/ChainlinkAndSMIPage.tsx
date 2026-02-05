import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AdvancedChart } from 'react-tradingview-embed';
import { Accordion } from 'react-bootstrap';

const ChainlinkAndSMIPage: React.FC = () => {
  const [quantity, setQuantity] = useState<number>(0);
  const currentPrice = 18.50;
  const estimatedCost = quantity * currentPrice;

  return (
    <div style={{ background: '#f5fff5', minHeight: '100vh' }}>
      <div style={{ display: 'flex', height: '100vh', width: '100%', borderBottom: '2px solid #006400' }}>
        <div style={{ flexBasis: '70%', position: 'relative' }}>
          <AdvancedChart
            widgetProps={{
              symbol: 'BINANCE:LINKUSDT',
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
          <h3 className="mb-4 text-success fw-bold">Trade LINKUSD</h3>

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
            <label htmlFor="quantity" className="form-label fw-semibold">Quantity (LINK)</label>
            <input
              type="number"
              id="quantity"
              min={0}
              className="form-control"
              value={quantity}
              onChange={(e) => setQuantity(parseFloat(e.target.value) || 0)}
              placeholder="Enter LINK quantity"
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
              onClick={() => alert(`Buying ${quantity} LINK for $${estimatedCost.toFixed(2)}`)}
              disabled={quantity <= 0}
            >
              Buy LINK
            </button>
            <button
              className="btn btn-danger flex-grow-1"
              onClick={() => alert(`Selling ${quantity} LINK for $${estimatedCost.toFixed(2)}`)}
              disabled={quantity <= 0}
            >
              Sell LINK
            </button>
          </div>

          <hr />

          <div style={{ fontSize: '0.9rem', color: '#3a3a3a' }}>
            <p><strong>High:</strong> 19.10</p>
            <p><strong>Low:</strong> 17.86</p>
            <p><strong>Typical Spread (Pips):</strong> 0.60% Over-market</p>
            <p><strong>Leverage:</strong> 20:1</p>
            <p><strong>Margin:</strong> 5%</p>
            <p><strong>Minimum Nominal Trade Size:</strong> 10 LINK</p>
            <p><strong>Overnight Interest (daily):</strong> Buy -0.0833%, Sell 0.0000%</p>
            <p><strong>Trading Hours (GMT):</strong> 24/7</p>
            <p><strong>Exchange:</strong> N/A</p>
            <p><strong>MT5/MT4 Symbol:</strong> LINKUSD</p>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <h2 className="text-success fw-bold mb-4">Chainlink & Swiss Market Index (SMI) Trading</h2>
        <p>
          Chainlink is a decentralized blockchain oracle network enabling smart contracts to securely interact with off-chain data. The LINK token is used to pay for services within the network.
        </p>
        <p>
          The Swiss Market Index (SMI), also known as SWISS_20, is Switzerland’s benchmark stock index composed of the top 20 blue-chip companies. It is heavily weighted toward healthcare and consumer goods sectors.
        </p>

        <h3 className="text-success fw-bold mt-5">Benefits of Trading LINK & SMI CFDs</h3>
        <ul>
          <li>No need for physical ownership or wallets.</li>
          <li>Short and long positions available.</li>
          <li>Access to leverage for greater exposure with less capital.</li>
          <li>Trade 24/7 (LINK) and extended hours (SMI).</li>
        </ul>

        <h3 className="text-success fw-bold mt-5">Key SMI Information</h3>
        <ul>
          <li><strong>Instrument:</strong> SWISS_20</li>
          <li><strong>Country:</strong> Switzerland</li>
          <li><strong>Currency:</strong> CHF</li>
          <li><strong>Buy:</strong> 11,984</li>
          <li><strong>Sell:</strong> 11,982</li>
          <li><strong>High/Low:</strong> 12,022 / 11,962</li>
          <li><strong>Spread:</strong> 1.00 over market</li>
          <li><strong>Minimum Trade Size:</strong> 0.1</li>
          <li><strong>Leverage:</strong> 100:1</li>
          <li><strong>Margin:</strong> 1%</li>
          <li><strong>Increment:</strong> 1</li>
          <li><strong>Overnight Interest (daily):</strong> Buy -0.0138%, Sell -0.0112%</li>
          <li><strong>Trading Hours (GMT):</strong> 06:00–19:59</li>
          <li><strong>Quoted Months:</strong> Mar, Jun, Sep, Dec</li>
          <li><strong>Exchange:</strong> EUREX</li>
          <li><strong>Units:</strong> Index</li>
          <li><strong>MT5/MT4 Symbol:</strong> SWISS_20</li>
        </ul>

        <h4 className="fw-semibold mt-4">Top SMI Components</h4>
        <ul>
          <li>Nestlé (Food products)</li>
          <li>Novartis (Pharmaceuticals)</li>
          <li>Roche Holding (Pharmaceuticals)</li>
          <li>UBS (Banking)</li>
          <li>Zurich (Insurance)</li>
        </ul>

        <h4 className="fw-semibold mt-4">Trading Strategy</h4>
        <p>
          Use a combination of indicators like RSI, MACD, and moving averages to find entry/exit points. Always follow a consistent trading strategy.
        </p>

        <div className="mb-5 mt-4">
          <h2 className="fw-bold text-success mb-4">FAQs</h2>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>What is Chainlink?</Accordion.Header>
              <Accordion.Body>
                Chainlink is a decentralized network that enables smart contracts to interact securely with real-world data through oracles.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>What is the SMI 20?</Accordion.Header>
              <Accordion.Body>
                The SMI 20 is Switzerland’s main stock index, representing the 20 largest companies on the SIX Swiss Exchange.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>What drives SMI price movement?</Accordion.Header>
              <Accordion.Body>
                SMI is influenced by Swiss economic conditions, global events, health care sector news, and EU trade dynamics.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default ChainlinkAndSMIPage;
