import React, { useState } from 'react'
import Style, { Container } from './styles'

import { motion } from 'framer-motion'

interface ContainerProps {
  component: React.ReactNode
}

interface SliderProps {
  containers: ContainerProps[]
  width: number
  quantity: number
  gap: number
  gapVertical?: number
}

const Slider: React.FC<SliderProps> = ({
  containers,
  gap,
  width,
  gapVertical = gap,
  quantity,
}) => {
  const [xValue, setXValue] = useState(0)
  const move = width + gap // 750
  const limit =
    quantity % 2 === 0
      ? move * ((quantity - 2) / 2)
      : move * ((quantity - 1) / 2)

  const onLeftClick = () => {
    xValue > -limit && setXValue(xValue - move)
  }

  const onRightClick = () => {
    xValue < limit && setXValue(xValue + move)
  }

  const onDragged = (event: any, info: any) => {
    const maxSwipeToAnimate = 20000
    const offset = info.offset.x
    const velocity = info.velocity.x
    const swipe = Math.abs(offset) * velocity

    if (swipe < -maxSwipeToAnimate) {
      onLeftClick()
    } else if (swipe > maxSwipeToAnimate) {
      onRightClick()
    }
  }

  return (
    <Style gap={`${gap}px`} gapVertical={`${gapVertical}px`}>
      <motion.ul
        id='slider'
        drag='x'
        dragElastic={0}
        dragMomentum={false}
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={onDragged}
      >
        {containers.map(container => (
          <Container
            width={`${width}px`}
            animate={{ x: xValue }}
            transition={{ type: 'tween', duration: 0.5 }}
          >
            {container.component}
          </Container>
        ))}
      </motion.ul>

      <div id='buttons'>
        <button type='button' onClick={onRightClick}>
          left
        </button>

        <button type='button' onClick={onLeftClick}>
          right
        </button>
      </div>
    </Style>
  )
}

export default Slider
