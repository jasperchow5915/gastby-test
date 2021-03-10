import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import * as Logo from "../assets/svgs/logo.svg"

const Header = ({ siteTitle }) => (
  <>
    <div
      style={{
        background: `#BAD982 70%`,
        height: `32px`,
      }}
    >
      <div
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
      </div>
    </div>
    <header
      style={{
        background: `#fff`,
        height: `57px`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
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
      </div>
    </header>
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
