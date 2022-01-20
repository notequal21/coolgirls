import style from './GirlsSlider.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


let GirlsSlider = () => {
  return (
    <>
      <div className={style.slider}>
        <Swiper
          spaceBetween={50}
          slidesPerView={'auto'}
          loop={true}
          centeredSlides={true}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide className={style.slider__slide}>
            {({ isActive }) => (
              <div className={style.sliderItem}>
                <div className={style.sliderItem__img}>

                </div>
                <div className={`${style.sliderItem__content} ${isActive ? style.active : ''}`}>
                  <div className={style.sliderItem__name}>
                    Cool Girl #522
                  </div>
                  <div className={style.sliderItem__info}>
                    <div className={style.sliderItem__infoItem}>
                      Rarity needed
                      <span>
                        Rare+
                      </span>
                    </div>
                    <div className={style.sliderItem__infoItem}>
                      Hatch on
                      <span>
                        December 25th
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </SwiperSlide>


          <SwiperSlide className={style.slider__slide}>
            {({ isActive }) => (
              <div className={style.sliderItem}>
                <div className={style.sliderItem__img}>

                </div>
                <div className={`${style.sliderItem__content} ${isActive ? style.active : ''}`}>
                  <div className={style.sliderItem__name}>
                    Cool Girl #522
                  </div>
                  <div className={style.sliderItem__info}>
                    <div className={style.sliderItem__infoItem}>
                      Rarity needed
                      <span>
                        Rare+
                      </span>
                    </div>
                    <div className={style.sliderItem__infoItem}>
                      Hatch on
                      <span>
                        December 25th
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </SwiperSlide>
          <SwiperSlide className={style.slider__slide}>
            {({ isActive }) => (
              <div className={style.sliderItem}>
                <div className={style.sliderItem__img}>

                </div>
                <div className={`${style.sliderItem__content} ${isActive ? style.active : ''}`}>
                  <div className={style.sliderItem__name}>
                    Cool Girl #522
                  </div>
                  <div className={style.sliderItem__info}>
                    <div className={style.sliderItem__infoItem}>
                      Rarity needed
                      <span>
                        Rare+
                      </span>
                    </div>
                    <div className={style.sliderItem__infoItem}>
                      Hatch on
                      <span>
                        December 25th
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </SwiperSlide>
          <SwiperSlide className={style.slider__slide}>
            {({ isActive }) => (
              <div className={style.sliderItem}>
                <div className={style.sliderItem__img}>

                </div>
                <div className={`${style.sliderItem__content} ${isActive ? style.active : ''}`}>
                  <div className={style.sliderItem__name}>
                    Cool Girl #522
                  </div>
                  <div className={style.sliderItem__info}>
                    <div className={style.sliderItem__infoItem}>
                      Rarity needed
                      <span>
                        Rare+
                      </span>
                    </div>
                    <div className={style.sliderItem__infoItem}>
                      Hatch on
                      <span>
                        December 25th
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </SwiperSlide>

        </Swiper>
      </div>
    </>
  )
}

export default GirlsSlider