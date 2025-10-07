import React, { useRef, useState } from "react";
import Image from "next/image";
import { imageList } from "./imageList";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

const CatouselAbout = () => {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        navigation={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {imageList.map((img) => {
          return (
            <SwiperSlide key={img}>
              <div className="image-wrapper">
                <Image
                  src={`/about/${img}`}
                  alt={`Bild natura`}
                  fill
                  className="rounded-md"
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default CatouselAbout;
