import style from './Roadmap.module.scss'

let Roadmap = () => {
  return (
    <>
      <div className={style.roadmap}>
        <div className="container">
          <div className={style.roadmapText}>
            <div className={style.roadmapText__title}>
              Roadmap
            </div>
            <div className={style.roadmapText__desc}>
              Family of <span>3333</span> sexy girls that wish to spread love with us. There will be giveaways, minting whitelist and a lot more so try to stay on top of things by following our channels
            </div>
          </div>
          <div className={style.roadmapBody}>
            <div className={style.roadmapBody__bg}>
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
              </svg>
            </div>
            <div className={`${style.roadmapBody__item} ${style.roadmapBody__item_ended}`}>
              <div className={style.roadmapBody__itemCircle}></div>
              <div className={style.roadmapBody__itemIco}>

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

              </div>
              <div className={style.roadmapBody__itemPrice}>
                1.0 SOL
              </div>
              <div className={style.roadmapBody__itemCount}>
                888 cool girl
              </div>
              <div className={style.roadmapBody__itemDesc}>
                At the second minting round, we will allow 888 COOL GIRLS to be minted for 1 SOL. It will facilitate price growth of previously minted NFTs and allow people who missed out first minting round to get their GIRLS
              </div>
              <div className={style.roadmapBody__itemDivider}></div>
              <button className={`${style.roadmapBody__itemBtn}`}>
                MINT now
              </button>
              <div className={style.roadmapBody__plan}>
                <div className={`${style.roadmapBody__planItem} ${style.roadmapBody__planItem_wip}`}>
                  Launch of  Cool Marketplace
                </div>
                <div className={`${style.roadmapBody__planItem} ${style.roadmapBody__planItem_life}`}>
                  Issue of Cool Coin and airdrop to the NFT holders
                </div>
                <div className={`${style.roadmapBody__planItem} ${style.roadmapBody__planItem_soon}`}>
                  Release of NFT staking pools
                </div>
              </div>
            </div>
            <div className={`${style.roadmapBody__item} ${style.roadmapBody__item_soon}`}>
              <div className={style.roadmapBody__itemCircle}></div>
              <div className={style.roadmapBody__itemIco}>

              </div>
              <div className={style.roadmapBody__itemPrice}>
                2.0 SOL
              </div>
              <div className={style.roadmapBody__itemCount}>
                777 cool girl
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
                  P2E Game single player mode releasе
                </div>
              </div>
            </div>
            <div className={`${style.roadmapBody__item} ${style.roadmapBody__item_soon}`}>
              <div className={style.roadmapBody__itemCircle}></div>
              <div className={style.roadmapBody__itemTitle}>
                listed on marketplaces
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
                  Listing on Dextools and Solsea (NFT
                </div>
                <div className={`${style.roadmapBody__planItem} ${style.roadmapBody__planItem_soon}`}>
                  hashes are sent to the exchanges
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
          </div>
        </div>
      </div>
    </>
  )
}

export default Roadmap