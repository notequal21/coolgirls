import style from './Roadmap.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './RoadmapSlider.scss';
import { useEffect, useState } from 'react';

import { Element } from 'react-scroll'

let Roadmap = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
    window.addEventListener('resize', () => {
      if (window.innerWidth <= 1200) {
        setIsMobile(true)
      } else {
        setIsMobile(false)
      }
    })

    let roadmapItems = document.querySelectorAll(`.${style.roadmapBody__item}`)
    let roadmapBgItem = document.querySelector(`.${style.roadmapBody__bgItem}`)

    let animCheker = () => {
      const roadmap = document.querySelector(`.${style.roadmap}`)
      if (roadmap.getBoundingClientRect().top < 270) {
        roadmapBgItem.style = `transform: translate(-50%, ${-roadmap.getBoundingClientRect().top + 200}px)`
      } else {
        roadmapBgItem.style = `transform: translate(-50%, -65px)`
      }
      roadmapItems.forEach((item, index) => {
        if ((item.getBoundingClientRect().top) <= (window.scrollY * 0.25)) {
          item.classList.add(style.active)
        } else {
          item.classList.remove(style.active)
        }
      })
    }
    animCheker()
    document.addEventListener('scroll', animCheker)

  }, [])

  return (
    <>
      <Element name='roadmap' className={style.roadmap}>
        <div className="container">
          <div className={style.roadmapText}>
            <div className={style.roadmapText__title}>
              Roadmap
            </div>
            <div className={style.roadmapText__desc}>
              Family of <span>3333</span> sexy girls that wish to spread love with us. There will be giveaways, minting whitelist and a lot more so try to stay on top of things by following our channels
            </div>
          </div>
          <div className={`${style.roadmapBody} roadmapSlider`}>
            <div className={style.roadmapBody__bg}>
              <img src={`https://coolgirls.io/imgs/roadmap/bg-line.png`} alt="" />
              <img src={`https://coolgirls.io/imgs/roadmap/bg.png`} alt="" />
              <div className={style.roadmapBody__bgItem}>

              </div>
              {/* <svg width="814" height="207" viewBox="0 0 814 207" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient x1="80.498%" y1="44.745%" x2="86.088%" y2="54.815%" id="j2njodw41a">
                    <stop stop-color="#BF1AA6" offset="0%" />
                    <stop stop-color="#48C8EE" offset="100%" />
                  </linearGradient>
                </defs>
                <path d="M1142.868 1860.046a1.5 1.5 0 0 1-.736 2.908c-351.978-89.107-617.62-40.1-797.133 146.914l5.009 4.665a1.133 1.133 0 0 1-.376 1.891l-17.526 6.544a1.133 1.133 0 0 1-1.484-1.381l5.28-17.948a1.133 1.133 0 0 1 1.86-.51l5.046 4.7 4.361-4.51c180.276-184.188 445.577-231.91 795.7-143.273z" transform="translate(-330 -1816)" fill="url(#j2njodw41a)" fill-rule="nonzero" />
              </svg>
              <svg width="835" height="1458" viewBox="0 0 835 1458" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient x1="33.056%" y1="13.57%" x2="50%" y2="100%" id="a">
                    <stop stop-color="#FFF" stop-opacity="0" offset="0%" />
                    <stop stop-color="#FFF" stop-opacity="0" offset="2.9%" />
                    <stop stop-color="#FFF" offset="2.977%" />
                    <stop stop-color="#FFF" offset="100%" />
                  </linearGradient>
                </defs>
                <path d="M1142 1861.5c-385.667-96.073-663.5-32.74-833.5 190 255-92.707 634.084 75.736 689.5 430-202.168-73.5-452.118-48.5-514.5 302 281.5-92.14 417.69 215.016 244 500" transform="translate(-308 -1826)" stroke="url(#a)" fill="none" fill-rule="evenodd" opacity=".4" stroke-dasharray="10,10" stroke-linecap="round" stroke-linejoin="round" />
              </svg> */}
            </div>
            {isMobile ? <Swiper
              spaceBetween={20}
              // slidesPerView={1}
              slidesPerView={"auto"}
              centeredSlides={true}
              autoHeight={false}
              initialSlide={1}
            >
              <SwiperSlide className={`${style.roadmapBody__itemContent} `}>
                <div className={`${style.roadmapBody__itemCircle} `}></div>
                {/* <div className={`${ style.roadmapBody__itemContent } `}> */}
                <div className={`${style.roadmapBody__item} ${style.roadmapBody__item_ended} `}>

                  <div className={style.roadmapBody__itemIco}>
                    <img src={'https://coolgirls.io/imgs/roadmap/icoSoon.png'} alt="" />
                  </div>
                  <div className={style.roadmapBody__itemPrice}>
                    0.3 SOL
                  </div>
                  <div className={style.roadmapBody__itemCount}>
                    777 SOLD OUT
                  </div>
                  <div className={style.roadmapBody__itemDesc}>
                    We do not like white lists that's why to reward early adopters the most we will distribute 777 out of 3333 COOL GIRLS for 0.3 SOL in the first minting round
                  </div>
                  <div className={style.roadmapBody__itemDivider}></div>
                  <div className={`${style.roadmapBody__itemDate} `}>
                    Ended November 16, 2021
                  </div>
                </div>
                <div className={style.roadmapBody__plan}>
                  <div className={`${style.roadmapBody__planItem} ${style.roadmapBody__planItem_completed} `}>
                    November project Launch
                  </div>
                  <div className={`${style.roadmapBody__planItem} ${style.roadmapBody__planItem_completed} `}>
                    Verification on solsea and digitaleyes
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className={`${style.roadmapBody__itemContent} `}>
                <div className={style.roadmapBody__itemCircle}></div>
                <div className={`${style.roadmapBody__item} ${style.roadmapBody__item_life} `}>

                  <div className={style.roadmapBody__itemLabel}>
                    Life
                  </div>
                  <div className={style.roadmapBody__itemIco}>
                    <img src={'https://coolgirls.io/imgs/roadmap/icoLife.png'} alt="" />
                  </div>
                  <div className={style.roadmapBody__itemPrice}>
                    1.0 SOL
                  </div>
                  <div className={style.roadmapBody__itemCount}>
                    888 cool girls
                  </div>
                  <div className={style.roadmapBody__itemDesc}>
                    At the second minting round, we will allow 888 COOL GIRLS to be minted for 1 SOL. It will facilitate price growth of previously minted NFTs and allow people who missed out first minting round to get their GIRLS
                  </div>
                  <div className={style.roadmapBody__itemDivider}></div>
                  <button className={`${style.roadmapBody__itemBtn} `}>
                    MINT now
                  </button>
                </div>
                <div className={style.roadmapBody__plan}>
                  <div className={`${style.roadmapBody__planItem} ${style.roadmapBody__planItem_wip} `}>
                    Launch of  Cool Marketplace
                  </div>
                  <div className={`${style.roadmapBody__planItem} ${style.roadmapBody__planItem_life} `}>
                    Issue of Cool Coin and airdrop to the NFT holders
                  </div>
                  <div className={`${style.roadmapBody__planItem} ${style.roadmapBody__planItem_soon} `}>
                    Release of NFT staking pools <br /> (February 21, 2022)
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className={`${style.roadmapBody__itemContent} `}>
                <div className={style.roadmapBody__itemCircle}></div>
                <div className={`${style.roadmapBody__item} ${style.roadmapBody__item_soon} `}>
                  <div className={style.roadmapBody__itemIco}>
                    <img src={'https://coolgirls.io/imgs/roadmap/icoSoon.png'} alt="" />
                  </div>
                  <div className={style.roadmapBody__itemPrice}>
                    2.0 SOL
                  </div>
                  <div className={style.roadmapBody__itemCount}>
                    999 cool girls
                  </div>
                  <div className={style.roadmapBody__itemDesc}>
                    The second mining round is the penultimate mint before COOL GIRLS will be officially listed on the most reputable SOLANA blockchain marketplaces. In the 3rd minting round 999 COOL GIRLS will be minted for 2 SOL each
                  </div>
                  <div className={style.roadmapBody__itemDivider}></div>
                  <div className={`${style.roadmapBody__itemDate} `}>
                    Start after January 8, 2022 <br /> (March 1, 2022)
                  </div>
                </div>
                <div className={style.roadmapBody__plan}>
                  <div className={`${style.roadmapBody__planItem} ${style.roadmapBody__planItem_soon} `}>
                    P2E Game single player mode releasе
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className={`${style.roadmapBody__itemContent} `}>
                <div className={style.roadmapBody__itemCircle}></div>
                <div className={`${style.roadmapBody__item} ${style.roadmapBody__item_soon} `}>
                  <div className={style.roadmapBody__itemIco}>
                    <img src={'https://coolgirls.io/imgs/roadmap/icoSoon.png'} alt="" />
                  </div>
                  <div className={style.roadmapBody__itemPrice}>
                    3.0 SOL
                  </div>
                  <div className={style.roadmapBody__itemCount}>
                    669 cool girls
                  </div>
                  <div className={style.roadmapBody__itemDesc}>
                    After the last minting round in the next couple of days, the COOL GIRLS collection will be listed on marketplaces such as DigitalEyes, and MagicEden. We are currently in contact with Solanart so it is also a possibility
                  </div>
                  <div className={style.roadmapBody__itemDivider}></div>
                  <div className={`${style.roadmapBody__itemDate} `}>
                    Start after January 8, 2022
                  </div>
                </div>
                <div className={style.roadmapBody__plan}>
                  <div className={`${style.roadmapBody__planItem} ${style.roadmapBody__planItem_soon} `}>
                    Listing on Dextools and Solsea (NFT <br /> (January 8, 2022)
                  </div>
                  <div className={`${style.roadmapBody__planItem} ${style.roadmapBody__planItem_soon} `}>
                    hashes are sent to the exchanges <br /> (January 8, 2022)
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className={`${style.roadmapBody__itemContent} `}>
                <div className={style.roadmapBody__itemCircle}></div>
                <div className={`${style.roadmapBody__item} ${style.roadmapBody__item_soon} `}>
                  <div className={style.roadmapBody__itemTitle}>
                    Cool girl games
                  </div>
                  <div className={style.roadmapBody__itemDesc}>
                    Play to earn game is launched. In the game, you will get a chance to see your girls at work and play with ur girls 18+
                  </div>
                  <div className={style.roadmapBody__itemDivider}></div>
                  <button className={`${style.roadmapBody__itemBtn} `}>
                    Play!
                  </button>
                </div>
                <br />
              </SwiperSlide>
            </Swiper>
              : <>
                {/* <RoadmapItemDesctop classType={style.roadmapBody__item_ended}
                  icon={icoSoon} price={`0.3 SOL`} soldout={`777 SOLD OUT`}
                  desc={`We do not like white lists that's why to reward early adopters the most we will distribute 777 out of 3333 COOL GIRLS for 0.3 SOL in the first minting round`}
  date = {`Ended November 16, 2021`
} planClassType = { style.roadmapBody__planItem_completed } pla
/> */}
                <div className={`${style.roadmapBody__item} ${style.roadmapBody__item_ended}`}>
                  <div className={style.roadmapBody__itemCircle}></div>
                  <div className={style.roadmapBody__itemIco}>
                    <img src={'https://coolgirls.io/imgs/roadmap/icoSoon.png'} alt="" />
                  </div>
                  <div className={style.roadmapBody__itemPrice}>
                    0.3 SOL
                  </div>
                  <div className={style.roadmapBody__itemCount}>
                    777 SOLD OUT
                  </div>
                  <div className={style.roadmapBody__itemDesc}>
                    We do not like white lists that's why to reward early adopters the most we will distribute 777 out of 3333 COOL GIRLS for 0.3 SOL in the first minting round
                  </div>
                  <div className={style.roadmapBody__itemDivider}></div>
                  <div className={`${style.roadmapBody__itemDate}`}>
                    Ended November 16, 2021
                  </div>
                  <div className={style.roadmapBody__plan}>
                    <div className={`${style.roadmapBody__planItem} ${style.roadmapBody__planItem_completed}`}>
                      November project Launch
                    </div>
                    <div className={`${style.roadmapBody__planItem} ${style.roadmapBody__planItem_completed}`}>
                      Verification on solsea and digitaleyes
                    </div>
                  </div>
                </div>
                <div className={`${style.roadmapBody__item} ${style.roadmapBody__item_life}`}>
                  <div className={style.roadmapBody__itemCircle}></div>
                  <div className={style.roadmapBody__itemLabel}>
                    Life
                  </div>
                  <div className={style.roadmapBody__itemIco}>
                    <img src={'https://coolgirls.io/imgs/roadmap/icoLife.png'} alt="" />
                  </div>
                  <div className={style.roadmapBody__itemPrice}>
                    1.0 SOL
                  </div>
                  <div className={style.roadmapBody__itemCount}>
                    888 cool girls
                  </div>
                  <div className={style.roadmapBody__itemDesc}>
                    At the second minting round, we will allow 888 COOL GIRLS to be minted for 1 SOL. It will facilitate price growth of previously minted NFTs and allow people who missed out first minting round to get their GIRLS
                  </div>
                  <div className={style.roadmapBody__itemDivider}></div>
                  <button className={`${style.roadmapBody__itemBtn}`}>
                    MINT now
                  </button>
                  <div className={style.roadmapBody__plan}>
                    <div className={`${style.roadmapBody__planItem} ${style.roadmapBody__planItem_soon}`}>
                      Launch of  Cool Marketplace <br />
                      (February 7, 2022)
                    </div>
                    <div className={`${style.roadmapBody__planItem} ${style.roadmapBody__planItem_soon}`}>
                      Issue of Cool Coin and airdrop to the NFT holders <br /> (February 10, 2022)
                    </div>
                    <div className={`${style.roadmapBody__planItem} ${style.roadmapBody__planItem_soon}`}>
                      Release of NFT staking pools <br /> (February 21, 2022)
                    </div>
                  </div>
                </div>
                <div className={`${style.roadmapBody__item} ${style.roadmapBody__item_soon}`}>
                  <div className={style.roadmapBody__itemCircle}></div>
                  <div className={style.roadmapBody__itemIco}>
                    <img src={'https://coolgirls.io/imgs/roadmap/icoSoon.png'} alt="" />
                  </div>
                  <div className={style.roadmapBody__itemPrice}>
                    2.0 SOL
                  </div>
                  <div className={style.roadmapBody__itemCount}>
                    999 cool girls
                  </div>
                  <div className={style.roadmapBody__itemDesc}>
                    The second mining round is the penultimate mint before COOL GIRLS will be officially listed on the most reputable SOLANA blockchain marketplaces. In the 3rd minting round 999 COOL GIRLS will be minted for 2 SOL each
                  </div>
                  <div className={style.roadmapBody__itemDivider}></div>
                  <div className={`${style.roadmapBody__itemDate}`}>
                    Start after January 8, 2022
                  </div>
                  <div className={style.roadmapBody__plan}>
                    <div className={`${style.roadmapBody__planItem} ${style.roadmapBody__planItem_soon}`}>
                      P2E Game single player mode releasе <br /> (March 1, 2022)
                    </div>
                  </div>
                </div>
                <div className={`${style.roadmapBody__item} ${style.roadmapBody__item_soon}`}>
                  <div className={style.roadmapBody__itemCircle}></div>
                  {/* <div className={style.roadmapBody__itemTitle}>
                    listed on marketplaces
                  </div> */}
                  <div className={style.roadmapBody__itemIco}>
                    <img src={'https://coolgirls.io/imgs/roadmap/icoSoon.png'} alt="" />
                  </div>
                  <div className={style.roadmapBody__itemPrice}>
                    3.0 SOL
                  </div>
                  <div className={style.roadmapBody__itemCount}>
                    669 cool girls
                  </div>
                  <div className={style.roadmapBody__itemDesc}>
                    After the last minting round in the next couple of days, the COOL GIRLS collection will be listed on marketplaces such as DigitalEyes, and MagicEden. We are currently in contact with Solanart so it is also a possibility
                  </div>
                  <div className={style.roadmapBody__itemDivider}></div>
                  <div className={`${style.roadmapBody__itemDate}`}>
                    Start after January 8, 2022
                  </div>
                  <div className={style.roadmapBody__plan}>
                    <div className={`${style.roadmapBody__planItem} ${style.roadmapBody__planItem_soon}`}>
                      Listing on Dextools and Solsea (NFT) <br /> (January 28, 2022)
                    </div>
                    <div className={`${style.roadmapBody__planItem} ${style.roadmapBody__planItem_soon}`}>
                      hashes are sent to the exchanges <br /> (January 29, 2022)
                    </div>
                  </div>
                </div>
                <div className={`${style.roadmapBody__item} ${style.roadmapBody__item_soon}`}>
                  <div className={style.roadmapBody__itemCircle}></div>
                  <div className={style.roadmapBody__itemTitle}>
                    Cool girl games
                  </div>
                  <div className={style.roadmapBody__itemDesc}>
                    Play to earn game is launched. In the game, you will get a chance to see your girls at work and play with ur girls 18+
                  </div>
                  <div className={style.roadmapBody__itemDivider}></div>
                  <button className={`${style.roadmapBody__itemBtn}`}>
                    Play!
                  </button>
                </div>
              </>
            }
          </div >
        </div >
      </Element >
    </>
  )
}

// let RoadmapItemDesctop = (props) => {
//   return (
//     <>
//       <div className={`${style.roadmapBody__item} ${props.classType}`}>
//         <div className={style.roadmapBody__itemCircle}></div>
//         <div className={style.roadmapBody__itemIco}>
//           <img src={props.icon} alt="" />
//         </div>
//         <div className={style.roadmapBody__itemPrice}>
//           {props.price}
//         </div>
//         <div className={style.roadmapBody__itemCount}>
//           {props.soldout}
//         </div>
//         <div className={style.roadmapBody__itemDesc}>
//           {props.desc}
//         </div>
//         <div className={style.roadmapBody__itemDivider}></div>
//         <div className={`${style.roadmapBody__itemDate}`}>
//           {props.date}
//         </div>
//         <div className={style.roadmapBody__plan}>
//           <div className={`${style.roadmapBody__planItem} ${props.planClassType}`}>
//             November project Launch
//           </div>
//           <div className={`${style.roadmapBody__planItem} ${style.roadmapBody__planItem_completed}`}>
//             Verification on solsea and digitaleyes
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

export default Roadmap