import { api } from './api'

export type RowDataType = {
  equipmentCosts?: string
  estimatedProfit?: string
  id?: number
  machineOperatorSalary?: number
  mainCosts?: string
  materials?: string
  parentId?: number | string | null
  mimExploitation: number
  overheads: number
  rowName: string
  salary: number
  supportCosts: number
  total?: number
  child?: RowDataType[]
}

export const getTreeRows = async (eId: string) => {
  try {
    const result = await api.get(`outlay-rows/entity/${eId}/row/list`)
    const data: RowDataType[] = result.data
    return data
  } catch (e: any) {
    console.log(e.message)
  }
}
