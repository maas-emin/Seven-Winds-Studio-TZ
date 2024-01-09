import { api } from './api'

type EntityDataType = {
  id: string
  rowName: string
}

export const createEntity = async () => {
  try {
    const result = await api.post('outlay-rows/entity/create')
    const data: EntityDataType = result.data
    return data.id
  } catch (e: any) {
    console.log(e.message)
  }
}
