import React from 'react'
import { Container } from './styles'

import GlobalStyle from 'styles/globalStyle'

import Slider from 'Slider'

import GlobalContext from 'hooks'

const App: React.FC = () => {
  return (
    <Container>
      <GlobalContext>
        <Slider />

        <GlobalStyle />
      </GlobalContext>
    </Container>
  )
}

export default App
