import './App.css'
import Banner from './Components/Banner/Banner';
import BestDeal from './Components/BestDeal/BestDeal';
import CalculateProperty from './Components/CalculateProperty/CalculateProperty';
import GotProperty from './Components/GotProperty/GotProperty';
import HousingMarket from './Components/HousingMarket/HousingMarket';
import Invest from './Components/Invest/Invest';
import Navbar from './Components/Navbar/Navbar';
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
      <Invest/>
    </>
  );
}

export default App
