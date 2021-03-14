/** @jsx jsx */
import React from "react"
import { css, jsx } from "@emotion/react"
import styled from "@emotion/styled"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Logo from "../assets/svgs/logo.svg"
import NavBar from "./Navbar/Navbar"

const HeaderStripe = styled.div`
  background: #bad982 70%;
  height: 32px;
  transition: height ease-in-out 0.3s;
  @media (max-width: 768px) {
    height: 10px;
  }
`

const HeaderWrapper = styled.header`
  background: #fff;
  height: 57px;
  transition: height ease-in-out 0.3s;
  @media (max-width: 768px) {
    height: 40px;
  }
`

const Header = ({ siteTitle }) => (
  <>
    <HeaderStripe />
    <HeaderWrapper>
      <HeaderContainer className="container">
        <Link to="#" css={linkCss}>
          <LogoWrapper>
            <Logo />
          </LogoWrapper>
        </Link>
        <NavBar></NavBar>
      </HeaderContainer>
    </HeaderWrapper>
  </>
)

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
`

const linkCss = css`
  color: white;
  text-decoration: none;
  z-index: 1;
  margin-top: -37px;
  transition: margin ease-in-out 0.3s;
  @media only screen and (max-width: 768px) {
    margin-top: -10px;
  }
`

const LogoWrapper = styled.div`
  width: 224px;
  height: 138px;
  background-color: #333333;
  display: -moz-flex;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;
  transition: all ease-in-out 0.3s;
  @media only screen and (max-width: 768px) {
    width: 121px;
    height: 75px;
    svg {
      height: 40px;
      transition: all ease-in-out 0.3s;
    }
  }
`

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
