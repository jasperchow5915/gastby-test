/** @jsx jsx */
import { css, jsx } from "@emotion/react"

import styled from "@emotion/styled"
import { useState } from "react"
import SliderContent from "./SliderContent"
import Slide from "./Slide"
import SignUpForm from "../Form/SignUpForm"
import "./style.scss"
import { useWindowSize } from "../../utlis/hooks/useWindowSize"

export const BannerTextWrapper = styled.div`
  position: relative;
  float: left;
  padding-right: 15px;
  padding-left: 15px;
  width: 58%;
  height: 480px;
  top: 164px;
  font-family: "Reem Kufi", sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 4.1rem;
  line-height: 96px;
  letter-spacing: -1.09375px;
  text-transform: uppercase;
  color: #ffffff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
  z-index: 10;
  right: 6%;
  @media (max-width: 1200px) {
    font-size: 40px;
    width: 49%;
    line-height: 55px;
    right: 0%;
  }
`

export const FormOutterWrapper = styled.div`
  position: relative;
  float: left;
  width: 42%;
  top: 164px;
  padding-right: 15px;
  padding-left: 15px;
  @media (max-width: 1200px) {
    width: 49%;
    padding-right: 10px;
    padding-left: 10px;
  }
`

export const FormInnerWrapper = styled.div`
  width: 100%;
  height: auto;
  background: #ffffff;
  border-radius: 4px;
  z-index: 10;
  padding: 40px 40px 16px 40px;
`

export const innerFormCss = css`
  /* Auto Layout */
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;
  position: relative;
  width: 100%;
  height: auto;
  left: 40px;
  top: 40px;
`

/**
 * @function Slider
 */
const Slider = (props) => {
  const getWidth = () => useWindowSize().width

  const [state] = useState({
    translate: 0,
    transition: 0.45,
  })

  const { translate, transition } = state

  return (
    <div css={SliderCSS}>
      <SliderContent
        translate={translate}
        transition={transition}
        width={getWidth() * props.slides.length}
      >
        {props.slides.map((slide, i) => {
          return (
            <Slide key={i} content={slide}>
              <div className="banner-content-container">
                <div className="row">
                  <BannerTextWrapper className="banner-text">
                    {"two stunning new townhome releases launching early 2021"}
                  </BannerTextWrapper>
                  <FormOutterWrapper>
                    <FormInnerWrapper>
                      <SignUpForm css={innerFormCss} />
                    </FormInnerWrapper>
                  </FormOutterWrapper>
                </div>
              </div>
            </Slide>
          )
        })}
      </SliderContent>
    </div>
  )
}

const SliderCSS = css`
  position: relative;
  height: 100vh;
  width: 100vw;
  margin: 0 auto;
  overflow: hidden;
`
export default Slider
