import style from './Builder.module.scss'
import Select from 'react-select'
import './Selects.scss'
import { useState } from 'react'

const optionsBg = [
  { value: 'TWILIGHT#17%', label: 'TWILIGHT - 17%' },
  { value: 'BLUE_SKY#17%', label: 'BLUE SKY  - 17%' },
  { value: 'SAKURA_FALL#8.5%', label: 'SAKURA FALL - 8.5%' },
  { value: 'SUNSET#17%', label: 'SUNSET - 17%' },
  { value: 'MARS_SKY#5%', label: 'MARS SKY - 5%' },
  { value: 'DRAIN#17%', label: 'DRAIN - 17%' },
  { value: 'RAIN#17%', label: 'RAIN - 17%' },
  { value: 'SKY_DRAIN#5%', label: 'SKY DRAIN - 1.5%' },
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
  { value: 'BLACK_TIES#50%', label: 'BLACK TIES - 50%' },
  { value: 'JEANS#10%', label: 'JEANS - 10%' },
  { value: 'LATEX_RED#1%', label: 'LATEX RED - 1%' },
  { value: 'LATEX_GREEN#1%', label: 'LATEX GREEN - 1%' },
]

const optionsMonth = [
  { value: 'BATMAN#50%', label: 'BATMAN - 50%' },
  { value: 'DEVIL_TONGUE#10%', label: 'DEVIL TONGUE - 10%' },
  { value: 'NONE#1%', label: 'NONE - 1%' },
  { value: 'POISON_TONGUE#1%', label: 'POISON TONGUE - 1%' },
]

const optionsTop = [
  { value: 'GREEN_TOP#50%', label: 'GREEN TOP - 50%' },
  { value: 'GREY_TOP#10%', label: 'GREY TOP - 10%' },
  { value: 'LATEX_TOP#1%', label: 'LATEX TOP - 1%' },
  { value: 'NAKED_BREAST#1%', label: 'NAKED BREAST - 1%' },
]

let SelectItem = ({ setItem, ...props }) => {

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
          setItem(value.value.split('#')[0])
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

  return (
    <>
      <div className={style.builder}>
        <div className="container">
          <div className={style.builderBody}>
            <div className={style.builderBody__col}>
              <div className={style.builderSelects}>
                <SelectItem setItem={setBgName}
                  placeholder="select Background" name="Background" options={optionsBg} />
                <SelectItem setItem={setBodyName}
                  placeholder="select Body" name="Body" options={optionsBody} />
                <SelectItem setItem={setBottomName}
                  placeholder="select Bottom" name="Bottom" options={optionsBottom} />
                <SelectItem setItem={setEyesName}
                  placeholder="select Eyes" name="Eyes" options={optionsEyes} />
                <SelectItem setItem={setGlovesName}
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
            </div>
            <div className={style.builderBody__col}>
              <div className={style.builderSelects}>
                <SelectItem setItem={setHairName}
                  placeholder="select Hair" name="Hair" options={optionsHair} />
                <SelectItem setItem={setItemName}
                  placeholder="select item" name="item" options={optionsItem} />
                <SelectItem setItem={setLegsName}
                  placeholder="select Legs" name="Legs" options={optionsLegs} />
                <SelectItem setItem={setMonthName}
                  placeholder="select Month" name="Month" options={optionsMonth} />
                <SelectItem setItem={setTopName}
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