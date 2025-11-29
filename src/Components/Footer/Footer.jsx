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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12 lg:gap-[123px]">
              {/* ABOUT WEBSITE */}
              <div className="item">
                <h4 className="font-arial font-bold text-sm text-[#38A9FF] tracking-[0.15em] pb-6 uppercase">
                  ABOUT WEBSITE
                </h4>
                <div className="flex flex-col gap-3 footerMenu">
                  <button
                    type="button"
                    disabled
                    aria-disabled="true"
                    aria-label="About Website (not linked)"
                    className="text-left"
                  >
                    About Website
                  </button>
                  <button
                    type="button"
                    disabled
                    aria-disabled="true"
                    aria-label="Copyright Statement (not linked)"
                    className="text-left"
                  >
                    Copyright Statement
                  </button>
                  <button
                    type="button"
                    disabled
                    aria-disabled="true"
                    aria-label="Hyperlink Policy (not linked)"
                    className="text-left"
                  >
                    Hyperlink Policy
                  </button>
                  <button
                    type="button"
                    disabled
                    aria-disabled="true"
                    aria-label="Terms of Use (not linked)"
                    className="text-left"
                  >
                    Terms of Use
                  </button>
                  <button
                    type="button"
                    disabled
                    aria-disabled="true"
                    aria-label="Best View Settings (not linked)"
                    className="text-left"
                  >
                    Best View Settings
                  </button>
                  <button
                    type="button"
                    disabled
                    aria-disabled="true"
                    aria-label="Privacy Policy (not linked)"
                    className="text-left"
                  >
                    Privacy Policy
                  </button>
                </div>
              </div>

              {/* QUICK LINKS */}
              <div className="item">
                <h4 className="font-arial font-bold text-sm text-[#38A9FF] tracking-[0.15em] pb-6 uppercase">
                  QUICK LINKS
                </h4>
                <div className="flex flex-col gap-3 footerMenu">
                  <button
                    type="button"
                    disabled
                    aria-disabled="true"
                    aria-label="Owner Login (not linked)"
                    className="text-left"
                  >
                    Owner Login
                  </button>
                  <button
                    type="button"
                    disabled
                    aria-disabled="true"
                    aria-label="Agent Login (not linked)"
                    className="text-left"
                  >
                    Agent Login
                  </button>
                  <button
                    type="button"
                    disabled
                    aria-disabled="true"
                    aria-label="Dealer Login (not linked)"
                    className="text-left"
                  >
                    Dealer Login
                  </button>
                  <button
                    type="button"
                    disabled
                    aria-disabled="true"
                    aria-label="Useful Calculators (not linked)"
                    className="text-left"
                  >
                    Useful Calculators
                  </button>
                  <button
                    type="button"
                    disabled
                    aria-disabled="true"
                    aria-label="Top Deals (not linked)"
                    className="text-left"
                  >
                    Top Deals
                  </button>
                  <button
                    type="button"
                    disabled
                    aria-disabled="true"
                    aria-label="Top 100 Agents (not linked)"
                    className="text-left"
                  >
                    Top 100 Agents
                  </button>
                </div>
              </div>

              {/* REACH US */}
              <div className="item">
                <h4 className="font-arial font-bold text-sm text-[#38A9FF] tracking-[0.15em] pb-6 uppercase">
                  REACH US
                </h4>
                <div className="flex flex-col gap-3 footerMenu">
                  <button
                    type="button"
                    disabled
                    aria-disabled="true"
                    aria-label="Toll Free Numbers (not linked)"
                    className="text-left"
                  >
                    Toll Free Numbers
                  </button>
                  <button
                    type="button"
                    disabled
                    aria-disabled="true"
                    aria-label="Via Mobile Apps (not linked)"
                    className="text-left"
                  >
                    Via Mobile Apps
                  </button>
                  <button
                    type="button"
                    disabled
                    aria-disabled="true"
                    aria-label="Official Email Address (not linked)"
                    className="text-left"
                  >
                    Official Email Address
                  </button>
                  <button
                    type="button"
                    disabled
                    aria-disabled="true"
                    aria-label="Feedback (not linked)"
                    className="text-left"
                  >
                    Feedback
                  </button>
                  <button
                    type="button"
                    disabled
                    aria-disabled="true"
                    aria-label="Official Social Media Accounts (not linked)"
                    className="text-left"
                  >
                    Official Social Media Accounts
                  </button>
                </div>
              </div>

              {/* NAVIGATE SITE */}
              <div className="item">
                <h4 className="font-arial font-bold text-sm text-[#38A9FF] tracking-[0.15em] pb-6 uppercase">
                  NAVIGATE SITE
                </h4>
                <div className="flex flex-col gap-3 footerMenu">
                  <button
                    type="button"
                    disabled
                    aria-disabled="true"
                    aria-label="Home Page (not linked)"
                    className="text-left"
                  >
                    Home Page
                  </button>
                  <button
                    type="button"
                    disabled
                    aria-disabled="true"
                    aria-label="Global Site Search (not linked)"
                    className="text-left"
                  >
                    Global Site Search
                  </button>
                  <button
                    type="button"
                    disabled
                    aria-disabled="true"
                    aria-label="Sitemap (not linked)"
                    className="text-left"
                  >
                    Sitemap
                  </button>
                  <button
                    type="button"
                    disabled
                    aria-disabled="true"
                    aria-label="Help (not linked)"
                    className="text-left"
                  >
                    Help
                  </button>
                </div>
              </div>
            </div>

            {/* -------- DOWNLOAD APP SECTION -------- */}
            <div className="w-[82%] py-[23px] bg-[#0C3452] text-center rounded-t-lg mx-auto mt-12">
              <h3 className="font-arial font-bold text-[32px] text-white">
                Download Our Mobile App
              </h3>
              <p className="font-arial font-normal text-[17px] text-white pt-0.5">
                Find everything you need for buying, selling and renting
                property with our mobile app.
              </p>

              {/* STORE BUTTONS */}
              <div className="w-[317px] flex items-center justify-center gap-[17px] pt-[15px] mx-auto">
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
