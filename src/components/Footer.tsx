import React from "react";

// Import placeholder images (replace with actual images when added)
import fxceliteLogo from "../assets/PipzoMarketLogo.png"; // Fallback for logo-white.png
import Mastercard from "../assets/mastercard.png"; // Add this file
import Visa from "../assets/visa.png"; // Add this file
import PayPal from "../assets/paypal.png"; // Add this file
import Skrill from "../assets/skrill.png"; // Add this file
import Neteller from "../assets/neteller.png"; // Add this file
import WireTransfer from "../assets/wire-transfer.png"; // Add this file
import PerfectMoney from "../assets/perfect-money.png"; // Add this file
import Boleto from "../assets/boleto.png"; // Add this file
import Facebook from "../assets/facebook.svg"; // Add this file
// import Youtube from "../assets/youtube.svg"; // Add this file
import Instagram from "../assets/instagram.svg"; // Add this file
import Twitter from "../assets/twitter.svg"; // Add this file
// import Linkedin from "../assets/linkedin.svg"; // Add this file
// import Telegram from "../assets/telegram.svg"; // Add this file
// import GooglePlay from "../assets/google-play.png"; // Add this file
// import AppStore from "../assets/app-store.png"; // Add this file

const Footer = () => {
  const paymentMethods = [
    { name: "paypal", src: PayPal },
   
  ];

  const socialPlatforms = [
    {
      name: "facebook",
      src: Facebook,
      href: "https://www.facebook.com/profile.php?id=61586456620414",
    },
    {
      name: "instagram",
      src: Instagram,
      href: "https://www.instagram.com/fxcelite/",
    },
    { name: "twitter", src: Twitter, href: "https://x.com/fxcelite" },
  ];

  const footerSections = [
    {
      heading: "Forex Trading",
      items: [
        { name: "What is Forex", href: "/WhatIsForex" },
        { name: "How to Trade Forex", href: "/HowToTradeForex" },
        { name: "Vanilla Options", href: "/VanillaOptions" },
      ],
    },
    {
      heading: "CFD Trading",
      items: [
        { name: "What Are CFDs", href: "/WhatAreCFDs" },
        { name: "Bonds & Treasuries", href: "/BondsAndTreasuries" },
        { name: "ETFs Trading", href: "/ETFsTrading" },
        { name: "Commodities Trading", href: "/HowToTradeCommodities" },
        { name: "Indices Trading", href: "/IndicesTrading" },
        { name: "Stock Trading", href: "/WhatAreStocks" },
        { name: "eBook", href: "/EbookDownload" },
      ],
    },
    {
      heading: "Trading Platforms",
      items: [
        { name: "WebTrader", href: "/WebTrader" },
        { name: " Vintageprimefx App", href: "/PipzoTradeApp" },
        { name: "Options Platform", href: "/AvaOptions" },
        { name: "MetaTrader 4", href: "/MetaTrader" },
        { name: "MetaTrader 5", href: "/TradeMT5" },
        { name: "Automated Trading", href: "/Algorithmic" },
        { name: "Mac Trading", href: "/MacTrading" },
        { name: "Social Trading", href: "/platforms/PIPZOSocialBanner" },
      ],
    },
    {
      heading: "Cryptocurrencies",
      items: [
        { name: "What Are Cryptocurrencies", href: "/Cryptocurrencies" },
        { name: "How to Trade", href: "/HowCrypto" },
        { name: "Bitcoin, Litecoin, Ripple", href: "/BitCoinPage" },
        { name: "Ethereum, Stellar", href: "/EthereumPage" },
        { name: "Chainlink, Uniswap, MIOTA", href: "/ChainlinkPage" },
      ],
    },
    
    {
      heading: "Company",
      items: [
        { name: "About Us", href: "/about" },
        { name: "Contact Us", href: "/ContactUs" },
        { name: "Terms of Service", href: "/RegulationTrustPage" },
      ],
    },
  ];

  return (
    <footer className="pt-5 text-white" style={{ backgroundColor: "#0b0b0c" }}>
      <div className="container">
        {/* Payment Methods */}
        <div className="text-center mb-5">
          <h5 className="fw-bold mb-3 text-light">Payment Methods</h5>
          <div className="d-flex justify-content-center flex-wrap gap-2">
            {paymentMethods.map((method, i) => (
              <img
                key={i}
                src={method.src}
                alt={method.name}
                height="39"
                className="footer-icon"
                style={{ maxWidth: "60px" }}
              />
            ))}
          </div>
        </div>

        {/* Footer Grid */}
        <div className="row g-4 mb-5">
          {footerSections.map((section, index) => (
            <div key={index} className="col-6 col-md-4 col-lg-2">
              <h6 className="text-success">{section.heading}</h6>
              <ul className="list-unstyled small text-light">
                {section.items.map((item, i) => (
                  <li key={i} className="mb-1">
                    <a
                      href={item.href}
                      className="text-light text-decoration-none hover:text-success"
                      style={{ transition: "color 0.2s" }}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="text-center text-secondary small py-4 border-top mt-5">
          <img
            src={fxceliteLogo}
            alt=" Vintageprimefx Logo"
            height="12"
            className="footer-icon me-2"
            style={{ maxWidth: "200px" }}
          />
          &copy; 2007–{new Date().getFullYear()} fxcelite Ltd. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
