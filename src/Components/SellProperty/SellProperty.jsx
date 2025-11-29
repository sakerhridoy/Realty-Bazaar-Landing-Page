import React from 'react';
import sellPropertyImage from '../../assets/Images/sellProperty.png';
import { MdKeyboardArrowRight } from 'react-icons/md';
import bg from '../../assets/Images/bg.png';

const SellProperty = () => {
  return (
    <>
      <section className="py-14">
        <div className="container">
          <div className="relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full">
              <img src={bg} alt="Background" className="w-full" />
            </div>
            <div className="w-[85%] mx-auto rounded-xl shadow-sm sellLenier py-[27px] px-[53px]">
              <div className="flex items-center gap-0">
                <div className="w-[60%]">
                  <div className="w-[430px]">
                    <h4 className="font-arial font-bold text-[32px] text-[#072135] pb-0.5">
                      Have a property to sell?
                    </h4>
                  </div>
                  <p className="font-arial font-normal text-base text-[#333333] pb-[30px] pr-20">
                    List your property in just few clicks & connect with clients
                    faster!
                  </p>
                  <a
                    href="/calculate"
                    className="inline-flex items-center border border-[#38A9FF] rounded-sm py-[11px] ps-[15px] pe-[23px] text-base text-white  font-arial font-bold bg-[#38A9FF]"
                  >
                    Sell Your Property
                    <MdKeyboardArrowRight className="text-white text-xl font-bold ps-1" />
                  </a>{' '}
                </div>
                <div className="w-[40%]">
                  <img src={sellPropertyImage} alt="sellPropertyImage" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SellProperty; 
