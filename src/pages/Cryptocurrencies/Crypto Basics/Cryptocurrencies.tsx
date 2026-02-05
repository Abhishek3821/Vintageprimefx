import React from 'react';
import { Container, Button, Col, Row, Card, Accordion } from 'react-bootstrap';
import { FaBitcoin, FaEthereum, FaCoins, FaDollarSign, FaChartLine, FaBalanceScale, FaTimesCircle, FaCheckCircle, FaExchangeAlt } from 'react-icons/fa'
const Cryptocurrencies: React.FC = () => {
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
          What are <span style={{ color: '#28a745' }}>Cryptocurrencies?</span>
        </h1>
        <p className="fs-5 mb-4">
          Uncover the significance of cryptocurrencies with us. Explore how these digital currencies are reshaping the way we think about money and finance.
        </p>
        <Button
          variant="success"
          size="lg"
          style={{ backgroundColor: '#28a745', borderColor: '#28a745' }}
        >
          Learn More
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
            Welcome to the world of digital finance!
          </h2>
          <p style={{ fontSize: '1.1rem', marginTop: '20px', lineHeight: '1.7', color: '#2d4830' }}>
            Cryptocurrency, as the name suggests, is a form of digital or virtual currency that uses cryptography for security.
            But what does that mean? Simply put, it's like your regular dollars, euros, or yen, but instead of being a physical piece of paper or coin you can hold in your hand, it exists only in the digital realm.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#2d4830' }}>
            The <strong>‘crypto’</strong> part refers to the complex coding techniques that encrypt your transactions and keep them secure.
            This digital money can be used to buy goods and services online or for investment and trading purposes.
            It's a whole new way of thinking about money, and it's changing the world of finance as we know it.
          </p>
        </div>
      </Container>
    </div>
    <div style={{ backgroundColor: '#e6f5ee', padding: '80px 0' }}>
  <Container className="text-center">
    <h2 className="fw-bold mb-5" style={{ fontSize: '2.2rem', color: '#146c43' }}>
      <i className="fas fa-coins me-2 text-success"></i> Digital Currency
      <span className="mx-2 text-dark fw-bold">+</span>
      <i className="fas fa-lock me-2 text-success"></i> Cryptography
      <span className="mx-2 text-dark fw-bold">+</span>
      <i className="fas fa-network-wired me-2 text-success"></i> Decentralised Network
      <span className="mx-2 text-dark fw-bold">=</span>
      <i className="fab fa-bitcoin me-2 text-success"></i> Cryptocurrency
    </h2>

    <Row className="justify-content-center text-center">
    
      <Col xs={12} md={3} className="mb-5">
        <i className="fas fa-coins" style={{ fontSize: '3rem', color: '#28a745' }}></i>
        <h5 className="fw-bold mt-3" style={{ color: '#2d4830' }}>Digital Currency</h5>
        <p style={{ color: '#2d4830' }}>
          Currency that exists only in digital form, enabling fast and borderless online transactions.
        </p>
      </Col>

      {/* Cryptography */}
      <Col xs={12} md={3} className="mb-5">
        <i className="fas fa-lock" style={{ fontSize: '3rem', color: '#28a745' }}></i>
        <h5 className="fw-bold mt-3" style={{ color: '#2d4830' }}>Cryptography</h5>
        <p style={{ color: '#2d4830' }}>
          Secures transactions with encryption, ensuring privacy, safety, and trust in digital environments.
        </p>
      </Col>

      {/* Decentralised Network */}
      <Col xs={12} md={3} className="mb-5">
        <i className="fas fa-network-wired" style={{ fontSize: '3rem', color: '#28a745' }}></i>
        <h5 className="fw-bold mt-3" style={{ color: '#2d4830' }}>Decentralised Network</h5>
        <p style={{ color: '#2d4830' }}>
          No single authority—just a shared, distributed network verifying and recording all transactions.
        </p>
      </Col>

      {/* Cryptocurrency */}
      <Col xs={12} md={3} className="mb-5">
        <i className="fab fa-bitcoin" style={{ fontSize: '3rem', color: '#28a745' }}></i>
        <h5 className="fw-bold mt-3" style={{ color: '#2d4830' }}>Cryptocurrency</h5>
        <p style={{ color: '#2d4830' }}>
          A secure, decentralised digital asset used for investing, trading, and global payments.
        </p>
      </Col>
    </Row>
  </Container>
