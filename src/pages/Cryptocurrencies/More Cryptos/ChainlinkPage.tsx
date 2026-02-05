import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AdvancedChart } from 'react-tradingview-embed';
import { Accordion } from 'react-bootstrap';

const ChainlinkPage: React.FC = () => {
  const [quantity, setQuantity] = useState<number>(0);
  const currentPrice = 18.50;
  const estimatedCost = quantity * currentPrice;

  return (
    <div style={{ background: '#f5fff5', minHeight: '100vh' }}>
      <div style={{ display: 'flex', height: '100vh', width: '100%', borderBottom: '2px solid #006400' }}>
        <div style={{ flexBasis: '70%', position: 'relative' }}>
          <AdvancedChart
            widgetProps={{
              symbol: 'BINANCE:LINKUSDT',
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
          <h3 className="mb-4 text-success fw-bold">Trade LINKUSD</h3>

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
            <label htmlFor="quantity" className="form-label fw-semibold">Quantity (LINK)</label>
            <input
              type="number"
              id="quantity"
              min={0}
              className="form-control"
              value={quantity}
              onChange={(e) => setQuantity(parseFloat(e.target.value) || 0)}
              placeholder="Enter LINK quantity"
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
              onClick={() => alert(`Buying ${quantity} LINK for $${estimatedCost.toFixed(2)}`)}
              disabled={quantity <= 0}
            >
              Buy LINK
            </button>
            <button
              className="btn btn-danger flex-grow-1"
              onClick={() => alert(`Selling ${quantity} LINK for $${estimatedCost.toFixed(2)}`)}
              disabled={quantity <= 0}
            >
              Sell LINK
            </button>
          </div>

          <hr />

          <div style={{ fontSize: '0.9rem', color: '#3a3a3a' }}>
            <p><strong>High:</strong> 19.10</p>
            <p><strong>Low:</strong> 17.86</p>
            <p><strong>Typical Spread (Pips):</strong> 0.60% Over-market</p>
            <p><strong>Leverage:</strong> 20:1</p>
            <p><strong>Margin:</strong> 5%</p>
            <p><strong>Minimum Nominal Trade Size:</strong> 10 LINK</p>
            <p><strong>Overnight Interest (daily):</strong> Buy -0.0833%, Sell 0.0000%</p>
            <p><strong>Trading Hours (GMT):</strong> 24/7</p>
            <p><strong>Exchange:</strong> N/A</p>
            <p><strong>MT5/MT4 Symbol:</strong> LINKUSD</p>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <h2 className="text-success fw-bold mb-4">Chainlink CFD Trading</h2>
        <p>
          Chainlink is a decentralised blockchain network commonly associated with the LINK cryptocurrency. It enables
          smart contracts to securely connect with external data sources, APIs, and payment systems.
        </p>
        <p>
          Based on the Ethereum blockchain, Chainlink was launched in 2017 following an ICO that raised $32 million. It
          has a supply of 1 billion tokens, split among investors, its parent company, and node operators as rewards.
          Chainlink supports both on-chain and off-chain components, enabling oracles to bridge blockchain with real-world data.
        </p>

        <h3 className="text-success fw-bold mt-5">Advantages of Trading LINK CFDs</h3>
        <ul>
          <li>Cryptocurrency wallets are not required, eliminating storage needs.</li>
          <li>CFD contracts provide increased market exposure with limited capital.</li>
          <li>Automated trading is possible without constant market monitoring.</li>
          <li>Short selling allows profiting from price decreases.</li>
          <li>Access to 24/7 markets unlike traditional exchanges.</li>
        </ul>

        <h3 className="text-success fw-bold mt-5">What Influences Chainlink Price?</h3>
        <ul>
          <li>Overall cryptocurrency market conditions and sentiment.</li>
          <li>Initial coin offerings volume and token supply dynamics.</li>
          <li>Integration with major DeFi and smart contract platforms.</li>
          <li>Reliance on Ethereum blockchain and plans to diversify.</li>
          <li>Demand driven by public perception and token utility.</li>
          <li>Regulatory environment affecting investor confidence.</li>
        </ul>

        <h4 className="fw-semibold mt-4">Getting Started with Chainlink Trading</h4>
        <ol>
          <li>Create an account with AvaTrade</li>
          <li>Deposit funds securely</li>
          <li>Select LINKUSD and place CFD trades</li>
        </ol>

        <h5 className="fw-semibold mt-4">Explore Other Cryptocurrencies:</h5>
        <p>Bitcoin, Ethereum, Litecoin, Solana, Dogecoin</p>

        <p className="mt-4">
          The LINK coin is a promising token with many real-world applications. AvaTrade offers a secure, regulated environment to
          trade Chainlink CFDs with tools, market analysis, and support.
        </p>

        <div className="mb-5">
          <h2 className="fw-bold text-success mb-4">Chainlink Trading FAQ</h2>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>What is the biggest challenge that Chainlink solves?</Accordion.Header>
              <Accordion.Body>
                Chainlink addresses the challenge of securely connecting smart contracts to external blockchain data via decentralized oracles,
                reducing vulnerabilities in blockchain communication.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>How can Chainlink smart contracts be used?</Accordion.Header>
              <Accordion.Body>
                Chainlink smart contracts have applications in government identity, utilities, supply chains, insurance, gaming, random number generation,
                payment processing, and DeFi systems.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>What comprises the Chainlink ecosystem?</Accordion.Header>
              <Accordion.Body>
                The ecosystem includes decentralized apps (dApps), data providers, node operators, blockchains, and development communities,
                powering projects like yEarn, Synthetix, and Aave.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default ChainlinkPage;
