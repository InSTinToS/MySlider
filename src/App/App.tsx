import React from 'react'
import { Container } from './styles'

import GlobalStyle from 'styles/globalStyle'

import Slider from 'Slider'

const App: React.FC = () => {
  return (
    <Container>
      <Slider />
      <GlobalStyle />
    </Container>
  )
}

export default App
