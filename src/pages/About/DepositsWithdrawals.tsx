import React from "react";
const DepositsWithdrawals = () => {
  return (
    <div>
      {/* HERO SECTION */}
      <section
        className="text-white text-center position-relative"
        style={{
          backgroundImage: "url(https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "60vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          className="position-absolute w-100 h-100"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            top: 0,
            left: 0,
            zIndex: 1,
          }}
        ></div>

        <div className="container position-relative z-2 px-3">
          <h2 className="fw-bold display-5 mb-3">
            Deposits and Withdrawals with  Vintageprimefx
          </h2>
          <p className="lead mx-auto" style={{ maxWidth: "800px" }}>
            Fast, secure, and globally accessible transactions. Whether you're
            depositing or withdrawing,  Vintageprimefx puts you in control.
          </p>
        </div>
      </section>

      {/* MAIN CONTAINER */}
      <div className="container py-5">
        {/* REUSABLE SECTION BLOCK */}
        {[
          {
            title: "Simple Deposits",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            items: [
              {
                label: "Multiple Options",
                desc: "Pay with credit/debit card, e-wallet, bank transfer, and more.",
              },
              {
                label: "Immediate Processing",
                desc: "Most deposit methods are instant.",
              },
              {
                label: "No Extra Fees",
                desc: "What you deposit is what you get — no surprises.",
              },
            ],
            reverse: false,
            note: "We accept all major payment methods globally and locally, so traders from anywhere can deposit with ease.",
          },
          {
            title: "Fast Withdrawals, On Your Own Terms",
            image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            items: [
              {
                label: "Easy Requests",
                desc: "Just a few clicks to initiate a withdrawal.",
              },
              {
                label: "Quick Turnaround",
                desc: "Most withdrawals processed in 24–48 hours.",
              },
              {
                label: "Same Method Return",
                desc: "Receive money the same way you deposited it.",
              },
            ],
            reverse: true,
            note: "We believe your money is yours — accessing it should be simple and stress-free.",
          },
          {
            title: "Very Safe",
            image: "https://images.unsplash.com/photo-1542744095-291d1f67b221?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
            items: [
              { label: "Encrypted Gateways", desc: "for all transactions" },
              {
                label: "Secure User Authentication",
                desc: "ensures your identity and data stay protected",
              },
              {
                label: "Global Financial Compliance",
                desc: "is always followed",
              },
            ],
            reverse: false,
            note: "Every transaction is protected with advanced encryption and fraud monitoring.",
          },
          {
            title: "Policies That Are Easy to Understand",
            image: "https://images.unsplash.com/photo-1594322463847-81e2bd5f9888?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
            items: [
              {
                label: "Clear Limits",
                desc: "Transparent transaction amounts",
              },
              {
                label: "Confirmed Accounts Only",
                desc: "Prevents abuse, adds safety",
              },
              {
                label: "Real-Time Updates",
                desc: "Track everything on your dashboard",
              },
            ],
            reverse: true,
          },
          {
            title: "Accessibility All Around the Globe",
            image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
            items: [],
            reverse: false,
            note: "We work with customers from across the world — supporting various currencies, financial systems, and regions. No matter where you're located, it's easier than ever to fund or withdraw from your trading account.",
          },
        ].map((section, index) => (
          <div
            key={index}
            className={`row align-items-center mb-5 rounded-4 shadow-sm p-4 ${section.reverse ? "flex-md-row-reverse" : ""} bg-white`}
          >
            <div className="col-md-6 mb-4 mb-md-0">
              <h4 className="text-success fw-bold mb-3">{section.title}</h4>
              <ul className="list-unstyled text-muted">
                {section.items.map((item, idx) => (
                  <li className="mb-2" key={idx}>
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    <strong>{item.label}:</strong> {item.desc}
                  </li>
                ))}
              </ul>
              {section.note && (
                <p className="text-muted mt-3">{section.note}</p>
              )}
            </div>
            <div className="col-md-6 text-center">
              <img
                src={section.image}
                alt={section.title}
                className="img-fluid rounded-3 shadow-sm"
                style={{ maxHeight: "280px" }}
              />
            </div>
          </div>
        ))}

        {/* FINAL REASON SECTION */}
        <div className="text-center bg-white py-5 px-3 rounded-4 shadow-sm">
          <h4 className="text-dark fw-bold mb-4">
            Why Traders Use <span className="text-success"> Vintageprimefx</span>
          </h4>

          <div className="row justify-content-center g-3 text-muted">
            {[
              "Reliable Processing",
              "Global Compliance",
              "Trusted by Thousands",
              "24/7 Transaction Support",
            ].map((point, i) => (
              <div key={i} className="col-12 col-sm-6 col-md-3">
                <div className="bg-light rounded-3 py-3 px-3 h-100 d-flex align-items-center justify-content-center shadow-sm">
                  <span className="text-success me-2 fs-5">✔</span>
                  <span className="fw-medium">{point}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepositsWithdrawals;
