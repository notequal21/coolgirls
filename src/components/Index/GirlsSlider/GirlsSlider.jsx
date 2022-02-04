import style from './GirlsSlider.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './sliderStyles.scss';
import "swiper/css/effect-creative"
import SwiperCore, {
  EffectCreative,
  EffectCoverflow,
} from 'swiper';
import { Autoplay } from "swiper";

let GirlsSlider = () => {

  let myEffect: {
    setTranslate: () => {

    },
    setTransition: (duration) => {

    }
  }

  const slidesContent = [
    {
      imgUrl: '385.png',
      name: 'Cool Girl #385',
      rare: 'Rare',
      date: 'December 25th'
    },
    {
      imgUrl: '190.png',
      name: 'Cool Girl #190',
      rare: 'Rare+',
      date: 'December 20th'
    },
    {
      imgUrl: '80.png',
      name: 'Cool Girl #80',
      rare: 'Rare+',
      date: 'December 21th'
    },
    {
      imgUrl: '696.png',
      name: 'Cool Girl #696',
      rare: 'Rare+',
      date: 'December 22th'
    },
    {
      imgUrl: '296.png',
      name: 'Cool Girl #296',
      rare: 'Rare+',
      date: 'December 23th'
    },
    {
      imgUrl: '109.png',
      name: 'Cool Girl #109',
      rare: 'Rare+',
      date: 'December 24th'
    },
    {
      imgUrl: '498.png',
      name: 'Cool Girl #498',
      rare: 'Rare+',
      date: 'December 26th'
    },
    {
      imgUrl: '984.png',
      name: 'Cool Girl #984',
      rare: 'Rare+',
      date: 'December 26th'
    },
    {
      imgUrl: '830.png',
      name: 'Cool Girl #830',
      rare: 'Rare+',
      date: 'December 26th'
    },
    {
      imgUrl: '574.png',
      name: 'Cool Girl #574',
      rare: 'Rare+',
      date: 'December 26th'
    },
    {
      imgUrl: '1505.jpeg',
      name: 'Cool Girl #1505',
      rare: 'Rare+',
      date: 'December 26th'
    },
    {
      imgUrl: '2010.jpeg',
      name: 'Cool Girl #2010',
      rare: 'Rare+',
      date: 'December 26th'
    },
    {
      imgUrl: '3333.jpeg',
      name: 'Cool Girl #3333',
      rare: 'Rare+',
      date: 'December 26th'
    },
    {
      imgUrl: '1857.jpeg',
      name: 'Cool Girl #1857',
      rare: 'Rare+',
      date: 'December 26th'
    },
    {
      imgUrl: '1505.jpeg',
      name: 'Cool Girl #1505',
      rare: 'Rare+',
      date: 'December 26th'
    },
    {
      imgUrl: '1857.jpeg',
      name: 'Cool Girl #1857',
      rare: 'Rare+',
      date: 'December 26th'
    },
    {
      imgUrl: '1.jpeg',
      name: 'Cool Girl #1',
      rare: 'Rare+',
      date: 'December 26th'
    },
    {
      imgUrl: '473.png',
      name: 'Cool Girl #473',
      rare: 'Rare+',
      date: 'December 26th'
    },
  ]

  const slides = slidesContent.map((slide) => <SwiperSlide className={style.slider__slide}>
    {({ isActive }) => (
      <div className={`${style.sliderItem} ${isActive ? style.active : ''}`}>
        <div className={`${style.sliderItem__glow}`}></div>
        <div className={style.sliderItem__img}>
          <img src={`/coolgirls/imgs/girls_slider/${slide.imgUrl}`} alt="" />
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
          modules={[EffectCoverflow, Autoplay]}
          effect={"coverflow"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
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