import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AdvancedChart } from 'react-tradingview-embed';
import { Accordion } from 'react-bootstrap';

const StellarPage: React.FC = () => {
  const [quantity, setQuantity] = useState<number>(0);
  const currentPrice = 0.4767;
  const estimatedCost = quantity * currentPrice;

  return (
    <div style={{ background: '#f5fff5', minHeight: '100vh' }}>
      <div style={{ display: 'flex', height: '100vh', width: '100%', borderBottom: '2px solid #006400' }}>
        <div style={{ flexBasis: '70%', position: 'relative' }}>
          <AdvancedChart
            widgetProps={{
              symbol: 'BINANCE:XLMUSDT',
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
          <h3 className="mb-4 text-success fw-bold">Trade XLMUSD</h3>

          <div className="mb-3">
            <label htmlFor="currentPrice" className="form-label fw-semibold">Current Price (USD)</label>
            <input
              type="text"
              id="currentPrice"
              className="form-control"
              value={`$${currentPrice.toFixed(4)}`}
              disabled
            />
          </div>

          <div className="mb-3">
            <label htmlFor="quantity" className="form-label fw-semibold">Quantity (XLM)</label>
            <input
              type="number"
              id="quantity"
              min={0}
              className="form-control"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value) || 0)}
              placeholder="Enter XLM amount"
            />
          </div>

          <div className="mb-4">
            <label className="form-label fw-semibold">Estimated Cost (USD)</label>
            <input
              type="text"
              className="form-control"
              value={`$${estimatedCost.toLocaleString(undefined, {
                minimumFractionDigits: 4,
                maximumFractionDigits: 4,
              })}`}
              disabled
              style={{ backgroundColor: '#e9f5e9', fontWeight: '600', color: '#006400' }}
            />
          </div>

          <div className="d-flex gap-3 mb-4">
            <button
              className="btn btn-success flex-grow-1"
              onClick={() => alert(`Buying ${quantity} XLM for $${estimatedCost.toFixed(4)}`)}
              disabled={quantity <= 0}
            >
              Buy XLM
            </button>
            <button
              className="btn btn-danger flex-grow-1"
              onClick={() => alert(`Selling ${quantity} XLM for $${estimatedCost.toFixed(4)}`)}
              disabled={quantity <= 0}
            >
              Sell XLM
            </button>
          </div>

          <hr />

          <div style={{ fontSize: '0.9rem', color: '#3a3a3a' }}>
            <p><strong>Balance:</strong> 10,000 XLM</p>
            <p><strong>Leverage:</strong> 20:1</p>
            <p><strong>Spread:</strong> Typical 0.40% Over-market</p>
            <p><strong>Margin:</strong> 5%</p>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <h2 className="text-success fw-bold mb-4">What is Stellar?</h2>
        <p>
          Stellar is an open-source, decentralized platform designed for fast, low-cost, and secure cross-border transactions. Founded by Jed McCaleb and Joyce Kim in 2014, it is supported by the Stellar Development Foundation, which partners with companies like Stripe and IBM.
        </p>
        <p>
          Stellar's native cryptocurrency is Lumens (XLM), which acts as a bridge currency for transactions. Its blockchain uses the Stellar Consensus Protocol (SCP) to achieve consensus every 2–5 seconds, ensuring fast processing and robust network integrity.
        </p>

        <h3 className="text-success fw-bold mt-5">Why Trade Stellar CFDs?</h3>
        <ul>
          <li><strong>Wallet-Free Trading:</strong> Speculate on price without owning or storing the asset.</li>
          <li><strong>Profit in Any Market:</strong> Go long or short depending on market direction.</li>
          <li><strong>Leverage Options:</strong> Up to 20:1 leverage offered to enhance capital efficiency.</li>
          <li><strong>Secure Environment:</strong> Trade with a globally regulated broker like AvaTrade.</li>
          <li><strong>Lower Costs:</strong> No wallet or exchange fees involved.</li>
        </ul>

        <h3 className="text-success fw-bold mt-5">What Affects Stellar Price?</h3>
        <ul>
          <li><strong>Institutional Adoption:</strong> Use by companies like IBM for cross-border payments boosts demand.</li>
          <li><strong>Network Utility:</strong> Faster settlement, low fees, and decentralized exchange attract developers and users.</li>
          <li><strong>Regulatory Environment:</strong> Global regulation changes impact investor sentiment and liquidity.</li>
        </ul>

        <h4 className="fw-semibold mt-4">How to Start Trading Stellar:</h4>
        <ol>
          <li>Create your AvaTrade account</li>
          <li>Deposit funds</li>
          <li>Choose XLMUSD and place a trade</li>
        </ol>

        <h5 className="fw-semibold mt-4">Explore Other Assets:</h5>
        <p>Bitcoin, Ethereum, Dogecoin, Solana, Ripple</p>

        <p className="mt-4">
          Stellar’s real-world adoption and technical innovation make it a strong contender in the crypto space. Start trading Stellar CFDs securely and efficiently with AvaTrade.
        </p>

        <div className="mb-5">
          <h2 className="fw-bold text-success mb-4">Stellar Trading FAQ</h2>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Can I trade Stellar without owning it?</Accordion.Header>
              <Accordion.Body>
                Yes. Trading Stellar via CFDs means you're speculating on price without needing to own or store XLM.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Is Stellar suitable for short-term traders?</Accordion.Header>
              <Accordion.Body>
                Absolutely. Stellar offers good daily volume and volatility, ideal for both swing and intraday strategies.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>How can I manage risk when trading XLM?</Accordion.Header>
              <Accordion.Body>
                Always use stop-loss orders, trade with leverage responsibly, and keep up with market news and technical analysis.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default StellarPage;
