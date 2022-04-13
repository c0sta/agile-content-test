import React, { useState } from 'react'
import { Show } from '../interfaces'

type ShowContext = {
  show: Show | null
  setShow: (show: Show) => void
  setOverlayLoading: (isLoading: boolean) => void
  overlayLoading: boolean
}

export const ShowContext = React.createContext<ShowContext>({} as ShowContext)

const ShowContextProvider: React.FC = ({ children }) => {
  const [showContext, setShowContext] = React.useState<Show>({} as Show)
  const [overlayLoading, setOverlayLoading] = useState(true)

  const setShow = (show: Show) => setShowContext(show)

  const handleSetOverlayLoading = (isLoading: boolean) =>
    setOverlayLoading(isLoading)

  return (
    <ShowContext.Provider
      value={{
        show: showContext,
        setShow,
        setOverlayLoading: handleSetOverlayLoading,
        overlayLoading,
      }}
    >
      {children}
    </ShowContext.Provider>
  )
}

export default ShowContextProvider
