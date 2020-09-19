import styled from 'styled-components'
import { animated } from 'react-spring'

export const Card = styled(animated.div)`
  width: 500px;
  height: 600px;
  font-size: 2rem;

  background-image: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
  box-shadow: 0px 10px 25px -10px rgba(0, 0, 0, 0.2);

  display: flex;
  align-items: center;
  justify-content: center;

  user-select: none;
`

export const Container = styled(animated.div)`
  display: flex;
  align-items: center;
  justify-content: center;

  ${Card} + ${Card} {
    margin-left: 20px;
  }
`
