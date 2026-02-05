import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AdvancedChart } from 'react-tradingview-embed';
import { Accordion } from 'react-bootstrap';

const LitecoinPage: React.FC = () => {
  const [quantity, setQuantity] = useState<number>(0);
  const currentPrice = 109.42;
  const estimatedCost = quantity * currentPrice;

  return (
    <div style={{ background: '#f5fff5', minHeight: '100vh' }}>
      <div style={{ display: 'flex', height: '100vh', width: '100%', borderBottom: '2px solid #006400' }}>
        <div style={{ flexBasis: '70%', position: 'relative' }}>
          <AdvancedChart
            widgetProps={{
              symbol: 'BINANCE:LTCUSDT',
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
          <h3 className="mb-4 text-success fw-bold">Trade LTCUSD</h3>

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
            <label htmlFor="quantity" className="form-label fw-semibold">Quantity (LTC)</label>
            <input
              type="number"
              id="quantity"
              min={0}
              className="form-control"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value) || 0)}
              placeholder="Enter LTC amount"
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
              onClick={() => alert(`Buying ${quantity} LTC for $${estimatedCost.toFixed(2)}`)}
              disabled={quantity <= 0}
            >
              Buy LTC
            </button>
            <button
              className="btn btn-danger flex-grow-1"
              onClick={() => alert(`Selling ${quantity} LTC for $${estimatedCost.toFixed(2)}`)}
              disabled={quantity <= 0}
            >
              Sell LTC
            </button>
          </div>

          <hr />

          <div style={{ fontSize: '0.9rem', color: '#3a3a3a' }}>
            <p><strong>Balance:</strong> 5,000 LTC</p>
            <p><strong>Leverage:</strong> 50:1</p>
            <p><strong>Spread:</strong> Typical 0.30% Over-market</p>
            <p><strong>Margin:</strong> 2%</p>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <h2 className="text-success fw-bold mb-4">Litecoin CFD Trading</h2>
        <p>
          Litecoin is a peer-to-peer, decentralized cryptocurrency known for faster transaction times and lower fees compared to Bitcoin. It was designed to improve scalability and payment efficiency.
        </p>

        <h3 className="text-success fw-bold mt-5">Why Trade Litecoin CFDs?</h3>
        <ul>
          <li><strong>Trade 24/7:</strong> Access the market anytime without restrictions.</li>
          <li><strong>Leverage:</strong> Up to 50:1 leverage available to increase exposure.</li>
          <li><strong>Secure Broker:</strong> AvaTrade is regulated and trusted globally.</li>
          <li><strong>Easy Access:</strong> Use mobile apps or desktop platforms to trade.</li>
          <li><strong>CFD Flexibility:</strong> Trade both rising and falling markets without owning the asset.</li>
        </ul>

        <h3 className="text-success fw-bold mt-5">What Affects Litecoin Price?</h3>
        <ul>
          <li><strong>Market Sentiment:</strong> Investor behavior and crypto trends.</li>
          <li><strong>Adoption:</strong> Merchant and exchange support can impact price.</li>
          <li><strong>Technology:</strong> Network upgrades and transaction speed improvements.</li>
          <li><strong>Regulations:</strong> Government policy and legal frameworks worldwide.</li>
        </ul>

        <h4 className="fw-semibold mt-4">How to Start Trading Litecoin:</h4>
        <ol>
          <li>Create an AvaTrade account</li>
          <li>Fund your account</li>
          <li>Choose LTCUSD and place a buy or sell order</li>
        </ol>

        <h5 className="fw-semibold mt-4">Explore Other Cryptos:</h5>
        <p>Bitcoin, Ethereum, Ripple, Dogecoin, Solana</p>

        <p className="mt-4">
          Take advantage of Litecoin's price movements with AvaTrade CFDs. Experience secure, flexible trading with a trusted broker.
        </p>

        <div className="mb-5">
          <h2 className="fw-bold text-success mb-4">Litecoin Trading FAQ</h2>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Is it a good idea to trade Litecoin?</Accordion.Header>
              <Accordion.Body>
                Yes. Litecoin is popular and volatile, making it ideal for active traders seeking price action opportunities.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Where can I trade Litecoin?</Accordion.Header>
              <Accordion.Body>
                You can trade Litecoin CFDs on AvaTrade’s platforms without owning the underlying asset.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>What is the best trading strategy for Litecoin?</Accordion.Header>
              <Accordion.Body>
                Use technical indicators, trend analysis, and proper risk management tools such as stop-loss and take-profit orders.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default LitecoinPage;
