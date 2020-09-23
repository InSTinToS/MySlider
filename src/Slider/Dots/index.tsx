import React, { useState } from 'react'
import Style, { Dot } from './styles'

import { useSpring } from 'react-spring'

interface DotsProps {
  onLeftClick: () => void
  onRightClick: () => void
  size?: number
  gap?: number
  cardsQuant: number
}

const Dots: React.FC<DotsProps> = ({
  onLeftClick,
  onRightClick,
  size = 16,
  gap = 20,
  cardsQuant,
}) => {
  const styles = {
    size: `${size}px`,
    gap: `${gap}px`,
  }

  const maxMove = size + gap
  const [position, setPosition] = useState(0)
  const limits = cardsQuant % 2 === 0 ? cardsQuant / 2 : (cardsQuant - 1) / 2

  const [move, setMove] = useState('')

  const [left, setLeft] = useSpring(() => ({
    transform: 'translate(0px)',
    opacity: 1,
    reset: true,

    from: {
      transform: 'translateX(0px)',
      opacity: 1,
    },
  }))

  const [center, setCenter] = useSpring(() => ({
    transform: 'translate(0px) scale(1.4)',
    reset: true,

    from: {
      transform: 'translateX(0px)  scale(1)',
    },
  }))

  const [right, setRight] = useSpring(() => ({
    transform: 'translate(0px)',
    reset: true,
    opacity: 1,

    from: {
      opacity: 1,
      transform: 'translateX(0px)',
    },
  }))

  const [newRight, setNewRight] = useSpring(() => ({
    transform: 'translate(0px)',
    opacity: 0,
    reset: true,

    from: {
      transform: 'translateX(0px)',
      opacity: 0,
    },
  }))

  const [newLeft, setNewLeft] = useSpring(() => ({
    transform: 'translate(0px)',
    opacity: 0,
    reset: true,

    from: {
      transform: 'translateX(0px)',
      opacity: 0,
    },
  }))

  const rightClick = () => {
    if (position < limits) {
      setPosition(prev => prev + 1)
      setMove('right')
      onRightClick()

      setNewRight({
        transform: `translate(-${maxMove}px) scale(1)`,
        opacity: 1,

        from: {
          transform: 'translateX(0px) scale(1)',
          opacity: 0,
        },
      })

      setRight({
        transform: `translate(-${maxMove}px)  scale(1.4)`,
        opacity: 1,

        from: {
          opacity: 1,
          transform: 'translateX(0px) scale(1)',
        },
      })

      setCenter({
        transform: `translate(-${maxMove}px)  scale(1)`,

        from: {
          transform: 'translateX(0px) scale(1.4)',
        },
      })

      setLeft({
        transform: `translate(-${maxMove}px)  scale(1)`,
        opacity: 0,

        from: {
          transform: 'translateX(0px) scale(1)',
          opacity: 1,
        },
      })

      setNewLeft({
        opacity: 0,
        config: {
          duration: move === 'right' ? 1 : 0,
        },
      })
    }
  }

  const leftClick = () => {
    if (position > -limits) {
      setPosition(prev => prev - 1)
      setMove('left')
      onLeftClick()

      setNewRight({
        opacity: 0,
        config: {
          duration: move === 'left' ? 1 : 0,
        },
      })

      setRight({
        transform: `translate(${maxMove}px)  scale(1)`,
        opacity: 0,

        from: {
          opacity: 1,
          transform: 'translateX(0px) scale(1)',
        },
      })

      setCenter({
        transform: `translate(${maxMove}px)  scale(1)`,

        from: {
          transform: 'translateX(0px) scale(1.4)',
        },
      })

      setLeft({
        transform: `translate(${maxMove}px)  scale(1.4)`,
        opacity: 1,

        from: {
          transform: 'translateX(0px) scale(1)',
          opacity: 1,
        },
      })

      setNewLeft({
        transform: `translate(${maxMove}px) scale(1)`,
        opacity: 1,

        from: {
          transform: 'translateX(0px) scale(1)',
          opacity: 0,
        },
      })
    }
  }

  return (
    <Style {...styles}>
      <Dot id='newLeft' style={newLeft} onClick={leftClick}>
        {' '}
      </Dot>

      <Dot
        id='left'
        style={left}
        onClick={() => move !== 'left' && leftClick()}
      >
        {' '}
      </Dot>

      <Dot
        id='center'
        style={center}
        onClick={() => (move !== 'left' ? leftClick() : rightClick())}
      >
        {' '}
      </Dot>

      <Dot
        id='right'
        style={right}
        onClick={() => move !== 'right' && rightClick()}
      >
        {' '}
      </Dot>

      <Dot id='newRight' style={newRight} onClick={rightClick}>
        {' '}
      </Dot>
    </Style>
  )
}

export default Dots
