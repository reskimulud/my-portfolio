import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { globalStyles } from '../../conf'
import Button from './Button'

export const VARIANT = {
  DEFAULT: 'default',
  CIRCLE: 'circle'
}

function Links({path, variant, children}) {
  const navigate = useNavigate()

  const LinksDefault = styled.button`
    padding: 10px 25px;
    font-size: 16px;
    color: red;
    background-color: transparent;
    line-height: 1.5;
    cursor: pointer;
    border-radius: 30px;
    transition: all .3s ease;
    display: inline-block;
    border: none;
    text-transform: capitalize;

    // shadow
    box-shadow: ${globalStyles.OUTER_SHADOW};

    &:hover {
      box-shadow: ${globalStyles.INNER_SHADOW};
    }

    &:active {
      box-shadow: none;
    }
  `


  if (variant === VARIANT.CIRCLE) {
    return (
      <Button variant={VARIANT.CIRCLE} onClickHandler={() => navigate(path)}>{children}</Button>
    )
  }

  return (
    <LinksDefault onClick={() => navigate(path)}>{children}</LinksDefault>
  )
}

export default Links