</div>
<div style={{ backgroundColor: '#e6f5ee', padding: '80px 0' }}>
  <Container>
    <h2 className="text-center fw-bold mb-5" style={{ fontSize: '2.5rem', color: '#146c43' }}>
      <i className="fas fa-cogs text-success me-2"></i>How Does Cryptocurrency Work?
    </h2>

    <Row className="justify-content-center mb-5">
      <Col lg={10}>
        <p style={{ fontSize: '1.1rem', color: '#2d4830' }}>
          The magic behind cryptocurrencies lies in a technology called <strong>Blockchain</strong>.
          Imagine a digital ledger, open for everyone to see, where every transaction is recorded.
          Participants in the network verify transactions using cryptography. Once confirmed,
          the transaction is added to a block on the chain — permanently. It’s secure, transparent,
          and decentralised — not controlled by any single bank or government.
        </p>
      </Col>
    </Row>

    <Row className="g-4 text-center">

      <Col md={4}>
        <div className="bg-white shadow rounded p-4 h-100">
          <i className="fas fa-hammer fa-3x text-success mb-3"></i>
          <h5 className="fw-bold">Mining</h5>
          <p style={{ color: '#2d4830' }}>
            Solve complex problems to confirm transactions. Miners are rewarded with new coins.
          </p>
        </div>
      </Col>


      <Col md={4}>
        <div className="bg-white shadow rounded p-4 h-100">
          <i className="fas fa-coins fa-3x text-success mb-3"></i>
          <h5 className="fw-bold">Staking</h5>
          <p style={{ color: '#2d4830' }}>
            Lock your coins to help validate transactions and earn rewards in return.
          </p>
        </div>
      </Col>

    
      <Col md={4}>
        <div className="bg-white shadow rounded p-4 h-100">
          <i className="fas fa-wallet fa-3x text-success mb-3"></i>
          <h5 className="fw-bold">Storing</h5>
          <p style={{ color: '#2d4830' }}>
            Store your crypto in digital wallets — online, offline, or on hardware devices.
          </p>
        </div>
      </Col>
    </Row>
  </Container>
</div>
<div style={{ backgroundColor: '#e6f5ee', padding: '60px 0' }}>
  <Container className="text-center">

    <img
      src="/assets/how-blockchain-works.png"
      alt="How Blockchain Works"
      className="img-fluid"
      style={{ maxWidth: '1000px', width: '100%' }}
    />
  </Container>
