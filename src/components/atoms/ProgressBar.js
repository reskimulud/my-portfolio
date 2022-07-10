import React from 'react'
import styled from 'styled-components'
import { globalStyles } from '../../conf'

function ProgressBar({progress}) {
  const Progress = styled.div`
    height: 20px;
    border-radius: 10px;
    margin-bottom: 20px;
    position: relative;

    box-shadow: ${globalStyles.INNER_SHADOW};

    div {
      width: calc(${progress}% - 14px);
      background-color: #000;
      height: 6px;
      left: 7px;
      top: 7px;
      position: absolute;
      border-radius: 10px;

      span {
        position: absolute;
        right: 0;
        top: 0;
        font-size: 14px;
        font-weight: 500;
        color: #000;
        margin-top: 10px;
      }
    }
  `

  return (
    <Progress>
      <div>
        <span>{progress}%</span>
      </div>
    </Progress>
  )
}

export default ProgressBar
