import { api } from './api'

type DeleteRowParams = {
  eId: string
  id: string | number
}

export const deleteRow = async ({ eId, id }: DeleteRowParams) => {
  try {
    const result = await api.delete(
      `outlay-rows/entity/${eId}/row/${id}/delete`
    )
  } catch (e: any) {
    console.log(e.message)
  }
}
