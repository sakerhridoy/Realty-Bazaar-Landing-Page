import './App.css'
import Banner from './Components/Banner/Banner';
import HousingMarket from './Components/HousingMarket/HousingMarket';
import Navbar from './Components/Navbar/Navbar';
import Services from './Components/Services/Services';

function App() {

  return (
    <>
      <Navbar />
      <Banner />
      <Services />
      <HousingMarket/>
    </>
  );
}

export default App
