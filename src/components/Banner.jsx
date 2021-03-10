/** @jsx jsx */
import { css, jsx } from "@emotion/react"
import styled from "@emotion/styled"
import Slider from "./Slider/Slider"
import SignUpForm from "../components/Form/SignUpForm"

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
  padding: 40px 40px 1px 40px;
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
  left: 16%;
  @media (max-width: 1200px) {
    left: 10px;
  }
`

const Banner = (props) => {
  return (
    <div>
      <Slider slides={props.images} autoPlay={2} />
      <BannerContentWrapper>
        <div className="banner-content-container">
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
        </div>
      </BannerContentWrapper>
    </div>
  )
}

export default Banner
