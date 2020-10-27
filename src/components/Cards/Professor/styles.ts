import { Card } from '../index'

import styled from 'styled-components'

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
