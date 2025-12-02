import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import bestDeal1 from '../../assets/Images/bestDeal1.png';
import bestDeal2 from '../../assets/Images/bestDeal2.png';
import bestDeal3 from '../../assets/Images/bestDeal3.png';
import bestDeal4 from '../../assets/Images/bestDeal4.png';

import { IoBed } from 'react-icons/io5';
import { TbBathFilled } from 'react-icons/tb';
import carPark from '../../assets/Images/carPark.svg';
import { IoArrowBackSharp, IoArrowForwardSharp } from 'react-icons/io5';

const BestDeal = () => {
  const data = [
    {
      img: bestDeal1,
      title: 'Family Home | 120 sq.m',
      price: '$ 1200',
      tag: 'For Sale',
    },
    {
      img: bestDeal2,
      title: '3 BHK Apartment | 200 sq.m',
      price: '$ 1800',
      tag: 'For Sale',
    },
    {
      img: bestDeal3,
      title: '4 BHK Apartment | 240 sq.m',
      price: '$ 2400',
      tag: 'For Sale',
    },
    {
      img: bestDeal4,
      title: 'Cottage | 300 sq.m',
      price: '$ 4290',
      tag: 'For Rent',
    },
    {
      img: bestDeal1,
      title: 'Family Home | 120 sq.m',
      price: '$ 1200',
      tag: 'For Rent',
    },
  ];

  return (
    <section className="py-[95px]">
      <div className="container">
        <div className="relative">
          <div className="headline text-center">
            <h2 className="font-arial font-bold text-[35px] text-[#072135] pb-8">
              We always offer best deals
            </h2>
          </div>

          {/* Navigation Arrows */}
          <button
            className="swiper-button-prev 
  left-[-55px]! 
  top-[60%]! 
  w-10 h-10 
  bg-transparent 
  flex items-center justify-center
"
          >
            <IoArrowBackSharp className="text-[#072135] text-md" />
          </button>

          <button
            className="swiper-button-next 
   right-[-55px]! 
  top-[60%]! 
  w-10 h-10 
  bg-transparent 
  flex items-center justify-center
"
          >
            <IoArrowForwardSharp className="text-[#072135] text-xl" />
          </button>

          {/* Swiper Slider */}
          <Swiper
            slidesPerView={4}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 15 },
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 25 },
              1280: { slidesPerView: 4, spaceBetween: 25 },
            }}
            spaceBetween={25}
            loop={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            modules={[Navigation, Autoplay]}
            className="mt-10"
          >
            {data.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="border border-[#E5E5E5] rounded-lg shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
                  <div className="img pb-[31px] relative">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full rounded-lg"
                    />
                    <div className="w-[104px] h-[30px] rounded-sm bg-white absolute left-1/2 -translate-x-1/2 bottom-4 shadow text-center">
                      <p className="text-[#FF5722] font-bold font-arial text-base">
                        {item.tag}
                      </p>
                    </div>
                  </div>

                  <div className="px-[17px] pb-[18px]">
                    <div className="border-b border-[#e5e5e5] pb-2">
                      <h3 className="font-arial font-bold text-lg text-[#072135]">
                        {item.title}
                      </h3>
                      <p className="font-arial font-normal text-base text-[#666666] pt-2">
                        67-04 Myrtle Ave Glendale, NY 11385
                      </p>
                      <h4 className="font-arial font-bold text-[26px] text-[#38A9FF] py-[17px]">
                        {item.price}
                      </h4>
                    </div>

                    <div className="pt-[13px] flex gap-[27px] justify-center">
                      <div className="flex gap-2.5">
                        <IoBed className="text-[#C2C2C2] text-2xl" />
                        <h6 className="text-[#C2C2C2] text-xl font-arial font-bold">
                          3
                        </h6>
                      </div>

                      <div className="flex gap-2.5">
                        <TbBathFilled className="text-[#C2C2C2] text-2xl scale-x-[-1]" />
                        <h6 className="text-[#C2C2C2] text-xl font-arial font-bold">
                          2
                        </h6>
                      </div>

                      <div className="flex gap-2.5">
                        <img src={carPark} alt="carPark" />
                        <h6 className="text-[#C2C2C2] text-xl font-arial font-bold">
                          2
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default BestDeal;
