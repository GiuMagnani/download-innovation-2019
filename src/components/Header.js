import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import DownloadLogo from "../images/download.svg"

export default ({ siteTitle }) => (
  <HeaderWrapper>
    <div className="container">
      <h1>
        <Link to="/">
          <Logo src={DownloadLogo} />
        </Link>
      </h1>
    </div>
  </HeaderWrapper>
)

const Logo = styled.img`
  height: 60px;
  display: block;
  margin: 0;
`

const HeaderWrapper = styled.header`
  height: 60px;
  padding: 1rem;
`
