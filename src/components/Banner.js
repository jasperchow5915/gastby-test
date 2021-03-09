import React from "react"
import styled from "@emotion/styled"
import Slider from "./Slider/Slider"

const BannerTextWrapper = styled.div`
  position: absolute;
  width: 729px;
  height: 480px;
  left: 322px;
  top: 258px;
  font-family: Verlag;
  font-style: normal;
  font-weight: 900;
  font-size: 80px;
  line-height: 96px;
  letter-spacing: -1.09375px;
  text-transform: uppercase;
  color: #FFFFFF;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
  z-index: 10;
`

const Banner = props => {
  return <div>
     <BannerTextWrapper className="banner-text" >{props.bannerText}</BannerTextWrapper>
    <Slider slides={props.images} />
  </div>
}

export default Banner