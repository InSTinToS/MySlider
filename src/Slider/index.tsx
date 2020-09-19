import React, { useState } from 'react'
import { Container, Card } from './styles'

import * as d3 from 'd3-ease'
import { useTrail } from 'react-spring'
import { useDrag } from 'react-use-gesture'

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max)
}

const cards = [
  {
    name: 'personal',
    key: 1,
  },
  {
    name: 'student',
    key: 1,
  },
  {
    name: 'professor',
    key: 1,
  },
]

const Slider: React.FC = () => {
  const [position, setPosition] = useState(0)

  const trail = useTrail(3, {
    x: position * 600,
    delay: 0,
    config: { mass: 1 },
  })

  const bind = useDrag(
    ({ swipe: [swipeX] }) => {
      setPosition(prevPosition => clamp(prevPosition + swipeX, -1, 1))
    },
    {
      swipeDistance: 0,
      swipeVelocity: 0,
    }
  )

  return (
    <Container>
      {trail.map((props, index) => (
        <Card key={cards[index].key} {...bind()} style={props}>
          {cards[index].name}
        </Card>
      ))}
    </Container>
  )
}

export default Slider
