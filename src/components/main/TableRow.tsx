import { useState } from 'react'
import { createRowInEntity } from '../../api/create-row-in-entity'
import { deleteRow } from '../../api/delete-row'
import { RowDataType } from '../../api/get-tree-rows'
import { updateRowapi } from '../../api/update-row'
import { DeliteIcon } from '../icons/DeleteIcon'
import { EditIcon } from '../icons/EditIcon'
import RawInput from './RawInput'

import styles from './Main.module.scss'

type TypeLala = {
  data: RowDataType
  parentId?: number
  level: number
  eId: any
  refresh: () => void
}

export const TableRow = ({ data, parentId, level, eId, refresh }: TypeLala) => {
  const {
    id,
    rowName,
    child,
    equipmentCosts,
    estimatedProfit,
    materials,
    mainCosts,
  } = data

  const [togle, setTogle] = useState<boolean>(false)

  const [parentChild, setParentChild] = useState<null | number>(null)
  const [inputRowName, setinputRowName] = useState<string | undefined>(rowName)
  const [inputEquipment, setinputEquipment] = useState<string>()
  const [inputProfit, setinputProfit] = useState<string>()
  const [inputMaterials, setInputMaterials] = useState<string>()
  const [inputMainCosts, setInputMainCosts] = useState<string>()

  const [togleInput, setTogleInput] = useState({
    a: false,
    b: false,
    c: false,
    d: false,
    i: false,
  })

  const onhadleChangeRowName: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    setinputRowName(e.target.value)
  }

  const onhadleChangeCosts: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    setinputEquipment(e.target.value)
  }

  const onhadleChangeProfit: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    setinputProfit(e.target.value)
  }

  const onhadleChangeMaterials: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    setInputMaterials(e.target.value)
  }

  const onhadleChangeMainCosts: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    setInputMainCosts(e.target.value)
  }

  const updateRowName = (value?: string) => {
    setinputRowName(value)
    setTogleInput({ ...togleInput, a: !false })
  }

  const updateRowCosts = (value: string | undefined) => {
    setinputEquipment(value)
    setTogleInput({ ...togleInput, b: !false })
  }

  const updateRowProfit = (value: string | undefined) => {
    setinputEquipment(value)
    setTogleInput({ ...togleInput, c: !false })
  }

  const updateRowMaterials = (value: string | undefined) => {
    setinputEquipment(value)
    setTogleInput({ ...togleInput, d: !false })
  }

  const updateRowMainCosts = (value: string | undefined) => {
    setinputEquipment(value)
    setTogleInput({ ...togleInput, i: !false })
  }

  const submitForm: React.KeyboardEventHandler<HTMLInputElement> = async (
    e
  ) => {
    if (
      e.key === 'Enter' &&
      togle === false &&
      inputRowName !== '' &&
      inputEquipment !== '' &&
      inputProfit !== '' &&
      inputMainCosts !== '' &&
      inputMaterials !== ''
    ) {
      await updateRowapi({
        eId,
        id,
        params: {
          ...data,
          rowName: inputRowName ?? '',
          // по желанию
          // equipmentCosts: inputEquipment,
          // estimatedProfit: inputProfit,
          // materials: inputMaterials,
          // mainCosts: inputMainCosts,
        },
      })
      console.log(id)
      setTogleInput({ a: false, b: false, c: false, d: false, i: false })
      refresh()
    } else if (
      e.key === 'Enter' &&
      togle === true &&
      inputRowName !== '' &&
      inputEquipment !== '' &&
      inputProfit !== '' &&
      inputMainCosts !== '' &&
      inputMaterials !== ''
    ) {
      await createRowInEntity({
        eId,
        params: {
          equipmentCosts: inputEquipment,
          estimatedProfit: inputProfit,
          id: 0,
          machineOperatorSalary: 3,
          mainCosts: inputMainCosts,
          materials: inputMaterials,
          parentId: parentChild === 0 ? null : parentChild,
          mimExploitation: 0,
          overheads: 0,
          rowName: inputRowName ?? '',
          salary: 0,
          supportCosts: 0,
          total: 0,
        },
      })
      refresh()
      setTogle(false)
    }
  }

  const deleteRowDel = async (id: any) => {
    await deleteRow({ eId, id })
    refresh()
    if (data === null) {
      console.log('0')
    }
  }

  const addChild = (id: any) => {
    setTogle(!togle)
    if (togle === false) {
      setinputRowName(rowName)
      setinputEquipment('')
      setinputProfit('')
      setInputMaterials('')
      setInputMainCosts('')
    }
    setParentChild(id)
  }

  return (
    <>
      <tr>
        <td className={styles.level_td}>
          <div
            className={`${styles.level_svg_rod}`}
            style={{
              paddingLeft: `${30 + level}px`,
            }}
          >
            <div
              className={`
              ${styles.level_svg}  
              `}
            >
              <div
                className={styles.icon_row}
                style={rowName.length === 0 ? { width: '24px' } : {}}
              >
                {Object.keys(data).length !== 0 && (
                  <EditIcon addChild={addChild} paretChild={id} />
                )}
                {rowName.length !== 0 && (
                  <DeliteIcon deleteChild={deleteRowDel} idChild={id} />
                )}
                {parentId && <div className={styles.svg_left_size} />}
              </div>
            </div>
          </div>
        </td>
        <td
          className={styles.span_name}
          style={{ paddingLeft: `${10 + level}px` }}
        >
          <RawInput
            isActive={togleInput.a}
            rowName={rowName}
            inputRowName={inputRowName}
            onChangeRowName={onhadleChangeRowName}
            submit={submitForm}
            updateRowName={updateRowName}
            togle={togle}
            placeholder="Название работы"
          />
        </td>
        <td className={styles.costs}>
          <RawInput
            isActive={togleInput.b}
            rowName={equipmentCosts}
            inputRowName={inputEquipment}
            onChangeRowName={onhadleChangeCosts}
            submit={submitForm}
            updateRowName={updateRowCosts}
            togle={togle}
            placeholder="Основная з/п(цифры)"
          />
        </td>
        <td className={styles.profit}>
          <RawInput
            isActive={togleInput.c}
            rowName={estimatedProfit}
            inputRowName={estimatedProfit}
            onChangeRowName={onhadleChangeProfit}
            submit={submitForm}
            updateRowName={updateRowProfit}
            togle={togle}
            placeholder="Оборудование(цифры)"
          />
        </td>
        <td className={styles.lots}>
          <RawInput
            isActive={togleInput.d}
            rowName={materials}
            inputRowName={materials}
            onChangeRowName={onhadleChangeMaterials}
            submit={submitForm}
            updateRowName={updateRowMaterials}
            togle={togle}
            placeholder="расходы(цифры)"
          />
        </td>
        <td className={styles.prof}>
          <RawInput
            isActive={togleInput.i}
            rowName={mainCosts}
            inputRowName={mainCosts}
            onChangeRowName={onhadleChangeMainCosts}
            submit={submitForm}
            updateRowName={updateRowMainCosts}
            togle={togle}
            placeholder="прибыль(цифры)"
          />
        </td>
      </tr>
      {child &&
        child.map((item) => (
          <TableRow
            data={item}
            parentId={item.id}
            level={level + 25}
            key={item.id}
            eId={eId}
            refresh={refresh}
          />
        ))}
    </>
  )
}