</div>
<div style={{ backgroundColor: '#f2fcf6', padding: '60px 0' }}>
  <Container>
    <h2 className="fw-bold text-center mb-5" style={{ fontSize: '2.5rem', color: '#146c43' }}>
      Types of Cryptocurrency
    </h2>

    <h4 className="text-success mb-4">Most Popular Cryptocurrencies</h4>
    <p style={{ fontSize: '1.1rem', color: '#2d4830' }}>
      In the vast universe of cryptocurrencies, some stars shine brighter than others. Here's a quick rundown of some of the top cryptocurrencies by market cap as of July 2024:
    </p>

    <Row className="mt-4 g-4">
      <Col md={6} lg={4}>
        <Card className="h-100 shadow-sm border-0">
          <Card.Body>
            <FaBitcoin size={40} className="text-warning mb-3" />
            <Card.Title>Bitcoin (BTC)</Card.Title>
            <Card.Text>
              Created in 2009 by Satoshi Nakamoto, Bitcoin is the pioneer of the crypto world, enabling peer-to-peer transactions through a decentralised authority.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col md={6} lg={4}>
        <Card className="h-100 shadow-sm border-0">
          <Card.Body>
            <FaEthereum size={40} className="text-primary mb-3" />
            <Card.Title>Ethereum (ETH)</Card.Title>
            <Card.Text>
              Launched in 2013 by Vitalik Buterin, Ethereum enables smart contracts and is the second-largest crypto after Bitcoin in market cap.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col md={6} lg={4}>
        <Card className="h-100 shadow-sm border-0">
          <Card.Body>
            <FaDollarSign size={40} className="text-success mb-3" />
            <Card.Title>Tether (USDT)</Card.Title>
            <Card.Text>
              A stablecoin pegged 1:1 with the US dollar, Tether is used to minimize crypto volatility and maintain consistent value.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col md={6} lg={4}>
        <Card className="h-100 shadow-sm border-0">
          <Card.Body>
            <FaCoins size={40} className="text-warning mb-3" />
            <Card.Title>Binance Coin (BNB)</Card.Title>
            <Card.Text>
              Native to the Binance Exchange, BNB is used for transactions and has gained significant value and utility in the ecosystem.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col md={6} lg={4}>
        <Card className="h-100 shadow-sm border-0">
          <Card.Body>
            <FaChartLine size={40} className="text-info mb-3" />
            <Card.Title>Solana (SOL)</Card.Title>
            <Card.Text>
              Launched in 2020, Solana offers smart contracts and faster transactions. Its popularity and user base are growing rapidly.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col md={6} lg={4}>
        <Card className="h-100 shadow-sm border-0 bg-light">
          <Card.Body>
            <FaCoins size={40} className="text-secondary mb-3" />
            <Card.Title>Altcoins & Stablecoins</Card.Title>
            <Card.Text>
              Besides these, there are hundreds of other cryptocurrencies offering unique features and functions across sectors.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
</div>


<div style={{ backgroundColor: '#e6f5ee', padding: '60px 0' }}>
  <Container>
    <h2 className="fw-bold text-center mb-5" style={{ fontSize: '2.5rem', color: '#146c43' }}>
      Altcoins & Stablecoins
    </h2>

    <Row className="g-4">
      <Col md={6}>
        <Card className="h-100 shadow-sm border-0">
          <Card.Body>
            <div className="d-flex align-items-center mb-3">
              <FaCoins size={32} className="text-warning me-3" />
              <Card.Title className="mb-0">Altcoins</Card.Title>
            </div>
            <Card.Text style={{ fontSize: '1.05rem', color: '#2d4830' }}>
              The term <strong>'altcoin'</strong> refers to any cryptocurrency other than Bitcoin. These coins aim to improve on Bitcoin’s shortcomings, offering features like faster transactions, better scalability, and unique consensus mechanisms.
              <br /><br />
              Popular examples include <strong>Ethereum (ETH)</strong>, <strong>Litecoin (LTC)</strong>, and <strong>Dogecoin (DOGE)</strong>. Though many have loyal communities, none have reached Bitcoin’s global recognition.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col md={6}>
        <Card className="h-100 shadow-sm border-0">
          <Card.Body>
            <div className="d-flex align-items-center mb-3">
              <FaBalanceScale size={32} className="text-success me-3" />
              <Card.Title className="mb-0">Stablecoins</Card.Title>
            </div>
            <Card.Text style={{ fontSize: '1.05rem', color: '#2d4830' }}>
              <strong>Stablecoins</strong> are cryptocurrencies designed to maintain a stable value by pegging them to assets like the <strong>US Dollar</strong>, <strong>Euro</strong>, or <strong>Gold</strong>.
              <br /><br />
              They offer the security and efficiency of crypto with reduced volatility. Leading stablecoins include <strong>Tether (USDT)</strong>, <strong>USD Coin (USDC)</strong>, and <strong>Binance USD (BUSD)</strong>.
              <br />
              These are essential for smooth exchange operations and act as safe havens during high market fluctuations.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
