import React from 'react'
import { Container } from './styles'

import GlobalStyle from 'styles/globalStyle'

import Slider from 'components/Slider'

import GlobalContext from 'hooks'
import Personal from 'components/Cards/Personal'
import Professor from 'components/Cards/Professor'
import Student from 'components/Cards/Student'

const containers = [
  { component: <Personal /> },
  { component: <Professor /> },
  { component: <Student /> },
]

const App: React.FC = () => {
  return (
    <Container>
      <GlobalContext>
        <Slider
          containers={containers}
          width={550}
          gap={200}
          gapVertical={100}
          quantity={3}
        />

        <GlobalStyle />
      </GlobalContext>
    </Container>
  )
}

export default App
