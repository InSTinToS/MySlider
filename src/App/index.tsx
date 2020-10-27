import React from 'react'
import { Container } from './styles'

import GlobalStyle from 'styles/globalStyle'

import Slider from 'components/Slider'
import Personal from 'components/Cards/Personal'
import Professor from 'components/Cards/Professor'
import Student from 'components/Cards/Student'

import GlobalContext from 'hooks'

const containers = [
  { name: 'Personal', component: <Personal /> },
  { name: 'Professor', component: <Professor /> },
  { name: 'Student', component: <Student /> },
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
        />

        <GlobalStyle />
      </GlobalContext>
    </Container>
  )
}

export default App
