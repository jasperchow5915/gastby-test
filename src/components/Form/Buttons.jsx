/** @jsx jsx */
import { css, jsx } from "@emotion/react"

const registerBTNCss = css`
  width: 121px;
  height: 58px;
  justify-content: center;
  align-items: center;
  background-color: #bad982;
  text-transform: uppercase;
  margin-top: 10px;
  border: 0;
  outline: none;
  font-family: "Roboto", sans-serif;
  font-weight: 900;
  font-size: 13px;
  cursor: pointer;
  font-weight: bold;
  transition: all ease-in-out 0.3s;
`

export const RegisterButton = (props) => (
  <button
    css={registerBTNCss}
    onClick={(e) => {
      e.preventDefault()
      document
        .getElementById(props.elementToScroll)
        ?.scrollIntoView({ behavior: "smooth" })
    }}
  >
    {props.text}
  </button>
)
