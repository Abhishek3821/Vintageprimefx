import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AdvancedChart } from 'react-tradingview-embed';
import { Accordion } from 'react-bootstrap';

const EthereumPage: React.FC = () => {
  const [quantity, setQuantity] = useState<number>(0);
  const currentPrice = 3608.58;
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
              symbol: 'BITSTAMP:ETHUSD',
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
            Trade ETHUSD
          </h3>

          <div className="mb-3">
            <label className="form-label fw-semibold" htmlFor="currentPrice">
              Current Price (USD)
            </label>
            <input
              type="text"
              id="currentPrice"
              className="form-control"
              value={`$${currentPrice.toLocaleString()}`}
              disabled
            />
          </div>

          <div className="mb-3">
            <label htmlFor="quantity" className="form-label fw-semibold">
              Quantity (ETH)
            </label>
            <input
              type="number"
              min={0}
              step={0.0001}
              id="quantity"
              className="form-control"
              placeholder="Enter ETH amount"
              value={quantity}
              onChange={(e) => setQuantity(parseFloat(e.target.value) || 0)}
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
              onClick={() => alert(`Buying ${quantity} ETH for $${estimatedCost.toFixed(2)}`)}
              disabled={quantity <= 0}
            >
              Buy ETH
            </button>
            <button
              className="btn btn-danger flex-grow-1"
              onClick={() => alert(`Selling ${quantity} ETH for $${estimatedCost.toFixed(2)}`)}
              disabled={quantity <= 0}
            >
              Sell ETH
            </button>
          </div>

          <hr />

          <div style={{ fontSize: '0.9rem', color: '#3a3a3a' }}>
            <p>
              <strong>Balance:</strong> 10 ETH
            </p>
            <p>
              <strong>Leverage:</strong> Up to 50:1
            </p>
            <p>
              <strong>Spread:</strong> Typical 0.10% Over-market
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
          Ethereum (ETH) Trading Overview
        </h1>

        {/* Price Summary */}
        <div className="row g-4 text-center mb-5">
          <div className="col-md-4">
            <div className="p-4 border rounded shadow-sm" style={{ backgroundColor: '#d1f2d1' }}>
              <h5 className="fw-bold">High / Low</h5>
              <p className="mb-1">3,675.14 / 3,473.93</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-4 border rounded shadow-sm" style={{ backgroundColor: '#d1f2d1' }}>
              <h5 className="fw-bold">Buy / Sell</h5>
              <p className="mb-1">3,612.20 / 3,608.58</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-4 border rounded shadow-sm" style={{ backgroundColor: '#d1f2d1' }}>
              <h5 className="fw-bold">Change</h5>
              <p className="mb-1">+3.64%</p>
            </div>
          </div>
        </div>

        {/* Instrument Details */}
        <div className="mb-5">
          <h2 className="fw-bold" style={{ color: '#006400' }}>
            ETHUSD Instrument Details
          </h2>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 mt-3">
            {[
              ['Typical Spread', '0.10% Over-market'],
              ['Leverage', 'Up to 50:1'],
              ['Margin', '2%'],
              ['Minimum Trade Size', '1 ETH'],
              ['Overnight Interest Sell', '0.0000%'],
              ['Overnight Interest Buy', '-0.0667%'],
              ['Trading Hours (GMT)', '24/7'],
              ['Symbol', 'ETHUSD'],
            ].map(([title, val], i) => (
              <div className="col" key={i}>
                <div className="border rounded p-3 bg-white h-100">
                  <strong>{title}:</strong> {val}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* About Ethereum */}
        <div className="mb-5">
          <h2 className="fw-bold" style={{ color: '#006400' }}>
            About Ethereum (ETH)
          </h2>
          <p>
            Ethereum, launched in 2015 by Vitalik Buterin and others, is a decentralized platform enabling smart contracts and decentralized applications (dApps). Its flexible scripting language has fostered the growth of decentralized finance (DeFi) and non-fungible tokens (NFTs).
          </p>
          <p>
            Ether (ETH), Ethereum’s native cryptocurrency, powers transactions and computations on the network. It is the second-largest cryptocurrency by market capitalization after Bitcoin.
          </p>
        </div>

        {/* Advantages of Trading Ethereum */}
        <div className="mb-5">
          <h2 className="fw-bold" style={{ color: '#006400' }}>
            Advantages of Trading Ethereum with AvaTrade
          </h2>
          <ul>
            <li>
              <strong>Short Selling:</strong> Trade bearish markets by selling high and buying low.
            </li>
            <li>
              <strong>Lower Capital Requirement:</strong> Trade Ethereum CFDs with a minimum deposit of $100.
            </li>
            <li>
              <strong>Leverage:</strong> Amplify your exposure with leverage up to 25:1 for non-EU residents.
            </li>
            <li>
              <strong>Automated Trading:</strong> Use expert advisors and automated strategies to trade efficiently.
            </li>
            <li>
              <strong>Regulated Broker:</strong> AvaTrade is regulated by multiple authorities, ensuring safety and transparency.
            </li>
            <li>
              <strong>No Wallet Needed:</strong> Trade Ethereum CFDs without needing a crypto wallet, reducing security risks.
            </li>
          </ul>
        </div>

        {/* Why Trade Crypto CFDs */}
        <div className="mb-5">
          <h2 className="fw-bold" style={{ color: '#006400' }}>
            Why Trade Crypto CFDs with AvaTrade?
          </h2>
          <ul>
            <li>
              <strong>Safety:</strong> Protected funds through seven regulatory bodies and segregated accounts.
            </li>
            <li>
              <strong>Wide Selection:</strong> Access many cryptocurrencies and crypto indices on one platform.
            </li>
            <li>
              <strong>24/7 Trading:</strong> Trade crypto markets anytime with multilingual support.
            </li>
            <li>
              <strong>Generous Leverage:</strong> Use leverage responsibly to increase potential returns.
            </li>
            <li>
              <strong>Risk Management:</strong> Use stop losses, take profits, and limit orders to manage your risk.
            </li>
            <li>
              <strong>Trade Crypto Against Fiat:</strong> Not limited to crypto-to-crypto, but also against USD, EUR, JPY, etc.
            </li>
          </ul>
        </div>

        {/* Technology & Market Factors */}
        <div className="mb-5">
          <h2 className="fw-bold" style={{ color: '#006400' }}>
            Ethereum Technology and Market Factors
          </h2>
          <p>
            Ethereum’s platform supports decentralized applications and smart contracts with robust security. The transition to Ethereum 2.0 aims to improve scalability and energy efficiency through proof-of-stake consensus.
          </p>
          <p>
            The growing DeFi ecosystem and NFT market have driven demand for ETH, influencing its price dynamics. Despite challenges like high gas fees and network scalability, Ethereum remains a leader in blockchain innovation.
          </p>
        </div>

        {/* FAQs */}
        <div className="mb-5">
          <h2 className="fw-bold text-success mb-4">Frequently Asked Questions</h2>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>What affects the ETHUSD rate?</Accordion.Header>
              <Accordion.Body>
                Supply and demand dynamics, investor sentiment, macroeconomic trends, and government regulations all influence the ETHUSD exchange rate.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Can I trade ETHUSD?</Accordion.Header>
              <Accordion.Body>
                Yes, ETHUSD can be traded through brokers offering cryptocurrency CFDs or via cryptocurrency exchanges.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Is ETHUSD highly volatile?</Accordion.Header>
              <Accordion.Body>
                Absolutely. ETHUSD is known for significant price swings and rapid movements, which can offer both opportunities and risks for traders.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default EthereumPage;
