import React from 'react';
import bg from '../../assets/Images/bg.png';
import { TiStarFullOutline } from 'react-icons/ti';
import invest1 from '../../assets/Images/invest1-1.png';
import invest12 from '../../assets/Images/invest1-2.png';
import invest2 from '../../assets/Images/invest2-1.png';
import invest22 from '../../assets/Images/invest2-2.png';
import { MdKeyboardArrowRight } from 'react-icons/md';
import card from '../../assets/Images/card.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Invest = () => {
  const slides = [
    {
      id: 'slide-01',
      title: 'Project detail title 01',
      rating: '4.5',
      reviews: '(100)',
      developer: 'By Test 01 Developers',
      image1: invest1,
      image2: invest12,
      description1:
        'Lorem ipsum dolor sit amet consectetur. Suspendisse quis arcu suspendisse eget interdum vestibulum urna. Vel risus nisi quis sed neque.',
      description2:
        'Ridiculus facilisis ipsum sit eu neque ultricies fusce dolor pellentesque. Eget pellentesque suscipit mattis rutrum.',
    },
    {
      id: 'slide-02',
      title: 'Project detail title 02',
      rating: '4.3',
      reviews: '(100)',
      developer: 'By Test 02 Developers',
      image1: invest2,
      image2: invest22,
      description1:
        'Lorem ipsum dolor sit amet consectetur. Suspendisse quis arcu suspendisse eget interdum vestibulum urna. Vel risus nisi quis sed neque.',
      description2:
        'Ridiculus facilisis ipsum sit eu neque ultricies fusce dolor pellentesque. Eget pellentesque suscipit mattis rutrum.',
    },
    {
      id: 'slide-03',
      title: 'Project detail title 03',
      rating: '4.5',
      reviews: '(100)',
      developer: 'By Test 01 Developers',
      image1: invest1,
      image2: invest12,
      description1:
        'Lorem ipsum dolor sit amet consectetur. Suspendisse quis arcu suspendisse eget interdum vestibulum urna. Vel risus nisi quis sed neque.',
      description2:
        'Ridiculus facilisis ipsum sit eu neque ultricies fusce dolor pellentesque. Eget pellentesque suscipit mattis rutrum.',
    },
  ];

  return (
    <>
      <section className="py-10 md:py-[95px]">
        <div className="relative">
          <div className="absolute top-0 left-0 w-full">
            <img src={bg} alt="Background" className="w-full" />
          </div>
          <div className="container mx-4 lg:mx-0">
            <div className="md:flex justify-between  md:py-[90px] md:px-[70px] mx-4 lg:mx-0">
              {' '}
              <div className="left pb-12">
                <div className="headline pb-[22px]">
                  <h3 className="font-arial font-bold text-[32px] text-[#38a9ff]">
                    High-demand projects to invest now
                  </h3>
                </div>

                {/* Swiper Slider Start */}
                <Swiper
                  modules={[Pagination, Autoplay]}
                  pagination={false}
                  autoplay={{ delay: 2500 }}
                  spaceBetween={30}
                  slidesPerView={2}
                  loop={true}
                  className="w-[790px] pb-12"
                >
                  {slides.map(s => (
                    <SwiperSlide key={s.id}>
                      <div className="item w-[370px]">
                        <h4 className="font-arial font-bold text-xl text-[#072135]">
                          {s.title}
                        </h4>
                        <div className="flex items-center gap-1 pb-[17px]">
                          <TiStarFullOutline className="text-[#FFD900] text-lg" />
                          <h6 className="font-arial font-semibold text-sm text-[#072135] pt-0.5">
                            {s.rating}
                          </h6>
                          <p className="font-arial font-medium text-sm text-[#666666] pt-0.5">
                            {s.reviews}
                          </p>
                          <ul className="ms-6">
                            <li className="list-disc">
                              <p className="font-semibold text-sm text-[#333333] pt-0.5">
                                {s.developer}
                              </p>
                            </li>
                          </ul>
                        </div>
                        <div className="innerItem">
                          <div className="flex gap-5 pb-[19px]">
                            <img src={s.image1} alt="invest" className="w-42" />
                            <img src={s.image2} alt="invest" className="w-42" />
                          </div>
                          <article>
                            <p className="font-arial text-base text-[#333333] leading-[22px]">
                              {s.description1}
                            </p>
                            <p className="font-arial text-base text-[#333333] leading-[22px] pt-8">
                              {s.description2}
                            </p>
                          </article>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                {/* Swiper Slider End */}
              </div>
              <div className="right flex justify-end">
                <div className="w-[335px] rounded-lg bg-[#072135] overflow-hidden h-full relative">
                  <div className="pt-8 ps-[27px] pe-[22px] z-20 relative">
                    <h3 className="text-white text-[22px] font-arial font-bold pb-3.5">
                      Get matched with local projects
                    </h3>
                    <a
                      href="/calculate"
                      className="inline-flex items-center border border-white rounded-sm py-[11px] px-[23px] text-base text-white font-arial font-bold"
                    >
                      Learn more
                      <MdKeyboardArrowRight className="text-white text-xl font-bold ps-1 hidden md:block" />
                    </a>
                  </div>

                  <div className="img w-full md:w-[80%] h-full ">
                    <img
                      src={card}
                      alt="card"
                      className="w-full md:w-[88%] object-cover rounded-tl-[600px] md:rounded-tl-[900px] md:rounded-bl-[200px] md:absolute -bottom-20 md:left-12 "
                    />
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
