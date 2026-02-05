import React from 'react';
import { Container, Button, Table } from 'react-bootstrap';
import ETFsList from './ETFsList';
import WhyTradeCryptoETFs from './WhyTradeCryptoETFs';

const CryptoETFIntroBanner = () => {
  return (
  <>
    <div
      style={{
        backgroundImage: "url('/assets/etf-banner.jpg')", // Replace with your actual banner image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        color: '#f2fcf6',
      }}
    >
      <div
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1,
        }}
      ></div>

      <Container style={{ zIndex: 2, textAlign: 'left', maxWidth: '800px', padding: '0 20px' }}>
        <h1 className="fw-bold display-4 mb-3">
          Make the Most Out of <span style={{ color: '#28a745' }}>Crypto with ETFs</span>
        </h1>
        <p className="fs-5 mb-4">
          Experience the power of BTC & ETH in a whole new way. Unlock greater leverage and the flexibility of ETFs that comes with the world’s most regulated broker.
        </p>
        <div className="mb-4">
          <span className="me-4 fw-semibold">Established 2006</span>
          <span className="me-4 fw-semibold">100+ Million Traders</span>
          <span className="fw-semibold">11 Regulations Worldwide</span>
        </div>
        <Button variant="success" size="lg" style={{ fontWeight: '600' }}>
          Start Trading ETFs
        </Button>
      </Container>
    </div>
    <ETFsList/>
    <WhyTradeCryptoETFs/>
    <section
      style={{
        backgroundColor: '#f1fdf5',
        padding: '80px 5vw',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div style={{ maxWidth: '1050px', width: '100%' }}>
        <h2 className="fw-bold text-center mb-4" style={{ color: '#1a3d2b' }}>
          Crypto ETFs vs. Crypto CFDs vs. Crypto Tokens –{" "}
          <span style={{ color: '#28a745' }}>What’s the Difference?</span>
        </h2>

        <p className="fs-5 text-center mb-5" style={{ maxWidth: '850px', margin: '0 auto', color: '#2c3e50' }}>
          Explore the distinctions between Crypto ETFs, CFDs, and direct Tokens to choose what fits your trading style best.
        </p>

        <div className="table-responsive">
          <Table bordered hover className="text-center" style={{ backgroundColor: '#fff', minWidth: '1000px', margin: '0 auto' }}>
            <thead style={{ backgroundColor: '#28a745', color: '#fff' }}>
              <tr>
                <th style={{ padding: '16px', fontSize: '1.1rem' }}>Feature</th>
                <th style={{ padding: '16px', fontSize: '1.1rem' }}>Crypto ETFs</th>
                <th style={{ padding: '16px', fontSize: '1.1rem' }}>Crypto CFDs</th>
                <th style={{ padding: '16px', fontSize: '1.1rem' }}>Crypto Tokens</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '14px' }}>Leverage</td>
                <td style={{ padding: '14px' }}>Up to 1:10</td>
                <td style={{ padding: '14px' }}>Typically 1:2</td>
                <td style={{ padding: '14px' }}>No leverage (unless using margin exchanges)</td>
              </tr>
              <tr style={{ backgroundColor: '#f9f9f9' }}>
                <td style={{ padding: '14px' }}>Ownership</td>
                <td style={{ padding: '14px' }}>Indirect exposure via fund</td>
                <td style={{ padding: '14px' }}>No ownership, just speculation</td>
                <td style={{ padding: '14px' }}>Yes, direct ownership of coins/tokens</td>
              </tr>
              <tr>
                <td style={{ padding: '14px' }}>Regulation</td>
                <td style={{ padding: '14px' }}>Highly regulated (exchange-traded)</td>
                <td style={{ padding: '14px' }}>Regulated by brokers</td>
                <td style={{ padding: '14px' }}>Light or unregulated (depends on exchange)</td>
              </tr>
              <tr style={{ backgroundColor: '#f9f9f9' }}>
                <td style={{ padding: '14px' }}>Trading Hours</td>
                <td style={{ padding: '14px' }}>Market hours of ETF exchanges</td>
                <td style={{ padding: '14px' }}>24/5 availability</td>
                <td style={{ padding: '14px' }}>24/7 global crypto market</td>
              </tr>
              <tr>
                <td style={{ padding: '14px' }}>Best For</td>
                <td style={{ padding: '14px' }}>Leverage & long-term growth</td>
                <td style={{ padding: '14px' }}>Short-term traders/speculators</td>
                <td style={{ padding: '14px' }}>HODLers and on-chain users</td>
              </tr>
              <tr style={{ backgroundColor: '#f9f9f9' }}>
                <td style={{ padding: '14px' }}>Liquidity</td>
                <td style={{ padding: '14px' }}>Medium (based on exchange volumes)</td>
                <td style={{ padding: '14px' }}>High (instant positions)</td>
                <td style={{ padding: '14px' }}>High (24/7 exchange liquidity)</td>
              </tr>
              <tr>
                <td style={{ padding: '14px' }}>Storage Required</td>
                <td style={{ padding: '14px' }}>None</td>
                <td style={{ padding: '14px' }}>None</td>
                <td style={{ padding: '14px' }}>Yes – Digital wallet needed</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </section>

    </>
  );
};

export default CryptoETFIntroBanner;
