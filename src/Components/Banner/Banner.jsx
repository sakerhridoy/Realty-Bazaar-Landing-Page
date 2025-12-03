import React from 'react'
import { useState } from 'react';
import bannerImage from '../../assets/Images/bannerImage.png'
import { FaLocationDot } from 'react-icons/fa6';
import { MdHomeFilled } from 'react-icons/md';
import { IoMic } from 'react-icons/io5';
import { IoMdLocate } from 'react-icons/io';
import { FaSearch } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Banner = () => {

  const [price, setPrice] = useState(500);

   const settings = {
     dots: true,
     fade: true,
     infinite: true,
     speed: 500,
     slidesToShow: 1,
     slidesToScroll: 1,
     autoplay: true,
     autoplaySpeed: 2000,
     cssEase: 'linear',
   };
  
  return (
    <>
      <section>
        <div className="container mx-4 lg:mx-0">
          <div className="slider-container">
            <Slider {...settings}>
              <div className="item">
                <div className="relative byliner rounded-[20px] px-4 md:px-0 md:ps-[111px] h-screen">
                  <div className="absolute bottom-0 right-0">
                    <img
                      src={bannerImage}
                      alt="Banner Image"
                      className="lg:w-[971px]"
                    />
                  </div>
                  <div className="md:w-[495px] pt-[110px]">
                    <h1 className="font-arial font-bold text-4xl md:text-[52px] text-[#072135] pb-[26px]">
                      Find a perfect home you'll love
                    </h1>
                    <p className="font-arial font-bold text-[22px] text-[#072135] leading-8">
                      We provide a complete service for the sale, purchase or
                      rental of real estate.
                    </p>
                  </div>
                  <div className="py-5 md:pt-[62px] md:pb-[57px]">
                    <div className="md:w-[91%] px-[25px] pt-6 pb-5 bg-[rgba(255,255,255,0.95)] drop-shadow-2xl drop-shadow-[rgba(0,0,0,0.05)] rounded-xl relative after:absolute after:content-[''] after:w-full md:after:h-0.5 after:bg-[#F2F2F2] after:top-1/2 after:left-0 after:-translate-y-1/2">
                      <div className="hidden md:block">
                        <div className="rent flex flex-col md:flex-row items-center gap-[60px] pb-[25px] pt-5">
                          <a href="" className="text-[#333333]">
                            Buy
                          </a>
                          <a href="">Rent</a>
                          <a href="">Projects</a>
                          <a href="">Commercial</a>
                          <a href="">New Launch</a>
                          <div className="relative">
                            <span className="absolute -top-4 -right-6 bg-[#F2453D] font-arial text-white text-[10px] font-bold w-8 h-4 rounded-[26px] flex items-center justify-center shadow-[0_4px_6px_rgba(0,0,0,0.25)] z-10">
                              NEW
                            </span>

                            <a
                              href="#"
                              className="text-[#333] dark:text-white hover:text-[#38A9FF] transition"
                            >
                              Post Free Property Ad
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="py-[7.5px] flex flex-col md:flex-row items-center gap-8">
                        {/* Location */}
                        <div className="flex items-center gap-2">
                          <FaLocationDot className="text-[#38A9FF] text-lg" />
                          <div className="pe-9 border-r border-[#dddddd]">
                            <select className="border-none outline-0 py-1 text-lg text-[#333333] font-arial font-normal">
                              <option value="location">Location</option>
                              <option value="new-york">New York</option>
                              <option value="california">California</option>
                              <option value="washington">Washington</option>
                            </select>
                          </div>
                        </div>

                        {/* Property Type */}
                        <div className="flex items-center gap-2">
                          <MdHomeFilled className="text-[#38A9FF] text-lg" />
                          <div className="pe-9 border-r border-[#dddddd]">
                            <select className="border-none outline-0 px-2 py-1 text-lg text-[#333333] font-arial font-normal">
                              <option value="">Property Type</option>
                              <option value="apartment">Apartment</option>
                              <option value="villa">Villa</option>
                              <option value="office">Office</option>
                            </select>
                          </div>
                        </div>

                        {/* Price Range */}
                        <div className="flex gap-2 relative">
                          <label className="text-lg text-[#333333] font-arial font-normal">
                            Price
                          </label>

                          {/* Slider */}
                          <div className="relative w-full">
                            {/* Bubble */}
                            <div
                              className="absolute -top-3.5 text-xs text-black font-bold"
                              style={{
                                left: `calc(${((price - 100) / 1400) * 100}%)`,
                                transform: 'translateX(-50%)',
                              }}
                            >
                              ${price}
                            </div>

                            <input
                              type="range"
                              min="100"
                              max="1500"
                              step="10"
                              value={price}
                              onChange={e => setPrice(e.target.value)}
                              className="w-[198px] h-0.5 bg-[#C9C9C9] rounded-lg appearance-none cursor-pointer"
                            />
                          </div>
                        </div>

                        {/* Icon and Button */}
                        <div className="flex gap-5">
                          <div className="rounded-full w-8 h-8 bg-[rgba(56,169,255,0.2)] text-center p-1.5">
                            <IoMic className="text-[#072135] text-lg flex" />
                          </div>
                          <div className="rounded-full w-8 h-8 bg-[rgba(56,169,255,0.2)] text-center p-1.5">
                            <IoMdLocate className="text-[#072135] text-lg flex" />
                          </div>
                          <div className="property relative bg-[#072135] rounded-[5px] py-3.5 ps-[30px] pe-6 cursor-pointer flex items-center">
                            <a className="font-arial font-bold text-sm text-white">
                              Search Property
                            </a>
                            <div className="absolute top-[18px] left-2">
                              <FaSearch className="font-bold text-base text-white" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="relative byliner2 rounded-[20px] px-4 md:px-0 md:ps-[111px] h-screen">
                  <div className="absolute bottom-0 right-0">
                    <img
                      src={bannerImage}
                      alt="Banner Image"
                      className="lg:w-[971px]"
                    />
                  </div>
                  <div className="md:w-[495px] pt-[110px]">
                    <h1 className="font-arial font-bold text-4xl md:text-[52px] text-[#072135] pb-[26px]">
                      Find a perfect home you'll love
                    </h1>
                    <p className="font-arial font-bold text-[22px] text-[#072135] leading-8">
                      We provide a complete service for the sale, purchase or
                      rental of real estate.
                    </p>
                  </div>
                  <div className="py-5 md:pt-[62px] md:pb-[57px]">
                    <div className="md:w-[91%] px-[25px] pt-6 pb-5 bg-[rgba(255,255,255,0.95)] drop-shadow-2xl drop-shadow-[rgba(0,0,0,0.05)] rounded-xl relative after:absolute after:content-[''] after:w-full md:after:h-0.5 after:bg-[#F2F2F2] after:top-1/2 after:left-0 after:-translate-y-1/2">
                      <div className="hidden md:block">
                        <div className="rent flex flex-col md:flex-row items-center gap-[60px] pb-[25px] pt-5">
                          <a href="" className="text-[#333333]">
                            Buy
                          </a>
                          <a href="">Rent</a>
                          <a href="">Projects</a>
                          <a href="">Commercial</a>
                          <a href="">New Launch</a>
                          <div className="relative">
                            <span className="absolute -top-4 -right-6 bg-[#F2453D] font-arial text-white text-[10px] font-bold w-8 h-4 rounded-[26px] flex items-center justify-center shadow-[0_4px_6px_rgba(0,0,0,0.25)] z-10">
                              NEW
                            </span>

                            <a
                              href="#"
                              className="text-[#333] dark:text-white hover:text-[#38A9FF] transition"
                            >
                              Post Free Property Ad
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="py-[7.5px] flex flex-col md:flex-row items-center gap-8">
                        {/* Location */}
                        <div className="flex items-center gap-2">
                          <FaLocationDot className="text-[#38A9FF] text-lg" />
                          <div className="pe-9 border-r border-[#dddddd]">
                            <select className="border-none outline-0 py-1 text-lg text-[#333333] font-arial font-normal">
                              <option value="location">Location</option>
                              <option value="new-york">New York</option>
                              <option value="california">California</option>
                              <option value="washington">Washington</option>
                            </select>
                          </div>
                        </div>

                        {/* Property Type */}
                        <div className="flex items-center gap-2">
                          <MdHomeFilled className="text-[#38A9FF] text-lg" />
                          <div className="pe-9 border-r border-[#dddddd]">
                            <select className="border-none outline-0 px-2 py-1 text-lg text-[#333333] font-arial font-normal">
                              <option value="">Property Type</option>
                              <option value="apartment">Apartment</option>
                              <option value="villa">Villa</option>
                              <option value="office">Office</option>
                            </select>
                          </div>
                        </div>

                        {/* Price Range */}
                        <div className="flex gap-2 relative">
                          <label className="text-lg text-[#333333] font-arial font-normal">
                            Price
                          </label>

                          {/* Slider */}
                          <div className="relative w-full">
                            {/* Bubble */}
                            <div
                              className="absolute -top-3.5 text-xs text-black font-bold"
                              style={{
                                left: `calc(${((price - 100) / 1400) * 100}%)`,
                                transform: 'translateX(-50%)',
                              }}
                            >
                              ${price}
                            </div>

                            <input
                              type="range"
                              min="100"
                              max="1500"
                              step="10"
                              value={price}
                              onChange={e => setPrice(e.target.value)}
                              className="w-[198px] h-0.5 bg-[#C9C9C9] rounded-lg appearance-none cursor-pointer"
                            />
                          </div>
                        </div>

                        {/* Icon and Button */}
                        <div className="flex gap-5">
                          <div className="rounded-full w-8 h-8 bg-[rgba(56,169,255,0.2)] text-center p-1.5">
                            <IoMic className="text-[#072135] text-lg flex" />
                          </div>
                          <div className="rounded-full w-8 h-8 bg-[rgba(56,169,255,0.2)] text-center p-1.5">
                            <IoMdLocate className="text-[#072135] text-lg flex" />
                          </div>
                          <div className="property relative bg-[#072135] rounded-[5px] py-3.5 ps-[30px] pe-6 cursor-pointer flex items-center">
                            <a className="font-arial font-bold text-sm text-white">
                              Search Property
                            </a>
                            <div className="absolute top-[18px] left-2">
                              <FaSearch className="font-bold text-base text-white" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="relative byliner3 rounded-[20px] px-4 md:px-0 md:ps-[111px] -z-1 h-screen">
                  <div className="absolute bottom-0 right-0">
                    <img
                      src={bannerImage}
                      alt="Banner Image"
                      className="lg:w-[971px]"
                    />
                  </div>
                  <div className="md:w-[495px] pt-[110px]">
                    <h1 className="font-arial font-bold text-4xl md:text-[52px] text-[#072135] pb-[26px]">
                      Find a perfect home you'll love
                    </h1>
                    <p className="font-arial font-bold text-[22px] text-[#072135] leading-8">
                      We provide a complete service for the sale, purchase or
                      rental of real estate.
                    </p>
                  </div>
                  <div className="py-5 md:pt-[62px] md:pb-[57px]">
                    <div className="md:w-[91%] px-[25px] pt-6 pb-5 bg-[rgba(255,255,255,0.95)] drop-shadow-2xl drop-shadow-[rgba(0,0,0,0.05)] rounded-xl relative after:absolute after:content-[''] after:w-full md:after:h-0.5 after:bg-[#F2F2F2] after:top-1/2 after:left-0 after:-translate-y-1/2">
                      <div className="hidden md:block">
                        <div className="rent flex flex-col md:flex-row items-center gap-[60px] pb-[25px] pt-5">
                          <a href="" className="text-[#333333]">
                            Buy
                          </a>
                          <a href="">Rent</a>
                          <a href="">Projects</a>
                          <a href="">Commercial</a>
                          <a href="">New Launch</a>
                          <div className="relative">
                            <span className="absolute -top-4 -right-6 bg-[#F2453D] font-arial text-white text-[10px] font-bold w-8 h-4 rounded-[26px] flex items-center justify-center shadow-[0_4px_6px_rgba(0,0,0,0.25)] z-10">
                              NEW
                            </span>

                            <a
                              href="#"
                              className="text-[#333] dark:text-white hover:text-[#38A9FF] transition"
                            >
                              Post Free Property Ad
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="py-[7.5px] flex flex-col md:flex-row items-center gap-8">
                        {/* Location */}
                        <div className="flex items-center gap-2">
                          <FaLocationDot className="text-[#38A9FF] text-lg" />
                          <div className="pe-9 border-r border-[#dddddd]">
                            <select className="border-none outline-0 py-1 text-lg text-[#333333] font-arial font-normal">
                              <option value="location">Location</option>
                              <option value="new-york">New York</option>
                              <option value="california">California</option>
                              <option value="washington">Washington</option>
                            </select>
                          </div>
                        </div>

                        {/* Property Type */}
                        <div className="flex items-center gap-2">
                          <MdHomeFilled className="text-[#38A9FF] text-lg" />
                          <div className="pe-9 border-r border-[#dddddd]">
                            <select className="border-none outline-0 px-2 py-1 text-lg text-[#333333] font-arial font-normal">
                              <option value="">Property Type</option>
                              <option value="apartment">Apartment</option>
                              <option value="villa">Villa</option>
                              <option value="office">Office</option>
                            </select>
                          </div>
                        </div>

                        {/* Price Range */}
                        <div className="flex gap-2 relative">
                          <label className="text-lg text-[#333333] font-arial font-normal">
                            Price
                          </label>

                          {/* Slider */}
                          <div className="relative w-full">
                            {/* Bubble */}
                            <div
                              className="absolute -top-3.5 text-xs text-black font-bold"
                              style={{
                                left: `calc(${((price - 100) / 1400) * 100}%)`,
                                transform: 'translateX(-50%)',
                              }}
                            >
                              ${price}
                            </div>

                            <input
                              type="range"
                              min="100"
                              max="1500"
                              step="10"
                              value={price}
                              onChange={e => setPrice(e.target.value)}
                              className="w-[198px] h-0.5 bg-[#C9C9C9] rounded-lg appearance-none cursor-pointer"
                            />
                          </div>
                        </div>

                        {/* Icon and Button */}
                        <div className="flex gap-5">
                          <div className="rounded-full w-8 h-8 bg-[rgba(56,169,255,0.2)] text-center p-1.5">
                            <IoMic className="text-[#072135] text-lg flex" />
                          </div>
                          <div className="rounded-full w-8 h-8 bg-[rgba(56,169,255,0.2)] text-center p-1.5">
                            <IoMdLocate className="text-[#072135] text-lg flex" />
                          </div>
                          <div className="property relative bg-[#072135] rounded-[5px] py-3.5 ps-[30px] pe-6 cursor-pointer flex items-center">
                            <a className="font-arial font-bold text-sm text-white">
                              Search Property
                            </a>
                            <div className="absolute top-[18px] left-2">
                              <FaSearch className="font-bold text-base text-white" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner