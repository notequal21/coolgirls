import './Popup.scss'
import style from './CoolCoin.module.scss'
import Popup from 'reactjs-popup'
import { ResponsiveLine } from '@nivo/line'
import { Element } from 'react-scroll'

// imgs
import img from '../../../assets/img/coolcoin/img@2x.png'
import radial from '../../../assets/img/modal/radial.png'
import closeIco from '../../../assets/img/modal/closeIco.png'


const data = [
  {
    "id": "Liquidity provision",
    "color": "#000",
    "data": [
      {
        "x": "Jan",
        "y": 0
      },
      {
        "x": "Feb",
        "y": 10
      },
      {
        "x": "Mar",
        "y": 20
      },
      {
        "x": "Apr",
        "y": 25
      },
      {
        "x": "May",
        "y": 30
      },
      {
        "x": "June",
        "y": 40
      },
      {
        "x": "July",
        "y": 45
      },
      {
        "x": "Aug",
        "y": 50
      },
      {
        "x": "Sept",
        "y": 60
      },
      {
        "x": "Oct",
        "y": 65
      },
      {
        "x": "Nov",
        "y": 70
      },
      {
        "x": "Dec",
        "y": 100
      }
    ]
  },
  {
    "id": "NFT staking rewards",
    "color": "hsl(145, 70%, 50%)",
    "data": [
      {
        "x": "Jan",
        "y": 0
      },
      {
        "x": "Feb",
        "y": 10
      },
      {
        "x": "Mar",
        "y": 15
      },
      {
        "x": "Apr",
        "y": 30
      },
      {
        "x": "May",
        "y": 40
      },
      {
        "x": "June",
        "y": 45
      },
      {
        "x": "July",
        "y": 50
      },
      {
        "x": "Aug",
        "y": 60
      },
      {
        "x": "Sept",
        "y": 70
      },
      {
        "x": "Oct",
        "y": 80
      },
      {
        "x": "Nov",
        "y": 90
      },
      {
        "x": "Dec",
        "y": 100
      }
    ]
  },
  {
    "id": "Play to Earn (Single player rewards)",
    "color": "hsl(217, 70%, 50%)",
    "data": [
      {
        "x": "Jan",
        "y": 0
      },
      {
        "x": "Feb",
        "y": 10
      },
      {
        "x": "Mar",
        "y": 15
      },
      {
        "x": "Apr",
        "y": 10
      },
      {
        "x": "May",
        "y": 10
      },
      {
        "x": "June",
        "y": 10
      },
      {
        "x": "July",
        "y": 10
      },
      {
        "x": "Aug",
        "y": 50
      },
      {
        "x": "Sept",
        "y": 10
      },
      {
        "x": "Oct",
        "y": 10
      },
      {
        "x": "Nov",
        "y": 10
      },
      {
        "x": "Dec",
        "y": 100
      }
    ]
  },
  {
    "id": "Airdrop to NFT holders",
    "color": "hsl(239, 70%, 50%)",
    "data": [
      {
        "x": "Jan",
        "y": 0
      },
      {
        "x": "Feb",
        "y": 10
      },
      {
        "x": "Mar",
        "y": 10
      },
      {
        "x": "Apr",
        "y": 10
      },
      {
        "x": "May",
        "y": 10
      },
      {
        "x": "June",
        "y": 10
      },
      {
        "x": "July",
        "y": 50
      },
      {
        "x": "Aug",
        "y": 10
      },
      {
        "x": "Sept",
        "y": 10
      },
      {
        "x": "Oct",
        "y": 10
      },
      {
        "x": "Nov",
        "y": 10
      },
      {
        "x": "Dec",
        "y": 100
      }
    ]
  },
  {
    "id": "Developer tokens (Locked)",
    "color": "hsl(234, 70%, 50%)",
    "data": [
      {
        "x": "Jan",
        "y": 0
      },
      {
        "x": "Feb",
        "y": 10
      },
      {
        "x": "Mar",
        "y": 10
      },
      {
        "x": "Apr",
        "y": 10
      },
      {
        "x": "May",
        "y": 10
      },
      {
        "x": "June",
        "y": 50
      },
      {
        "x": "July",
        "y": 10
      },
      {
        "x": "Aug",
        "y": 10
      },
      {
        "x": "Sept",
        "y": 10
      },
      {
        "x": "Oct",
        "y": 10
      },
      {
        "x": "Nov",
        "y": 10
      },
      {
        "x": "Dec",
        "y": 100
      }
    ]
  }
]

