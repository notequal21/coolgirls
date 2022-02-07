import style from './MainBtns.module.scss'

let MainBtns = () => {
  return (
    <>
      <div className={`${style.mainBody__btns}`}>
        <div className={`${style.mainBody__btnsItem}`}>
          Reserve your NFT
        </div>
        <a target={`_blank`} href='https://discord.com/invite/VXzzP2J45c' className={`${style.mainBody__btnsItem}`}>
          Discord
        </a>
      </div>
    </>
  )
}

export default MainBtns