import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { ToastContainer } from "react-toastify";
import NavBar from "./components/Navbar";
import BottomTicker from "./components/BottomTicker";
import HomePage from "./pages/HomePage";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import WhatIsForex from "./pages/Products/Forex Trading/WhatIsForex";
import HowToTradeForex from "./pages/Products/Forex Trading/HowToTradeForex";
import VanillaOptions from "./pages/Products/Forex Trading/VanillaOptions";
import WhatAreCFDs from "./pages/Products/CFD Trading/WhatAreCFDs";
import HowToTradeCFDs from "./pages/Products/CFD Trading/HowToTradeCFDs";
import BondsAndTreasuries from "./pages/Products/CFD Trading/BondsAndTreasuries";
import ETFsTrading from "./pages/Products/CFD Trading/ETFsTrading";
import EbookDownload from "./pages/Products/CFD Trading/EbookDownload";
import WhatAreStocks from "./pages/Products/Stock Trading/WhatAreStocks";
import HowToTradeStocks from "./pages/Products/Stock Trading/HowToTradeStocks";
import HowToTradeCommodities from "./pages/Products/Commodities/HowToTradeCommodities";
import HowToTradeGold from "./pages/Products/Commodities/HowToTradeGold";
import HowToTradeOil from "./pages/Products/Commodities/HowToTradeOil";
import Energies from "./pages/Products/Commodities/Energies";
import PreciousMetals from "./pages/Products/Commodities/PreciousMetals";
import Agriculture from "./pages/Products/Agriculture Trading/Agriculture";
import IndicesTrading from "./pages/Products/Indices Trading/IndicesTrading";
import HowToTradeIndices from "./pages/Products/Indices Trading/HowToTradeIndices";
import VIXIndex from "./pages/Products/Indices Trading/VIXIndex";
import CoursePage from "./pages/Academy/CoursePage";
import StartPage from "./pages/Academy/StartPage";
import PlatformsPage from "./pages/Academy/PlatformsPage";
import FCCPage from "./pages/Academy/FCCpage";
import Introduction from "./pages/Academy/Introduction";
import TradingCourses from "./pages/Academy/TradingCourses";
import CoursesForBeginners from "./pages/Academy/CoursesForBeginners";
import AllCourses from "./pages/Academy/AllCourses";
import AvaOptions from "./pages/TradingPlatform/AvaOptions/AvaOptionsSection";
import WebTrader from "./pages/TradingPlatform/WebTrader/WebTraderBanner";
import PipzoTradeApp from "./pages/TradingPlatform/PipzoTradeApp/PipzoTradeApp";
import MacTrading from "./pages/TradingPlatform/MacTrading/MacTrading";
import MetaTrader from "./pages/TradingPlatform/MetaTrader/WhatIsMeta4Trader";
import GuardianAngel from "./pages/TradingPlatform/GuardianAngel/GuardianAngelBanner";
import ExpertAdvisors from "./pages/TradingPlatform/ExpertAdvisors/ExpertAdvisorsBanner";
import VPS from "./pages/TradingPlatform/VPS/VPSBanner";
import TradeMT5 from "./pages/TradingPlatform/TradeMT5/HowToTradeMT5Banner";
import Algorithmic from "./pages/TradingPlatform/Algorithmic/AlgorithmicBanner";
import PIPZOSocialBanner from "./pages/TradingPlatform/PIPZOSocialBanner/PIPZOSocialBanner";
import DupliTrade from "./pages/TradingPlatform/DupliTrade/DupliTrade";
import Capitalise from "./pages/TradingPlatform/Capitalise/Capitalise";
import Cryptocurrencies from "./pages/Cryptocurrencies/Crypto Basics/Cryptocurrencies";
import HowCrypto from "./pages/Cryptocurrencies/Crypto Basics/HowCrypto";
import CryptoETF from "./pages/Cryptocurrencies/Crypto Basics/CryptoETF";
import Bitcoin from "./pages/Bitcoin/Bitcoin";
import HowBitcoin from "./pages/Bitcoin/HowBitcoin";
import BitcoinETF from "./pages/Bitcoin/BitcoinETF";
import Login from "./components/login";
// import UserDashboard from "./components/UserDashboard";
// import ProtectedRoute from "./components/ProtectedRoute";
import Footer from "./components/Footer";
import ForexTradingCoursesPage from "./pages/Academy/ForexTradingCoursesPage";
import StockTradingCoursesPage from "./pages/Academy/StockTradingCoursesPage";
import BitCoinPage from "./pages/Cryptocurrencies/Top Coins/BitCoinPage";
import EthereumPage from "./pages/Cryptocurrencies/Top Coins/EthereumPage";
import RipplePage from "./pages/Cryptocurrencies/Top Coins/RipplePage";
import SolanaPage from "./pages/Cryptocurrencies/Top Coins/SolanaPage";
import DogecoinPage from "./pages/Cryptocurrencies/Top Coins/DogecoinPage";
import StellarPage from "./pages/Cryptocurrencies/More Cryptos/StellarPage";
import LitecoinPage from "./pages/Cryptocurrencies/More Cryptos/LitecoinPage";
import ChainlinkPage from "./pages/Cryptocurrencies/More Cryptos/ChainlinkPage";
import ShibaInuPage from "./pages/Cryptocurrencies/More Cryptos/ShibaInuPage";
import PolygonPage from "./pages/Cryptocurrencies/More Cryptos/PolygonPage";
import UniswapPage from "./pages/Cryptocurrencies/More Cryptos/UniswapPage";
import ChainlinkAndSMIPage from "./pages/TradingInfo/Indices/ChainlinkAndSMIPage";
import CrudeOilPage from "./pages/TradingInfo/Commodities/CrudeOilPage";
import ApplePage from "./pages/TradingInfo/Stocks/ApplePage";
import EurUsdPage from "./pages/TradingInfo/Forex pairs/EurUsdPage";
import US500Page from "./pages/TradingInfo/Options/US500Page";
import InstrumentsIndex from "./pages/TradingInfo/InstrumentsIndex";
import InstrumentPage from "./pages/TradingInfo/InstrumentPage";
import CurrencyTradingPage from "./pages/Education/Trading for Beginners/CurrencyTradingPage";
import HowtoTradeOnline from "./pages/Education/Trading for Beginners/HowtoTradeOnline";
import CopyTradingPage from "./pages/Education/Trading for Beginners/CopyTradingPage";
import ShortSellingPage from "./pages/Education/Trading for Beginners/ShortSellingPage";
import FinancialDerivativesPage from "./pages/Education/Trading for Beginners/FinancialDerivativesPage";
import TechnicalAnalysisIndicatorsStrategies from "./pages/Education/Trading Platforms Tutorials/TechnicalAnalysisIndicatorsStrategies";
import OrderTypes from "./pages/Education/Trading Platforms Tutorials/OrderTypes";
import OnlineTradingStrategies from "./pages/Education/Trading Platforms Tutorials/OnlineTradingStrategies";
import MarketTerms from "./pages/Education/Trading Platforms Tutorials/MarketTerms";
import LiveTradingWebinars from "./pages/Education/Webinars/LiveTradingWebinars";
import TradingRules from "./pages/Education/Webinars/TradingRules";
import Blog from "./pages/Education/Webinars/Blog";
import WhyChoosePipzomarket from "./pages/About/WhyChoosePipzomarket";
import Registration from "./components/register";
import About from "./components/about";
import RegulationTrustPage from "./pages/About/RegulationTrustPage";
import LeadershipTeam from "./pages/About/LeadershipTeam";
import DepositsWithdrawals from "./pages/About/DepositsWithdrawals";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <NavBar />
        <div id="app-root">
          <main className="page-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Registration />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/reset-password" element={<ResetPassword />} />
              {/* <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <UserDashboard />
                  </ProtectedRoute>
                }
              /> */}
              <Route path="/WhatIsForex" element={<WhatIsForex />} />
              <Route path="/HowToTradeForex" element={<HowToTradeForex />} />
              <Route path="/VanillaOptions" element={<VanillaOptions />} />
              <Route path="/WhatAreCFDs" element={<WhatAreCFDs />} />
              <Route path="/HowToTradeCFDs" element={<HowToTradeCFDs />} />
              <Route
                path="/BondsAndTreasuries"
                element={<BondsAndTreasuries />}
              />
              <Route path="/ETFsTrading" element={<ETFsTrading />} />
              <Route path="/EbookDownload" element={<EbookDownload />} />
              <Route path="/WhatAreStocks" element={<WhatAreStocks />} />
              <Route path="/HowToTradeStocks" element={<HowToTradeStocks />} />
              <Route
                path="/HowToTradeCommodities"
                element={<HowToTradeCommodities />}
              />
              <Route path="/HowToTradeGold" element={<HowToTradeGold />} />
              <Route path="/HowToTradeOil" element={<HowToTradeOil />} />
              <Route path="/Energies" element={<Energies />} />
              <Route path="/PreciousMetals" element={<PreciousMetals />} />
              <Route path="/Agriculture" element={<Agriculture />} />
              <Route path="/IndicesTrading" element={<IndicesTrading />} />
              <Route
                path="/HowToTradeIndices"
                element={<HowToTradeIndices />}
              />
              <Route path="/VIXIndex" element={<VIXIndex />} />
              <Route path="/CoursePage" element={<CoursePage />} />
              <Route path="/StartPage" element={<StartPage />} />
              <Route path="/PlatformsPage" element={<PlatformsPage />} />
              <Route path="/FCCPage" element={<FCCPage />} />
              <Route path="/Introduction" element={<Introduction />} />
              <Route path="/TradingCourses" element={<TradingCourses />} />
              <Route
                path="/CoursesForBeginners"
                element={<CoursesForBeginners />}
              />
              <Route path="/AllCourses" element={<AllCourses />} />
              <Route path="/WebTrader" element={<WebTrader />} />
              <Route path="/AvaOptions" element={<AvaOptions />} />
              <Route path="/PipzoTradeApp" element={<PipzoTradeApp />} />
              <Route path="/MacTrading" element={<MacTrading />} />
              <Route path="/MetaTrader" element={<MetaTrader />} />
              <Route path="/GuardianAngel" element={<GuardianAngel />} />
              <Route path="/ExpertAdvisors" element={<ExpertAdvisors />} />
              <Route path="/VPS" element={<VPS />} />
              <Route path="/TradeMT5" element={<TradeMT5 />} />
              <Route path="/Algorithmic" element={<Algorithmic />} />
              <Route
                path="/PIPZOSocialBanner"
                element={<PIPZOSocialBanner />}
              />
              <Route path="/DupliTrade" element={<DupliTrade />} />
              <Route path="/Capitalise" element={<Capitalise />} />
              <Route path="/Cryptocurrencies" element={<Cryptocurrencies />} />
              <Route path="/HowCrypto" element={<HowCrypto />} />
              <Route path="/CryptoETF" element={<CryptoETF />} />
              <Route path="/Bitcoin" element={<Bitcoin />} />
              <Route path="/HowBitcoin" element={<HowBitcoin />} />
              <Route path="/BitcoinETF" element={<BitcoinETF />} />
              <Route path="/Login" element={<Login />} />
              <Route
                path="/ForexTradingCoursesPage"
                element={<ForexTradingCoursesPage />}
              />
              <Route
                path="/StockTradingCoursesPage"
                element={<StockTradingCoursesPage />}
              />
              <Route path="/BitCoinPage" element={<BitCoinPage />} />
              <Route path="/EthereumPage" element={<EthereumPage />} />
              <Route path="/RipplePage" element={<RipplePage />} />
              <Route path="/SolanaPage" element={<SolanaPage />} />
              <Route path="/DogecoinPage" element={<DogecoinPage />} />
              <Route path="/StellarPage" element={<StellarPage />} />
              <Route path="/LitecoinPage" element={<LitecoinPage />} />
              <Route path="/StellarPage" element={<StellarPage />} />
              <Route path="/ChainlinkPage" element={<ChainlinkPage />} />
              <Route path="/ShibaInuPage" element={<ShibaInuPage />} />
              <Route path="/UniswapPage" element={<UniswapPage />} />
              <Route path="/PolygonPage" element={<PolygonPage />} />
              <Route
                path="/ChainlinkAndSMIPage"
                element={<ChainlinkAndSMIPage />}
              />
              <Route path="/CrudeOilPage" element={<CrudeOilPage />} />
              <Route path="/ApplePage" element={<ApplePage />} />
              <Route path="/EurUsdPage" element={<EurUsdPage />} />
              <Route path="/US500Page" element={<US500Page />} />
              {/* Markets index and dynamic instrument routes */}
              <Route path="/markets" element={<InstrumentsIndex />} />
              <Route path="/instrument/:slug" element={<InstrumentPage />} />
              <Route path="/HowtoTradeOnline" element={<HowtoTradeOnline />} />
              <Route
                path="/CurrencyTradingPage"
                element={<CurrencyTradingPage />}
              />
              <Route path="/CopyTradingPage" element={<CopyTradingPage />} />
              <Route path="/ShortSellingPage" element={<ShortSellingPage />} />
              <Route
                path="/FinancialDerivativesPage"
                element={<FinancialDerivativesPage />}
              />
              <Route
                path="/TechnicalAnalysisIndicatorsStrategies"
                element={<TechnicalAnalysisIndicatorsStrategies />}
              />
              <Route path="/OrderTypes" element={<OrderTypes />} />
              <Route
                path="/OnlineTradingStrategies"
                element={<OnlineTradingStrategies />}
              />
              <Route path="/MarketTerms" element={<MarketTerms />} />

              <Route
                path="/LiveTradingWebinars"
                element={<LiveTradingWebinars />}
              />

              <Route path="/TradingRules" element={<TradingRules />} />
              <Route path="/Blog" element={<Blog />} />
              <Route path="/register" element={<Registration />} />
              <Route path="/about" element={<About />} />
              <Route
                path="/WhyChoosePipzomarket"
                element={<WhyChoosePipzomarket />}
              />
              <Route
                path="/RegulationTrustPage"
                element={<RegulationTrustPage />}
              />
              <Route path="/LeadershipTeam" element={<LeadershipTeam />} />
              <Route
                path="/DepositsWithdrawals"
                element={<DepositsWithdrawals />}
              />
            </Routes>
          </main>
          <Footer />
          <BottomTicker />
        </div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </Router>
    </AuthProvider>
  );
};

export default App;
