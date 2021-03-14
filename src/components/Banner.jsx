import React from "react"
/** @jsx jsx */
import { css, jsx } from "@emotion/react"
import styled from "@emotion/styled"
import Slider from "./Slider/Slider"
import SignUpForm from "../components/Form/SignUpForm"
import { useRef, createRef } from "react"
import Arrow from "./Slider/Arrow"
import { RegisterButton } from "./Form/Buttons"

export const BannerTextWrapper = styled.div`
  position: relative;
  float: left;
  padding-right: 15px;
  padding-left: 15px;
  width: 52%;
  height: 480px;
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
  transition: all ease-in-out 0.3s;
  @media (max-width: 1200px) {
    width: 52%;
    font-size: 40px;
    line-height: 55px;
    right: 0%;
  }

  @media (max-width: 768px) {
    height: 575px;
    width: 100%;
  }
`

export const FormOutterWrapper = styled.div`
  position: relative;
  float: left;
  width: 38%;
  padding-right: 15px;
  padding-left: 15px;
  transition: all ease-in-out 0.3s;
  @media (max-width: 1200px) {
    width: 48%;
    padding-right: 10px;
    padding-left: 10px;
  }
  @media (max-width: 768px) {
    width: 100%;
    background-color: #eeeeee;
  }
`

export const FormInnerWrapper = styled.div`
  width: 100%;
  height: auto;
  background: #ffffff;
  border-radius: 4px;
  z-index: 10;
  padding: 40px 40px 16px 40px;
  @media (max-width: 768px) {
    padding: 16px 16.67px;
    background-color: transparent;
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
  @media (max-width: 1400px) {
    top: 145px;
  }

  @media (max-width: 1200px) {
    top: 170px;
  }
  @media (max-width: 768px) {
    top: 102px;
  }
`

const BannerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

const ArrowWrapper = styled.div`
  justify-content: flex-start;
  display: flex;
  margin-top: -175px;
  transition: margin ease-in-out 0.3s;
  @media (max-width: 768px) {
    margin-top: -90px;
  }
`

const ButtonWrapper = styled.div`
  button {
    display: none;
    z-index: 100;
    @media (max-width: 768px) {
      display: flex;
      top: 160px;
      position: absolute;
    }
    @media (max-width: 600px) {
      top: 268px;
    }
    @media (max-width: 368px) {
      top: 328px;
    }
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
            <>
              <BannerTextWrapper className="banner-text">
                {props.bannerText}
              </BannerTextWrapper>
              <ButtonWrapper className="container">
                <RegisterButton elementToScroll="signup-form" text="Register" />
              </ButtonWrapper>
            </>
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
