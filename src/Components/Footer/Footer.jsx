import React from 'react';
import bg from '../../assets/Images/bg.png';
import apple from '../../assets/Images/apple.png';
import appleStore from '../../assets/Images/appleStore.png';
import playStore from '../../assets/Images/playstore.png';
import googleStore from '../../assets/Images/googleStore.png';

const Footer = () => {
  return (
    <>
      <div className="relative bg-[#072135]">
        {/* Background */}
        <img
          src={bg}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />

        <div className="relative z-10 container">
          <div className="mainFooter pt-[53px] pb-[58px]">
            {/* -------- TOP GRID -------- */}
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12 lg:gap-[123px] mx-4 lg:mx-0">
              {/* ABOUT WEBSITE */}
              <div className="item">
                <h4 className="font-arial font-bold text-sm text-[#38A9FF] tracking-[0.15em] pb-6 uppercase">
                  ABOUT WEBSITE
                </h4>
                <div className="flex flex-col gap-3 footerMenu">
                  <a href="#">About Website</a>
                  <a href="#">Copyright Statement</a>
                  <a href="#">Hyperlink Policy</a>
                  <a href="#">Terms of Use</a>
                  <a href="#">Best View Settings</a>
                  <a href="#">Privacy Policy</a>
                </div>
              </div>

              {/* QUICK LINKS */}
              <div className="item">
                <h4 className="font-arial font-bold text-sm text-[#38A9FF] tracking-[0.15em] pb-6 uppercase">
                  QUICK LINKS
                </h4>
                <div className="flex flex-col gap-3 footerMenu">
                  <a href="#">Owner Login</a>
                  <a href="#">Agent Login</a>
                  <a href="#">Dealer Login</a>
                  <a href="#">Useful Calculators</a>
                  <a href="#">Top Deals</a>
                  <a href="#">Top 100 Agents</a>
                </div>
              </div>

              {/* REACH US */}
              <div className="item">
                <h4 className="font-arial font-bold text-sm text-[#38A9FF] tracking-[0.15em] pb-6 uppercase">
                  REACH US
                </h4>
                <div className="flex flex-col gap-3 footerMenu">
                  <a href="#">Toll Free Numbers</a>
                  <a href="#">Via Mobile Apps</a>
                  <a href="#">Official Email Address</a>
                  <a href="#">Feedback</a>
                  <a href="#">Official Social Media Accounts</a>
                </div>
              </div>

              {/* NAVIGATE SITE */}
              <div className="item">
                <h4 className="font-arial font-bold text-sm text-[#38A9FF] tracking-[0.15em] pb-6 uppercase">
                  NAVIGATE SITE
                </h4>
                <div className="flex flex-col gap-3 footerMenu">
                  <a href="#">Home Page</a>
                  <a href="#">Global Site Search</a>
                  <a href="#">Sitemap</a>
                  <a href="#">Help</a>
                </div>
              </div>
            </div>

            {/* -------- DOWNLOAD APP SECTION -------- */}
            <div className="w-[82%] py-[23px] bg-[#0C3452] text-center rounded-lg mx-auto px-4 md:px-0 mt-12">
              <h3 className="font-arial font-bold text-2xl md:text-[32px] text-white">
                Download Our Mobile App
              </h3>
              <p className="font-arial font-normal text-[14px] md:text-[17px] text-white pt-0.5">
                Find everything you need for buying, selling and renting
                property with our mobile app.
              </p>

              {/* STORE BUTTONS */}
              <div className="md:w-[317px] flex items-center justify-center gap-[17px] pt-[15px] mx-auto">
                {/* APPLE BUTTON */}
                <div className="w-1/2 bg-black rounded-sm p-2.5 cursor-pointer">
                  <div className="flex items-center gap-2.5">
                    <img src={apple} alt="Apple Logo" className="w-[25px]" />
                    <img
                      src={appleStore}
                      alt="Apple Store"
                      className="w-[92px]"
                    />
                  </div>
                </div>

                {/* GOOGLE PLAY BUTTON */}
                <div className="w-1/2 bg-black rounded-sm p-2.5 cursor-pointer">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={playStore}
                      alt="PlayStore Logo"
                      className="w-[25px]"
                    />
                    <img
                      src={googleStore}
                      alt="Google Play"
                      className="w-[92px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
