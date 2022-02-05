import style from './Builder.module.scss'
import Select from 'react-select'
import './Selects.scss'
import { useState } from 'react'
import Popup from 'reactjs-popup'

const optionsBg = [
  { value: 'TWILIGHT#17%', label: 'TWILIGHT - 17%' },
  { value: 'BLUE_SKY#17%', label: 'BLUE SKY  - 17%' },
  { value: 'SAKURA_FALL#8.5%', label: 'SAKURA FALL - 8.5%' },
  { value: 'SUNSET#17%', label: 'SUNSET - 17%' },
  { value: 'MARS_SKY#5%', label: 'MARS SKY - 5%' },
  { value: 'DRAIN#17%', label: 'DRAIN - 17%' },
  { value: 'RAIN#17%', label: 'RAIN - 17%' },
  { value: 'SKY_DRAIN#1.5%', label: 'SKY DRAIN - 1.5%' },
]

const optionsBody = [
  { value: 'GRAPHITE#1%', label: 'GRAPHITE - 1%' },
  { value: 'BLOODY#4.5%', label: 'BLOODY - 4.5%' },
  { value: 'BLUE#1.5%', label: 'BLUE - 1.5%' },
  { value: 'WIGGA#22%', label: 'WIGGA - 22%' },
  { value: 'SEWED#3%', label: 'SEWED - 3%' },
  { value: 'WHITE#58%', label: 'WHITE - 58%' },
  { value: 'TATOOED#10%', label: 'TATOOED - 10%' },
]

const optionsBottom = [
  { value: 'VALENTINE_TANGA#9%', label: 'VALENTINE TANGA - 9%' },
  { value: 'SKIRT#9%', label: 'SKIRT - 9%' },
  { value: 'BLACK_BRIEFS#18%', label: 'BLACK BRIEFS - 18%' },
  { value: 'GREEN_BRIEFS#18%', label: 'GREEN BRIEFS - 18%' },
  { value: 'PURPLE_TANGA#18%', label: 'PURPLE TANGA - 18%' },
  { value: 'CENSORED#9%', label: 'CENSORED - 9%' },
  { value: 'TANGA#18%', label: 'TANGA - 18%' },
]

const optionsEyes = [
  { value: 'VIOLET_MASK#5%', label: 'VIOLET MASK - 5%' },
  { value: 'ROSE_MASK#5%', label: 'ROSE MASK - 5%' },
  { value: 'WELDER#5%', label: 'WELDER - 5%' },
  { value: 'CATWOMAN#5%', label: 'CATWOMAN - 5%' },
  { value: 'EYES#80%', label: 'EYES - 80%' },
  { value: 'RINNEGAN#1%', label: 'RINNEGAN - 1%' },
]

const optionsGloves = [
  { value: 'GREEN_GLOVES#13%', label: 'GREEN GLOVES - 13%' },
  { value: 'NONE#53%', label: 'NONE - 53%' },
  { value: 'PURPLE_GLOVES#4%', label: 'PURPLE GLOVES - 4%' },
  { value: 'RED_GLOVES#13%', label: 'RED GLOVES - 13%' },
  { value: 'NEON_GLOVES#4%', label: 'NEON GLOVES - 4%' },
  { value: 'BLUE_GLOVES#13%', label: 'BLUE GLOVES - 13%' },
]

const optionsHair = [
  { value: 'NINJA#1%', label: 'NINJA - 1%' },
  { value: 'PANDA#1%', label: 'PANDA - 1%' },
  { value: 'DEEP_PURPLE#0.5%', label: 'DEEP PURPLE - 0.5%' },
  { value: 'PINK_FLOYD#0.5%', label: 'PINK FLOYD - 0.5%' },
  { value: 'TOMATO_HAIRCUT#14%', label: 'TOMATO HAIRCUT - 14%' },
  { value: 'LOVE_NINJA#6%', label: 'LOVE NINJA - 6%' },
  { value: 'MELOMAN#1%', label: 'MELOMAN - 1%' },
  { value: 'KONOCHA#6%', label: 'KONOCHA - 6%' },
  { value: 'CRYSTAL_BLONDE#14%', label: 'CRYSTAL BLONDE - 14%' },
  { value: 'KITTY#14%', label: 'KITTY - 14%' },
  { value: 'PURPLE_CRYSTAL#14%', label: 'PURPLE CRYSTAL - 14%' },
  { value: 'GREEN_SATAN#0.5%', label: 'GREEN SATAN - 0.5%' },
  { value: 'BOW#14%', label: 'BOW - 14%' },
  { value: 'LIME_HAIRCUT#13%', label: 'LIME HAIRCUT - 13%' },
  { value: 'VIOLET_STAR#0.5%', label: 'VIOLET STAR - 0.5%' },
]

