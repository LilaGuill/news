import React from "react"
import { Link } from "react-router-dom"
import { StyledLayout, StyledHeader, StyledFooter } from "./StyledLayout"
import { Home } from "react-feather"

type LayoutType = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutType) => {
  return (
    <StyledLayout>
      <StyledHeader>
        <div>
          <h1>News today</h1>
          <Link to="/">
            <Home color="#1E1E1E" />
          </Link>
        </div>
      </StyledHeader>

      <main>{children}</main>
      <StyledFooter>Footer</StyledFooter>
    </StyledLayout>
  )
}
export default Layout
