import { left } from '@popperjs/core';
import React from 'react';
import { Container, Button, Card, Col, Row, Accordion } from 'react-bootstrap';
import { FaArrowRight, FaChartLine, FaCoins, FaEye, FaShieldAlt, FaUserPlus } from 'react-icons/fa';

const HowBitcoin: React.FC = () => {
  return (
    <>
    <div
    style={{
      backgroundImage: "url('/assets/crypto-banner.jpg')", // Replace with your banner image path
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '80vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      position: 'relative',
    }}
  >
    <div
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1,
      }}
    ></div>
  
    <Container
      style={{
        zIndex: 2,
        textAlign: 'center',
        maxWidth: '700px',
        padding: '0 20px',
      }}
    >
      <h1 className="fw-bold display-4 mb-4">
      How to trade <span style={{ color: '#28a745' }}>Cryptocurrencies? </span>
      </h1>
      <p className="fs-5 mb-4">
      Join us on an exploration of cryptocurrency trading.
Learn how to analyze digital assets, execute trades,
and make informed decisions in our informative guide.      </p>
      <Button
        variant="success"
        size="lg"
        style={{ backgroundColor: '#28a745', borderColor: '#28a745' }}
      >
        Start Exploring
      </Button>
    </Container>
  </div>
  <div
        style={{
          backgroundColor: '#e6f5ee',
          padding: '80px 0',
        }}
      >
        <Container>
          <div
            style={{
              backgroundColor: 'rgba(20, 108, 67, 0.1)', // translucent light green
              borderLeft: '6px solid #28a745',
              borderRadius: '10px',
              padding: '40px',
              width: '90%',
              margin: '0 auto',
              boxShadow: '0 0 15px rgba(0, 0, 0, 0.05)',
            }}
          >
            <h2 style={{ fontWeight: 700, color: '#146c43' }}>
            Take your skills further in a risk-free demo account or start trading with a real account today!


            </h2>
            <p style={{ fontSize: '1.1rem', marginTop: '20px', lineHeight: '1.7', color: '#2d4830' }}>
            Welcome to the world of cryptocurrency trading! We're going to assume you already have a basic understanding of what cryptocurrencies are. 
            If not, we recommend you read our introductory article on "What are cryptocurrencies and how do they work" first.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#2d4830' }}>
            In this guide, we're going to delve deeper into the mechanics of trading cryptocurrencies, specifically through Contracts for Difference (CFDs).
            Trading cryptocurrency CFDs allows you to speculate on the price movements of digital assets without actually owning them. This approach offers a unique set of advantages, which we will explore in the following sections.
            So, buckle up and get ready to dive into the exciting and dynamic world of cryptocurrency trading!
            </p>
          </div>
        </Container>
      </div>
      
    <div style={{ backgroundColor: '#f7fdf9', padding: '60px 0' }}>
      <Container>
        <h2 className="fw-bold text-center mb-5">How to Trade Cryptocurrency – A Step-by-step Guide</h2>
        <Row className="g-4">
          <Col md={6}>
            <Card className="h-100 shadow-sm border-0">
              <Card.Body>
                <FaUserPlus className="text-success mb-3" size={30} />
                <Card.Title className="fw-bold">1. Open and Fund a Trading Account</Card.Title>
                <Card.Text>
                  Start by opening a trading account with a trusted broker like AvaTrade. Fund your account via bank transfer, credit card, e-wallet, or PayPal (if supported).
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="h-100 shadow-sm border-0">
              <Card.Body>
                <FaCoins className="text-success mb-3" size={30} />
                <Card.Title className="fw-bold">2. Pick a Cryptocurrency to Trade</Card.Title>
                <Card.Text>
                  Choose from major cryptos like Bitcoin or Ethereum, or explore altcoins like Ripple (XRP), Stellar (XLM), or Chainlink (LINK) based on your goals.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="h-100 shadow-sm border-0">
              <Card.Body>
                <FaChartLine className="text-success mb-3" size={30} />
                <Card.Title className="fw-bold">3. Analyse the Market</Card.Title>
                <Card.Text>
                  Use a mix of fundamental, technical, and sentiment analysis to identify trading opportunities and assess market trends effectively.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="h-100 shadow-sm border-0">
              <Card.Body>
                <FaArrowRight className="text-success mb-3" size={30} />
                <Card.Title className="fw-bold">4. Decide on Direction & Open a Trade</Card.Title>
                <Card.Text>
                  Based on your analysis, go long (buy) or short (sell). CFD trading allows you to profit from both upward and downward price movements.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="h-100 shadow-sm border-0">
              <Card.Body>
                <FaShieldAlt className="text-success mb-3" size={30} />
                <Card.Title className="fw-bold">5. Manage Risks</Card.Title>
                <Card.Text>
                  Use stop-loss and take-profit orders. AvaProtect lets you insure trades for added protection against losses.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="h-100 shadow-sm border-0">
              <Card.Body>
                <FaEye className="text-success mb-3" size={30} />
                <Card.Title className="fw-bold">6. Monitor & Exit Your Position</Card.Title>
                <Card.Text>
                  Monitor your trade or set automated exit levels. Always follow your trading plan and avoid emotional decisions.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <div className="text-center mt-5">
          <Button variant="success" size="lg">
            View Real-Time Bitcoin Prices
          </Button>
        </div>
      </Container>
    </div>
    <div style={{ backgroundColor: '#f7fdf9', padding: '60px 0' }}>
  <Container>
    <Row className="align-items-center">
      {/* Left Side – Text */}
      <Col md={6}>
        <h2 className="fw-bold mb-4">
          What Moves <span style={{ color: '#28a745' }}>Cryptocurrency Prices?</span>
        </h2>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
          Understanding what drives the prices of cryptocurrencies can give you an edge in your trading decisions.
        </p>
        <ul style={{ fontSize: '1.05rem', lineHeight: '1.8', paddingLeft: '1rem' }}>
          <li><strong>Market Cycles –</strong> Growth and correction phases based on trends.</li>
          <li><strong>Supply & Demand –</strong> Basic economics applies here.</li>
          <li><strong>Exchange Listings –</strong> More listings mean more access.</li>
          <li><strong>Fiat Inflation –</strong> People hedge with crypto.</li>
          <li><strong>Competition –</strong> Newer coins may challenge older ones.</li>
          <li><strong>Governance –</strong> Transparency builds trust.</li>
          <li><strong>Regulations –</strong> News can shake the market.</li>
          <li><strong>Whales –</strong> Big holders can move prices fast.</li>
        </ul>
      </Col>

      {/* Right Side – Image */}
      <Col md={6}>
        <img
          src="/assets/crypto-price-drivers.png"
          alt="What moves cryptocurrency prices"
          className="img-fluid"
        />
      </Col>
    </Row>
  </Container>
