import styled from 'styled-components'
import { motion } from 'framer-motion'

interface ContainerProps {
  width: string
}

interface StyleProps {
  gap: string
  gapVertical: string
}

export const Container = styled(motion.li)<ContainerProps>`
  width: ${({ width }) => width};
`

const Style = styled.div.attrs({
  className: 'Slider',
})<StyleProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  border: solid red 1px;

  & > * {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #slider {
    border: solid black 3px;

    ${Container} + ${Container} {
      margin-left: ${({ gap }) => gap};
    }
  }

  #buttons {
    margin-top: ${({ gapVertical }) => gapVertical};

    button {
      width: 120px;
      height: 40px;

      background-color: white;
      border: solid black 1px;
    }
  }
`

export default Style
