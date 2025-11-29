import React from 'react';
import bg from '../../assets/Images/bg.png';
import { TiStarFullOutline } from 'react-icons/ti';
// import invest1 from '../../assets/Images/invest1-1.png'
// import invest12 from '../../assets/Images/invest1-2.png'

const Invest = () => {
  return (
    <>
      <section className="py-[95px]">
        <div className="relative">
          <div className="absolute top-0 left-0 w-full">
            <img src={bg} alt="Background" className="w-full" />
          </div>
          <div className="container">
            <div className="flex gap-[107px] py-[90px] px-[70px]">
              {' '}
              <div className="left">
                <div className="headline pb-[22px]">
                  <h3 className="font-arial font-bold text-[32px] text-[#38a9ff]">
                    High-demand projects to invest now
                  </h3>
                </div>
                <div className="flex gap-[30px]">
                  <div className="item">
                    <h4>Project detail title 01</h4>
                    <div className="flex justify-between items-center gap-1 pb-[17px]">
                      <TiStarFullOutline className="text-[#FFD900] text-lg" />
                      <h6 className="font-arial font-semibold text-sm text-[#072135]  pt-0.5">
                        4.5
                      </h6>
                      <p className="font-arial font-medium text-sm text-[#666666]  pt-0.5">
                        (100)
                        </p>
                      <ul className="ms-6">
                        <li className='list-disc'>
                          <p className=" font-semibold text-sm text-[#333333]  pt-0.5">
                            By Test 01 Developers
                          </p>
                        </li>
                      </ul>  
                    </div>
                    {/* <div className="innerItem">
                      <div className="flex gap-[30px]">
                        <img src={invest1} alt="invest image" />
                        <img src={invest12} alt="invest image" />
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Invest;
