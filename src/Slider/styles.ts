import styled from 'styled-components'
import { animated } from 'react-spring'

interface StyleProps {
  cardWidth: string
  gap: string
}

export const Animation = styled(animated.div)``

const Style = styled(animated.div)<StyleProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  ${Animation} {
    height: 650px;
    width: ${({ cardWidth }) => cardWidth};
  }

  ${Animation} + ${Animation} {
    margin-left: ${({ gap }) => gap};
  }
`

export default Style
