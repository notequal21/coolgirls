import style from './CoolGirls.module.scss'

// img
import img01 from '../../../assets/img/coolGirls/img01.png'
import img02 from '../../../assets/img/coolGirls/img02.png'
import img03 from '../../../assets/img/coolGirls/img03.png'

let CoolGirls = () => {
  return (
    <>
      <div className={style.girls}>
        <div className="container">
          <div className={style.girls__heading}>
            Game cool gerl
          </div>
          <div className={style.girls__title}>
            Cool girl Staking
          </div>
          <div className={style.girls__desc}>
            Get Girls now to play with in our upcoming game. We are also going to partner with other metaverse games to make your NFT's usuable in other worlds so that you can fully benefit from your art
          </div>
          <div className={style.girlsBody}>
            <div className={style.girlsBody__item}>
              <div className={style.girlsBody__itemBg}></div>
              <div className={style.girlsBody__itemImg}>
                <img src={img01} alt="" />
              </div>
              <div className={style.girlsBody__itemContent}>

                <div className={style.girlsBody__itemName}>
                  Lunadry
                </div>
                <div className={style.girlsBody__itemInfo}>
                  <div className={style.girlsBody__itemInfoItem}>
                    Rarity needed
                    <span>
                      Common+
                    </span>
                  </div>
                  <div className={style.girlsBody__itemInfoItem}>
                    Profit speed
                    <span>
                      10 coolcoin daily
                    </span>
                  </div>
                </div>
                <div className={style.girlsBody__itemBtn}>
                  Let’s go
                </div>
              </div>
            </div>
            <div className={style.girlsBody__item}>
              <div className={style.girlsBody__itemBg}></div>
              <div className={style.girlsBody__itemImg}>
                <img src={img02} alt="" />
              </div>
              <div className={style.girlsBody__itemContent}>

                <div className={style.girlsBody__itemName}>
                  Arean
                </div>
                <div className={style.girlsBody__itemInfo}>
                  <div className={style.girlsBody__itemInfoItem}>
                    Rarity needed
                    <span>
                      Rare+
                    </span>
                  </div>
                  <div className={style.girlsBody__itemInfoItem}>
                    Profit speed
                    <span>
                      30 coolcoin daily
                    </span>
                  </div>
                </div>
                <div className={`${style.girlsBody__itemBtn} ${style.girlsBody__itemBtn_soon}`}>
                  Soon…
                </div>
              </div>
            </div>
            <div className={style.girlsBody__item}>
              <div className={style.girlsBody__itemBg}></div>
              <div className={style.girlsBody__itemImg}>
                <img src={img03} alt="" />
              </div>
              <div className={style.girlsBody__itemContent}>

                <div className={style.girlsBody__itemName}>
                  Cabare
                </div>
                <div className={style.girlsBody__itemInfo}>
                  <div className={style.girlsBody__itemInfoItem}>
                    Rarity needed
                    <span>
                      Super rare+
                    </span>
                  </div>
                  <div className={style.girlsBody__itemInfoItem}>
                    Profit speed
                    <span>
                      100 coolcoin daily
                    </span>
                  </div>
                </div>
                <div className={`${style.girlsBody__itemBtn} ${style.girlsBody__itemBtn_soon}`}>
                  Soon…
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CoolGirls