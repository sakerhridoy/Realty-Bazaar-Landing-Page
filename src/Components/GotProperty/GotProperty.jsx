import React from 'react';
import propertyImage1 from '../../assets/Images/property1.png';
import propertyImage2 from '../../assets/Images/property2.png';
import propertyImage3 from '../../assets/Images/property3.png';
import propertyImage4 from '../../assets/Images/property4.png';
import { BsArrowUpRightCircle } from 'react-icons/bs';

const GotProperty = () => {
  return (
    <>
      <section className="py-10 md:py-[95px]">
        <div className="container mx-4 lg:mx-0">
          <div className="headline text-center mx-4 lg:mx-0">
            <h2 className="font-arial font-bold text-[35px] text-[#38A9FF] pb-8">
              Explore property related services
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pb-[31px] gap-4 mx-4 lg:mx-0">
            {' '}
            <div className="item pb-[49px] pe-[15px] md:border-r border-[#E5E5E5]">
              <div className="img pb-2">
                <img
                  src={propertyImage1}
                  alt="property Image"
                  className="w-full rounded-lg"
                />{' '}
              </div>
              <div className="flex justify-between">
                <div className="text">
                  <h4 className="font-arial font-bold text-4xl text-[#38A9FF]">
                    87894
                  </h4>
                  <h3 className="font-arial font-bold text-lg text-[#072135]">
                    Owner Properties
                  </h3>
                </div>
                <div className="icon">
                  <BsArrowUpRightCircle className="text-5xl text-[#072135]" />
                </div>
              </div>
            </div>
            <div className="item pb-[49px] px-[15px] md:border-r border-[#E5E5E5]">
              <div className="img pb-2">
                <img
                  src={propertyImage2}
                  alt="property Image"
                  className="w-full rounded-lg"
                />
              </div>
              <div className="flex justify-between">
                <div className="text">
                  <h4 className="font-arial font-bold text-4xl text-[#38A9FF]">
                    1020
                  </h4>
                  <h3 className="font-arial font-bold text-lg text-[#072135]">
                    Realty Projects
                  </h3>
                </div>
                <div className="icon">
                  <BsArrowUpRightCircle className="text-5xl text-[#072135]" />
                </div>
              </div>
            </div>
            <div className="item pb-[49px] px-[15px] md:border-r border-[#E5E5E5]">
              <div className="img pb-2">
                <img
                  src={propertyImage2}
                  alt="property Image"
                  className="w-full rounded-lg"
                />
              </div>
              <div className="flex justify-between">
                <div className="text">
                  <h4 className="font-arial font-bold text-4xl text-[#38A9FF]">
                    57899
                  </h4>
                  <h3 className="font-arial font-bold text-lg text-[#072135]">
                    Ready to Move-in
                  </h3>
                </div>
                <div className="icon">
                  <BsArrowUpRightCircle className="text-5xl text-[#072135]" />
                </div>
              </div>
            </div>
            <div className="item pb-[49px] ps-[15px]">
              <div className="img pb-2">
                <img
                  src={propertyImage4}
                  alt="property Image"
                  className="w-full rounded-lg"
                />
              </div>
              <div className="flex justify-between">
                <div className="text">
                  <h4 className="font-arial font-bold text-4xl text-[#38A9FF]">
                    2125
                  </h4>
                  <h3 className="font-arial font-bold text-lg text-[#072135]">
                    Budge Homes
                  </h3>
                </div>
                <div className="icon">
                  <BsArrowUpRightCircle className="text-5xl text-[#072135]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GotProperty;
