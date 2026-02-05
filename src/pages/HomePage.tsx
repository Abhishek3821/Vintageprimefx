
import TickerPanel from "../components/LandingPage";
import TradingDashboard from "../components/TradingDashboard";
import MobilePlatforms from "../components/MobilePlatform";
import TradingPlatforms from "../components/TradingPlatform";
import TrustSection from "../components/TrustSection";
import Awards from "../components/Awards";
import KnowledgeSection from "../components/KnowledgeSection";
import WhyDifferent from "../components/WhyDifferent";
import PartnerInTrade from "../components/PartnerInTrade";


const App: React.FC = () => {
  return (
    <>
 
      <TickerPanel/>
      <TradingDashboard/>
      <MobilePlatforms/>
      <TradingPlatforms/>
      <TrustSection/>
      <Awards/>
      <KnowledgeSection/>
      <WhyDifferent/>
      <PartnerInTrade/>     
    </>
  );
};

export default App;
