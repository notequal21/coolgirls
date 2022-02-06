import Timer from '../Timer/Timer'
import style from './Main.module.scss'

let Main = () => {
  return (
    <>
      <div id='about' className={`${style.main}`}>
        <div className="container">
          <div className={style.bg__circle}></div>
          <div className={`${style.mainBody}`}>
            <div className={`${style.mainBody__text}`}>
              <div className={`${style.mainBody__textTitle}`}>
                Welcome to <br className={style.br__mobile} /> the <span>Cool</span> <br className={style.br} /> <span>Girls</span> collection
                <div className={style.zverek}>
                  <img src="https://coolgirls.io/imgs/zverek.png" alt="" />
                </div>
              </div>
              <div className={`${style.mainBody__textDesc}`}>
                We are two girls who developed this project, these girls represent something bigger than you think. This first collection is to fund the production of a corresponding 3D collection, which you will be able to use in a play to earn game. We will present you more information about that later on as the project goes on.
              </div>
            </div>
            <div className={`${style.mainBody__btns}`}>
              <div className={`${style.mainBody__btnsItem}`}>
                Reserve your NFT
              </div>
              <a target={`_blank`} href='https://discord.com/invite/VXzzP2J45c' className={`${style.mainBody__btnsItem}`}>
                Discord
              </a>
            </div>
          </div>
        </div>
      </div>
      <Timer />
    </>
  )
}

export default Main