import { FC, useContext, useEffect, useState } from 'react'
import { TableRow } from './TableRow'
import { RowDataType, getTreeRows } from '../../api/get-tree-rows'
import { EntityContext } from '../../context/EntityContext'

import styles from './Main.module.scss'

const defaultValueList = [
  {
    equipmentCosts: '',
    estimatedProfit: '',
    id: 0,
    machineOperatorSalary: 0,
    mainCosts: '',
    materials: '',
    parentId: null,
    mimExploitation: 0,
    overheads: 0,
    rowName: '',
    salary: 0,
    supportCosts: 0,
  },
]

const Table: FC = () => {
  const { eId } = useContext(EntityContext)
  const [list, setList] = useState<RowDataType[]>([])
  const [refreshToglle, setRefreshToglle] = useState<boolean>(false)
  const [maping, setMaping] = useState<boolean>(false)

  const togleEnter = () => {
    setRefreshToglle(!refreshToglle)
    setMaping(true)
  }

  useEffect(() => {
    if (eId) {
      getTreeRows(eId).then((res) => {
        if (!res) return
        if (maping) {
          setList(res)
        } else {
          setList(defaultValueList)
        }
        if (res.length === 0) {
          setList(defaultValueList)
        }
      })
    }
  }, [eId, refreshToglle])

  return (
    <table className={styles.main_ma}>
      <thead>
        <tr className={styles.tr}>
          <th className={styles.th_level} scope="col">
            Уровень
          </th>
          <th className={styles.th_job} scope="col">
            Наименование работ
          </th>
          <th className={styles.th_main} scope="col">
            Основная з/п
          </th>
          <th className={styles.th_equipment} scope="col">
            Оборудование
          </th>
          <th className={styles.th_Invoices} scope="col">
            Накладные расходы
          </th>
          <th className={styles.th_Invoices} scope="col">
            Сметная прибыль
          </th>
        </tr>
      </thead>
      <tbody>
        {list.map((item) => {
          return (
            <TableRow
              data={item}
              level={0}
              key={item.id}
              eId={eId}
              refresh={togleEnter}
            />
          )
        })}
      </tbody>
    </table>
  )
}

export default Table
