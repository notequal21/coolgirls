import style from './Builder.module.scss'
import Select from 'react-select'
import './Selects.scss'
import { useState } from 'react'

const optionsBg = [
  { value: 'BLUE_SKY#50%', label: 'BLUE_SKY - 50%' },
  { value: 'DRAIN#10%', label: 'DRAIN - 10%' },
  { value: 'DRAIN#4%', label: 'DRAIN - 4%' },
  { value: 'TWILIGHT#1%', label: 'TWILIGHT - 1%' },
]

const optionsBody = [
  { value: 'BLOODY#50%', label: 'BLOODY - 50%' },
  { value: 'BLUE#10%', label: 'BLUE - 10%' },
  { value: 'GRAPHITE#1%', label: 'GRAPHITE - 1%' },
]

const optionsBottom = [
  { value: 'BLACK_BRIEFS#50%', label: 'BLACK BRIEFS - 50%' },
  { value: 'CENSORED#10%', label: 'CENSORED - 10%' },
  { value: 'GREEN_BRIEFS#1%', label: 'GREEN BRIEFS - 1%' },
]

const optionsEyes = [
  { value: 'CATWOMAN#50%', label: 'CATWOMAN - 50%' },
  { value: 'EYES#10%', label: 'EYES - 10%' },
  { value: 'RINNEGAN#1%', label: 'RINNEGAN - 1%' },
]

const optionsGloves = [
  { value: 'BLUE_GLOVES#50%', label: 'BLUE GLOVES - 50%' },
  { value: 'GREEN_GLOVES#10%', label: 'GREEN GLOVES - 10%' },
  { value: 'NEON_GLOVES#1%', label: 'NEON GLOVES - 1%' },
]

const optionsHair = [
  { value: 'BOW#50%', label: 'BOW - 50%' },
  { value: 'CRYSTAL_BLONDE#10%', label: 'CRYSTAL BLONDE - 10%' },
  { value: 'DEEP_PURPLE#1%', label: 'DEEP PURPLE - 1%' },
]

const optionsItem = [
  { value: 'BLOSSOM#50%', label: 'BLOSSOM - 50%' },
  { value: 'DRAKARIS#10%', label: 'DRAKARIS - 10%' },
  { value: 'KATANA#1%', label: 'KATANA - 1%' },
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