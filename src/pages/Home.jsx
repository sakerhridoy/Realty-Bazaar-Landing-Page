import React from 'react';
import Banner from '../Components/Banner/Banner';
import Services from '../Components/Services/Services';
import HousingMarket from '../Components/HousingMarket/HousingMarket';
import GotProperty from '../Components/GotProperty/GotProperty';
import CalculateProperty from '../Components/CalculateProperty/CalculateProperty';
import BestDeal from '../Components/BestDeal/BestDeal';
import Invest from '../Components/Invest/Invest';
import Agents from '../Components/Agents/Agents';
import SellProperty from '../Components/SellProperty/SellProperty';
import OurPartners from '../Components/OurPartners/OurPartners';

const Home = () => {
  return (
    <>
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
    </>
  );
};

export default Home;

