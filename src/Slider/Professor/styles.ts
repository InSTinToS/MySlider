import styled from 'styled-components'
import { Card } from '../cards'

export const Container = styled(Card)`
  > img {
    width: 128px;
    height: 128px;
    border-radius: 50%;
  }

  > *,
  form .ChangeSetter {
    margin-bottom: 24px;
  }
`
