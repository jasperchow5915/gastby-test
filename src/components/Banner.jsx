import React from "react"
import styled from "@emotion/styled"
import { css, jsx } from "@emotion/react"
import Slider from "./Slider/Slider"
import SignUpForm from "./Form/SignUpForm"

const BannerTextWrapper = styled.div`
  position: absolute;
  width: 729px;
  height: 480px;
  left: 322px;
  top: 258px;
  font-family: "Reem Kufi", sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 80px;
  line-height: 96px;
  letter-spacing: -1.09375px;
  text-transform: uppercase;
  color: #ffffff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
  z-index: 10;
`

const FormWrapper = styled.div`
  position: absolute;
  width: 520px;
  height: 704px;
  left: 1076px;
  top: 256px;
  background: #ffffff;
  border-radius: 4px;
  z-index: 10;
`

const innerFormCss = css`
  /* Auto Layout */
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;
  position: absolute;
  width: 465px;
  height: 648px;
  left: 40px;
  top: 40px;
`

const Banner = (props) => {
  return (
    <div>
      <BannerTextWrapper className="banner-text">
        {props.bannerText}
      </BannerTextWrapper>
      <FormWrapper>
        <SignUpForm css={innerFormCss} />
      </FormWrapper>
      <Slider slides={props.images} />
    </div>
  )
}

export default Banner