</div>
<div style={{ backgroundColor: '#e6f5ee', padding: '60px 0' }}>
  <Container>
    <h2 className="fw-bold text-center mb-5" style={{ fontSize: '2.5rem', color: '#146c43' }}>
      Advantages and Disadvantages of Cryptocurrency
    </h2>

    <Row>
      <Col md={6}>
        <div className="mb-4">
          <h4 className="fw-bold d-flex align-items-center" style={{ color: '#198754' }}>
            <FaCheckCircle className="me-2" /> Advantages
          </h4>
          <ul style={{ fontSize: '1.05rem', color: '#2d4830', lineHeight: '1.7' }}>
            <li><strong>Decentralization:</strong> Not controlled by any central authority, giving users full control of their funds.</li>
            <li><strong>Security:</strong> Transactions are encrypted using cryptography, reducing the risk of fraud or theft.</li>
            <li><strong>Transparency:</strong> Every transaction is recorded on the blockchain for open verification and tracking.</li>
            <li><strong>Accessibility:</strong> Open to anyone with an internet connection — especially beneficial to unbanked populations.</li>
            <li><strong>Speed and Cost:</strong> Fast transactions with low fees, regardless of location or transaction size.</li>
          </ul>
        </div>
      </Col>

      <Col md={6}>
        <div className="mb-4">
          <h4 className="fw-bold d-flex align-items-center" style={{ color: '#dc3545' }}>
            <FaTimesCircle className="me-2" /> Disadvantages
          </h4>
          <ul style={{ fontSize: '1.05rem', color: '#2d4830', lineHeight: '1.7' }}>
            <li><strong>Volatility:</strong> Prices can swing dramatically, making them unreliable for day-to-day transactions.</li>
            <li><strong>Lack of Regulation:</strong> Legal frameworks are inconsistent, posing potential risk to investors.</li>
            <li><strong>Limited Acceptance:</strong> Not universally accepted across businesses or countries.</li>
            <li><strong>Environmental Impact:</strong> Mining consumes vast energy, affecting sustainability efforts.</li>
            <li><strong>Potential for Misuse:</strong> Can be used for illegal activities due to anonymity and lack of oversight.</li>
          </ul>
        </div>
      </Col>
    </Row>

    <Row>
      <Col>
        <p className="text-center mt-4" style={{ color: '#2d4830', fontSize: '1.05rem' }}>
          <em>Note: Always do your own research and assess your financial goals before investing in cryptocurrencies.</em>
        </p>
      </Col>
    </Row>
  </Container>
