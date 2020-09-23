import styled from 'styled-components'

import { animated } from 'react-spring'

interface StyleProps {
  size: string
  gap: string
}

interface DotProps {
  style: any
}

export const Dot = styled(animated.button)<DotProps>``

const Style = styled.div.attrs({ className: 'Dots' })<StyleProps>`
  display: flex;

  /* #newLeft {
    background-color: red;
  } */
  /*
  #left {
    background-color: blue;
  }
  #center {
    background-color: yellow;
  }
  #right {
    background-color: green;
  }
  #newRight {
    background-color: purple;
  } */

  ${Dot} {
    width: ${({ size }) => size};
    height: ${({ size }) => size};
    border-radius: 100%;
    background-color: white;
  }

  ${Dot} + ${Dot} {
    margin-left: ${({ gap }) => gap};
  }
`

export default Style
