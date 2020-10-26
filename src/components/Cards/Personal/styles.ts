import styled from 'styled-components'

import { Card } from '../index'

const Style = styled(Card)`
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

export default Style
