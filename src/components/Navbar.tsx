import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LOGOPIP from "../assets/Logo.png";
import { useAuth } from "../context/useAuth";

// --- Embedded Styles for the new design ---
const customStyles = `
  /* --- BASE STYLES --- */
  .navbar-custom {
    background: linear-gradient(90deg, #0b1120 0%, #1e293b 100%);
    border-bottom: 1px solid rgba(255,255,255,0.1);
  }
  
  .nav-link-custom {
    color: #e2e8f0 !important;
    font-size: 0.9rem;
    padding: 0.5rem 0.875rem !important;
    transition: all 0.3s ease;
    position: relative;
    font-weight: 500;
  }
  
  .nav-link-custom:hover, .nav-link-custom[aria-expanded="true"] {
    color: #4ade80 !important; /* Green accent */
  }

  /* Animated underline effect (Desktop Only) */
  @media (min-width: 992px) {
    .nav-link-custom::after {
      content: '';
      position: absolute;
      width: 0;
      height: 2px;
      bottom: 0;
      left: 50%;
      background-color: #4ade80;
      transition: all 0.3s ease;
      transform: translateX(-50%);
    }
    .nav-link-custom:hover::after {
      width: 80%;
    }
  }

  /* --- MEGA MENU BASE --- */
  .menu-heading {
    color: #198754;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 0.75rem;
    letter-spacing: 1px;
    margin-bottom: 0.75rem;
    padding-bottom: 0.25rem;
    border-bottom: 1px solid #eee;
  }

  .dropdown-item-custom {
    color: white;
    font-size: 0.9rem;
    padding: 6px 12px;
    border-radius: 6px;
    transition: all 0.2s ease;
    display: block;
    text-decoration: none;
  }

  .dropdown-item-custom:hover {
    background-color: rgb(15, 168, 74); 
    color:white;
    padding-left: 16px; 
  }

  /* --- RESPONSIVE LOGIC --- */

  /* DESKTOP STYLES (lg and up) */
  @media (min-width: 992px) {
    /* Make parent relative for positioning context if needed, 
       but we use position-static on the LI for full width */
    .hover-dropdown.position-static {
      position: static !important;
    }

    .mega-menu-custom {
      position: absolute;
      left: 0;
      right: 0;
      width: 100%;
      top: 100%;
      margin-top: 0;
      border-top: 4px solid #198754;
      border-radius: 0 0 8px 8px;
      animation: fadeIn 0.3s ease-in-out;
      background-color: rgb(38, 63, 47);
      box-shadow: 0 1rem 3rem rgba(0,0,0,0.175);
      border: none;
    }
  }

  /* MOBILE/TABLET STYLES (Below lg) */
  @media (max-width: 991.98px) {
    .navbar-collapse {
      background: #0f172a; /* Match navbar dark theme */
      max-height: 90vh; /* Prevent scrolling body */
      overflow-y: auto; /* Internal scroll */
      padding-bottom: 2rem;
    }

    /* Reset Mega Menu to look like a normal accordion */
    .mega-menu-custom {
      position: static;
      width: 100%;
      box-shadow: none;
      border: none;
      background-color: rgba(255, 255, 255, 0.03) !important; /* Slight overlay */
      padding: 0 1rem 1rem 1rem !important;
      margin-top: 0;
    }

    /* Change text colors for mobile dark mode */
    .menu-heading {
      color: #86efac; /* Lighter green for dark bg */
      border-bottom: 1px solid rgba(255,255,255,0.1);
      margin-top: 1.5rem;
    }

    .dropdown-item-custom {
      color: #cbd5e1; /* Light gray text */
      padding: 10px 0;
    }

    .dropdown-item-custom:hover {
      background-color: transparent;
      color: #4ade80;
      padding-left: 5px;
    }

    /* Hide the animated line on mobile */
    .nav-link-custom::after {
      display: none;
    }
  }

  /* --- BUTTONS --- */
  .btn-login {
    color: #fff;
    border: 1px solid rgba(255,255,255,0.3);
    border-radius: 50px;
    transition: all 0.3s;
  }
  .btn-login:hover {
    background-color: rgba(255,255,255,0.1);
    border-color: #fff;
    color: #fff;
  }

  .btn-register {
    background: linear-gradient(135deg, #198754 0%, #15803d 100%);
    border: none;
    border-radius: 50px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;
  }
  .btn-register:hover {
    transform: translateY(-1px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    background: linear-gradient(135deg, #16a34a 0%, #166534 100%);
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const Navbar: React.FC = () => {
  const { isAuthenticated, logout } = useAuth();
  const [isAnyDropdownOpen, setIsAnyDropdownOpen] = useState(false);

  // --- LOGIC: Hover Dropdowns (Only active on Desktop > 992px) ---
  useEffect(() => {
    // We strictly guard this logic for desktops
    if (window.innerWidth < 992) return;

    const dropdowns = document.querySelectorAll(".nav-item.hover-dropdown");
    let closeTimeout: ReturnType<typeof setTimeout> | null = null;
    let currentlyOpen: Element | null = null;

    dropdowns.forEach((dropdown) => {
      const menu = dropdown.querySelector(".dropdown-menu");

      const handleMouseEnter = () => {
        if (window.innerWidth < 992) return; // Double check inside event
        if (closeTimeout) {
          clearTimeout(closeTimeout);
          closeTimeout = null;
        }

        if (currentlyOpen && currentlyOpen !== dropdown) {
          const openMenu = currentlyOpen.querySelector(".dropdown-menu");
          currentlyOpen.classList.remove("show");
          openMenu?.classList.remove("show");
        }

        dropdown.classList.add("show");
        menu?.classList.add("show");
        currentlyOpen = dropdown;
        setIsAnyDropdownOpen(true);
      };

      const handleMouseLeave = () => {
        if (window.innerWidth < 992) return;
        closeTimeout = setTimeout(() => {
          dropdown.classList.remove("show");
          menu?.classList.remove("show");
          if (currentlyOpen === dropdown) {
            currentlyOpen = null;
          }
          setIsAnyDropdownOpen(false);
        }, 300); // Reduced delay slightly for snappier feel
      };

      dropdown.addEventListener("mouseenter", handleMouseEnter);
      dropdown.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      dropdowns.forEach((dropdown) => {
        // Cloning removes listeners efficiently
        dropdown.replaceWith(dropdown.cloneNode(true));
      });
      if (closeTimeout) clearTimeout(closeTimeout);
    };
  }, []);

  // --- LOGIC: Mobile Toggler & Backdrop ---
  useEffect(() => {
    const toggler = document.querySelector(".navbar-toggler");
    const collapse = document.getElementById("mainNavbar");
    const contentWrapper = document.getElementById("app-root");

    // Handle blur effect on desktop only
    if (contentWrapper) {
        if (isAnyDropdownOpen && window.innerWidth >= 992) {
            contentWrapper.classList.add("blur-backdrop");
        } else {
            contentWrapper.classList.remove("blur-backdrop");
        }
    }

    // Cleanup logic if needed
    return () => {};
  }, [isAnyDropdownOpen]);

  return (
    <>
      <style>{customStyles}</style>
      <nav className="navbar navbar-expand-lg navbar-dark navbar-custom shadow-sm sticky-top py-0">
        <div className="container justify-content-between align-items-center">
          
          {/* Brand Logo */}
          <a className="navbar-brand d-flex align-items-center py-0" href="/">
            <img
              src={LOGOPIP}
              alt="VintagePrimeFX"
              style={{ height: "auto", width: "100px", maxHeight: "80px" }}
              className="img-fluid"
            />
          </a>

          {/* Mobile Toggle Button */}
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
            aria-controls="mainNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mainNavbar">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center gap-1">
              
              {/* --- Products Dropdown --- */}
              <li className="nav-item dropdown hover-dropdown position-static">
                <a
                  className="nav-link nav-link-custom dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Products
                </a>
                <div className="dropdown-menu mega-menu mega-menu-custom">
                  <div className="container">
                    <div className="row g-4">
                      {/* Column 1 */}
                      <div className="col-lg-2 col-12">
                        <h6 className="menu-heading">Forex Trading</h6>
                        <a className="dropdown-item dropdown-item-custom" href="WhatIsForex">What is Forex</a>
                        <a className="dropdown-item dropdown-item-custom" href="HowToTradeForex">How to Trade Forex</a>
                        <a className="dropdown-item dropdown-item-custom" href="VanillaOptions">Vanilla Options</a>
                      </div>
                      {/* Column 2 */}
                      <div className="col-lg-2 col-12">
                        <h6 className="menu-heading">CFD Trading</h6>
                        <a className="dropdown-item dropdown-item-custom" href="WhatAreCFDs">What are CFDs</a>
                        <a className="dropdown-item dropdown-item-custom" href="HowToTradeCFDs">How to Trade CFDs</a>
                        <a className="dropdown-item dropdown-item-custom" href="BondsAndTreasuries">Bonds & Treasuries</a>
                        <a className="dropdown-item dropdown-item-custom" href="ETFsTrading">ETFs Trading</a>
                        <a className="dropdown-item dropdown-item-custom" href="EbookDownload">eBook</a>
                      </div>
                      {/* Column 3 */}
                      <div className="col-lg-2 col-12">
                        <h6 className="menu-heading">Stock Trading</h6>
                        <a className="dropdown-item dropdown-item-custom" href="WhatAreStocks">What are Stocks</a>
                        <a className="dropdown-item dropdown-item-custom" href="HowToTradeStocks">How to Trade Stocks</a>
                      </div>
                      {/* Column 4 */}
                      <div className="col-lg-2 col-12">
                        <h6 className="menu-heading">Commodities</h6>
                        <a className="dropdown-item dropdown-item-custom" href="HowToTradeCommodities">Trade Commodities</a>
                        <a className="dropdown-item dropdown-item-custom" href="HowToTradeGold">Trade Gold</a>
                        <a className="dropdown-item dropdown-item-custom" href="HowToTradeOil">Trade Oil</a>
                        <a className="dropdown-item dropdown-item-custom" href="Energies">Energies</a>
                        <a className="dropdown-item dropdown-item-custom" href="PreciousMetals">Precious Metals</a>
                        <a className="dropdown-item dropdown-item-custom" href="Agriculture">Agriculture</a>
                      </div>
                      {/* Column 5 */}
                      <div className="col-lg-2 col-12">
                        <h6 className="menu-heading">Indices</h6>
                        <a className="dropdown-item dropdown-item-custom" href="IndicesTrading">What Are Indices</a>
                        <a className="dropdown-item dropdown-item-custom" href="HowToTradeIndices">How to Trade Indices</a>
                        <a className="dropdown-item dropdown-item-custom" href="VIXIndex">VIX Index</a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              {/* --- Trading Platforms Dropdown --- */}
              <li className="nav-item dropdown hover-dropdown position-static">
                <a
                  className="nav-link nav-link-custom dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Platforms
                </a>
                <div className="dropdown-menu mega-menu mega-menu-custom">
                  <div className="container">
                    <div className="row g-4">
                      <div className="col-lg-3 col-12">
                        <h6 className="menu-heading">Web & Apps</h6>
                        <a className="dropdown-item dropdown-item-custom" href="WebTrader">WebTrader</a>
                        <a className="dropdown-item dropdown-item-custom" href="AvaOptions">VintagePrimeFX Options</a>
                        <a className="dropdown-item dropdown-item-custom" href="PipzoTradeApp">VintagePrimeFX App</a>
                        <a className="dropdown-item dropdown-item-custom" href="MacTrading">Mac Trading</a>
                      </div>
                      <div className="col-lg-3 col-12">
                        <h6 className="menu-heading">MetaTrader 4</h6>
                        <a className="dropdown-item dropdown-item-custom" href="MetaTrader">What is MetaTrader</a>
                        <a className="dropdown-item dropdown-item-custom" href="GuardianAngel">Guardian Angel</a>
                        <a className="dropdown-item dropdown-item-custom" href="ExpertAdvisors">Expert Advisors</a>
                        <a className="dropdown-item dropdown-item-custom" href="VPS">VPS</a>
                      </div>
                      <div className="col-lg-3 col-12">
                        <h6 className="menu-heading">MetaTrader 5</h6>
                        <a className="dropdown-item dropdown-item-custom" href="TradeMT5">Trade with MT5</a>
                        <a className="dropdown-item dropdown-item-custom" href="Algorithmic">Algorithmic Trading</a>
                      </div>
                      <div className="col-lg-3 col-12">
                        <h6 className="menu-heading">Automated</h6>
                        <a className="dropdown-item dropdown-item-custom" href="PIPZOSocialBanner">VintagePrimeFX Social</a>
                        <a className="dropdown-item dropdown-item-custom" href="DupliTrade">DupliTrade</a>
                        <a className="dropdown-item dropdown-item-custom" href="Capitalise">Capitalise.ai</a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              {/* --- Cryptocurrencies Dropdown --- */}
              <li className="nav-item dropdown hover-dropdown position-static">
                <a
                  className="nav-link nav-link-custom dropdown-toggle"
                  href="Cryptocurrencies"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Crypto
                </a>
                <div className="dropdown-menu mega-menu mega-menu-custom">
                  <div className="container">
                    <div className="row g-4">
                      <div className="col-lg-3 col-12">
                        <h6 className="menu-heading">Basics</h6>
                        <a className="dropdown-item dropdown-item-custom" href="Cryptocurrencies">What Are Cryptos</a>
                        <a className="dropdown-item dropdown-item-custom" href="HowCrypto">How to Trade Crypto</a>
                        <a className="dropdown-item dropdown-item-custom" href="CryptoETF">Crypto ETFs</a>
                        <div className="mt-4">
                            <h6 className="menu-heading">Bitcoin</h6>
                            <a className="dropdown-item dropdown-item-custom" href="Bitcoin">What is Bitcoin</a>
                            <a className="dropdown-item dropdown-item-custom" href="HowBitcoin">How to Trade Bitcoin</a>
                            <a className="dropdown-item dropdown-item-custom" href="BitcoinETF">Bitcoin ETFs</a>
                        </div>
                      </div>
                      <div className="col-lg-3 col-12">
                        <h6 className="menu-heading">Top Coins</h6>
                        <a className="dropdown-item dropdown-item-custom" href="BitCoinPage">Bitcoin</a>
                        <a className="dropdown-item dropdown-item-custom" href="EthereumPage">Ethereum</a>
                        <a className="dropdown-item dropdown-item-custom" href="RipplePage">Ripple</a>
                        <a className="dropdown-item dropdown-item-custom" href="SolanaPage">Solana</a>
                        <a className="dropdown-item dropdown-item-custom" href="DogecoinPage">Dogecoin</a>
                      </div>
                      <div className="col-lg-3 col-12">
                        <h6 className="menu-heading">Altcoins</h6>
                        <a className="dropdown-item dropdown-item-custom" href="StellarPage">Stellar Lumens</a>
                        <a className="dropdown-item dropdown-item-custom" href="LitecoinPage">Litecoin</a>
                        <a className="dropdown-item dropdown-item-custom" href="ChainlinkPage">Chainlink</a>
                        <a className="dropdown-item dropdown-item-custom" href="ShibaInuPage">Shiba Inu</a>
                        <a className="dropdown-item dropdown-item-custom" href="UniswapPage">Uniswap</a>
                        <a className="dropdown-item dropdown-item-custom" href="PolygonPage">Polygon</a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              {/* --- Education Dropdown --- */}
              <li className="nav-item dropdown hover-dropdown position-static">
                <a
                    className="nav-link nav-link-custom dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                >
                    Education
                </a>
                <div className="dropdown-menu mega-menu mega-menu-custom">
                    <div className="container">
                        <div className="row g-4">
                            <div className="col-lg-3 col-12">
                                <h6 className="menu-heading">Beginners</h6>
                                <a className="dropdown-item dropdown-item-custom" href="HowtoTradeOnline">How to Trade Online</a>
                                <a className="dropdown-item dropdown-item-custom" href="CurrencyTradingPage">Currency Trading</a>
                                <a className="dropdown-item dropdown-item-custom" href="CopyTradingPage">Copy Trading</a>
                                <a className="dropdown-item dropdown-item-custom" href="ShortSellingPage">Short Selling</a>
                                <a className="dropdown-item dropdown-item-custom" href="FinancialDerivativesPage">Financial Derivatives</a>
                            </div>
                            <div className="col-lg-3 col-12">
                                <h6 className="menu-heading">Tutorials</h6>
                                <a className="dropdown-item dropdown-item-custom" href="TechnicalAnalysisIndicatorsStrategies">Technical Indicators</a>
                                <a className="dropdown-item dropdown-item-custom" href="OrderTypes">Order Types</a>
                                <a className="dropdown-item dropdown-item-custom" href="OnlineTradingStrategies">Trading Strategies</a>
                                <a className="dropdown-item dropdown-item-custom" href="MarketTerms">Market Terms</a>
                            </div>
                            <div className="col-lg-3 col-12">
                                <h6 className="menu-heading">Resources</h6>
                                <a className="dropdown-item dropdown-item-custom" href="LiveTradingWebinars">Economic Indicators</a>
                                <a className="dropdown-item dropdown-item-custom" href="TradingRules">Trading Rules</a>
                                <a className="dropdown-item dropdown-item-custom" href="Blog">Blog</a>
                            </div>
                        </div>
                    </div>
                </div>
              </li>

               <li className="nav-item dropdown hover-dropdown position-static">
                <a className="nav-link nav-link-custom dropdown-toggle" href="/about" role="button" data-bs-toggle="dropdown">
                  About
                </a>
                <div className="dropdown-menu mega-menu mega-menu-custom">
                    <div className="container">
                        <div className="row g-4">
                            <div className="col-lg-4 col-12">
                                <h6 className="menu-heading">Company</h6>
                                <a className="dropdown-item dropdown-item-custom" href="VintagePrimeFXReviews">Reviews</a>
                                <a className="dropdown-item dropdown-item-custom" href="WhyChoosePipzomarket">Why Us?</a>
                                <a className="dropdown-item dropdown-item-custom" href="RegulationTrustPage">Regulation</a>
                                <a className="dropdown-item dropdown-item-custom" href="LeadershipTeam">Management</a>
                            </div>
                            <div className="col-lg-4 col-12">
                                <h6 className="menu-heading">Support</h6>
                                <a className="dropdown-item dropdown-item-custom" href="/about">About</a>
                                <a className="dropdown-item dropdown-item-custom" href="#">Contact Us</a>
                                <a className="dropdown-item dropdown-item-custom" href="DepositsWithdrawals">Deposits & Withdrawals</a>
                                <a className="dropdown-item dropdown-item-custom" href="#">Interest Rates</a>
                            </div>
                        </div>
                    </div>
                </div>
              </li>
            </ul>

            {/* --- Auth Section --- */}
            <div className="d-flex align-items-center gap-3 ms-lg-4 mt-4 mt-lg-0 pb-3 pb-lg-0">
              {isAuthenticated ? (
                <>
                  <Link
                    to="/dashboard"
                    className="text-decoration-none text-white fw-semibold hover-opacity"
                    style={{ fontSize: '0.95rem' }}
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={logout}
                    className="btn btn-register text-white px-4 py-2 fw-semibold"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="https://trade.VintagePrimeFX.com/login"
                    className="btn btn-login px-4 py-2 fw-semibold text-decoration-none"
                  >
                    Login
                  </Link>
                  <Link
                    to="https://trade.VintagePrimeFX.com/register"
                    className="btn btn-register text-white px-4 py-2 fw-semibold text-decoration-none"
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;