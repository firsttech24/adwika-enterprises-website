import React from "react";
import styles from "./heroSlide.module.css";
import { interiorArr } from "../../../../data/home/hero/heroSlide";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function HeroSlide() {
  return (
    <div className={styles.HeroSlide}>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        onSwiper={swiper => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className={styles.swiper}
      >
        {interiorArr?.map((img, index) => (
          <SwiperSlide key={index} className={styles.swiperSlide}>
            <div className={styles.imgContainer}>
              <img src={img} alt="interior" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
