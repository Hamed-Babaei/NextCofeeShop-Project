import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "@/styles/Slider.module.css";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

function Slider() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slider;
