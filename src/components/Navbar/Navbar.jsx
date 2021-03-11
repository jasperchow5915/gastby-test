import React from "react"
import styled from "@emotion/styled"
import Phone from "../../assets/svgs/phone.svg"
import Map from "../../assets/svgs/map.svg"
import { navItems } from "./nav-data"

const NavIconFactory = (props) => {
  switch (props.iconName) {
    case "phone":
      return <Phone />
    case "map":
      return <Map />
    default:
      return null
  }
}

const NavUl = styled.ul`
  display: flex;
  align-items: center;
`

const NavLi = styled.li`
  display: block;
  flex: 0 0 auto;
  margin-right: 100px;
`

const NavA = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
`

const NavSpan = styled.span`
  color: #231d16;
  padding-left: 16px;
  flex: 0 0 auto;
  font-family: "Nunito Sans", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 12px;
  display: flex;
  align-items: center;
  letter-spacing: 1px;
  text-transform: uppercase;
`

const NavItems = (props) => (
  <NavUl>
    {props.items.length > 0
      ? props.items.map((item, i) => (
          <NavLi key={i}>
            <NavA href={item.url}>
              <NavIconFactory iconName={item.icon} />
              <NavSpan>{item.label}</NavSpan>
            </NavA>
          </NavLi>
        ))
      : null}
  </NavUl>
)

const NavItemWrapper = styled.nav`
  display: flex;
  align-items: center;
  height: 57px;
`

const NavBar = () => (
  <NavItemWrapper>
    <NavItems items={navItems} />
  </NavItemWrapper>
)

export default NavBar
