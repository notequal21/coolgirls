import style from './Sponsors.module.scss'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode"
import "./SponsorsSlider.scss"

let Sponsors = () => {
  return (
    <>
      <div className={`${style.sponsors} sponsorsSlider`}>
        <Swiper
          slidesPerView={'auto'}
          spaceBetween={90}
          className="mySwiper"
          loop={true}
          grabCursor={true}
        >
          <SwiperSlide className={style.sponsors__item}><img src={'https://coolgirls.io/imgs/sponsors/logo-1.png'} alt="" /></SwiperSlide>
          <SwiperSlide className={style.sponsors__item}><img src={'https://coolgirls.io/imgs/sponsors/logo-2.png'} alt="" /></SwiperSlide>
          <SwiperSlide className={style.sponsors__item}><img src={'https://coolgirls.io/imgs/sponsors/logo-3.png'} alt="" /></SwiperSlide>
          <SwiperSlide className={style.sponsors__item}><img src={'https://coolgirls.io/imgs/sponsors/logo-4.png'} alt="" /></SwiperSlide>
          <SwiperSlide className={style.sponsors__item}><img src={'https://coolgirls.io/imgs/sponsors/logo-5.png'} alt="" /></SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}

export default Sponsors