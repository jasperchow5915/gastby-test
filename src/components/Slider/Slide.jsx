/** @jsx jsx */
import { css, jsx } from "@emotion/react"

const Slide = ({ content, children }) => {
  return (
    <div
      css={css`
        height: 896px;
        width: 100%;
        background-image: url("${content}");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
      `}
    >
      {children}
    </div>
  )
}

export default Slide
