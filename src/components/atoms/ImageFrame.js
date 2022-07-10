import React from 'react'
import styled from 'styled-components'
import { globalStyles } from '../../conf'

export const VARIANT = {
  DEFAULT: 'default',
  SQUARE: 'square'
}

function ImageFrame({variant, src}) {
  const Frame = styled.div`
    max-width: 450px;
    border-radius: ${variant === VARIANT.SQUARE ? '5px' : '50%'};
    padding: 15px;
    display: block;

    img {
      width: 100%;
      height: 100%;
      min-height: 100px;
      min-width: 100px;
      box-shadow: ${globalStyles.OUTER_SHADOW};
      border: 10px solid transparent;
      border-radius: ${variant === VARIANT.SQUARE ? '5px' : '50%'};
    }

    box-shadow: ${globalStyles.INNER_SHADOW};
  `
  return (
    <Frame>
      <img src={src} alt='profile' />
    </Frame>
  )
}

export default ImageFrame
