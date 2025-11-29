import React from 'react'
import bg from '../../assets/Images/bg.png';
import apple from '../../assets/Images/apple.png';
import appleStore from '../../assets/Images/appleStore.png';
import playStore from '../../assets/Images/playstore.png';
import googleStore from '../../assets/Images/googleStore.png';


const Footer = () => {
  return (
    <>
      <div className="relative bg-[#072135]">
        <img
          src={bg}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative z-10 container">
          <div className="mainFooter pt-[53px] pb-[58px]">
            <div className="grid grid-cols-4 items-center gap-[123px]">
              <div className="item">
                <h4 className="font-arial font-bold text-sm text-[#38A9FF] tracking-[15%] pb-6 uppercase">
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
              <div className="item">
                <h4 className="font-arial font-bold text-sm text-[#38A9FF] tracking-[15%] pb-6 uppercase">
                  quick links
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
              <div className="item">
                <h4 className="font-arial font-bold text-sm text-[#38A9FF] tracking-[15%] pb-6 uppercase">
                  reach us
                </h4>
                <div className="flex flex-col gap-3 footerMenu">
                  <a href="#">Toll Free Numbers</a>
                  <a href="#">Via Mobile Apps</a>
                  <a href="#">Official Email Address</a>
                  <a href="#">Feedback</a>
                  <a href="#">Official Social Media Accounts</a>
                </div>
              </div>
              <div className="item">
                <h4 className="font-arial font-bold text-sm text-[#38A9FF] tracking-[15%] pb-6 uppercase">
                  navigate site
                </h4>
                <div className="flex flex-col gap-3 footerMenu">
                  <a href="#">Home Page</a>
                  <a href="#">Global Site Search</a>
                  <a href="#">Sitemap</a>
                  <a href="#">Help</a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[82%] py-[23px] bg-[#0C3452] text-center rounded-t-lg mx-auto">
            <h3 className="font-arial font-bold text-[32px] text-white">
              Download Our Mobile App
            </h3>
            <p className="font-arial font-normal text-[17px] text-white pt-0.5">
              Find everything you need for buying, selling and renting property
              with our mobile app.
            </p>
            <div className="w-[317px] flex items-center justify-center gap-[17px] pt-[15px] mx-auto">
              <div className="w-1/2 bg-black rounded-sm p-2.5 cursor-pointer">
                <div className="flex gap-2.5 items-center justify-between">
                  <div className="apple">
                    <a href="#">
                      <img src={apple} alt="apple logo" className="w-[25px]" />
                    </a>
                  </div>
                  <div className="apple">
                    <a href="#">
                      <img src={appleStore} alt="apple" className="w-[92px]" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-1/2 bg-black rounded-sm p-2.5 cursor-pointer">
                <div className="flex gap-2.5 items-center justify-between">
                  <div className="playStore">
                    <a href="#">
                      {' '}
                      <img
                        src={playStore}
                        alt="play store logo"
                        className="w-[25px]"
                      />
                    </a>
                  </div>
                  <div className="apple">
                    <a href="#">
                      <img
                        src={googleStore}
                        alt="play store"
                        className="w-[92px]"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer