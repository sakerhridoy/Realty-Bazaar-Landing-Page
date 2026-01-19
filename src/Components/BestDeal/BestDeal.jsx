import React, { useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import { IoBed } from 'react-icons/io5';
import { TbBathFilled } from 'react-icons/tb';
import carPark from '../../assets/Images/carPark.svg';
import { IoArrowBackSharp, IoArrowForwardSharp } from 'react-icons/io5';
import useFetch from '../../hooks/useFetch';
import { Link, useNavigate } from 'react-router-dom';
import { useShop } from '../../context/ShopContext';

const BestDeal = () => {
  const navigate = useNavigate();
  const { addToCart, addToWishlist } = useShop();
  const { data, loading, error } = useFetch(
    'https://dummyjson.com/products?limit=12'
  );

  const deals = useMemo(() => {
    if (!data?.products) return [];
    return data.products.map(p => ({
      id: p.id,
      title: p.title,
      priceValue: p.price,
      price:
        typeof p.price === 'number' ? `$ ${p.price.toLocaleString()}` : '—',
      tag: p.availabilityStatus || (p.stock > 0 ? 'For Sale' : 'Unavailable'),
      img: p.thumbnail || p.images?.[0],
      address: `${p.category} • ${p.brand || 'Featured listing'}`,
      beds: Math.max(1, Math.min(5, Math.round(p.rating || 3))),
      baths: Math.max(1, Math.min(4, Math.round((p.rating || 2) / 1.5))),
      parking: Math.max(1, Math.min(3, Math.round((p.stock || 1) / 40) || 1)),
    }));
  }, [data]);

  return (
    <section className="py-10 md:py-[95px]">
      <div className="container mx-4 lg:mx-0">
        <div className="relative">
          <div className="headline text-center">
            <h2 className="font-arial font-bold text-[35px] text-[#072135] pb-8">
              We always offer best deals
            </h2>
            {loading && (
              <p className="text-sm text-gray-500 font-arial">
                Loading latest deals...
              </p>
            )}
            {error && (
              <p className="text-sm text-red-600 font-arial">{error}</p>
            )}
          </div>

          {/* Navigation Arrows */}
          <button
            className="swiper-button-prev left-[-55px]! top-[60%]! w-10 h-10 bg-transparent flex items-center justify-center"
            aria-label="Previous deal"
          >
            <IoArrowBackSharp className="text-[#072135] text-md hidden md:block" />
          </button>

          <button
            className="swiper-button-next right-[-55px]! top-[60%]! w-10 h-10 bg-transparent flex items-center justify-center"
            aria-label="Next deal"
          >
            <IoArrowForwardSharp className="text-[#072135] text-xl hidden md:block" />
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
            {deals.map(item => (
              <SwiperSlide key={item.id}>
                <div className="border border-[#E5E5E5] rounded-lg shadow-[0_4px_6px_rgba(0,0,0,0.1)] mx-4 lg:mx-0">
                  <div className="img pb-[31px] relative">
                    <Link to={`/products/${item.id}`}>
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-[230px] object-cover rounded-lg"
                      />
                    </Link>
                    <div className="w-[104px] h-[30px] rounded-sm bg-white absolute left-1/2 -translate-x-1/2 bottom-4 shadow text-center flex items-center justify-center">
                      <p className="text-[#FF5722] font-bold font-arial text-base">
                        {item.tag}
                      </p>
                    </div>
                  </div>

                  <div className="px-[17px] pb-[18px]">
                    <div className="border-b border-[#e5e5e5] pb-2">
                      <Link to={`/products/${item.id}`}>
                        <h3 className="font-arial font-bold text-lg text-[#072135] hover:text-[#38A9FF]">
                          {item.title}
                        </h3>
                      </Link>
                      <p className="font-arial font-normal text-base text-[#666666] pt-2">
                        {item.address}
                      </p>
                      <h4 className="font-arial font-bold text-[26px] text-[#38A9FF] py-[17px]">
                        {item.price}
                      </h4>
                    </div>

                    <div className="pt-[13px] flex gap-[27px] justify-center">
                      <div className="flex gap-2.5 items-center">
                        <IoBed className="text-[#C2C2C2] text-2xl" />
                        <h6 className="text-[#C2C2C2] text-xl font-arial font-bold">
                          {item.beds}
                        </h6>
                      </div>

                      <div className="flex gap-2.5 items-center">
                        <TbBathFilled className="text-[#C2C2C2] text-2xl scale-x-[-1]" />
                        <h6 className="text-[#C2C2C2] text-xl font-arial font-bold">
                          {item.baths}
                        </h6>
                      </div>

                      <div className="flex gap-2.5 items-center">
                        <img src={carPark} alt="carPark" />
                        <h6 className="text-[#C2C2C2] text-xl font-arial font-bold">
                          {item.parking}
                        </h6>
                      </div>
                    </div>
                    <div className="flex gap-3 mt-4">
                      <button
                        onClick={() => {
                          addToCart({
                            id: item.id,
                            title: item.title,
                            price: item.priceValue || 0,
                            image: item.img,
                          });
                          navigate('/cart');
                        }}
                        className="flex-1 bg-[#072135] text-white py-2 rounded"
                      >
                        Add to cart
                      </button>
                      <button
                        onClick={() =>
                          addToWishlist({
                            id: item.id,
                            title: item.title,
                            price: item.priceValue || 0,
                            image: item.img,
                          })
                        }
                        className="flex-1 border border-[#38A9FF] text-[#38A9FF] py-2 rounded"
                      >
                        Wishlist
                      </button>
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
