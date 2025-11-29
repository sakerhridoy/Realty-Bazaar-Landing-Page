import React from 'react'
import service1 from '../../assets/Images/service1.svg'
import service2 from '../../assets/Images/service2.svg'
import service3 from '../../assets/Images/service3.svg'
import service4 from '../../assets/Images/service4.svg'
import stars from '../../assets/Images/stars.svg'

const Services = () => {
  return (
    <>
      <section className="py-[95px] ">
        <div className="container">
          <div className="headline text-center">
            <h2 className="font-arial font-bold text-[35px] text-[#38A9FF] pb-8">
              Explore property related services
            </h2>
          </div>
          <div className="grid grid-cols-4 gap-[30px] pb-[31px]">
            <div className="serviceItem py-[27px] ps-[18px] pe-7 rounded-xl border border-[#E5E5E5]">
              <div className="icon pb-[21px]">
                <img src={service1} alt="service icon" />
              </div>
              <h4 className="font-arial font-bold text-lg text-[#333333] pb-2">
                Home Loans
              </h4>
              <p className="font-arial font-normal text-base text-[#666666]">
                Take advantage of our limited-time lowest interest rate offers
              </p>
            </div>
            <div className="serviceItem py-[27px] ps-[18px] pe-7 rounded-xl border border-[#E5E5E5]">
              <div className="icon pb-[21px]">
                <img src={service2} alt="service icon" />
              </div>
              <h4 className="font-arial font-bold text-lg text-[#333333] pb-2">
                Investment Hotspots
              </h4>
              <p className="font-arial font-normal text-base text-[#666666]">
                Discover the top localities in your city for investment
              </p>
            </div>
            <div className="serviceItem py-[27px] ps-[18px] pe-7 rounded-xl border border-[#E5E5E5]">
              <div className="icon pb-[21px]">
                <img src={service3} alt="service icon" />
              </div>
              <h4 className="font-arial font-bold text-lg text-[#333333] pb-2">
                Research Insights
              </h4>
              <p className="font-arial font-normal text-base text-[#666666]">
                Access expert perspectives and in-depth real estate research
              </p>
            </div>
            <div className="serviceItem py-[27px] ps-[18px] pe-7 rounded-xl border border-[#E5E5E5]">
              <div className="icon pb-[21px]">
                <img src={service4} alt="service icon" />
              </div>
              <h4 className="font-arial font-bold text-lg text-[#333333] pb-2">
                Rates & Trends
              </h4>
              <p className="font-arial font-normal text-base text-[#666666]">
                Track property rates and identify key market trends of your city
              </p>
            </div>
          </div>
          <div className="marquee-container">
            <div className="marquee-item">
              <div className="relative w-[514px] mx-auto rounded-sm bg-[#072135] py-[13px] px-[62px] text-center">
                <h3 className="font-arial font-bold text-lg">
                  <span className="text-[#38A9FF]">
                    Are your property owner?
                  </span>{' '}
                  <span className="text-white">Sell/Rent for FREE</span>
                </h3>

                <div className="w-[41px] absolute left-3 top-1.5">
                  <img src={stars} alt="stars icon" />
                </div>

                <div className="w-[33px] absolute right-3 top-2.5">
                  <img src={stars} alt="stars icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services