const optionsItem = [
  { value: 'NONE#93%', label: 'NONE - 93%' },
  { value: 'DRAKARIS#1%', label: 'DRAKARIS - 1%' },
  { value: 'KATANA#2%', label: 'KATANA - 2%' },
  { value: 'BLOSSOM#3%', label: 'BLOSSOM - 3%' },
  { value: 'MIAU#1%', label: 'MIAU - 1%' },
]

const optionsLegs = [
  { value: 'LATEX_GREEN#16%', label: 'LATEX GREEN - 16%' },
  { value: 'LATEX_RED#16%', label: 'LATEX RED - 16%' },
  { value: 'WHITE_TIES#5.5%', label: 'WHITE TIES - 5.5%' },
  { value: 'BLACK_TIES#5.5%', label: 'BLACK TIES - 5.5%' },
  { value: 'NONE#54%', label: 'NONE - 54%' },
  { value: 'JEANS#3%', label: 'JEANS - 3%' },
]

const optionsMonth = [
  { value: 'SEW#4%', label: 'SEW - 4%' },
  { value: 'BATMAN#7.5%', label: 'BATMAN - 7.5%' },
  { value: 'NONE#75%', label: 'NONE - 75%' },
  { value: 'DEVIL_TONGUE#4%', label: 'DEVIL TONGUE - 4%' },
  { value: 'TAPE#7.5%', label: 'TAPE - 7.5%' },
  { value: 'POISON_TONGUE#2%', label: 'POISON TONGUE - 2%' },
]

const optionsTop = [
  { value: 'PURPLE_TOP#14.7%', label: 'PURPLE TOP - 14.7%' },
  { value: 'RAISED_TOP#7.3%', label: 'RAISED TOP - 7.3%' },
  { value: 'GREY_TOP#14.7%', label: 'GREY TOP - 14.7%' },
  { value: 'RED_BIKINI#14.7%', label: 'RED BIKINI - 14.7%' },
  { value: 'NAKED_BREAST#1.5%', label: 'NAKED BREAST - 1.5%' },
  { value: 'LATEX_TOP#14.7%', label: 'LATEX TOP - 14.7%' },
  { value: 'WHITE_TOP#14.7%', label: 'WHITE TOP - 14.7%' },
  { value: 'GREEN_TOP#14.7%', label: 'GREEN TOP - 14.7%' },
  { value: 'SWIMSUIT#3%', label: 'SWIMSUIT - 3%' },
]

let SelectItem = ({ setItem, summary, setSummary, index, ...props }) => {

  const [itemRare, setItemRare] = useState('')

  return (
    <div className={style.builderSelects__item}>
      <div className={style.builderSelects__itemName}>
        {props.name}
        <span className={`${style.builderSelects__itemLabel} 
        ${itemRare === 'legendary' ? style.builderSelects__itemLabel_legendary : ''}
        ${itemRare === 'upper rare' ? style.builderSelects__itemLabel_uprare : ''}
        ${itemRare === 'rare' ? style.builderSelects__itemLabel_rare : ''}
        ${itemRare === 'common' ? style.builderSelects__itemLabel_common : ''}
        `}>{itemRare}</span>
      </div>
      <Select
        className={style.select}
        classNamePrefix={`builderSelect`}
        placeholder={props.placeholder}
        isSearchable={false}
        options={props.options}
        onChange={(value) => {
          summary[index] = value.value.split('#')[1].split('%')[0] / 100
          // summary[index] = 100 - Number(value.value.split('#')[1].split('%')[0])
          setItem(value.value.split('#')[0])
          setSummary(summary)
          setItemRare(() => {
            if (value.value.split('#')[1].split('%')[0] <= 1) {
              return 'legendary'
            } else if (value.value.split('#')[1].split('%')[0] <= 5 && value.value.split('#')[1].split('%')[0] > 1) {
              return 'upper rare'
            } else if (value.value.split('#')[1].split('%')[0] <= 15 && value.value.split('#')[1].split('%')[0] > 5) {
              return 'rare'
            } else {
              return 'common'
            }
          })
        }}
      />
    </div>
  )
}



