import React, { useRef } from "react";
import styles from "./heroSlide.module.css";
import { interiorArr } from "../../../../data/home/hero/heroSlide";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
// import "swiper/css/navigation";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
// import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";

export default function HeroSlide() {
  const swiperRef = useRef(null);

  const navigateLeft = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const navigateRight = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };
  return (
    <div className={styles.HeroSlide}>
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Autoplay]}
        spaceBetween={0}
        slidesPerView={2}
        navigation
        loop={true}
        autoplay={{
          delay: 3000,
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

        <div className={styles.slideLeft} onClick={navigateLeft}>
          <FaArrowAltCircleLeft style={{ color: "red" }} />
        </div>

        <div className={styles.slideRight} onClick={navigateRight}>
          <FaArrowAltCircleRight />
        </div>
      </Swiper>
    </div>
  );
}
