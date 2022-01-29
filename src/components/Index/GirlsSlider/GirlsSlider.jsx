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

  const slidesContent = [
    {
      imgUrl: 'coolgirls/IMG.png',
      name: 'Cool Girl #522',
      rare: 'Rare+',
      date: 'December 25th'
    },
    {
      imgUrl: 'coolgirls/IMG.png',
      name: 'Cool Girl #52',
      rare: 'Rare+',
      date: 'December 20th'
    },
    {
      imgUrl: 'coolgirls/IMG.png',
      name: 'Cool Girl #22',
      rare: 'Rare+',
      date: 'December 21th'
    },
    {
      imgUrl: 'coolgirls/IMG.png',
      name: 'Cool Girl #51',
      rare: 'Rare+',
      date: 'December 22th'
    },
    {
      imgUrl: 'coolgirls/IMG.png',
      name: 'Cool Girl #42',
      rare: 'Rare+',
      date: 'December 23th'
    },
    {
      imgUrl: 'coolgirls/IMG.png',
      name: 'Cool Girl #622',
      rare: 'Rare+',
      date: 'December 24th'
    },
    {
      imgUrl: 'coolgirls/IMG.png',
      name: 'Cool Girl #777',
      rare: 'Rare+',
      date: 'December 26th'
    },
  ]

  const slides = slidesContent.map((slide) => <SwiperSlide className={style.slider__slide}>
    {({ isActive }) => (
      <div className={`${style.sliderItem} ${isActive ? style.active : ''}`}>
        <div className={`${style.sliderItem__glow}`}></div>
        <div className={style.sliderItem__img}>
          <img src={slide.imgUrl} alt="" />
        </div>
        <div className={`${style.sliderItem__content} ${isActive ? style.active : ''}`}>
          <div className={style.sliderItem__name}>
            {slide.name}
          </div>
          <div className={style.sliderItem__info}>
            <div className={style.sliderItem__infoItem}>
              Rarity needed
              <span>
                {slide.rare}
              </span>
            </div>
            <div className={style.sliderItem__infoItem}>
              Hatch on
              <span>
                {slide.date}
              </span>
            </div>
          </div>
        </div>
      </div>
    )}
  </SwiperSlide>)

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
          {slides}
        </Swiper>
      </div>
    </>
  )
}

export default GirlsSlider