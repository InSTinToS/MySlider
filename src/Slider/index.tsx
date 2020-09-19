import React, { useState } from 'react'
import { Container, Card } from './styles'

import { useSpring } from 'react-spring'
import { useDrag } from 'react-use-gesture'

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max)
}

const Slider: React.FC = () => {
  const [position, setPosition] = useState(0)

  const { x } = useSpring({ x: position * 300 })

  const bind = useDrag(
    ({ swipe: [swipeX] }) => {
      setPosition(prevPosition => clamp(prevPosition + swipeX, -1, 1))
    },
    {
      swipeDistance: [50, 50],
      swipeVelocity: [0.3, 0.3],
    }
  )

  console.log(position)
  return (
    <Container>
      <Card {...bind()} style={{ x }} />
    </Container>
  )
}

export default Slider
