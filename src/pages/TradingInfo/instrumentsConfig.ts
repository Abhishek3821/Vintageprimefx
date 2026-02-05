export type InstrumentConfig = {
  slug: string;
  title: string;
  category: 'indices' | 'commodities' | 'stocks' | 'forex' | 'options';
  tradingViewSymbol: string;
  oandaSymbol?: string; // if present, enables preselect trading
  description?: string;
};

export const INSTRUMENTS: InstrumentConfig[] = [
  // Indices
  { slug: 'smi', title: 'SMI', category: 'indices', tradingViewSymbol: 'INDEX:SMI' },
  { slug: 'us-500', title: 'US 500', category: 'indices', tradingViewSymbol: 'SP:SPX' },
  { slug: 'cannabis-index', title: 'Cannabis Index', category: 'indices', tradingViewSymbol: 'NYSEARCA:MJ' },
  { slug: 'us-tech100', title: 'US TECH 100', category: 'indices', tradingViewSymbol: 'NASDAQ:NDX' },
  { slug: 'us-30', title: 'US 30', category: 'indices', tradingViewSymbol: 'DJ:DJI' },
  { slug: 'ftsemib', title: 'FTSE MIB', category: 'indices', tradingViewSymbol: 'INDEX:FTSEMIB' },
  { slug: 'us-2000', title: 'US 2000', category: 'indices', tradingViewSymbol: 'RUSSELL:RUT' },
  { slug: 'india-50', title: 'INDIA 50', category: 'indices', tradingViewSymbol: 'NSE:NIFTY' },
  { slug: 'dollar-index', title: 'Dollar Index', category: 'indices', tradingViewSymbol: 'TVC:DXY' },
  { slug: 'spain-35', title: 'Spain 35', category: 'indices', tradingViewSymbol: 'BME:IBC' },

  // Commodities
  { slug: 'crude-oil', title: 'Crude Oil', category: 'commodities', tradingViewSymbol: 'TVC:USOIL' },
  { slug: 'copper', title: 'Copper', category: 'commodities', tradingViewSymbol: 'TVC:COPPER' },
  { slug: 'brent-oil', title: 'Brent Oil', category: 'commodities', tradingViewSymbol: 'TVC:UKOIL' },
  { slug: 'heating-oil', title: 'Heating Oil', category: 'commodities', tradingViewSymbol: 'NYMEX:HO1!' },
  { slug: 'gasoline', title: 'Gasoline', category: 'commodities', tradingViewSymbol: 'NYMEX:RB1!' },
  { slug: 'natural-gas', title: 'Natural Gas', category: 'commodities', tradingViewSymbol: 'NYMEX:NG1!' },
  { slug: 'gold', title: 'Gold', category: 'commodities', tradingViewSymbol: 'OANDA:XAUUSD', oandaSymbol: 'XAU_USD' },
  { slug: 'silver', title: 'Silver', category: 'commodities', tradingViewSymbol: 'OANDA:XAGUSD', oandaSymbol: 'XAG_USD' },
  { slug: 'wheat', title: 'Wheat', category: 'commodities', tradingViewSymbol: 'CBOT:ZW1!' },
  { slug: 'corn', title: 'Corn', category: 'commodities', tradingViewSymbol: 'CBOT:ZC1!' },

  // Stocks
  { slug: 'apple', title: 'Apple', category: 'stocks', tradingViewSymbol: 'NASDAQ:AAPL' },
  { slug: 'amazon', title: 'Amazon', category: 'stocks', tradingViewSymbol: 'NASDAQ:AMZN' },
  { slug: 'microsoft', title: 'Microsoft', category: 'stocks', tradingViewSymbol: 'NASDAQ:MSFT' },
  { slug: 'netflix', title: 'Netflix', category: 'stocks', tradingViewSymbol: 'NASDAQ:NFLX' },
  { slug: 'pfizer', title: 'Pfizer', category: 'stocks', tradingViewSymbol: 'NYSE:PFE' },
  { slug: 'adobe', title: 'Adobe', category: 'stocks', tradingViewSymbol: 'NASDAQ:ADBE' },
  { slug: 'alibaba', title: 'Alibaba', category: 'stocks', tradingViewSymbol: 'NYSE:BABA' },
  { slug: 'att', title: 'AT&T', category: 'stocks', tradingViewSymbol: 'NYSE:T' },
  { slug: 'intel', title: 'Intel', category: 'stocks', tradingViewSymbol: 'NASDAQ:INTC' },
  { slug: 'teva', title: 'Teva', category: 'stocks', tradingViewSymbol: 'NYSE:TEVA' },
  { slug: 'american-express', title: 'American Express', category: 'stocks', tradingViewSymbol: 'NYSE:AXP' },

  // Forex pairs (with OANDA symbols for trading)
  { slug: 'eur-usd', title: 'EUR/USD', category: 'forex', tradingViewSymbol: 'FX:EURUSD', oandaSymbol: 'EUR_USD' },
  { slug: 'gbp-usd', title: 'GBP/USD', category: 'forex', tradingViewSymbol: 'FX:GBPUSD', oandaSymbol: 'GBP_USD' },
  { slug: 'usd-jpy', title: 'USD/JPY', category: 'forex', tradingViewSymbol: 'FX:USDJPY', oandaSymbol: 'USD_JPY' },
  { slug: 'eur-jpy', title: 'EUR/JPY', category: 'forex', tradingViewSymbol: 'FX:EURJPY', oandaSymbol: 'EUR_JPY' },
  { slug: 'aud-usd', title: 'AUD/USD', category: 'forex', tradingViewSymbol: 'FX:AUDUSD', oandaSymbol: 'AUD_USD' },
  { slug: 'eur-gbp', title: 'EUR/GBP', category: 'forex', tradingViewSymbol: 'FX:EURGBP', oandaSymbol: 'EUR_GBP' },
  { slug: 'usd-cad', title: 'USD/CAD', category: 'forex', tradingViewSymbol: 'FX:USDCAD', oandaSymbol: 'USD_CAD' },
  { slug: 'usd-chf', title: 'USD/CHF', category: 'forex', tradingViewSymbol: 'FX:USDCHF', oandaSymbol: 'USD_CHF' },
  { slug: 'gbp-jpy', title: 'GBP/JPY', category: 'forex', tradingViewSymbol: 'FX:GBPJPY', oandaSymbol: 'GBP_JPY' },
  { slug: 'eur-cad', title: 'EUR/CAD', category: 'forex', tradingViewSymbol: 'FX:EURCAD', oandaSymbol: 'EUR_CAD' },
  { slug: 'eur-aud', title: 'EUR/AUD', category: 'forex', tradingViewSymbol: 'FX:EURAUD', oandaSymbol: 'EUR_AUD' },
  { slug: 'aud-chf', title: 'AUD/CHF', category: 'forex', tradingViewSymbol: 'FX:AUDCHF', oandaSymbol: 'AUD_CHF' },

  // Options (route to underlying chart; trading via options not enabled)
  { slug: 'us500cash-options', title: 'US500CASH Options', category: 'options', tradingViewSymbol: 'SP:SPX' },
  { slug: 'xau-usd-options', title: 'XAU/USD Options', category: 'options', tradingViewSymbol: 'OANDA:XAUUSD', oandaSymbol: 'XAU_USD' },
  { slug: 'eur-usd-options', title: 'EUR/USD Options', category: 'options', tradingViewSymbol: 'FX:EURUSD', oandaSymbol: 'EUR_USD' },
  { slug: 'xag-usd-options', title: 'XAG/USD Options', category: 'options', tradingViewSymbol: 'OANDA:XAGUSD', oandaSymbol: 'XAG_USD' },
  { slug: 'gbp-usd-options', title: 'GBP/USD Options', category: 'options', tradingViewSymbol: 'FX:GBPUSD', oandaSymbol: 'GBP_USD' },
  { slug: 'usd-zar-options', title: 'USD/ZAR Options', category: 'options', tradingViewSymbol: 'FX:USDZAR' },
  { slug: 'usd-jpy-options', title: 'USD/JPY Options', category: 'options', tradingViewSymbol: 'FX:USDJPY', oandaSymbol: 'USD_JPY' },
  { slug: 'aud-usd-options', title: 'AUD/USD Options', category: 'options', tradingViewSymbol: 'FX:AUDUSD', oandaSymbol: 'AUD_USD' },
  { slug: 'usd-cad-options', title: 'USD/CAD Options', category: 'options', tradingViewSymbol: 'FX:USDCAD', oandaSymbol: 'USD_CAD' },
  { slug: 'nzd-usd-options', title: 'NZD/USD Options', category: 'options', tradingViewSymbol: 'FX:NZDUSD' },
  { slug: 'gbp-jpy-options', title: 'GBP/JPY Options', category: 'options', tradingViewSymbol: 'FX:GBPJPY', oandaSymbol: 'GBP_JPY' },
  { slug: 'usd-chf-options', title: 'USD/CHF Options', category: 'options', tradingViewSymbol: 'FX:USDCHF', oandaSymbol: 'USD_CHF' },
];

export const getInstrumentBySlug = (slug: string) => INSTRUMENTS.find(i => i.slug === slug);
