import React, { useState } from "react"
/** @jsx jsx */
import { css, jsx } from "@emotion/react"
import styled from "@emotion/styled"
import Slider from "./Slider/Slider"
import SignUpForm from "../components/Form/SignUpForm"
import { useRef, createRef } from "react"
import Arrow from "./Slider/Arrow"

export const BannerTextWrapper = styled.div`
  position: relative;
  float: left;
  padding-right: 15px;
  padding-left: 15px;
  width: 58%;
  height: 480px;
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
  transition: all ease-in-out 0.3s;
  @media (max-width: 1200px) {
    font-size: 40px;
    width: 49%;
    line-height: 55px;
    right: 0%;
  }

  @media (max-width: 767.98px) {
    height: 575px;
    width: 100%;
  }
`

export const FormOutterWrapper = styled.div`
  position: relative;
  float: left;
  width: 42%;
  padding-right: 15px;
  padding-left: 15px;
  transition: all ease-in-out 0.3s;
  @media (max-width: 1200px) {
    width: 49%;
    padding-right: 10px;
    padding-left: 10px;
  }
  @media (max-width: 767.98px) {
    width: 100%;
  }
`

export const FormInnerWrapper = styled.div`
  width: 100%;
  height: auto;
  background: #ffffff;
  border-radius: 4px;
  z-index: 10;
  padding: 40px 40px 1px 40px;
  @media (max-width: 767.98px) {
    padding: 16px 16.67px;
  }
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

const BannerContentWrapper = styled.div`
  position: absolute;
  top: 224px;
  width: 100%;
  transition: top ease-in-out 0.3s;
  @media (max-width: 1200px) {
    left: 0;
  }
  @media (max-width: 767.98px) {
    top: 102px;
  }
`

const BannerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  @media (max-width: 767.98px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

const ArrowWrapper = styled.div`
  justify-content: flex-start;
  display: flex;
  margin-top: -175px;
  transition: margin ease-in-out 0.3s;
  @media (max-width: 767.98px) {
    margin-top: -90px;
  }
`

const Banner = (props) => {
  const sliderRef = createRef()
  const slideActionGenerator = (nextSlide, prevSlide) => {
    sliderRef.current = { nextSlide, prevSlide }
  }

  return (
    <div>
      <Slider
        slideActionGenerator={slideActionGenerator}
        slides={props.images}
        autoPlay={2}
        customArrow
        enableFadeInOut
      />
      <BannerContentWrapper>
        <BannerContainer className="container">
          <div className="row">
            <BannerTextWrapper className="banner-text">
              {props.bannerText}
            </BannerTextWrapper>
            <FormOutterWrapper>
              <FormInnerWrapper>
                <SignUpForm css={innerFormCss} />
              </FormInnerWrapper>
            </FormOutterWrapper>
          </div>
        </BannerContainer>
      </BannerContentWrapper>
      <ArrowWrapper className="container">
        <Arrow direction="left" handleClick={() => sliderRef.current?.prevSlide()} />
        <Arrow
          direction="right"
          handleClick={() => sliderRef.current?.nextSlide()}
        />
      </ArrowWrapper>
    </div>
  )
}

export default Banner
