import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AdvancedChart } from 'react-tradingview-embed';
import { Accordion } from 'react-bootstrap';

const PolygonPage: React.FC = () => {
  const [quantity, setQuantity] = useState<number>(0);
  const currentPrice = 0.245;
  const estimatedCost = quantity * currentPrice;

  return (
    <div style={{ background: '#f5fff5', minHeight: '100vh' }}>
      <div style={{ display: 'flex', height: '100vh', width: '100%', borderBottom: '2px solid #006400' }}>
        <div style={{ flexBasis: '70%', position: 'relative' }}>
          <AdvancedChart
            widgetProps={{
              symbol: 'BINANCE:MATICUSDT',
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
          <h3 className="mb-4 text-success fw-bold">Trade MATICUSD</h3>

          <div className="mb-3">
            <label htmlFor="currentPrice" className="form-label fw-semibold">Current Price (USD)</label>
            <input
              type="text"
              id="currentPrice"
              className="form-control"
              value={`$${currentPrice.toFixed(3)}`}
              disabled
            />
          </div>

          <div className="mb-3">
            <label htmlFor="quantity" className="form-label fw-semibold">Quantity (MATIC)</label>
            <input
              type="number"
              id="quantity"
              min={0}
              className="form-control"
              value={quantity}
              onChange={(e) => setQuantity(parseFloat(e.target.value) || 0)}
              placeholder="Enter MATIC quantity"
            />
          </div>

          <div className="mb-4">
            <label className="form-label fw-semibold">Estimated Cost (USD)</label>
            <input
              type="text"
              className="form-control"
              value={`$${estimatedCost.toLocaleString(undefined, {
                minimumFractionDigits: 3,
                maximumFractionDigits: 3,
              })}`}
              disabled
              style={{ backgroundColor: '#e9f5e9', fontWeight: '600', color: '#006400' }}
            />
          </div>

          <div className="d-flex gap-3 mb-4">
            <button
              className="btn btn-success flex-grow-1"
              onClick={() => alert(`Buying ${quantity} MATIC for $${estimatedCost.toFixed(3)}`)}
              disabled={quantity <= 0}
            >
              Buy MATIC
            </button>
            <button
              className="btn btn-danger flex-grow-1"
              onClick={() => alert(`Selling ${quantity} MATIC for $${estimatedCost.toFixed(3)}`)}
              disabled={quantity <= 0}
            >
              Sell MATIC
            </button>
          </div>

          <hr />

          <div style={{ fontSize: '0.9rem', color: '#3a3a3a' }}>
            <p><strong>High:</strong> 0.253</p>
            <p><strong>Low:</strong> 0.236</p>
            <p><strong>Typical Spread (Pips):</strong> 0.60% Over-market</p>
            <p><strong>Leverage:</strong> 20:1</p>
            <p><strong>Margin:</strong> 5%</p>
            <p><strong>Minimum Nominal Trade Size:</strong> 100 MATIC</p>
            <p><strong>Overnight Interest (daily):</strong> Buy -0.0833%, Sell 0.0000%</p>
            <p><strong>Trading Hours (GMT):</strong> 24/7</p>
            <p><strong>Exchange:</strong> N/A</p>
            <p><strong>MT5 Symbol:</strong> MATICUSD</p>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <h2 className="text-success fw-bold mb-4">Polygon (MATIC) CFD Trading</h2>

        <p>
          Polygon is an Ethereum sidechain enabling scalable, user-friendly decentralized applications with low fees. Founded in 2017
          as Matic Network and rebranded in 2021, Polygon aims to create a multi-chain Ethereum ecosystem known as ‘Ethereum’s internet of blockchains.’
          The native token MATIC is used for transaction fees, staking, and governance voting.
        </p>
        <p>
          Polygon solves Ethereum's congestion issues by providing faster, cheaper transactions without compromising security, using a proof-of-stake consensus.
          With high throughput and developer-friendly features, it supports NFTs, decentralized games, and custom blockchains.
        </p>

        <h3 className="text-success fw-bold mt-5">Advantages of Trading Polygon with AvaTrade</h3>
        <ul>
          <li>Trade crypto CFDs without owning underlying tokens or wallets.</li>
          <li>Go long or short with flexible trading strategies.</li>
          <li>Use leverage to maximize market exposure with limited capital.</li>
          <li>Benefit from tight spreads and 24/7 trading access.</li>
          <li>Access stop-loss, take-profit, and hedging orders for risk management.</li>
        </ul>

        <h3 className="text-success fw-bold mt-5">What Influences MATIC Price?</h3>
        <ul>
          <li>Ethereum price trends and upgrade developments.</li>
          <li>Use cases including NFTs, gaming, and decentralized apps.</li>
          <li>Token supply dynamics and deflationary burns.</li>
          <li>Market sentiment and regulatory environment.</li>
        </ul>

        <h4 className="fw-semibold mt-4">Trade Polygon CFDs in 3 Easy Steps</h4>
        <ol>
          <li>Create an AvaTrade account</li>
          <li>Deposit funds securely</li>
          <li>Select MATICUSD and place BUY or SELL trades</li>
        </ol>

        <h5 className="fw-semibold mt-4">Explore Other Cryptocurrencies:</h5>
        <p>Bitcoin, Ethereum, Chainlink, Dogecoin, Solana</p>

        <p className="mt-4">
          AvaTrade offers a secure and regulated environment for trading Polygon CFDs with professional tools and multilingual support.
        </p>

        <div className="mb-5">
          <h2 className="fw-bold text-success mb-4">Polygon Trading FAQ</h2>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>What is Polygon?</Accordion.Header>
              <Accordion.Body>
                Polygon is a sidechain scaling solution for Ethereum that improves transaction speed and lowers costs while maintaining security.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>How does Polygon improve Ethereum?</Accordion.Header>
              <Accordion.Body>
                By acting as a multi-chain ecosystem, Polygon reduces congestion on Ethereum and supports faster, cheaper transactions and scalable dApps.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>What affects MATIC’s price volatility?</Accordion.Header>
              <Accordion.Body>
                Factors include Ethereum network upgrades, adoption of Polygon for NFTs and games, token supply changes, and global crypto market sentiment.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default PolygonPage;
