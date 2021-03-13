/** @jsx jsx */
import { css, jsx } from "@emotion/react"

const Slide = ({ content, children, className }) => {
  return (
    <div
      className={className}
      css={css`
        height: 896px;
        width: 100%;
        background-image: url("${content}");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        transition: height ease-in-out 0.3s;
        @media (max-width: 767.98px) {
          height: 627px;
        }
      `}
    >
      {children}
    </div>
  )
}

export default Slide
