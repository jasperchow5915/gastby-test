import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/react"
import Slider from "./Slider/Slider"

const Banner = (props) => {
  return (
    <div>
      <Slider slides={props.images} autoPlay={2} />
    </div>
  )
}

export default Banner
