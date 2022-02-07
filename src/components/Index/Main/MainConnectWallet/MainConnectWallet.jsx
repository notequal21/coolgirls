import style from './MainConnectWallet.module.scss'

let MainConnectWallet = () => {
  return (
    <>
      <div className={`${style.mainBody__btns}`}>
        <div className={`${style.mainBody__btnsItem}`}>
          Reserve your NFT
        </div>
        <div className={`${style.mainBody__btnsItem}`}>
          <div className={`${style.mainBody__btnsValue}`}>
            <span>679</span> of 777
          </div>
          <div className={`${style.mainBody__btnsLabel}`}>
            Remaining:
          </div>
        </div>
      </div>
    </>
  )
}

export default MainConnectWallet