/** @jsx jsx */
import React from "react"
import { css, jsx } from "@emotion/react"
import LeftArrow from "../../assets/svgs/left-arrow.svg"
import RightArrow from "../../assets/svgs/right-arrow.svg"

const Arrow = ({ direction, handleClick }) => (
  <div
    onClick={handleClick}
    css={css`
      display: flex;
      height: 50px;
      width: 50px;
      justify-content: center;
      cursor: pointer;
      align-items: center;
      transition: transform ease-in 0.1s;
      &:hover {
        transform: scale(1.1);
      }
      svg {
        transform: translateX(${direction === "left" ? "-2" : "2"}px);
        &:focus {
          outline: 0;
        }
      }
    `}
  >
    {direction === "right" ? <LeftArrow /> : <RightArrow />}
  </div>
)

export default Arrow
