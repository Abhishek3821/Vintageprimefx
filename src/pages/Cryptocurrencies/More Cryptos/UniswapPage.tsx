import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AdvancedChart } from 'react-tradingview-embed';
import { Accordion } from 'react-bootstrap';

const UniswapPage: React.FC = () => {
  const [quantity, setQuantity] = useState<number>(0);
  const currentPrice = 10.58;
  const estimatedCost = quantity * currentPrice;

  return (
    <div style={{ background: '#f5fff5', minHeight: '100vh' }}>
      <div style={{ display: 'flex', height: '100vh', width: '100%', borderBottom: '2px solid #006400' }}>
        <div style={{ flexBasis: '70%', position: 'relative' }}>
          <AdvancedChart
            widgetProps={{
              symbol: 'BINANCE:UNIUSDT',
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
          <h3 className="mb-4 text-success fw-bold">Trade UNIUSD</h3>

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
            <label htmlFor="quantity" className="form-label fw-semibold">Quantity (UNI)</label>
            <input
              type="number"
              id="quantity"
              min={0}
              className="form-control"
              value={quantity}
              onChange={(e) => setQuantity(parseFloat(e.target.value) || 0)}
              placeholder="Enter UNI quantity"
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
              onClick={() => alert(`Buying ${quantity} UNI for $${estimatedCost.toFixed(2)}`)}
              disabled={quantity <= 0}
            >
              Buy UNI
            </button>
            <button
              className="btn btn-danger flex-grow-1"
              onClick={() => alert(`Selling ${quantity} UNI for $${estimatedCost.toFixed(2)}`)}
              disabled={quantity <= 0}
            >
              Sell UNI
            </button>
          </div>

          <hr />

          <div style={{ fontSize: '0.9rem', color: '#3a3a3a' }}>
            <p><strong>High:</strong> 10.87</p>
            <p><strong>Low:</strong> 8.91</p>
            <p><strong>Typical Spread (Pips):</strong> 0.60% Over-market</p>
            <p><strong>Leverage:</strong> 20:1</p>
            <p><strong>Margin:</strong> 5%</p>
            <p><strong>Minimum Nominal Trade Size:</strong> 10 UNI</p>
            <p><strong>Overnight Interest (daily):</strong> Buy -0.0833%, Sell 0.0000%</p>
            <p><strong>Trading Hours (GMT):</strong> 24/7</p>
            <p><strong>Exchange:</strong> N/A</p>
            <p><strong>MT5/MT4 Symbol:</strong> UNIUSD</p>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <h2 className="text-success fw-bold mb-4">Uniswap CFD Trading</h2>

        <p>
          As the cryptocurrency market grows, Uniswap has emerged as a leading decentralised exchange running on Ethereum. 
          It is one of the largest cryptocurrencies by market capitalization and operates on an automated market maker (AMM) model,
          removing intermediaries through smart contracts.
        </p>
        <p>
          Launched in 2018, Uniswap supports all ERC-20 tokens and integrates well with wallets like MetaMask. Its governance token, UNI,
          launched in 2020, gives holders voting rights over protocol upgrades. The platform has seen massive trading volume and liquidity,
          positioning it for future growth.
        </p>

        <h3 className="text-success fw-bold mt-5">Why Trade Uniswap as CFDs?</h3>
        <ul>
          <li>CFDs eliminate the need for wallets and storage concerns.</li>
          <li>Leverage allows trading larger positions with limited capital.</li>
          <li>Automated trading features ease market participation.</li>
          <li>Short selling lets traders profit from price declines.</li>
          <li>24/7 market access unlike traditional crypto exchanges.</li>
        </ul>

        <h3 className="text-success fw-bold mt-5">What Influences Uniswap’s Price?</h3>
        <ul>
          <li>Overall market conditions and sentiment.</li>
          <li>Token supply and initial coin offerings.</li>
          <li>Smart contract liquidity pools and AMM pricing model.</li>
          <li>Correlation with Ethereum and other ERC-20 tokens.</li>
          <li>Regulatory developments affecting crypto markets.</li>
        </ul>

        <h4 className="fw-semibold mt-4">How to Get Started with Uniswap Trading</h4>
        <ol>
          <li>Create an AvaTrade account</li>
          <li>Deposit funds securely</li>
          <li>Select UNIUSD and place CFD trades</li>
        </ol>

        <h5 className="fw-semibold mt-4">Explore Other Cryptocurrencies:</h5>
        <p>Bitcoin, Ethereum, Chainlink, Dogecoin, Solana</p>

        <p className="mt-4">
          AvaTrade offers a secure, regulated environment to trade Uniswap CFDs with comprehensive tools, market analysis, and support.
        </p>

        <div className="mb-5">
          <h2 className="fw-bold text-success mb-4">Uniswap Trading FAQ</h2>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>If Ethereum drops, should I sell Uniswap?</Accordion.Header>
              <Accordion.Body>
                Uniswap price tends to correlate with Ethereum due to its reliance on the Ethereum blockchain, but it can be influenced by other factors.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>How do regulations affect Uniswap trading?</Accordion.Header>
              <Accordion.Body>
                Regulatory decisions in major markets impact cryptocurrency prices broadly, often causing volatility in Uniswap’s value.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Will the large initial supply limit Uniswap’s price growth?</Accordion.Header>
              <Accordion.Body>
                While a large token supply may cap per-token price, widespread adoption and demand can drive significant value increases.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default UniswapPage;
