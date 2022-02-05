import style from "./Timer.module.scss"
import { useEffect } from 'react';

let Timer = () => {
  useEffect(() => {

    function getTimeRemaining(endtime) {
      let t = Date.parse(endtime) - Date.parse(new Date());
      let seconds = Math.floor((t / 1000) % 60);
      let minutes = Math.floor((t / 1000 / 60) % 60);
      let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
      let days = Math.floor(t / (1000 * 60 * 60 * 24));
      return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
      };
    }

    function initializeClock(id, endtime) {
      let clock = document.getElementById(id);
      let daysSpan = clock.querySelector('.days');
      let hoursSpan = clock.querySelector('.hours');
      let minutesSpan = clock.querySelector('.minutes');
      let secondsSpan = clock.querySelector('.seconds');

      function updateClock() {
        let t = getTimeRemaining(endtime);

        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
          clearInterval(timeinterval);
        }
      }

      updateClock();
      let timeinterval = setInterval(updateClock, 1000);
    }

    // let deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000); // for endless timer
    let deadline = '2022-03-10'; // for endless timer

    initializeClock('countdown', deadline);
  }, [])
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
                Sale ends March 10, 2022 <br /> at 6:03pm MSK
              </div>
            </div>
            <div id="countdown" className={`${style.timerBody__timer}`}>
              <div className={`${style.timerBody__timerItem}`}>
                <span className="days">0</span>
                <br />
                Days
              </div>
              <div className={`${style.timerBody__timerItem}`}>
                <span className="hours">23</span>
                <br />
                Hours
              </div>
              <div className={`${style.timerBody__timerItem}`}>
                <span className="minutes">11</span>
                <br />
                Minute
              </div>
              <div className={`${style.timerBody__timerItem}`}>
                <span className="seconds">37</span>
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