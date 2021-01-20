import React from "react"
import { Link } from "react-router-dom"
import { Home } from "react-feather"
import { StyledLayout, StyledHeader, StyledFooter } from "./StyledLayout"

type LayoutType = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutType) => {
  return (
    <StyledLayout>
      <StyledHeader>
        <Link className="wrapper" to="/">
          <h3>News today</h3>
          <Home color="#1E1E1E" />
        </Link>
      </StyledHeader>

      <main>{children}</main>
      <StyledFooter>Copyright © 2021</StyledFooter>
    </StyledLayout>
  )
}
export default Layout
