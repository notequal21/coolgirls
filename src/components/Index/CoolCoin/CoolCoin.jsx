import style from './CoolCoin.module.scss'

// imgs
import img from '../../../assets/img/coolcoin/img@2x.png'

let CoolCoin = () => {
  return (
    <>
      <div className={style.coin}>
        <div className="container">
          <div className={style.coinBody}>
            <div className={style.coinBody__col}>
              <div className={style.coinBody__title}>
                Cool coin
              </div>
              <div className={style.coinBody__desc}>
                We perform Cool Coin for our community to trade earn and have fun! This is millionair coin for daily use. Earn coin in our games and then get real $$.  <button>Open Statistic</button>
              </div>
              <div className={style.coinBody__btns}>
                <div className={style.coinBody__btnsItem}>
                  Token Aubit
                </div>
                <div className={style.coinBody__btnsItem}>
                  Tokenomics
                </div>
              </div>
            </div>
            <div className={style.coinBody__col}>
              <div className={style.coinBody__colGlow}></div>
              <div className={style.coinBody__img}>
                <img src={img} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CoolCoin