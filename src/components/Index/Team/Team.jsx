import style from './Team.module.scss'
import { Element } from 'react-scroll'

// imgs
// import img from '../../../assets/img/coolGirls/img01.png'

let Team = () => {
  return (
    <>
      <Element name='team' className={style.team}>
        <div className="container">
          <div className={style.team__title}>
            Team
          </div>
          <div className={style.teamBody}>
            <div className={style.teamBody__item}>
              <div className={style.teamBody__itemImg}>
                <img src={`https://coolgirls.io/imgs/team/julia.jpg`} alt="" />
              </div>
              <div className={style.teamBody__itemName}>
                <span>Julia Mironova</span>
                <a href='#./' className={style.teamBody__itemLink}>
                  <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" ><path fill="#FFFFFF" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>
                </a>
              </div>
              <div className={style.teamBody__itemPos}>
                Founder + Artist
              </div>
            </div>
            <div className={style.teamBody__item}>
              <div className={style.teamBody__itemImg}>
                <img src={'https://coolgirls.io/imgs/team/anna.jpg'} alt="" />
              </div>
              <div className={style.teamBody__itemName}>
                <span>Anna Marlow</span>
              </div>
              <div className={style.teamBody__itemPos}>
                Founder
              </div>
            </div>
            <div className={style.teamBody__item}>
              <div className={style.teamBody__itemImg}>
                <img src={'https://coolgirls.io/imgs/team/nikolay.jpg'} alt="" />
              </div>
              <div className={style.teamBody__itemName}>
                <span>Nikolay Vronsky</span>
              </div>
              <div className={style.teamBody__itemPos}>
                Developer
              </div>
            </div>
            <div className={style.teamBody__item}>
              <div className={style.teamBody__itemImg}>
                <img src={'https://coolgirls.io/imgs/team/george.jpg'} alt="" />
              </div>
              <div className={style.teamBody__itemName}>
                <span>George</span>
                <a href='#./' className={style.teamBody__itemLink}>
                  <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" ><path fill="#FFFFFF" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" ></path></svg>
                </a>
              </div>
              <div className={style.teamBody__itemPos}>
                Founder
              </div>
            </div>
          </div>
        </div>
      </Element>
    </>
  )
}

export default Team