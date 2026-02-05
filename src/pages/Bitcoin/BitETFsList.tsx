import React, { useState } from 'react';
import { Table, Button, Container } from 'react-bootstrap';

const allEtfs = [
  { name: 'ProShares Bitcoin Strategy ETF', ticker: '#BITO' },
  { name: 'Grayscale Bitcoin Trust', ticker: '#GBTC' },
  { name: 'iShares Bitcoin Trust', ticker: '#IBIT' },
  { name: 'iShares Ethereum Trust ETF', ticker: '#ETHA' },
  { name: 'ProShares Ultra Bitcoin ETF', ticker: '#BITU' },
  { name: '2X Bitcoin Strategy ETF', ticker: '#BITX' },
  { name: '2X Ether ETF', ticker: '#ETHU' },
  { name: 'Valkyrie Bitcoin Strategy ETF', ticker: '#BTF' },
  { name: 'VanEck Bitcoin Strategy ETF', ticker: '#XBTF' },
  { name: 'Purpose Bitcoin ETF', ticker: '#BTCC' },
  { name: 'Purpose Ether ETF', ticker: '#ETHH' },
  { name: 'Evolve Bitcoin ETF', ticker: '#EBIT' },
  { name: 'CI Galaxy Bitcoin ETF', ticker: '#BTCX' },
  { name: 'CI Galaxy Ethereum ETF', ticker: '#ETHX' },
  { name: 'Bitwise Bitcoin ETF', ticker: '#BITB' },
  { name: 'Global X Blockchain ETF', ticker: '#BKCH' },
  { name: 'ARK 21Shares Bitcoin ETF', ticker: '#ARKB' },
  { name: 'Fidelity Advantage Bitcoin ETF', ticker: '#FBTC' },
  { name: 'Franklin Bitcoin ETF', ticker: '#EZBC' },
  { name: 'Hashdex Bitcoin Futures ETF', ticker: '#DEFI' },
];

const CryptoEtfsSection = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + 6, allEtfs.length));
  };

  const isAllVisible = visibleCount >= allEtfs.length;

  return (
    <div
      style={{
        backgroundColor: '#e6f5ee',
        width: '100%',
        padding: '80px 3vw',
        boxSizing: 'border-box',
      }}
    >
      <h2 className="fw-bold text-center mb-4">
        Make the Most Out of <span style={{ color: '#28a745' }}>Crypto with ETFs</span>
      </h2>

      <p
        className="fs-5 text-center mb-5"
        style={{ maxWidth: '1000px', margin: '0 auto' }}
      >
        Experience the power of BTC & ETH in a whole new way. Unlock greater leverage and the flexibility of ETFs that comes with the world’s most regulated broker.
      </p>

      <div style={{ overflowX: 'auto' }}>
        <Table
          bordered
          className="text-center mx-auto"
          style={{
            minWidth: '90%',
            maxWidth: '1200px',
            margin: '0 auto',
            backgroundColor: '#ffffff',
          }}
        >
          <thead style={{ backgroundColor: '#28a745', color: '#fff' }}>
            <tr>
              <th style={{ padding: '14px', fontSize: '1.1rem' }}>Product</th>
              <th style={{ padding: '14px', fontSize: '1.1rem' }}>Ticker</th>
            </tr>
          </thead>
          <tbody>
            {allEtfs.slice(0, visibleCount).map((etf, index) => (
              <tr
                key={index}
                style={{
                  backgroundColor: index % 2 === 0 ? '#f9f9f9' : '#d8f3e1',
                }}
              >
                <td style={{ padding: '12px', fontWeight: '500' }}>{etf.name}</td>
                <td style={{ padding: '12px', fontWeight: 'bold', color: '#28a745' }}>
                  {etf.ticker}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      {!isAllVisible && (
        <div className="text-center mt-4">
          <Button
            variant="success"
            size="lg"
            style={{ backgroundColor: '#28a745', borderColor: '#28a745' }}
            onClick={handleShowMore}
          >
            Explore More
          </Button>
        </div>
      )}
    </div>
    
  );
};

export default CryptoEtfsSection;
