import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import DownloadLogo from "../images/download.svg";

export default ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContainer className="container">
      <h1>
        <Link to="/">
          <Logo src={DownloadLogo} />
        </Link>
      </h1>
      <Nav>
        <ul>
          <li>
            <Link to="/">Sign Up</Link>
          </li>
          <li>
            <Link to="/">Agenda</Link>
          </li>
          <li>
            <Link to="/">Topics</Link>
          </li>
          <li>
            <Link to="/">Sponsors</Link>
          </li>
          <li>
            <Link to="/">Where & When</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </Nav>
    </HeaderContainer>
  </HeaderWrapper>
);

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
`;

const Logo = styled.img`
  height: 60px;
  display: block;
  margin: 0;
`;

const HeaderWrapper = styled.header`
  height: 60px;
  margin: 1rem;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;

  ul {
    display: flex;
    justify-content: space-between;
  }

  li a {
    padding: 1rem;
    font-size: 14px;
    letter-spacing: 2px;
    color: #111;
    text-decoration: none;
    text-transform: uppercase;
    transition: color 0.2s ease-in-out;

    &:hover {
      color: #ec566e;
    }
  }
`;
