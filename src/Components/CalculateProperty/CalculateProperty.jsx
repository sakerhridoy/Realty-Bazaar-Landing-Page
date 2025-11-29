import React from 'react';
import calculateProperty from '../../assets/Images/calculateProperty.png';
import { MdKeyboardArrowRight } from 'react-icons/md';
import bg from '../../assets/Images/bg.png';

const CalculateProperty = () => {
  return (
    <>
      <section className="py-14">
        <div className="relative">
          <div className="absolute top-0 left-0 w-full">
            <img src={bg} alt="Background" className="w-full" />
          </div>
          <div className="container">
            <div className="w-[85%] mx-auto">
              <div className="flex items-center gap-0">
                <div className="w-[60%]">
                  <div className="w-[430px]">
                    <h4 className="font-arial font-bold text-[32px] text-[#072135] pb-[18px]">
                      Calculate the cost of your property
                    </h4>
                  </div>
                  <p className="font-arial font-normal text-base text-[#333333] pb-[25px] pr-20">
                    Real estate appraisal is a procedure that allows you to
                    determine the average market value of real estate
                    (apartment, house, land, etc.). Calculate the cost of your
                    property with our new Calculation Service.
                  </p>
                  <a
                    href="/calculate"
                    className="inline-flex items-center border border-[#38A9FF] rounded-sm py-[11px] ps-[15px] pe-[23px] text-base text-[#38A9FF] font-arial font-bold"
                  >
                    Calculate
                    <MdKeyboardArrowRight className="text-[#38A9FF] text-xl font-bold ps-1" />
                  </a>{' '}
                </div>
                <div className="w-[40%]">
                  <img src={calculateProperty} alt="Calculate Property" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CalculateProperty;
