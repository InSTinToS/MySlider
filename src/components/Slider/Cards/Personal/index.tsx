import React from 'react'
import Style from './styles'

import { Header } from '../index'

import ChangeSetter from 'components/ChangeSetter'

const Personal: React.FC = () => {
  return (
    <Style>
      <Header>Dados Pessoais</Header>

      <form>
        <ChangeSetter label='Nome:' value='Miguel' />
        <ChangeSetter label='Sobrenome:' value='Andrade' />
        <ChangeSetter label='E-mail:' value='miguelandradebarreto2@gmail.com' />
        <ChangeSetter label='Nascimento:' value='19/08/2001' />
        <ChangeSetter label='Senha:' value='**********' />
      </form>
    </Style>
  )
}

export default Personal