</div>
<div style={{ backgroundColor: '#f7fdf9', padding: '60px 0' }}>
      <div style={{ maxWidth: '100%', padding: '0 2rem' }}>
        <h2 className="fw-bold mb-4">
          How to Analyse the <span style={{ color: '#28a745' }}>Cryptocurrency Markets</span>
        </h2>

        <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
          In the previous section, we explored the fundamental drivers behind cryptocurrency prices. Now, let’s dive into the world of <strong>technical analysis</strong> — a data-driven approach that uses historical price and volume patterns to forecast future price movements.
        </p>

        <div style={{ marginTop: '40px' }}>
          <h4 className="fw-bold">🧱 1. Support and Resistance</h4>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
            These are key price levels where the market tends to pause or reverse.
            <br />
            <strong>Support</strong> is a level where demand is strong enough to prevent further decline. It acts as a “floor.”
            <br />
            <strong>Resistance</strong> is a level where selling pressure prevents further price increases. It acts as a “ceiling.”
          </p>
        </div>

        <div className="mt-4">
          <h4 className="fw-bold">📈 2. Trendlines</h4>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
            Trendlines help traders visualize the general direction of price movement.
            Upward trendlines show bullish momentum, while downward trendlines signal bearish sentiment.
          </p>
        </div>

        <div className="mt-4">
          <h4 className="fw-bold">🔄 3. Moving Averages (MA)</h4>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
            Moving averages smooth out short-term volatility and highlight longer-term trends.
            <br />
            <strong>SMA</strong>: Simple average over time. <br />
            <strong>EMA</strong>: Gives more weight to recent prices.
          </p>
        </div>

        <div className="mt-4">
          <h4 className="fw-bold">📊 4. Chart Patterns</h4>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
            Patterns like Head and Shoulders, Double Tops/Bottoms, and Triangles help predict price movement based on trader behavior and sentiment.
          </p>
        </div>

        <div className="mt-5">
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
            By mastering these tools, you’ll gain deeper insight into trends and price patterns.
            For best results, combine technical analysis with <strong>fundamental</strong> and <strong>sentiment analysis</strong> to make well-rounded decisions.
          </p>
        </div>
      </div>
    </div>
    <div style={{ backgroundColor: '#f7fdf9', padding: '60px 0' }}>
      <div style={{ maxWidth: '100%', padding: '0 40px', textAlign: 'left' }}>
        <h2 className="fw-bold mb-4">
          Cryptocurrency <span style={{ color: '#28a745' }}>Trading Strategies</span>
        </h2>

        <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
          Navigating the dynamic world of cryptocurrency trading requires a well-defined strategy.
          A trading strategy serves as a systematic method for buying and selling that helps traders
          manage risk and make informed decisions. Here are some of the most commonly employed strategies:
        </p>

        <div className="mt-4">
          <h4 className="fw-bold">📈 Trend Trading Strategy</h4>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
            This strategy seeks to exploit opportunities in the market when prices are trending.
            Traders aim to capitalise on cryptocurrencies experiencing a clear upward or downward movement.
            The goal is to buy during an uptrend and sell during a downtrend.
          </p>
        </div>

        <div className="mt-4">
          <h4 className="fw-bold">📊 Range Trading Strategy</h4>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
            Range trading is used when a cryptocurrency's price moves within clear support and resistance levels.
            Traders aim to buy near the support level (bottom) and sell near the resistance level (top).
          </p>
        </div>

        <div className="mt-4">
          <h4 className="fw-bold">🚀 Breakout Trading Strategy</h4>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
            This strategy focuses on price movements after breaking key levels. 
            When price breaks above resistance or below support, traders enter in the direction of the breakout.
            However, caution is needed to avoid false breakouts.
          </p>
        </div>

        <div className="mt-4">
          <h4 className="fw-bold">⚡ Scalping Strategy</h4>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
            Scalping is a high-frequency trading approach that targets small price changes throughout the day.
            Scalpers make dozens or hundreds of trades daily to build profits through quick, small gains.
          </p>
        </div>

        <div className="mt-5">
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
            Each strategy presents its own benefits and challenges. Choosing the right one depends on your
            goals, risk tolerance, and how much time you can dedicate to trading.
          </p>
        </div>
      </div>
    </div>
    <div style={{ backgroundColor: '#ffffff', padding: '60px 0' }}>
      <div style={{ maxWidth: '100%', padding: '0 40px', textAlign: 'left' }}>
        <h2 className="fw-bold mb-4">
          Why Trade <span style={{ color: '#28a745' }}>Cryptocurrencies?</span>
        </h2>

        <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
          Cryptocurrencies have emerged as a new frontier in the financial world, offering a plethora
          of unique advantages that make them an attractive asset class for traders. Here's why:
        </p>

        <ul style={{ fontSize: '1.05rem', lineHeight: '1.8', paddingLeft: '1rem' }}>
          <li>
            <strong>Liquidity:</strong> High liquidity makes it easier to buy or sell crypto assets
            quickly without significantly affecting the price—especially for top coins like Bitcoin and Ethereum.
          </li>
          <li>
            <strong>Strong Trends:</strong> Cryptocurrencies often follow strong market trends that, when identified,
            can provide traders with significant profit potential.
          </li>
          <li>
            <strong>Wide Daily Trading Ranges:</strong> The inherent price volatility of cryptocurrencies
            offers both short- and long-term traders multiple opportunities to capitalize on price swings.
          </li>
          <li>
            <strong>Vast News Coverage:</strong> Cryptocurrency prices are highly reactive to news—
            especially on social media. Staying updated gives traders an edge.
          </li>
          <li>
            <strong>24/7 Market:</strong> Unlike traditional markets, crypto never sleeps. You can trade
            anytime—day or night—offering unmatched flexibility.
          </li>
          <li>
            <strong>Innovative Technology:</strong> By trading cryptocurrencies, you're actively engaging
            with some of the most cutting-edge financial technologies in existence.
          </li>
        </ul>

        <p className="mt-4" style={{ fontSize: '1.1rem' }}>
          In conclusion, the unique characteristics of cryptocurrencies make them an exciting and
          potentially lucrative market for traders.
        </p>
      </div>
    </div>
    <div style={{ backgroundColor: '#f7fdf9', padding: '60px 0' }}>
      <div style={{ maxWidth: '100%', padding: '0 40px', textAlign: 'left' }}>
        <h2 className="fw-bold mb-4">
          Why Trade <span style={{ color: '#28a745' }}>Cryptocurrencies with AvaTrade?</span>
        </h2>

        <ul style={{ fontSize: '1.05rem', lineHeight: '1.8', paddingLeft: '1rem' }}>
          <li>
            <strong>Global Regulation:</strong> AvaTrade is licensed and regulated in multiple prominent jurisdictions worldwide. 
            This means you can trade cryptocurrencies with the utmost confidence that you're partnering with a reputable and regulated broker.
          </li>

     
          <div className="my-3">
          <img
  src="/assets/globe.png"
  alt="Global Regulation"
  style={{ width: '33%', height: 'auto' }}