</div>
<div style={{ backgroundColor: '#f2fcf6', padding: '60px 0' }}>
  <Container>
    <h2 className="fw-bold text-center mb-5" style={{ fontSize: '2.5rem', color: '#146c43' }}>
      What is Cryptocurrency Trading?
    </h2>

    <p style={{ fontSize: '1.1rem', color: '#2d4830' }}>
      Cryptocurrency trading involves speculating on price movements of digital currencies. There are two primary ways to trade cryptocurrencies:
      <strong> via exchanges</strong> and through <strong>CFDs (Contracts for Difference)</strong>. Traders can potentially profit from the volatile market either by owning the coins or by simply speculating on their price changes.
    </p>

    <Row className="mt-5">
      <Col md={6}>
        <div className="mb-4">
          <h4 className="fw-bold d-flex align-items-center mb-3" style={{ color: '#198754' }}>
            <FaExchangeAlt className="me-2" /> Trading Cryptos on Exchanges
          </h4>
          <p style={{ fontSize: '1.05rem', color: '#2d4830', lineHeight: '1.7' }}>
            Buy actual cryptocurrencies and sell them later at a higher price. Register, complete KYC, and use payment methods like cards, e-wallets, or bank transfers. Centralized exchanges (CEX) and decentralized exchanges (DEX) are both options.
            <br /><br />
            While you get ownership of real crypto, there's limited short-selling and you must manage your own secure wallet.
          </p>
        </div>
      </Col>

      <Col md={6}>
        <div className="mb-4">
          <h4 className="fw-bold d-flex align-items-center mb-3" style={{ color: '#198754' }}>
            <FaChartLine className="me-2" /> Trading Cryptocurrency CFDs
          </h4>
          <p style={{ fontSize: '1.05rem', color: '#2d4830', lineHeight: '1.7' }}>
            Trade on price movements without owning actual crypto. This allows you to profit from both rising and falling markets. No wallet needed and trades are done directly in fiat currency.
            <br /><br />
            Ideal for short-term traders who want flexibility and simplicity in crypto trading.
          </p>
        </div>
      </Col>
    </Row>

    <Row className="mt-4">
      <Col>
        <div className="text-center mt-4">
          <h4 className="fw-bold mb-3" style={{ color: '#146c43' }}>Grow Your Cryptocurrency Trading Skills!</h4>
          <p style={{ fontSize: '1.05rem', color: '#2d4830' }}>
            Ready for the next level in crypto trading? Our detailed guide explains how cryptocurrencies are traded, their fundamental price drivers,
            and provides simple strategies and tips you can apply immediately.
          </p>
          <Button variant="success" size="lg" style={{ fontWeight: 600, marginTop: '10px' }}>
            Start Learning Now
          </Button>
        </div>
      </Col>
    </Row>

    <hr className="my-5" />

    <Row>
      <Col>
        <div className="text-center">
          <h4 className="fw-bold mb-3" style={{ color: '#146c43' }}>Final Words</h4>
          <p style={{ fontSize: '1.05rem', color: '#2d4830' }}>
            The digital finance landscape offers endless opportunities. AvaTrade helps you take your first step safely with a risk-free demo account.
            When ready, switch to a real account and start trading crypto CFDs using advanced tools and educational resources.
          </p>
          <Button variant="outline-success" size="lg" style={{ fontWeight: 600 }}>
            Try Demo Account
          </Button>
        </div>
      </Col>
    </Row>
  </Container>
</div>

    <div style={{ backgroundColor: '#f2fcf6' }} className="py-5 text-dark">
      <Container>
        <Row className="justify-content-center">
          <Col lg={10}>
            <h2 className="fw-bold text-center mb-5">What Are Cryptocurrencies – FAQs</h2>

            <Accordion flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>What is the difference between Bitcoin and altcoins?</Accordion.Header>
                <Accordion.Body>
                  Bitcoin is the first and most well-known cryptocurrency. Altcoins (short for "alternative coins") are all other cryptocurrencies that followed Bitcoin, each offering unique features, purposes, and use cases.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header>What is a blockchain and why is it important in cryptocurrency?</Accordion.Header>
                <Accordion.Body>
                  A blockchain is a decentralised, transparent digital ledger that records all transactions of a cryptocurrency. It’s vital because it ensures the security, integrity, and immutability of the transaction history.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>What is cryptocurrency mining?</Accordion.Header>
                <Accordion.Body>
                  Cryptocurrency mining is the process of validating transactions and adding them to the blockchain, often rewarded with new coins. It involves solving cryptographic puzzles using powerful computer hardware.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3">
                <Accordion.Header>Are cryptocurrencies legal?</Accordion.Header>
                <Accordion.Body>
                  Cryptocurrency legality depends on the country. Some governments support it with regulations, others restrict or ban it. Always verify your local regulations before investing or trading in cryptocurrencies.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="4">
                <Accordion.Header>How is cryptocurrency taxed?</Accordion.Header>
                <Accordion.Body>
                  Tax treatment of cryptocurrencies varies globally. In many countries, crypto is considered property, subject to capital gains tax. Always consult a local tax professional to ensure compliance with applicable laws.
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

export default Cryptocurrencies;
