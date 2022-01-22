import style from './Builder.module.scss'

let Builder = () => {
  return (
    <>
      <div className={style.builder}>
        <div className="container">
          <div className={style.builderBody}>
            <div className={style.builderBody__col}>
              <div className={style.builderBody__selects}>
                <div className={style.builderBody__selectsItem}>

                </div>
              </div>
            </div>
            <div className={style.builderBody__col}>
              <div className={style.builderBody__preview}>

              </div>
            </div>
            <div className={style.builderBody__col}>
              <div className={style.builderBody__selects}>
                <div className={style.builderBody__selectsItem}>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Builder