let Builder = () => {

  const [bgName, setBgName] = useState('NONE')
  const [bodyName, setBodyName] = useState('NONE')
  const [bottomName, setBottomName] = useState('NONE')
  const [eyesName, setEyesName] = useState('NONE')
  const [glovesName, setGlovesName] = useState('NONE')
  const [hairName, setHairName] = useState('NONE')
  const [itemName, setItemName] = useState('NONE')
  const [legsName, setLegsName] = useState('NONE')
  const [monthName, setMonthName] = useState('NONE')
  const [topName, setTopName] = useState('NONE')

  const [summary, setSummary] = useState([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])
  // const [summary, setSummary] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
  // console.log(summary)
  return (
    <>
      <div className={style.builder}>
        <div className="container">
          <div className={style.builderBody}>
            <div className={style.builderBody__col}>
              <div className={style.builderSelects}>
                <SelectItem setItem={setBgName} index={0} summary={summary} setSummary={setSummary}
                  placeholder="select Background" name="Background" options={optionsBg} />
                <SelectItem setItem={setBodyName} index={1} summary={summary} setSummary={setSummary}
                  placeholder="select Body" name="Body" options={optionsBody} />
                <SelectItem setItem={setBottomName} index={2} summary={summary} setSummary={setSummary}
                  placeholder="select Bottom" name="Bottom" options={optionsBottom} />
                <SelectItem setItem={setEyesName} index={3} summary={summary} setSummary={setSummary}
                  placeholder="select Eyes" name="Eyes" options={optionsEyes} />
                <SelectItem setItem={setGlovesName} index={4} summary={summary} setSummary={setSummary}
                  placeholder="select Gloves" name="Gloves" options={optionsGloves} />
              </div>
            </div>
            <div className={style.builderBody__col}>
              <div className={style.builderBody__preview}>
                <div className={`${style.builderBody__previewItem} ${style.builderBody__previewItem_default}`}>
                  <img src={`/coolgirls/imgs/builder/layers/EmptyGirl.png`} alt="" />
                </div>
                <div className={`${style.builderBody__previewItem} ${style.builderBody__previewItem_bg}`}>
                  <img src={`/coolgirls/imgs/builder/layers/Background/${bgName}.PNG`} alt="" />
                </div>
                <div className={`${style.builderBody__previewItem} ${style.builderBody__previewItem_body}`}>
                  <img src={`/coolgirls/imgs/builder/layers/Body/${bodyName}.PNG`} alt="" />
                </div>
                <div className={`${style.builderBody__previewItem} ${style.builderBody__previewItem_bottom}`}>
                  <img src={`/coolgirls/imgs/builder/layers/Bottom/${bottomName}.PNG`} alt="" />
                </div>
                <div className={`${style.builderBody__previewItem} ${style.builderBody__previewItem_eyes}`}>
                  <img src={`/coolgirls/imgs/builder/layers/Eyes/${eyesName}.PNG`} alt="" />
                </div>
                <div className={`${style.builderBody__previewItem} ${style.builderBody__previewItem_gloves}`}>
                  <img src={`/coolgirls/imgs/builder/layers/Gloves/${glovesName}.PNG`} alt="" />
                </div>
                <div className={`${style.builderBody__previewItem} ${style.builderBody__previewItem_hair}`}>
                  <img src={`/coolgirls/imgs/builder/layers/Hair/${hairName}.PNG`} alt="" />
                </div>
                <div className={`${style.builderBody__previewItem} ${style.builderBody__previewItem_item}`}>
                  <img src={`/coolgirls/imgs/builder/layers/Legendary/${itemName}.PNG`} alt="" />
                </div>
                <div className={`${style.builderBody__previewItem} ${style.builderBody__previewItem_legs}`}>
                  <img src={`/coolgirls/imgs/builder/layers/Legs/${legsName}.PNG`} alt="" />
                </div>
                <div className={`${style.builderBody__previewItem} ${style.builderBody__previewItem_month}`}>
                  <img src={`/coolgirls/imgs/builder/layers/Month/${monthName}.PNG`} alt="" />
                </div>
                <div className={`${style.builderBody__previewItem} ${style.builderBody__previewItem_top}`}>
                  <img src={`/coolgirls/imgs/builder/layers/Top/${topName}.PNG`} alt="" />
                </div>
              </div>
              <div className={style.builderBody__rare}>
                Rarity score: <span>
                  {summary.reduce((prev, next) => prev * next) === 1 ? 0
                    : (-Math.log(summary.reduce((prev, next) => prev * next)) + 2.09).toFixed(2)}
                </span>
                <Popup
                  trigger={
                    <button type="button" className={style.tooltip__trigger}>
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="info-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-info-circle fa-w-16 fa-7x"><path fill="currentColor" d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z" class=""></path></svg>
                    </button>
                  }
                  position={'right center'}
                  on={['hover', 'focus']}
                  arrow={false}
                >
                  <div className={style.tooltipBody}>
                    The higher the rarity score the rarer the girls minimum possible rarity score is 1 while maximum posssible rarity socre is 10000
                  </div>
                </Popup>
              </div>
            </div>
            <div className={style.builderBody__col}>
              <div className={style.builderSelects}>
                <SelectItem setItem={setHairName} index={5} summary={summary} setSummary={setSummary}
                  placeholder="select Hair" name="Hair" options={optionsHair} />
                <SelectItem setItem={setItemName} index={6} summary={summary} setSummary={setSummary}
                  placeholder="select item" name="item" options={optionsItem} />
                <SelectItem setItem={setLegsName} index={7} summary={summary} setSummary={setSummary}
                  placeholder="select Legs" name="Legs" options={optionsLegs} />
                <SelectItem setItem={setMonthName} index={8} summary={summary} setSummary={setSummary}
                  placeholder="select Month" name="Month" options={optionsMonth} />
                <SelectItem setItem={setTopName} index={9} summary={summary} setSummary={setSummary}
                  placeholder="select Top" name="Top" options={optionsTop} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Builder