import style from "./Timer.module.scss"

let Timer = () => {
  return (
    <>
      <div className={`${style.timer}`}>
        <div className="container">
          <div className={`${style.timerBody}`}>
            <div className={`${style.timerBody__text}`}>
              <div className={`${style.timerBody__textTitle}`}>
                Even Date
              </div>
              <div className={`${style.timerBody__textInfo}`}>
                Sale ends December 28, 2021 <br /> at 6:03pm MSK
              </div>
            </div>
            <div className={`${style.timerBody__timer}`}>
              <div className={`${style.timerBody__timerItem}`}>
                <span>0</span>
                <br />
                Days
              </div>
              <div className={`${style.timerBody__timerItem}`}>
                <span>23</span>
                <br />
                Hours
              </div>
              <div className={`${style.timerBody__timerItem}`}>
                <span>11</span>
                <br />
                Minute
              </div>
              <div className={`${style.timerBody__timerItem}`}>
                <span>37</span>
                <br />
                Seconds
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Timer