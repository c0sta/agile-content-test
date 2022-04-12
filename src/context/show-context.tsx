import React from 'react'
import { Show } from '../interfaces'

type ShowContext = {
  show: Show | null
  setShow: (show: Show) => void
}

export const ShowContext = React.createContext<ShowContext>({} as ShowContext)

const ShowContextProvider: React.FC = ({ children }) => {
  const [showContext, setShowContext] = React.useState<Show>({} as Show)

  const setShow = (show: Show) => setShowContext(show)

  return (
    <ShowContext.Provider
      value={{
        show: showContext,
        setShow,
      }}
    >
      {children}
    </ShowContext.Provider>
  )
}

export default ShowContextProvider
