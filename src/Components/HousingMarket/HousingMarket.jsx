import React from 'react'
import housingMarketImage from '../../assets/Images/housingMarket.png'
import { MdKeyboardArrowRight } from 'react-icons/md';
import bg from '../../assets/Images/bg.png'

const HousingMarket = () => {
  return (
    <>
      <section className="py-14">
        <div className="relative">
          <div className="absolute top-0 left-0 w-full">
            <img src={bg} alt="Background" className='w-full'/>
          </div>
          <div className="container">
            <div className="w-[85%] mx-auto">
              <div className="flex items-center">
                <div className="img">
                  <img src={housingMarketImage} alt="Housing Market Image" />
                </div>
                <div className="">
                  <div className="w-[430px]">
                    <h4 className="font-arial font-bold text-[32px] text-[#072135] pb-[18px]">
                      We are the best in the housing market
                    </h4>
                  </div>
                  <ul className="markeringList pb-[25px]">
                    <li>We are the leading authority in the housing market.</li>
                    <li>
                      When it comes to real estate, we are simply the best.
                    </li>
                    <li>
                      Our expertise and results make us the top choice in the
                      local housing market.
                    </li>
                    <li>
                      We stand out as the premier provider in residential real
                      estate sector.
                    </li>
                    <li>
                      For unparalleled service and results in housing market,
                      choose us.
                    </li>
                  </ul>
                  <button className="border border-[#38A9FF] rounded-sm py-[11px] ps-[15px] pe-[23px]">
                    <a
                      href=""
                      className="text-base text-[#38A9FF] font-arial font-bold "
                    >
                      Learn more
                    </a>
                    <MdKeyboardArrowRight className="inline-block text-[#38A9FF] text-xl font-bold ps-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HousingMarket