
import React, { useState, useEffect } from 'react';


const BottomTicker: React.FC = () => {
  const [tickerData, setTickerData] = useState([
    // Fallback mock data (approximate prices as of August 2025)
    { name: 'MICROSOFT', symbol: 'MSFT', value: '522.04', change: '+0.23%', className: 'text-success', symbolChange: '▲' },
    { name: 'PFIZER', symbol: 'PFE', value: '28.55', change: '-0.10%', className: 'text-danger', symbolChange: '▼' },
    { name: 'APPLE', symbol: 'AAPL', value: '229.35', change: '+4.24%', className: 'text-success', symbolChange: '▲' },
    { name: 'USD/CHF', symbol: 'USDCHF=X', value: '0.86', change: '-0.15%', className: 'text-danger', symbolChange: '▼' },
    { name: 'NETFLIX', symbol: 'NFLX', value: '1211.64', change: '+2.65%', className: 'text-success', symbolChange: '▲' },
    { name: 'SIEMENS', symbol: 'SIEGY', value: '94.30', change: '+0.05%', className: 'text-success', symbolChange: '▲' },
    { name: 'INTEL', symbol: 'INTC', value: '19.71', change: '-2.50%', className: 'text-danger', symbolChange: '▼' },
    { name: 'EUR/GBP', symbol: 'EURGBP=X', value: '0.86', change: '-0.05%', className: 'text-danger', symbolChange: '▼' },
    { name: 'CrudeOIL', symbol: 'CL=F', value: '76.84', change: '+0.80%', className: 'text-success', symbolChange: '▲' },
  ]);

  // Replace with your Finnhub API key
  const API_KEY = 'YOUR_FINNHUB_API_KEY'; // Get from https://finnhub.io/register

  useEffect(() => {
    const fetchLivePrices = async () => {
      try {
        const updatedData = await Promise.all(
          tickerData.map(async (item) => {
            try {
              const endpoint = item.name.includes('/') ? 'forex/rates' : 'quote';
              const params = item.name.includes('/') ? `?pair=${item.symbol}` : `?symbol=${item.symbol}`;
              const response = await fetch(
                `https://finnhub.io/api/v1/${endpoint}${params}&token=${API_KEY}`
              );
              if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
              const data = await response.json();

              let value, change;
              if (item.name.includes('/')) {
                value = data.last || item.value;
                change = data.change ? `${(data.change * 100).toFixed(2)}%` : item.change;
              } else {
                value = data.c || item.value;
                change = data.dp ? `${data.dp.toFixed(2)}%` : item.change;
              }

              return {
                ...item,
                value: parseFloat(value).toFixed(2),
                change: change.startsWith('-') ? change : `+${change}`,
                className: change.startsWith('-') ? 'text-danger' : 'text-success',
                symbolChange: change.startsWith('-') ? '▼' : '▲',
              };
            } catch (error) {
              console.error(`Error fetching ${item.name}:`, error);
              return item; // Fallback to mock data for this item
            }
          })
        );
        setTickerData(updatedData);
      } catch (error) {
        console.error('Error fetching live prices:', error);
      }
    };

    // Fetch immediately and every 30 seconds
    fetchLivePrices();
    const interval = setInterval(fetchLivePrices, 30000);

    return () => clearInterval(interval);
  }, []);

  // Duplicate items for seamless looping
  const duplicatedItems = [...tickerData, ...tickerData];

  return (
    <div className="bg-black py-2 ticker-wrapper overflow-hidden position-relative">
      <div
        className="ticker d-flex gap-5 text-white small fw-semibold"
        style={{ animation: 'scrollTicker 30s linear infinite', whiteSpace: 'nowrap' }}
      >
        {duplicatedItems.map((item, i) => (
          <span key={i} className="ticker-item">
            {item.name} {item.value}{' '}
            <span className={item.className}>
              {item.symbolChange} {item.change}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default BottomTicker;