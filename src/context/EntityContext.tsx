import { ReactNode, useEffect, useState, createContext } from 'react'
import { createEntity } from '../api/create-entity'

type EntityContextProviderType = {
  children: ReactNode
}

type EntityContextType = {
  eId?: string
}

export const EntityContext = createContext<EntityContextType>({})

export default function EntityContextProvider({
  children,
}: EntityContextProviderType) {
  const [eId, setEid] = useState<string>()

  useEffect(() => {
    createEntity().then((res) => {
      setEid(res)
    })
  }, [])

  return (
    <EntityContext.Provider value={{ eId }}>{children}</EntityContext.Provider>
  )
}

// '118107'
