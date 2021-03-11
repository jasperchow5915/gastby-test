import React from "react"

export const RegisterButton = () => (
  <button
    onClick={(e) => {
      e.preventDefault()
      document
        .getElementById(props.elementToScroll)
        .scrollIntoView({ behavior: "smooth" })
    }}
    className={"slider__button"}
  >
    Register
  </button>
)
