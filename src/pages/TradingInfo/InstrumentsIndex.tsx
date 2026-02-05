import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { INSTRUMENTS, InstrumentConfig } from './instrumentsConfig';

const groupBy = <K extends string, T extends Record<string, any>>(arr: T[], key: (t: T) => K) =>
  arr.reduce<Record<K, T[]>>((acc, item) => {
    const k = key(item);
    (acc[k] ||= []).push(item);
    return acc;
  }, {} as any);

const InstrumentsIndex: React.FC = () => {
  const groups = useMemo(() => groupBy(INSTRUMENTS, i => i.category), []);

  const renderGroup = (title: string, items: InstrumentConfig[]) => (
    <div className="mb-5" key={title}>
      <h4 className="fw-bold text-dark mb-3 text-capitalize">{title}</h4>
      <div className="row g-3">
        {items.map((it) => (
          <div className="col-6 col-md-4 col-lg-3" key={it.slug}>
            <Link to={`/instrument/${it.slug}`} className="text-decoration-none">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h6 className="card-title mb-1">{it.title}</h6>
                  <small className="text-muted">{it.tradingViewSymbol}</small>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="container py-5" style={{ minHeight: '80vh' }}>
      <h2 className="fw-bold mb-4">Markets</h2>
      {Object.entries(groups).map(([k, v]) => renderGroup(k, v))}
    </div>
  );
};

export default InstrumentsIndex;
