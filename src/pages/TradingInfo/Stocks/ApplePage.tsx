import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AdvancedChart } from 'react-tradingview-embed';
import { Accordion } from 'react-bootstrap';

const ApplePage: React.FC = () => {
  const [quantity, setQuantity] = useState<number>(0);
  const navigate = useNavigate();
  const currentPrice = 210.06;
  const estimatedCost = quantity * currentPrice;

  return (
    <div style={{ background: '#fffaf5', minHeight: '100vh' }}>
      <div style={{ display: 'flex', height: '100vh', width: '100%', borderBottom: '2px solid #964B00' }}>
        <div style={{ flexBasis: '70%', position: 'relative' }}>
          <AdvancedChart
            widgetProps={{
              symbol: 'NASDAQ:AAPL',
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
            backgroundColor: '#fdf5f0',
            padding: '2rem',
            boxShadow: '0 0 15px rgb(150 75 0 / 0.15)',
            borderRadius: '0 0 0 12px',
            fontFamily: 'Arial, sans-serif',
          }}
        >
          <h3 className="mb-4 text-warning fw-bold">Trade Apple Stock</h3>

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
            <label htmlFor="quantity" className="form-label fw-semibold">Quantity (Shares)</label>
            <input
              type="number"
              id="quantity"
              min={0}
              className="form-control"
              value={quantity}
              onChange={(e) => setQuantity(parseFloat(e.target.value) || 0)}
              placeholder="Enter quantity"
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
              style={{ backgroundColor: '#fcefe2', fontWeight: '600', color: '#964B00' }}
            />
          </div>

          <div className="d-flex gap-3 mb-4">
            <button
              className="btn btn-warning flex-grow-1"
              onClick={() => navigate(`/dashboard?tab=trading`)}
              disabled={quantity <= 0}
            >
              Buy Apple
            </button>
            <button
              className="btn btn-secondary flex-grow-1"
              onClick={() => navigate(`/dashboard?tab=trading`)}
              disabled={quantity <= 0}
            >
              Sell Apple
            </button>
          </div>

          <hr />

          <div style={{ fontSize: '0.9rem', color: '#3a3a3a' }}>
            <p><strong>High:</strong> 211.69</p>
            <p><strong>Low:</strong> 210.00</p>
            <p><strong>Buy:</strong> 210.29</p>
            <p><strong>Sell:</strong> 210.06</p>
            <p><strong>Instrument:</strong> APPLE</p>
            <p><strong>Country:</strong> US</p>
            <p><strong>Currency:</strong> USD</p>
            <p><strong>Typical Spread:</strong> 0.13%</p>
            <p><strong>Minimum Trade Size:</strong> 1*</p>
            <p><strong>Leverage:</strong> 10:1</p>
            <p><strong>Margin:</strong> 10%</p>
            <p><strong>Overnight Interest (Sell):</strong> -0.0045%</p>
            <p><strong>Overnight Interest (Buy):</strong> -0.0288%</p>
            <p><strong>Trading Hours (GMT):</strong> 13:30 - 19:59</p>
            <p><strong>Exchange:</strong> NASDAQ</p>
            <p><strong>Units:</strong> Share</p>
            <p><strong>MT5/MT4 Symbol:</strong> #APPLE</p>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <h2 className="text-warning fw-bold mb-4">Trading Apple Stock</h2>
        <p>
          Global technology giant Apple Inc., founded on April 1, 1976, by Steve Jobs and Steve Wozniak, is headquartered in Cupertino, California. Apple designs, manufactures, markets, and sells consumer electronics, software, and services. It is most famous for the iPhone, iPad, and Mac. Apple held its IPO on December 12, 1980, and trades under the ticker AAPL on NASDAQ.
        </p>
        <p>
          Apple is widely recognized for innovation and its expanding ecosystem. Key acquisitions include Shazam, Buddybuild, Vrvana, PowerbyProxi, and InVisage Technologies.
        </p>

        <h4 className="fw-bold mt-4">Apple Stock History</h4>
        <p>
          IPO price was $22 per share, with 4 stock splits since. Adjusted IPO price: $0.39. Currently priced around $220, Apple surpassed $1 trillion in market cap in 2018. It resumed dividends in 2012 and is a top dividend-paying stock.
        </p>

        <h4 className="fw-bold mt-4">How to Trade Apple Stock</h4>
        <ul>
          <li><strong>Tariffs and Trade Agreements:</strong> Heavily impacted by US-China relations due to sales and manufacturing in China.</li>
          <li><strong>Competitors’ Performance:</strong> Key competitors include Samsung, PayPal, Amazon, and Android.</li>
          <li><strong>Earnings Reports:</strong> Released quarterly. Key for tracking performance and dividends.</li>
        </ul>

        <h4 className="fw-bold mt-4">AvaTrade Apple Stock Info</h4>
        <ul>
          <li>Symbol: #APPLE</li>
          <li>Trading Times: Mon–Fri 13:00–19:59 GMT</li>
          <li>Exchange: NASDAQ</li>
          <li>Leverage: up to 20:1</li>
        </ul>

        <h4 className="fw-bold mt-4">Why Trade Apple Stock with AvaTrade</h4>
        <ul>
          <li>Globally regulated and secure</li>
          <li>Leverage up to 20:1</li>
          <li>Instant market access</li>
          <li>No commissions</li>
          <li>Automated trading supported</li>
          <li>Comprehensive education center</li>
          <li>Multilingual customer support</li>
        </ul>

        <h4 className="fw-bold text-warning mt-5 mb-4">FAQs</h4>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>What should I know about Apple?</Accordion.Header>
            <Accordion.Body>
              Apple is one of the largest public U.S. companies, known for Mac computers and iPhones. It has strong brand loyalty and steady revenue growth.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Is Apple a good stock to trade?</Accordion.Header>
            <Accordion.Body>
              Yes, Apple stock has high liquidity and volatility, attracting both short-term and long-term traders. CFDs allow for both long and short positions.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Best strategy for trading Apple?</Accordion.Header>
            <Accordion.Body>
              Use strategies that suit your trading style. One simple method is the 2-day up/down strategy—buy if price exceeds the past 2-day high, sell if it drops below the low.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

export default ApplePage;
