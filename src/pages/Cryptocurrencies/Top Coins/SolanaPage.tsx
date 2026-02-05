import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AdvancedChart } from 'react-tradingview-embed';
import { Accordion } from 'react-bootstrap';

const SolanaPage: React.FC = () => {
  const [quantity, setQuantity] = useState<number>(0);
  const currentPrice = 179.09;
  const estimatedCost = quantity * currentPrice;

  return (
    <div style={{ background: '#f5fff5', minHeight: '100vh' }}>
      <div style={{ display: 'flex', height: '100vh', width: '100%', borderBottom: '2px solid #006400' }}>
        <div style={{ flexBasis: '70%', position: 'relative' }}>
          <AdvancedChart
            widgetProps={{
              symbol: 'BINANCE:SOLUSDT',
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
          <h3 className="mb-4 text-success fw-bold">Trade SOLUSD</h3>

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
            <label htmlFor="quantity" className="form-label fw-semibold">Quantity (SOL)</label>
            <input
              type="number"
              id="quantity"
              min={0}
              className="form-control"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value) || 0)}
              placeholder="Enter SOL amount"
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
              onClick={() => alert(`Buying ${quantity} SOL for $${estimatedCost.toFixed(2)}`)}
              disabled={quantity <= 0}
            >
              Buy SOL
            </button>
            <button
              className="btn btn-danger flex-grow-1"
              onClick={() => alert(`Selling ${quantity} SOL for $${estimatedCost.toFixed(2)}`)}
              disabled={quantity <= 0}
            >
              Sell SOL
            </button>
          </div>

          <hr />

          <div style={{ fontSize: '0.9rem', color: '#3a3a3a' }}>
            <p><strong>Balance:</strong> 1,000 SOL</p>
            <p><strong>Leverage:</strong> 50:1</p>
            <p><strong>Spread:</strong> Typical 0.30% Over-market</p>
            <p><strong>Margin:</strong> 2%</p>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <h2 className="text-success fw-bold mb-4">What is Solana?</h2>
        <p>
          Solana is a public, open-source decentralized blockchain that supports smart contract functionality. The project’s whitepaper was first proposed by a team led by Anatoly Yakovenko in 2017, but it was launched to the public in 2020. Solana can be likened to Ethereum (and it has, in fact, been dubbed as the ‘Ethereum Killer’) because it is both a cryptocurrency and a platform whereupon decentralized applications can be built and run.
        </p>
        <p>
          Solana was specially designed for scalability and speed. Its network can process up to 50,000 transactions per second, compared to 15 on Ethereum. It achieves this by implementing a hybrid consensus model that combines Proof of Stake (PoS) and Proof of History (PoH).
        </p>
        <p>
          Speed is a major innovation for Solana. It has kept fees and congestion very low, attracting the development of numerous decentralized applications ranging from DeFi and DEXs to NFT Marketplaces and Web3 Applications. The native cryptocurrency that runs on the Solana platform is SOL.
        </p>

        <h3 className="text-success fw-bold mt-5">Solana Trading</h3>
        <p>
          Trading Solana via CFDs (Contract for Difference) lets traders speculate on SOL price changes without owning the actual tokens. AvaTrade offers this functionality with security, leverage, and flexibility.
        </p>
        <ul>
          <li><strong>Safety and Convenience:</strong> No wallet required; no risk of token theft.</li>
          <li><strong>Flexible Trading:</strong> Apply short-term strategies like scalping and hedging with low fees.</li>
          <li><strong>Leveraged Trading:</strong> Control larger trades with less capital. Leverage can increase both profits and losses.</li>
        </ul>

        <h3 className="text-success fw-bold mt-5">What Influences Solana’s Price?</h3>
        <ul>
          <li><strong>Bitcoin and Ethereum Trends:</strong> As a major altcoin, SOL often mirrors market sentiment led by BTC and ETH.</li>
          <li><strong>Media Attention:</strong> Over 1,000 projects are built on Solana, boosting visibility and investor confidence.</li>
          <li><strong>System Stability:</strong> Despite speed advantages, Solana has had network outages, which affect investor sentiment.</li>
        </ul>

        <h4 className="fw-semibold mt-4">Trade on Solana Price Changes in 3 Steps:</h4>
        <ol>
          <li>Open an account with AvaTrade</li>
          <li>Deposit funds</li>
          <li>Select SOLUSD and choose BUY or SELL</li>
        </ol>

        <h5 className="fw-semibold mt-4">Other Cryptocurrencies You Can Trade:</h5>
        <p>Bitcoin, Bitcoin Gold, Bitcoin Cash, Ripple, Litecoin</p>

        <p className="mt-4">
          Solana can be a very lucrative cryptocurrency to trade. AvaTrade offers comprehensive education, analysis tools, and a secure platform to trade SOLUSD and other crypto CFDs.
        </p>
         {/* Accordion FAQ Section */}
        <div className="mb-5">
          <h2 className="fw-bold text-success mb-4">Solana Trading FAQ</h2>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>What makes Solana unique?</Accordion.Header>
              <Accordion.Body>
                Solana uses a hybrid consensus of Proof of Stake and Proof of History, allowing up to 50,000 transactions per second at very low fees.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Why trade Solana with CFDs?</Accordion.Header>
              <Accordion.Body>
                Trading CFDs lets you speculate on SOL price without owning tokens. Enjoy leverage, shorting, and no wallet requirement.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Is Solana a good investment?</Accordion.Header>
              <Accordion.Body>
                Solana's growing ecosystem and speed make it a strong contender in blockchain infrastructure. Still, all crypto investments carry risk.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
      
    </div>
  );
};

export default SolanaPage;
