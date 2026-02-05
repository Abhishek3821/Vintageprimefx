import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AdvancedChart } from 'react-tradingview-embed';
import { Accordion } from 'react-bootstrap';

const RipplePage: React.FC = () => {
  const [quantity, setQuantity] = useState<number>(0);
  const currentPrice = 3.4066;
  const estimatedCost = quantity * currentPrice;

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
        {/* Left: TradingView Chart */}
        <div style={{ flexBasis: '70%', position: 'relative' }}>
          <AdvancedChart
            widgetProps={{
              symbol: 'BITSTAMP:XRPUSD',
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

        {/* Right: Buy/Sell Panel */}
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
          <h3 className="mb-4" style={{ color: '#006400', fontWeight: '700' }}>
            Trade XRPUSD
          </h3>

          <div className="mb-3">
            <label className="form-label fw-semibold" htmlFor="currentPrice">
              Current Price (USD)
            </label>
            <input
              type="text"
              id="currentPrice"
              className="form-control"
              value={`$${currentPrice.toFixed(4)}`}
              disabled
            />
          </div>

          <div className="mb-3">
            <label htmlFor="quantity" className="form-label fw-semibold">
              Quantity (XRP)
            </label>
            <input
              type="number"
              min={0}
              step={1}
              id="quantity"
              className="form-control"
              placeholder="Enter XRP amount"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value) || 0)}
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
              onClick={() => alert(`Buying ${quantity} XRP for $${estimatedCost.toFixed(2)}`)}
              disabled={quantity <= 0}
            >
              Buy XRP
            </button>
            <button
              className="btn btn-danger flex-grow-1"
              onClick={() => alert(`Selling ${quantity} XRP for $${estimatedCost.toFixed(2)}`)}
              disabled={quantity <= 0}
            >
              Sell XRP
            </button>
          </div>

          <hr />

          <div style={{ fontSize: '0.9rem', color: '#3a3a3a' }}>
            <p>
              <strong>Balance:</strong> 10,000 XRP
            </p>
            <p>
              <strong>Leverage:</strong> 50:1
            </p>
            <p>
              <strong>Spread:</strong> Typical 0.25% Over-market
            </p>
            <p>
              <strong>Margin:</strong> 2%
            </p>
          </div>
        </div>
      </div>

      {/* Content Below */}
      <div className="container py-5">
        <h1 className="fw-bold mb-4" style={{ color: '#006400' }}>
          Ripple (XRP) Trading Overview
        </h1>

        {/* Price Summary */}
        <div className="row g-4 text-center mb-5">
          <div className="col-md-4">
            <div className="p-4 border rounded shadow-sm" style={{ backgroundColor: '#d1f2d1' }}>
              <h5 className="fw-bold">High / Low</h5>
              <p className="mb-1">3.6588 / 3.3980</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-4 border rounded shadow-sm" style={{ backgroundColor: '#d1f2d1' }}>
              <h5 className="fw-bold">Buy / Sell</h5>
              <p className="mb-1">3.4152 / 3.4066</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-4 border rounded shadow-sm" style={{ backgroundColor: '#d1f2d1' }}>
              <h5 className="fw-bold">Change</h5>
              <p className="mb-1">-2.10%</p>
            </div>
          </div>
        </div>

        {/* Instrument Details */}
        <div className="mb-5">
          <h2 className="fw-bold" style={{ color: '#006400' }}>
            XRPUSD Instrument Details
          </h2>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 mt-3">
            {[
              ['Typical Spread (Pips)', '0.25% Over-market'],
              ['Leverage', '50:1'],
              ['Margin', '2%'],
              ['Minimum Nominal Trade Size', '100 XRP'],
              ['Overnight Interest (daily) Sell', '0.0000%'],
              ['Overnight Interest (daily) Buy', '-0.0833%'],
              ['Trading Hours (GMT)', '24/7'],
              ['Exchange', 'N/A'],
              ['MT5/MT4 Symbol', 'XRPUSD'],
            ].map(([title, val], i) => (
              <div className="col" key={i}>
                <div className="border rounded p-3 bg-white h-100">
                  <strong>{title}:</strong> {val}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* About Ripple */}
        <div className="mb-5">
          <h2 className="fw-bold" style={{ color: '#006400' }}>
            About Ripple (XRP)
          </h2>
          <p>
            The Ripple Cryptocurrency is an open payment system in beta. Its goal is to allow people to break free from financial institutions like banks, credit card companies, and other networks that enforce fees and foster delays.
          </p>
          <p>
            As of September 2020, Ripple was the fourth-largest cryptocurrency by market capitalization, behind Bitcoin, Ethereum, and USD Tether. Ripple is designed as a digital payments network for real-time financial transactions and is the core owner of the Ripple XRP coin.
          </p>
          <p>
            Ripple is constantly investing in its network and growing partnerships with global financial institutions such as BBVA, SEB, Start One Credit Union, and Cambridge Global Payments.
          </p>
        </div>

        {/* How to Trade Ripple CFDs */}
        <div className="mb-5">
          <h2 className="fw-bold" style={{ color: '#006400' }}>
            How to Trade Ripple CFDs in 4 Easy Steps
          </h2>
          <ol>
            <li>Open an account with AvaTrade</li>
            <li>Fund your account</li>
            <li>Enter your preferred investment amount</li>
            <li>BUY (Go Long) or SELL (Go Short) Ripple</li>
          </ol>
          <p>
            AvaTrade is an industry-leading broker with some of the best trading conditions available, including the lowest crypto spreads on the market.
          </p>
        </div>

        {/* Key Factors Affecting XRP Price */}
        <div className="mb-5">
          <h2 className="fw-bold" style={{ color: '#006400' }}>
            Key Factors Affecting the XRP Price
          </h2>
          <p>
            The price of Ripple (XRP) is influenced by supply and demand dynamics, adoption by financial institutions, overall cryptocurrency market sentiment, competition, and exchange listings.
          </p>
          <ul>
            <li>
              <strong>XRP Supply:</strong> Ripple pre-minted 100 billion XRP coins; supply circulation influences price.
            </li>
            <li>
              <strong>Adoption:</strong> Ripple’s use by banks and payment providers increases demand.
            </li>
            <li>
              <strong>Cryptocurrency Market:</strong> Overall crypto market trends affect XRP price.
            </li>
            <li>
              <strong>Competition:</strong> Ripple competes with SWIFT and other crypto payment solutions.
            </li>
            <li>
              <strong>Exchange Listing:</strong> Being listed or delisted on major exchanges impacts price.
            </li>
          </ul>
        </div>

        {/* Why Trade Crypto CFDs with AvaTrade */}
        <div className="mb-5">
          <h2 className="fw-bold" style={{ color: '#006400' }}>
            Why Trade Crypto CFDs With AvaTrade?
          </h2>
          <ul>
            <li>Uncompromised safety via regulatory oversight and segregated accounts</li>
            <li>Wide variety of cryptos and crypto indices</li>
            <li>24/7 trading with multilingual support</li>
            <li>Generous leverage up to 50:1</li>
            <li>Risk management tools like stop losses and take profits</li>
            <li>Trade cryptos against fiat currencies (USD, EUR, JPY etc.)</li>
          </ul>
        </div>

        {/* Advantages of Trading Ripple with AvaTrade */}
        <div className="mb-5">
          <h2 className="fw-bold" style={{ color: '#006400' }}>
            Advantages of Trading Ripple with AvaTrade
          </h2>
          <ul>
            <li>Trade Ripple CFDs with up to 20:1 leverage</li>
            <li>Start trading Ripple from as little as $100</li>
            <li>Zero commissions and no bank fees on transactions</li>
            <li>Trade Ripple anytime with round-the-clock availability</li>
            <li>Sell Ripple to potentially profit from downtrends</li>
            <li>No digital wallet needed — zero exposure to hacking risks</li>
            <li>Regulated broker on six continents</li>
            <li>Execute trades easily in just 3 clicks</li>
          </ul>
        </div>

        {/* Ripple Model and History */}
        <div className="mb-5">
          <h2 className="fw-bold" style={{ color: '#006400' }}>
            Ripple Model & History
          </h2>
          <p>
            Ripple was conceived in 2004 and developed over the next decade, with large banks adopting it since 2014. The system offers advantages like distributed ledgers, security, and fast transactions within 3-5 seconds.
          </p>
          <p>
            Ripple is a private company, unlike Bitcoin's decentralized community ownership, and aims to revolutionize how payments are made worldwide.
          </p>
        </div>

        {/* Ripple Trading FAQ */}
        <div className="mb-5">
          <h2 className="fw-bold text-success mb-4">Ripple Trading FAQ</h2>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Will the price of Ripple continue to go higher?</Accordion.Header>
              <Accordion.Body>
                Adoption by banks and global institutions will be key to Ripple’s future price growth. While gains have been volatile, increasing usage could push the price higher.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Is Ripple a good cryptocurrency for trading?</Accordion.Header>
              <Accordion.Body>
                Ripple’s volatility provides trading opportunities, but traders should stay alert to market conditions and risks.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>What’s the best strategy for trading Ripple?</Accordion.Header>
              <Accordion.Body>
                Using CFDs allows traders to focus on price action without owning the cryptocurrency, reducing risks related to wallets and transfers.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default RipplePage;
