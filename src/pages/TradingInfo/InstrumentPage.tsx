import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AdvancedChart } from "react-tradingview-embed";
import "bootstrap/dist/css/bootstrap.min.css";
import { getInstrumentBySlug } from "./instrumentsConfig";

const InstrumentPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const instrument = slug ? getInstrumentBySlug(slug) : undefined;

  if (!instrument) {
    return (
      <div className="container py-5">
        <h3 className="text-danger">Instrument not found</h3>
        <button className="btn btn-secondary mt-3" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
    );
  }

  const canTrade = Boolean(instrument.oandaSymbol);

  return (
    <div style={{ background: "#f7fafc", minHeight: "100vh" }}>
      <div
        style={{
          display: "flex",
          height: "70vh",
          width: "100%",
          borderBottom: "2px solid #e2e8f0",
        }}
      >
        <div style={{ flexBasis: "70%", position: "relative" }}>
          <AdvancedChart
            widgetProps={{
              symbol: instrument.tradingViewSymbol,
              theme: "light",
              style: "1",
              locale: "en",
              autosize: false,
              width: "100%",
              height: "100%",
            }}
            widgetPropsAny={{
              style: {
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: "none",
              },
            }}
          />
        </div>

        <div
          style={{
            flexBasis: "30%",
            backgroundColor: "#ffffff",
            padding: "2rem",
            boxShadow: "0 0 15px rgba(0,0,0,0.08)",
            borderRadius: "0 0 0 12px",
            fontFamily: "Arial, sans-serif",
          }}
        >
          <h3 className="mb-4 fw-bold">{instrument.title}</h3>
          <p className="text-muted text-uppercase small mb-4">
            {instrument.category}
          </p>
          <div className="d-flex gap-3 mb-4">
            <button
              className="btn btn-success flex-grow-1"
              onClick={() =>
                navigate(
                  canTrade
                    ? `/dashboard?tab=trading&instrument=${instrument.oandaSymbol}&side=buy`
                    : `/dashboard?tab=trading`,
                )
              }
            >
              Buy
            </button>
            <button
              className="btn btn-danger flex-grow-1"
              onClick={() =>
                navigate(
                  canTrade
                    ? `/dashboard?tab=trading&instrument=${instrument.oandaSymbol}&side=sell`
                    : `/dashboard?tab=trading`,
                )
              }
            >
              Sell
            </button>
          </div>
          {!canTrade && (
            <div className="alert alert-warning p-2">
              Direct trading for this instrument is not enabled. Opening the
              trading dashboard.
            </div>
          )}
          {instrument.description && (
            <p className="mb-0" style={{ color: "#334155" }}>
              {instrument.description}
            </p>
          )}
        </div>
      </div>

      <div className="container py-5">
        <h4 className="fw-bold mb-3">About {instrument.title}</h4>
        <p className="text-secondary">
          Explore live charts and place trades directly from the  Vintageprimefx
          trading dashboard. Use risk management tools like stop-loss and
          take-profit to manage your positions effectively.
        </p>
      </div>
    </div>
  );
};

export default InstrumentPage;
