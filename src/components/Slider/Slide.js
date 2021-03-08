/** @jsx jsx */
import { css, jsx } from "@emotion/react"

const Slide = ({ content }) => {
  return(
  <div
    css={css`
      height: 948px;
      width: 100%;
      background-image: url("${content}");
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    `}
  />
)}

export default Slide
