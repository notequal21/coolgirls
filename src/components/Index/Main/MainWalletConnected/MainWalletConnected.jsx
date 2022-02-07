import style from './MainWalletConnected.module.scss'

let MainWalletConnected = () => {
  return (
    <>
      <div className={`${style.mainBody__btns}`}>
        <div className={`${style.mainBody__btnsItem}`}>
          Mint Now
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
      <div className={`${style.wallet}`}>
        <div className={`${style.wallet__item}`}>
          Wallet: <span>1D…za7fn9s</span>
        </div>
        <div className={`${style.wallet__divider}`}></div>
        <div className={`${style.wallet__item}`}>
          Balance: <span>13.4 SOL</span>
        </div>
      </div>
    </>
  )
}

export default MainWalletConnected