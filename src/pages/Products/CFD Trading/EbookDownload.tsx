import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const EbookDownload: React.FC = () => {
  return (
    <>
      <section
        className="text-white d-flex align-items-center"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.45)), url(/assets/forex-banner.jpg)',
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "60vh",
          fontFamily: "Segoe UI, sans-serif",
        }}
      >
        <div className="container text-center">
          <h1 className="fw-bold display-4">
            Every Great Journey Starts With A <span className="text-warning">Great Guide</span>
          </h1>
          <p className="lead mb-4">
            The AvaTrade Complete eBook will be that guide for you.
          </p>
          <a href="#ebook-form" className="btn btn-warning fw-semibold px-4 py-2 rounded-pill shadow">
            Get The eBook
          </a>
        </div>
      </section>

      <section
        id="ebook-form"
        className="py-5 text-light"
        style={{ background: "linear-gradient(to bottom right, #000000, #1a1a1a)", fontFamily: "Segoe UI, sans-serif" }}
      >
        <div className="container">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-8">
              <h2 className="fw-bold mb-3" style={{ color: "#00BFA6" }}>
                Download The Ultimate Guide to CFD Trading
              </h2>
              <p className="lead text-light">
                We are confident you will find it easy-to-understand and enjoyable to read, no matter what your level of trading.
              </p>
              <ul className="list-unstyled text-start mt-4">
                <li>✅ Financial Markets explained</li>
                <li>✅ Rules of Trading</li>
                <li>✅ Trading Strategies</li>
                <li>✅ Tips for Successful Trading</li>
              </ul>
              <p className="mt-4">Now fill out the form and take the first step on your exciting journey, with AvaTrade by your side.</p>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-md-6">
              <form className="bg-dark p-4 rounded shadow">
                <div className="mb-3">
                  <label className="form-label text-white">First Name</label>
                  <input type="text" className="form-control" placeholder="Enter your first name" required />
                </div>
                <div className="mb-3">
                  <label className="form-label text-white">Last Name</label>
                  <input type="text" className="form-control" placeholder="Enter your last name" required />
                </div>
                <div className="mb-3">
                  <label className="form-label text-white">Email</label>
                  <input type="email" className="form-control" placeholder="Enter your email" required />
                </div>
                <div className="form-check mb-3">
                  <input type="checkbox" className="form-check-input" id="newsletter" />
                  <label className="form-check-label text-white" htmlFor="newsletter">
                    I would like to receive newsletters, special promotions messages and updates
                  </label>
                </div>
                <div className="form-check mb-4">
                  <input type="checkbox" className="form-check-input" id="terms" required />
                  <label className="form-check-label text-white" htmlFor="terms">
                    I have read, understood and accepted the <a href="#" className="text-warning">Terms</a> and the <a href="#" className="text-warning">Privacy Policy</a>
                  </label>
                </div>
                <button type="submit" className="btn btn-warning w-100 fw-semibold">
                  Get The Full eBook
                </button>
              </form>
            </div>
          </div>

          <div className="mt-5">
            <h4 className="fw-bold text-center mb-4" style={{ color: "#00BFA6" }}>Highlights of the eBook</h4>
            <div className="row g-4">
              {["It is crucial for traders thinking about trading the financial markets, to obtain some knowledge first. This way you will be able to identify trading opportunities and make informed trading choices.",
                "Timing is critical and we will teach you how to time the markets, when to anticipate to take profit and when to close a trade.",
                "Read on to learn how you can use the news for fundamental trading and implement technical analysis to help you increase your trading advantage.",
              ].map((quote, idx) => (
                <div className="col-md-4" key={idx}>
                  <div className="p-4 rounded-4 h-100 shadow-sm" style={{ backgroundColor: "rgba(255, 255, 255, 0.05)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.1)" }}>
                    <p className="small text-light mb-0">"{quote}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EbookDownload;
