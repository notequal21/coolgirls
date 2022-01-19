import Timer from '../Timer/Timer'
import style from './Main.module.scss'

let Main = () => {
  return (
    <>
      <div className={`${style.main}`}>
        <div className="container">
          <div className={`${style.mainBody}`}>
            <div className={`${style.mainBody__text}`}>
              <div className={`${style.mainBody__textTitle}`}>
                Welcome to the <span>Cool</span> <br /> <span>Girls</span> collection
              </div>
              <div className={`${style.mainBody__textDesc}`}>
                We are two girls who developed this project, these girls represent something bigger than you think. This first collection is to fund the production of a corresponding 3D collection, which you will be able to use in a play to earn game. We will present you more information about that later on as the project goes on.
              </div>
            </div>
            <div className={`${style.mainBody__btns}`}>
              <div className={`${style.mainBody__btnsItem}`}>
                Reserve your NFT
              </div>
              <div className={`${style.mainBody__btnsItem}`}>
                Discord
              </div>
            </div>
          </div>
        </div>
      </div>
      <Timer />
    </>
  )
}

export default Main