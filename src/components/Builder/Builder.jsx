import style from './Builder.module.scss'
import Select from 'react-select'
import './Selects.scss'

const optionsBG = [
  { value: 'WHITE', label: 'WHITE - 58%' },
  { value: 'GRAPHITE', label: 'GRAPHITE - 1%' },
  { value: 'BLUE', label: 'BLUE - 1.5%' }
]

let SelectItem = (props) => {
  return (
    <div className={style.builderSelects__item}>
      <div className={style.builderSelects__itemName}>
        {props.name}
        <span className={style.builderSelects__itemLabel}></span>
      </div>
      <Select
        className={style.select}
        classNamePrefix={`builderSelect`}
        placeholder={props.placeholder}
        isSearchable={false}
        options={props.options}
      />
    </div>
  )
}



let Builder = () => {
  return (
    <>
      <div className={style.builder}>
        <div className="container">
          <div className={style.builderBody}>
            <div className={style.builderBody__col}>
              <div className={style.builderSelects}>
                <SelectItem placeholder="select Background" name="Background" options={optionsBG} />
                <SelectItem placeholder="select Body" name="Body" options={optionsBG} />
                <SelectItem placeholder="select Bottom" name="Bottom" options={optionsBG} />
                <SelectItem placeholder="select Eyes" name="Eyes" options={optionsBG} />
                <SelectItem placeholder="select Gloves" name="Gloves" options={optionsBG} />
              </div>
            </div>
            <div className={style.builderBody__col}>
              <div className={style.builderBody__preview}>

              </div>
            </div>
            <div className={style.builderBody__col}>
              <div className={style.builderSelects}>
                <SelectItem placeholder="select Hair" name="Hair" options={optionsBG} />
                <SelectItem placeholder="select item" name="item" options={optionsBG} />
                <SelectItem placeholder="select Legs" name="Legs" options={optionsBG} />
                <SelectItem placeholder="select Month" name="Month" options={optionsBG} />
                <SelectItem placeholder="select Top" name="Top" options={optionsBG} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Builder