'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

type Props = {};

const slides: number[] = Array.from({ length: 15 }, (_, index) => index + 1);

const Carousel = (props: Props) => {
  return (
    <Swiper
      // spaceBetween={20}
      // slidesPerView={4}
      slidesPerView={1}
      spaceBetween={10}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      }}
      modules={[Pagination, Autoplay]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
        el: '.swiper-custom-pagination',
      }}
      className="relative"
    >
      {slides.map((index) => (
        <SwiperSlide key={index}>
          <div className="relative  h-40 ">
            <Image
              src={`/img/${
                (index + 1) % 2 === 0 ? 'first' : 'second'
              }_carousel.webp`}
              alt={`Carousel Image ${index + 1}`}
              fill
              sizes="100%"
            />
          </div>
        </SwiperSlide>
      ))}
      <div className="swiper-custom-pagination flex items-center justify-center gap-4 mt-5" />
    </Swiper>
  );
};

export default Carousel;
