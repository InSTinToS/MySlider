import React from 'react'
import { Container } from './styles'
import { Header } from '../cards'

import ChangeSetter from 'components/ChangeSetter'

import avatar from 'assets/avatar.jpg'

const Professor: React.FC = () => {
  return (
    <Container>
      <Header>Dados do professor</Header>

      <img src={avatar} alt='avatar' />

      <form>
        <ChangeSetter label='Nome:' value='Miguel' />
        <ChangeSetter label='Sobrenome:' value='Andrade' />
        <ChangeSetter label='E-mail:' value='miguelandradebarreto2@gmail.com' />
        <ChangeSetter label='Nascimento:' value='19/08/2001' />
        <ChangeSetter label='Senha:' value='**********' />
      </form>
    </Container>
  )
}

export default Professor