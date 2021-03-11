/** @jsx jsx */
import React from "react"
import { css, jsx } from "@emotion/react"
import styled from "@emotion/styled"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import * as Logo from "../assets/svgs/logo.svg"
import NavBar from "./Navbar/Navbar"

const Header = ({ siteTitle }) => (
  <>
    <div
      style={{
        background: `#BAD982 70%`,
        height: `32px`,
      }}
    >
      {/* <div
        style={{
          position: `absolute`,
          width: `224px`,
          height: `138px`,
          left: "16.67%",
          top: `0px`,
          background: `#333333`,
          display: `flex`,
          alignItems: `center`,
          justifyContent: `center`,
          zIndex: 10,
        }}
      >
        <Logo />
      </div> */}
    </div>
    <header
      style={{
        background: `#fff`,
        height: `57px`,
      }}
    >
      {/* <div
        style={{
          margin: `0 auto`,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </div> */}
      <HeaderContainer className="container">
        <Link css={linkCss}>
          <LogoWrapper>
            <Logo />
          </LogoWrapper>
        </Link>
        <NavBar></NavBar>
      </HeaderContainer>
    </header>
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
`

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
