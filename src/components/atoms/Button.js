import React from 'react'
import styled from 'styled-components'
import { globalStyles } from '../../conf'

export const VARIANT = {
  CIRCLE: 'circle',
  DEFAULT: 'phil'
}

function Button({ variant, onClickHandler, active, children }) {
  const ButtonCircle = styled.button`
    height: 40px;
    width: 40px;
    cursor: pointer;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all .3s ease;
    border: 0;
    color: #000;
    background-color: #fff;

    // shadow
    box-shadow: ${globalStyles.OUTER_SHADOW};

    &:hover {
      box-shadow: ${globalStyles.INNER_SHADOW};
    }

    &:active {
      box-shadow: none;
  `

  const ButtonDefault = styled.button`
    padding: 5px 10px;
    border-radius: 30px;
    cursor: pointer;
    border: 0;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all .3s ease;
    font-size: 16px;
    font-weight: 600;
    text-transform: capitalize;
    color: ${active ? 'red' : '#000'};

    ${active ? `
      // shadow
      box-shadow: ${globalStyles.OUTER_SHADOW};

      &:hover {
        box-shadow: ${globalStyles.INNER_SHADOW};
      }

      &:active {
        box-shadow: none;
      }
    ` : ''}
  `

  if (variant === VARIANT.CIRCLE) {
    return (
      <ButtonCircle onClick={onClickHandler}>{children}</ButtonCircle>
    )
  }

  return (
    <ButtonDefault>{children}</ButtonDefault>
  )
}

export default Button
