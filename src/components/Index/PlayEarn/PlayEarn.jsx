import style from './PlayEarn.module.scss'

let PlayEarn = () => {
  return (
    <>
      <div className={style.paly}>
        <div className="container">
          <div className={style.paly__heading}>
            Game cool gerl
          </div>
          <div className={style.paly__title}>
            Play to earn
          </div>
          <div className={style.paly__desc}>
            Get Girls now to play with in our upcoming game. We are also going to partner with other metaverse games to make your NFT's usuable in other worlds so that you can fully benefit from your art
          </div>
          <div className={style.palySlider}>
            slider
          </div>
          <div className={style.palyBottom}>
            <div className={style.palyBottom__col}>
              <div className={style.palyBottom__colTitle}>
                PVP
              </div>
              <div className={style.palyBottom__colDesc}>
                Play to earn game is launched. In the game, you will get a chance to see your girls at work and play with ur girls 18+
              </div>
            </div>
            <div className={style.palyBottom__col}>
              <div className={style.palyBottom__colTitle}>
                Single
              </div>
              <div className={style.palyBottom__colDesc}>
                Play to earn game is launched. In the game, you will get a chance to see your girls at work and play with ur girls 18+
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PlayEarn