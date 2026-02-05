import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AdvancedChart } from 'react-tradingview-embed';
import { Accordion } from 'react-bootstrap';

const ShibaInuPage: React.FC = () => {
  const [quantity, setQuantity] = useState<number>(0);
  const currentPrice = 0.0000150;
  const estimatedCost = quantity * currentPrice;

  return (
    <div style={{ background: '#f5fff5', minHeight: '100vh' }}>
      <div style={{ display: 'flex', height: '100vh', width: '100%', borderBottom: '2px solid #006400' }}>
        <div style={{ flexBasis: '70%', position: 'relative' }}>
          <AdvancedChart
            widgetProps={{
              symbol: 'BINANCE:SHIBUSDT',
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
          <h3 className="mb-4 text-success fw-bold">Trade SHIBUSD</h3>

          <div className="mb-3">
            <label htmlFor="currentPrice" className="form-label fw-semibold">Current Price (USD)</label>
            <input
              type="text"
              id="currentPrice"
              className="form-control"
              value={`$${currentPrice.toFixed(7)}`}
              disabled
            />
          </div>

          <div className="mb-3">
            <label htmlFor="quantity" className="form-label fw-semibold">Quantity (SHIB)</label>
            <input
              type="number"
              id="quantity"
              min={0}
              className="form-control"
              value={quantity}
              onChange={(e) => setQuantity(parseFloat(e.target.value) || 0)}
              placeholder="Enter SHIB quantity"
            />
          </div>

          <div className="mb-4">
            <label className="form-label fw-semibold">Estimated Cost (USD)</label>
            <input
              type="text"
              className="form-control"
              value={`$${estimatedCost.toLocaleString(undefined, {
                minimumFractionDigits: 7,
                maximumFractionDigits: 7,
              })}`}
              disabled
              style={{ backgroundColor: '#e9f5e9', fontWeight: '600', color: '#006400' }}
            />
          </div>

          <div className="d-flex gap-3 mb-4">
            <button
              className="btn btn-success flex-grow-1"
              onClick={() => alert(`Buying ${quantity} SHIB for $${estimatedCost.toFixed(7)}`)}
              disabled={quantity <= 0}
            >
              Buy SHIB
            </button>
            <button
              className="btn btn-danger flex-grow-1"
              onClick={() => alert(`Selling ${quantity} SHIB for $${estimatedCost.toFixed(7)}`)}
              disabled={quantity <= 0}
            >
              Sell SHIB
            </button>
          </div>

          <hr />

          <div style={{ fontSize: '0.9rem', color: '#3a3a3a' }}>
            <p><strong>High:</strong> 0.0000157</p>
            <p><strong>Low:</strong> 0.0000144</p>
            <p><strong>Typical Spread (Pips):</strong> 0.60% Over-market</p>
            <p><strong>Leverage:</strong> 20:1</p>
            <p><strong>Margin:</strong> 5%</p>
            <p><strong>Minimum Nominal Trade Size:</strong> 1,000,000 SHIB</p>
            <p><strong>Overnight Interest (daily):</strong> Buy -0.0833%, Sell 0.0000%</p>
            <p><strong>Trading Hours (GMT):</strong> 24/7</p>
            <p><strong>Exchange:</strong> N/A</p>
            <p><strong>MT5 Symbol:</strong> SHIBUSD</p>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <h2 className="text-success fw-bold mb-4">Shiba Inu (SHIB) CFD Trading</h2>

        <p>
          The Shiba Inu coin (SHIB) was launched in August 2020 by an anonymous developer known as Ryoshi. Classified as a ‘meme coin,’ SHIB
          draws inspiration from viral internet memes, especially the Japanese Shiba Inu dog. It was created as an Ethereum-compatible
          alternative to Dogecoin and has a passionate community known as the Shib Army.
        </p>
        <p>
          The Shiba Inu ecosystem includes a decentralized exchange (ShibaSwap), a SHIB-burning search engine (Shiba Search), 
          and platforms supporting DeFi applications and an NFT marketplace. The coin launched with a huge supply of 1 quadrillion tokens,
          and despite volatile price history, it has generated enormous returns for early investors.
        </p>

        <h3 className="text-success fw-bold mt-5">Factors Influencing the Price of Shiba Inu</h3>
        <ul>
          <li><strong>Bitcoin Price Momentum:</strong> SHIB price often amplifies Bitcoin’s directional moves.</li>
          <li><strong>Psychological Milestones:</strong> Community milestones and price zero-elimination events boost demand.</li>
          <li><strong>News and Media:</strong> Exchange listings, tech upgrades, and social media hype strongly affect price volatility.</li>
        </ul>

        <h3 className="text-success fw-bold mt-5">Why Trade Shiba Inu with AvaTrade?</h3>
        <ul>
          <li>Trade via a globally regulated broker with transparent pricing and fast execution.</li>
          <li>Benefit from CFD trading that allows going long or short with leverage up to 20:1.</li>
          <li>Access comprehensive trading resources like analysis, charts, and automated tools.</li>
        </ul>

        <h4 className="fw-semibold mt-4">How to Start Trading Shiba Inu:</h4>
        <ol>
          <li>Create your AvaTrade account</li>
          <li>Deposit funds</li>
          <li>Select SHIBUSD and place a CFD trade</li>
        </ol>

        <h5 className="fw-semibold mt-4">Explore Other Cryptocurrencies:</h5>
        <p>Bitcoin, Ethereum, Dogecoin, Solana, Ripple</p>

        <p className="mt-4">
          Shiba Inu’s strong community and evolving ecosystem make it a popular meme coin. Trade SHIB CFDs securely with AvaTrade’s
          regulated platform and professional support.
        </p>

        <div className="mb-5">
          <h2 className="fw-bold text-success mb-4">Shiba Inu Trading FAQ</h2>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>What is a meme coin?</Accordion.Header>
              <Accordion.Body>
                Meme coins are cryptocurrencies inspired by viral internet memes or trends, often driven by community hype rather than fundamentals.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>How does the Shiba Inu community influence the coin?</Accordion.Header>
              <Accordion.Body>
                The Shib Army actively promotes SHIB through social media, development of ecosystem projects, and engagement in price milestones.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Is Shiba Inu suitable for long-term investment?</Accordion.Header>
              <Accordion.Body>
                SHIB is highly volatile and speculative. Investors should do thorough research and consider risk management strategies.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default ShibaInuPage;