let CoolCoin = () => {
  return (
    <>
      <Element name='coolcoin' className={style.coin}>
        <div className="container">
          <div className={style.coinBody}>
            <div className={style.coinBody__col}>
              <div className={style.coinBody__title}>
                Cool coin
              </div>
              <div className={style.coinBody__desc}>
                We perform Cool Coin for our community to trade earn and have fun! This is millionair coin for daily use. Earn coin in our games and then get real $$.
                <Popup trigger={<button>Open Statistic</button>} modal>
                  {close => (
                    <div className={style.modal}>
                      <div onClick={close} className={style.modal__close}>
                        <img src={closeIco} alt="" />
                      </div>
                      <div className={style.modalBody}>
                        <div className={style.modalBody__col}>
                          <div className={style.modalBody__colTitle}>
                            Allocation
                          </div>
                          <div className={style.modalBody__item}>
                            <StatItem part='4%' name='Developer tokens (Locked)' />
                            <StatItem part='8%' name='Airdrop to NFT holders' />
                            <StatItem part='25%' name='Liquidity provision' />
                            <StatItem part='10%' name='Arena' />
                            <StatItem part='10%' name='Cabare' />
                            <StatItem part='10%' name='Laundry' />
                            <StatItem part='30%' name='NFT staking rewards' />
                            <StatItem part='33%' name='Play to Earn (Single player rewards) ' />
                            <div className={style.modalBody__itemImg}>
                              <img src={radial} alt="" />
                            </div>
                          </div>
                        </div>
                        <div className={style.modalBody__col}>
                          <div className={style.modalBody__colTitle}>
                            Unlock Schebule
                          </div>
                          <div className={`${style.modalBody__item} ${style.modalBody__item_line}`}>
                            <ResponsiveLine
                              data={data}
                              margin={{ top: 10, right: 10, bottom: 20, left: 34 }}
                              xScale={{ type: 'point' }}
                              yScale={{
                                type: 'linear',
                                min: 0,
                                max: 100,
                                stacked: false,
                                reverse: false
                              }}
                              axisTop={null}
                              axisRight={null}
                              axisBottom={{
                                orient: 'bottom',
                                tickSize: 5,
                                tickPadding: 5,
                                tickRotation: 0,
                                legend: '',
                                legendOffset: 36,
                                legendPosition: 'middle'
                              }}
                              axisLeft={{
                                orient: 'left',
                                tickSize: 5,
                                tickPadding: 5,
                                tickRotation: 0,
                                legend: '',
                                legendOffset: -40,
                                legendPosition: 'middle'
                              }}
                              enableGridX={false}
                              enableGridY={false}
                              colors={{ scheme: 'category10' }}
                              lineWidth={1}
                              enablePoints={false}
                              pointSize={10}
                              colors={['#772cd2', '#5bace3', '#e4178f', '#6465de', '#956bbe']}
                              colorBy='index'
                              pointBorderWidth={7}
                              pointBorderColor={{ from: 'serieColor' }}
                              pointLabelYOffset={24}
                              enableCrosshair={false}
                              useMesh={true}
                            // height='380'
                            // width='560'
                            />
                            <div className={style.modalLegends}>
                              <LegendItem color="#772cd2" name='Liquidity provision' />
                              <LegendItem color="#5bace3" name='NFT staking rewards' />
                              <LegendItem color="#e4178f" name='Play to Earn (Single player rewards)' />
                              <LegendItem color="#6465de" name='Airdrop to NFT holders' />
                              <LegendItem color="#956bbe" name='Developer tokens (Locked)' />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </Popup>
              </div>
              <div className={style.coinBody__btns}>
                <div className={style.coinBody__btnsItem}>
                  Token Aubit
                </div>
                <Popup trigger={<button className={style.coinBody__btnsItem}>Tokenomics</button>} modal>
                  {close => (
                    <div className={style.modal}>
                      <div onClick={close} className={style.modal__close}>
                        <img src={closeIco} alt="" />
                      </div>
                      <div className={style.modalBody}>
                        <div className={style.modalBody__col}>
                          <div className={style.modalBody__colTitle}>
                            Allocation
                          </div>
                          <div className={style.modalBody__item}>
                            <StatItem part='4%' name='Developer tokens (Locked)' />
                            <StatItem part='8%' name='Airdrop to NFT holders' />
                            <StatItem part='25%' name='Liquidity provision' />
                            <StatItem part='10%' name='Arena' />
                            <StatItem part='10%' name='Cabare' />
                            <StatItem part='10%' name='Laundry' />
                            <StatItem part='30%' name='NFT staking rewards' />
                            <StatItem part='33%' name='Play to Earn (Single player rewards) ' />
                            <div className={style.modalBody__itemImg}>
                              <img src={radial} alt="" />
                            </div>
                          </div>
                        </div>
                        <div className={style.modalBody__col}>
                          <div className={style.modalBody__colTitle}>
                            Unlock Schebule
                          </div>
                          <div className={`${style.modalBody__item} ${style.modalBody__item_line}`}>
                            <ResponsiveLine
                              data={data}
                              margin={{ top: 10, right: 10, bottom: 20, left: 34 }}
                              xScale={{ type: 'point' }}
                              yScale={{
                                type: 'linear',
                                min: 0,
                                max: 100,
                                stacked: false,
                                reverse: false
                              }}
                              axisTop={null}
                              axisRight={null}
                              axisBottom={{
                                orient: 'bottom',
                                tickSize: 5,
                                tickPadding: 5,
                                tickRotation: 0,
                                legend: '',
                                legendOffset: 36,
                                legendPosition: 'middle'
                              }}
                              axisLeft={{
                                orient: 'left',
                                tickSize: 5,
                                tickPadding: 5,
                                tickRotation: 0,
                                legend: '',
                                legendOffset: -40,
                                legendPosition: 'middle'
                              }}
                              enableGridX={false}
                              enableGridY={false}
                              colors={{ scheme: 'category10' }}
                              lineWidth={1}
                              enablePoints={false}
                              pointSize={10}
                              colors={['#772cd2', '#5bace3', '#e4178f', '#6465de', '#956bbe']}
                              colorBy='index'
                              pointBorderWidth={7}
                              pointBorderColor={{ from: 'serieColor' }}
                              pointLabelYOffset={24}
                              enableCrosshair={false}
                              useMesh={true}
                            // height='380'
                            // width='560'
                            />
                            <div className={style.modalLegends}>
                              <LegendItem color="#772cd2" name='Liquidity provision' />
                              <LegendItem color="#5bace3" name='NFT staking rewards' />
                              <LegendItem color="#e4178f" name='Play to Earn (Single player rewards)' />
                              <LegendItem color="#6465de" name='Airdrop to NFT holders' />
                              <LegendItem color="#956bbe" name='Developer tokens (Locked)' />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </Popup>
                {/* <div className={style.coinBody__btnsItem}>
                  Tokenomics
                </div> */}
              </div>
            </div>
            <div className={style.coinBody__col}>
              <div className={style.coinBody__colGlow}></div>
              <div className={style.coinBody__img}>
                <img src={img} alt="" />
              </div>
            </div>
          </div>
        </div>
      </Element>
    </>
  )
}

let StatItem = (props) => {
  return (
    <div className={style.modalBody__stat}>
      <div className={style.modalBody__statPart}>
        {props.part}
      </div>
      <div className={style.modalBody__statName}>
        {props.name}
      </div>
      <div className={style.modalBody__statLine}>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}

let LegendItem = (props) => {
  return (
    <div className={style.modalLegends__item}>
      <span style={{
        backgroundColor: `${props.color}`,
      }}></span> {props.name}
    </div >
  )
}

export default CoolCoin