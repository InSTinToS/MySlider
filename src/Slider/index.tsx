import React, { useState } from 'react'
import { Container, Card, Header, Personal } from './styles'

import ChangeSet from 'components/ChangeSet'

import avatar from 'assets/avatar.jpg'

import { useSprings } from 'react-spring'
import { useDrag } from 'react-use-gesture'

const cards = [
  {
    name: 'Pessoal',
    key: 1,
  },
  {
    name: 'Estudante',
    key: 2,
  },
  {
    name: 'Professor',
    key: 3,
  },
  {
    name: 'Outro',
    key: 4,
  },
  {
    name: 'Outro',
    key: 5,
  },
]

interface SliderProps {
  cardsQuant?: number
  cardWidth?: number
  gap?: number
}

const Slider: React.FC<SliderProps> = ({
  cardWidth = 550,
  cardsQuant = 3,
  gap = 250,
}) => {
  const [position, setPosition] = useState(0)
  const totalMove = cardWidth + gap

  const springs = useSprings(
    cardsQuant,
    cards.map(() => ({
      x: position,
    }))
  )

  const bind = useDrag(
    ({ offset: [offx] }) => {
      setPosition(offx)
    },
    {
      bounds: {
        left: -totalMove * (cardsQuant - 2),
        right: totalMove * (cardsQuant - 2),
      },
    }
  )

  return (
    <Container>
      {springs.map((props, index) => {
        switch (index) {
          case 0:
            return (
              <Personal key={cards[index].key} {...bind()} style={props}>
                <Header>Informações Pessoais</Header>

                <img src={avatar} alt='avatar' />

                <form>
                  <ChangeSet label='Nome:' value='Miguel' />
                  <ChangeSet label='Sobrenome:' value='Andrade' />
                  <ChangeSet
                    label='E-mail:'
                    value='miguelandradebarreto2@gmail.com'
                  />
                  <ChangeSet label='Nascimento:' value='19/08/2001' />
                  <ChangeSet label='Senha:' value='**********' />
                </form>
              </Personal>
            )

          default:
            return (
              <Card key={cards[index].key} {...bind()} style={props}>
                {cards[index].name}
              </Card>
            )
        }
      })}
    </Container>
  )
}

export default Slider
