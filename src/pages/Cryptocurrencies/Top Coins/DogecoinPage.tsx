import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AdvancedChart } from 'react-tradingview-embed';
import { Accordion } from 'react-bootstrap';

const DogecoinPage: React.FC = () => {
  const [quantity, setQuantity] = useState<number>(0);
  const currentPrice = 0.2389;
  const estimatedCost = quantity * currentPrice;

  return (
    <div style={{ background: '#f5fff5', minHeight: '100vh' }}>
      <div style={{ display: 'flex', height: '100vh', width: '100%', borderBottom: '2px solid #006400' }}>
        <div style={{ flexBasis: '70%', position: 'relative' }}>
          <AdvancedChart
            widgetProps={{
              symbol: 'BINANCE:DOGEUSDT',
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
          <h3 className="mb-4 text-success fw-bold">Trade DOGEUSD</h3>

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
            <label htmlFor="quantity" className="form-label fw-semibold">Quantity (DOGE)</label>
            <input
              type="number"
              id="quantity"
              min={0}
              className="form-control"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value) || 0)}
              placeholder="Enter DOGE amount"
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
              onClick={() => alert(`Buying ${quantity} DOGE for $${estimatedCost.toFixed(4)}`)}
              disabled={quantity <= 0}
            >
              Buy DOGE
            </button>
            <button
              className="btn btn-danger flex-grow-1"
              onClick={() => alert(`Selling ${quantity} DOGE for $${estimatedCost.toFixed(4)}`)}
              disabled={quantity <= 0}
            >
              Sell DOGE
            </button>
          </div>

          <hr />

          <div style={{ fontSize: '0.9rem', color: '#3a3a3a' }}>
            <p><strong>Balance:</strong> 10,000 DOGE</p>
            <p><strong>Leverage:</strong> 50:1</p>
            <p><strong>Spread:</strong> Typical 0.40% Over-market</p>
            <p><strong>Margin:</strong> 2%</p>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <h2 className="text-success fw-bold mb-4">What is Dogecoin?</h2>
        <p>
          Dogecoin is an open-source, peer-to-peer digital currency, launched in 2013 by Billy Marcus and Jackson Palmer as a light-hearted response to the crypto frenzy. Branded with the iconic Shiba Inu dog meme, it quickly gained popularity as a "fun" alternative to Bitcoin.
        </p>
        <p>
          Despite its joke origins, Dogecoin's community rallied around it, especially following a major hack in its early days. This unique cryptocurrency has become a favorite among retail investors and celebrities alike, including Elon Musk, who helped drive several price surges through social media mentions.
        </p>

        <h3 className="text-success fw-bold mt-5">Why Trade Dogecoin CFDs?</h3>
        <ul>
          <li><strong>No Wallet Needed:</strong> Trade price movements without owning tokens or worrying about theft.</li>
          <li><strong>Shorting Opportunity:</strong> Profit from both rising and falling markets.</li>
          <li><strong>Leverage:</strong> Control larger positions with less capital—up to 20:1.</li>
          <li><strong>Security:</strong> CFDs are regulated and don't require custody of crypto assets.</li>
          <li><strong>Order Flexibility:</strong> Use stop loss, take profit, and limit orders to manage trades.</li>
        </ul>

        <h3 className="text-success fw-bold mt-5">What Influences Dogecoin Price?</h3>
        <ul>
          <li><strong>Community Sentiment:</strong> Driven largely by social media hype on platforms like Reddit and Twitter.</li>
          <li><strong>Celebrity Influence:</strong> Tweets from Elon Musk and others can cause dramatic price swings.</li>
          <li><strong>Inflationary Supply:</strong> Over 130 billion coins in circulation and 5 billion more added annually.</li>
        </ul>

        <h4 className="fw-semibold mt-4">How to Trade Dogecoin in 3 Steps:</h4>
        <ol>
          <li>Sign up with AvaTrade</li>
          <li>Fund your account</li>
          <li>Select DOGEUSD and open a BUY or SELL position</li>
        </ol>

        <h5 className="fw-semibold mt-4">You Can Also Trade:</h5>
        <p>Bitcoin, Ethereum, Solana, Litecoin, Ripple</p>

        <p className="mt-4">
          Dogecoin may have started as a meme, but today it offers legitimate trading opportunities. AvaTrade provides secure, leveraged Dogecoin CFD trading with expert analysis and learning resources.
        </p>

        <div className="mb-5">
          <h2 className="fw-bold text-success mb-4">Dogecoin Trading FAQ</h2>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Is Dogecoin still a joke?</Accordion.Header>
              <Accordion.Body>
                While it began as a joke, Dogecoin now has a strong community and real-world use cases, especially for tipping and payments.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Can I short Dogecoin?</Accordion.Header>
              <Accordion.Body>
                Yes. CFD trading allows short selling, letting you profit from price declines.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>How risky is Dogecoin trading?</Accordion.Header>
              <Accordion.Body>
                Like all crypto assets, Dogecoin is volatile. Use leverage carefully and apply risk management strategies.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default DogecoinPage;