/>
          </div>

          <li>
            <strong>Multiple Trading Platforms:</strong> Experience the versatility of trading cryptocurrencies across our range 
            of user-friendly platforms, including MT4, MT5, WebTrader, and AvaTradeApp.
          </li>

          <li>
            <strong>CFD Trading:</strong> Trade cryptocurrency CFDs and take advantage of leverage of up to 20:1. With cryptocurrency CFDs, 
            you have the opportunity to profit from both rising and falling markets.
          </li>

          <li>
            <strong>Comprehensive Educational Resources:</strong> Our Education Centre is packed with resources designed to enhance 
            your cryptocurrency trading knowledge and skills. Learn about the unique characteristics of different cryptocurrencies and 
            discover effective trading strategies.
          </li>

          <li>
            <strong>Practical Trading Resources & Tools:</strong> Make the most of AvaTrade’s practical trading resources, such as Trading Central, 
            to uncover more opportunities in the markets. Plus, with AvaProtect you can manage your risk exposure effectively. 
            On top of that, AvaTrade offers free cryptocurrency trading signals integrated with WebTrader and AvaTradeApp.
          </li>

          <li>
            <strong>Award-winning Customer Support:</strong> Our professional and responsive human customer support team is always ready 
            to provide prompt and expert assistance.
          </li>

          <li>
            <strong>Demo Account Trading:</strong> Use your AvaTrade demo account to test, practice, and refine your cryptocurrency trading 
            strategies for free and without risks. Once you're ready, switch to your real money account and start trading for real profits.
          </li>
        </ul>
      </div>
    </div>
    
    <div style={{ backgroundColor: '#f2fcf6' }} className="py-5 text-dark">
      <Container>
        <Row className="justify-content-center">
          <Col lg={10}>
            <h2 className="fw-bold text-center mb-5">How to Trade Cryptocurrencies – FAQs</h2>

            <Accordion flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>How can I trade cryptocurrencies?</Accordion.Header>
                <Accordion.Body>
                  You can trade cryptocurrencies by buying and selling them on crypto exchanges or through regulated brokers. Many platforms also offer cryptocurrency derivatives like CFDs, allowing you to speculate on price movements without owning the actual asset.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header>Is trading cryptocurrencies safe?</Accordion.Header>
                <Accordion.Body>
                  Trading cryptocurrencies involves risk due to price volatility, regulatory uncertainty, and potential security threats. However, trading with reputable, regulated platforms like AvaTrade can help reduce these risks and provide tools for safe trading.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>How do you start trading cryptocurrencies?</Accordion.Header>
                <Accordion.Body>
                  Start by choosing a trusted broker or exchange, creating an account, verifying your identity, and depositing funds. Then, learn about the crypto market, choose a trading strategy, and begin trading via spot, margin, or derivatives like CFDs.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3">
                <Accordion.Header>How do you predict cryptocurrency prices?</Accordion.Header>
                <Accordion.Body>
                  Cryptocurrency prices are typically analyzed using a combination of technical analysis, market sentiment, and news. Traders use charts, indicators, and historical data to forecast price movements, though no method guarantees accuracy in the highly volatile crypto market.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
      </>
  );
};

export default HowBitcoin;
