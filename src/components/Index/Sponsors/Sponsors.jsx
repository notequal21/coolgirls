import style from './Sponsors.module.scss'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode"

let Sponsors = () => {
  return (
    <>
      <div className={style.sponsors}>
        <Swiper
          slidesPerView={'auto'}
          spaceBetween={90}
          className="mySwiper"
          loop={true}
          grabCursor={true}
        >
          <SwiperSlide className={style.sponsors__item}>Sponsor 1</SwiperSlide>
          <SwiperSlide className={style.sponsors__item}>Sponsor 2</SwiperSlide>
          <SwiperSlide className={style.sponsors__item}>Sponsor 3</SwiperSlide>
          <SwiperSlide className={style.sponsors__item}>Sponsor 4</SwiperSlide>
          <SwiperSlide className={style.sponsors__item}>Sponsor 5</SwiperSlide>
          <SwiperSlide className={style.sponsors__item}>Sponsor 6</SwiperSlide>
          <SwiperSlide className={style.sponsors__item}>Sponsor 7</SwiperSlide>
          <SwiperSlide className={style.sponsors__item}>Sponsor 8</SwiperSlide>
          <SwiperSlide className={style.sponsors__item}>Sponsor 9</SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}

export default Sponsors