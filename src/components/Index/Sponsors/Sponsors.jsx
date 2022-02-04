import style from './Sponsors.module.scss'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode"
import "./SponsorsSlider.scss"

import sponsorIco01 from '../../../assets/img/sponsors/logo-1@2x.png'
import sponsorIco02 from '../../../assets/img/sponsors/logo-2@2x.png'
import sponsorIco03 from '../../../assets/img/sponsors/logo-3@2x.png'
import sponsorIco04 from '../../../assets/img/sponsors/logo-4@2x.png'
import sponsorIco05 from '../../../assets/img/sponsors/logo-5@2x.png'
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
          <SwiperSlide className={style.sponsors__item}><img src={sponsorIco02} alt="" /></SwiperSlide>
          <SwiperSlide className={style.sponsors__item}><img src={sponsorIco01} alt="" /></SwiperSlide>
          <SwiperSlide className={style.sponsors__item}><img src={sponsorIco03} alt="" /></SwiperSlide>
          <SwiperSlide className={style.sponsors__item}><img src={sponsorIco04} alt="" /></SwiperSlide>
          <SwiperSlide className={style.sponsors__item}><img src={sponsorIco05} alt="" /></SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}

export default Sponsors