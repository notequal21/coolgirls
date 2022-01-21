import style from './GirlsSlider.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './sliderStyles.scss';
import "swiper/css/effect-creative"
import SwiperCore, {
  EffectCreative
} from 'swiper';

SwiperCore.use([EffectCreative]);

let GirlsSlider = () => {
  return (
    <>
      <div className={`${style.slider} girlsSlider`}>
        <Swiper
          grabCursor={true}
          spaceBetween={50}
          slidesPerView={'auto'}
          loop={true}
          initialSlide={2}
          centeredSlides={true}
          // onSlideChange={(swiper) => console.log(swiper, swiper.activeIndex, swiper.slides[swiper.activeIndex - 2], swiper.slides[swiper.activeIndex + 2].style)}
          // effect={'creative'}
          // limitProgress={3}
          creativeEffect={{
            prev: {
              translate: ['calc(-100% - 50px)', '10%', 0],
              rotate: [0, 0, -10],
              origin: 'center',
              // opacity?: number;
              // scale: 0.4,
              // shadow?: boolean;
              isActive: false
            },
            next: {
              translate: ['calc(100% + 50px)', '10%', 0],
              rotate: [0, 0, 10],
              origin: 'center',
            },
          }}
        // onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide className={style.slider__slide}>
            {({ isActive }) => (
              <div className={`${style.sliderItem} ${isActive ? style.active : ''}`}>
                <div className={`${style.sliderItem__glow}`}></div>
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
              <div className={`${style.sliderItem} ${isActive ? style.active : ''}`}>
                <div className={`${style.sliderItem__glow}`}></div>
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
              <div className={`${style.sliderItem} ${isActive ? style.active : ''}`}>
                <div className={`${style.sliderItem__glow}`}></div>
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
              <div className={`${style.sliderItem} ${isActive ? style.active : ''}`}>
                <div className={`${style.sliderItem__glow}`}></div>
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
              <div className={`${style.sliderItem} ${isActive ? style.active : ''}`}>
                <div className={`${style.sliderItem__glow}`}></div>
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