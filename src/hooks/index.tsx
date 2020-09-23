import React from 'react'

import { MasterCardPositionProvider } from './useMasterCardPosition'

const GlobalProvider: React.FC = ({ children }) => {
  return <MasterCardPositionProvider>{children}</MasterCardPositionProvider>
}

export default GlobalProvider
