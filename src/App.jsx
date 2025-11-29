import './App.css'
import Agents from './Components/Agents/Agents';
import Banner from './Components/Banner/Banner';
import BestDeal from './Components/BestDeal/BestDeal';
import CalculateProperty from './Components/CalculateProperty/CalculateProperty';
import Footer from './Components/Footer/Footer';
import GotProperty from './Components/GotProperty/GotProperty';
import HousingMarket from './Components/HousingMarket/HousingMarket';
import Invest from './Components/Invest/Invest';
import Navbar from './Components/Navbar/Navbar';
import OurPartners from './Components/OurPartners/OurPartners';
import SellProperty from './Components/SellProperty/SellProperty';
import Services from './Components/Services/Services';

function App() {

  return (
    <>
      <Navbar />
      <Banner />
      <Services />
      <HousingMarket />
      <GotProperty />
      <CalculateProperty />
      <BestDeal />
      <Invest />
      <Agents />
      <SellProperty />
      <OurPartners />
      <Footer/>
    </>
  );
}

export default App
