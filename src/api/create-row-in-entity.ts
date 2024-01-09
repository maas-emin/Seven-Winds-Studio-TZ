import { api } from './api'
import { RowDataType } from './get-tree-rows'

type createRowParams = {
  params: RowDataType
  eId: string
}

type DataType = {
  changed: RowDataType[]
  current: RowDataType
}

export const createRowInEntity = async ({ params, eId }: createRowParams) => {
  try {
    const result = await api.post(
      `outlay-rows/entity/${eId}/row/create`,
      params
    )
    const data: DataType[] = result.data
    return data
  } catch (e: any) {
    console.log(e.message)
  }
}
