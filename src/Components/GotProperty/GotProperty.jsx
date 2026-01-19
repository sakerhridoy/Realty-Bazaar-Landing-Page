import React, { useMemo } from 'react';
import propertyImage1 from '../../assets/Images/property1.png';
import propertyImage2 from '../../assets/Images/property2.png';
import propertyImage3 from '../../assets/Images/property3.png';
import propertyImage4 from '../../assets/Images/property4.png';
import { BsArrowUpRightCircle } from 'react-icons/bs';
import useFetch from '../../hooks/useFetch';

const GotProperty = () => {
  const { data, loading, error } = useFetch(
    'https://dummyjson.com/products?limit=1'
  );

  const stats = useMemo(() => {
    const total = data?.total || 0;
    if (!total) {
      return {
        ownerProperties: 0,
        realtyProjects: 0,
        readyToMove: 0,
        budgetHomes: 0,
      };
    }
    return {
      ownerProperties: total,
      realtyProjects: Math.max(1, Math.round(total * 0.35)),
      readyToMove: Math.max(1, Math.round(total * 0.6)),
      budgetHomes: Math.max(1, Math.round(total * 0.25)),
    };
  }, [data]);

  return (
    <>
      <section className="py-10 md:py-[95px]">
        <div className="container mx-4 lg:mx-0">
          <div className="headline text-center mx-4 lg:mx-0">
            <h2 className="font-arial font-bold text-[35px] text-[#38A9FF] pb-8">
              Explore property related services
            </h2>
            {loading && (
              <p className="text-sm text-gray-500 font-arial">
                Fetching live stats...
              </p>
            )}
            {error && (
              <p className="text-sm text-red-600 font-arial">{error}</p>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pb-[31px] gap-4 mx-4 lg:mx-0">
            <div className="item pb-[49px] pe-[15px] md:border-r border-[#E5E5E5]">
              <div className="img pb-2">
                <img
                  src={propertyImage1}
                  alt="Owner properties"
                  className="w-full rounded-lg"
                />
              </div>
              <div className="flex justify-between">
                <div className="text">
                  <h4 className="font-arial font-bold text-4xl text-[#38A9FF]">
                    {stats.ownerProperties}
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
                  alt="Realty Projects"
                  className="w-full rounded-lg"
                />
              </div>
              <div className="flex justify-between">
                <div className="text">
                  <h4 className="font-arial font-bold text-4xl text-[#38A9FF]">
                    {stats.realtyProjects}
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
                  src={propertyImage3}
                  alt="Ready to Move"
                  className="w-full rounded-lg"
                />
              </div>
              <div className="flex justify-between">
                <div className="text">
                  <h4 className="font-arial font-bold text-4xl text-[#38A9FF]">
                    {stats.readyToMove}
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
                  alt="Budget Homes"
                  className="w-full rounded-lg"
                />
              </div>
              <div className="flex justify-between">
                <div className="text">
                  <h4 className="font-arial font-bold text-4xl text-[#38A9FF]">
                    {stats.budgetHomes}
                  </h4>
                  <h3 className="font-arial font-bold text-lg text-[#072135]">
                    Budget Homes
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
