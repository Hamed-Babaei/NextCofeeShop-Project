import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "@/styles/Slider.module.css";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Autoplay } from "swiper/modules";

import styles from "@/styles/Slider.module.css";

function Slider() {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        className={styles.swiper}
        loop={true}
        delay={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide
          style={{ backgroundImage: 'url("/images/carousel-1.jpg")' }}
          className={styles.swiper_slide}
        >
          <div
            className={`${styles.slider_caption} d-flex flex-column align-items-center justify-content-center`}
          >
            <h2 className="text-primary font-weight-medium m-0">
              We Have Been Serving
            </h2>
            <h1 className="display-1 text-white m-0">COFFEE</h1>
            <h2 className="text-white m-0">* SINCE 1950 *</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{ backgroundImage: 'url("/images/carousel-2.jpg")' }}
          className={styles.swiper_slide}
        >
          <div
            className={`${styles.slider_caption} d-flex flex-column align-items-center justify-content-center`}
          >
            <h2 className="text-primary font-weight-medium m-0">
              We Have Been Serving
            </h2>
            <h1 className="display-1 text-white m-0">COFFEE</h1>
            <h2 className="text-white m-0">* SINCE 1950 *</h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slider;
