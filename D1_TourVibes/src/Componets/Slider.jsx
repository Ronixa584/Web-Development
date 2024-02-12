import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import './Slider.css'

export const Slider = () => {
  return (
    <div className="relative overflow-hidden  min-h-screen">
      <Swiper
        cssMode={true}
        navigation={true}
        // pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        autoplay={{ delay: 5000 }}
        speed={2000}
        className="p-4"
      >
        
        <SwiperSlide className="flex items-center justify-center">
          <img src="/Mumbai.png" alt="Slide 1" className="w-[900px] h-[460px] rounded-md object-cover" />
                      <div className="absolute bottom-0 left-0 right-0p-2 font-extrabold text-yellow-300 text-center w-full bo">
              Mumbai
            </div>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <img src="/JK.jpg" alt="Slide 2" className="w-[900px] h-[460px] rounded-md object-cover" />
          <div className="absolute bottom-0 left-0 right-0p-2 font-extrabold text-yellow-300 text-center w-full">
              JK
            </div>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <img src="/Agra.jpg" alt="Slide 3" className="w-[900px] h-[460px] rounded-md object-cover" />
          <div className="absolute bottom-0 left-0 right-0p-2 font-extrabold text-yellow-300 text-center w-full">
              Agra
            </div>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <img src="/Goa.jpg" alt="Slide 4" className="w-[900px] h-[460px] rounded-md object-cover" />
          <div className="absolute bottom-0 left-0 right-0p-2 font-extrabold text-yellow-300 text-center w-full">
              Goa
            </div>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <img src="/Sikkim.jpg" alt="Slide 5" className="w-[900px] h-[460px] rounded-md object-cover" />
          <div className="absolute bottom-0 left-0 right-0p-2 font-extrabold text-yellow-300 text-center w-full">
              Sikkim
            </div>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <img src="/Kerla.jpg" alt="Slide 6" className="w-[900px] h-[460px] rounded-md object-cover" />
          <div className="absolute bottom-0 left-0 right-0p-2 font-extrabold text-yellow-300 text-center w-full">
              Kerla
            </div>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <img src="/Amritsar.jpg" alt="Slide 7" className="w-[900px] h-[460px] rounded-md object-cover" />
          <div className="absolute bottom-0 left-0 right-0p-2 font-extrabold text-yellow-300 text-center w-full">
              Amritsar
            </div>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <img src="/WB.jpg" alt="Slide 8" className="w-[900px] h-[460px] rounded-md object-cover" />
          <div className="absolute bottom-0 left-0 right-0p-2 font-extrabold text-yellow-300 text-center w-full">
              West Bengal
            </div>
        </SwiperSlide>
      </Swiper>
            <div className="flex flex-col items-center mt-10">
  <div className="font-bold text-2xl pb-4 sm:text-6xl md:text-7xl lg:text-8xl text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-indigo-700">
    Where Every Journey Tells a Story
  </div>
  <div className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700 mt-4">
    Welcome to TourVibe
  </div>
  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8">
    Explore More
  </button>
</div>
    </div>
  );
};
