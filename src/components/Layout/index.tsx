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
        <div className="wrapper">
          <h2>News today</h2>
          <Link to="/">
            <Home color="#1E1E1E" />
          </Link>
        </div>
      </StyledHeader>

      <main>{children}</main>
      <StyledFooter>Copyright © 2021</StyledFooter>
    </StyledLayout>
  )
}
export default Layout
