import { api } from './api'
import { RowDataType } from './get-tree-rows'

type UpdateRowParams = {
  params: RowDataType
  eId: string
  id?: string | number
}

export const updateRowapi = async ({ eId, id, params }: UpdateRowParams) => {
  try {
    const result = await api.post(
      `outlay-rows/entity/${eId}/row/${id}/update`,
      params
    )
  } catch (e: any) {
    console.log(e.message)
  }
}
