import styled from 'styled-components'
import { animated } from 'react-spring'

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 0;

  width: 550px;
  height: 40px;
  border-radius: 16px 16px 0 0;

  background-color: #ff6d8d;
  color: white;
`

export const Card = styled(animated.div)`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  border-radius: 16px;
  padding: 60px 20px 20px 20px;

  background-color: white;
  box-shadow: 0px 10px 25px -10px rgba(0, 0, 0, 0.2);

  user-select: none;
`

export const Personal = styled(Card)`
  > img {
    width: 128px;
    height: 128px;
    border-radius: 50%;
  }

  > *,
  form .ContainerChange {
    margin-bottom: 24px;
  }
`

export const Container = styled(animated.div)`
  display: flex;
  align-items: center;
  justify-content: center;

  ${Card} {
    width: 550px;
    height: 650px;
  }

  ${Card} + ${Card} {
    margin-left: 250px;
  }
`
