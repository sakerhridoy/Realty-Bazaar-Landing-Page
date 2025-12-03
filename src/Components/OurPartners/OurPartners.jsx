import React from 'react';
import partner1 from '../../assets/Images/partner1.png';
import partner2 from '../../assets/Images/partner2.png';
import partner3 from '../../assets/Images/partner3.png';
import partner4 from '../../assets/Images/partner4.png';
import partner5 from '../../assets/Images/partner5.png';
import partner6 from '../../assets/Images/partner6.png';

const OurPartners = () => {
  return (
    <>
      <section className="pb-[95px]">
        <div className="container">
          <div className="headline pb-[33px] flex items-center justify-center">
            <h3 className="font-arial font-bold text-[32px] text-[#38a9ff]">
              Our Partners
            </h3>
          </div>
            <div className="item">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-10">
                {' '}
                <div className="item">
                  <img src={partner1} alt="Partner Photo" />
                </div>
                <div className="item">
                  <img src={partner2} alt="Partner Photo" />
                </div>
                <div className="item">
                  <img src={partner3} alt="Partner Photo" />
                </div>
                <div className="item">
                  <img src={partner4} alt="Partner Photo" />
                </div>
                <div className="item">
                  <img src={partner5} alt="Partner Photo" />
                </div>
                <div className="item">
                  <img src={partner6} alt="Partner Photo" />
                </div>
              </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default OurPartners;
