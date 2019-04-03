import React from "react";
import styled from "styled-components";
import LogoBergamo from "../images/logo-bergamo.png";
import LogoSorint from "../images/sorint-lab-logo.svg";

export default () => (
  <Footer>
    <Decorator />
    <Decorator2 />
    <div className="container">
      <FooterTop>
        <h5>Promoted by</h5>
        <img src={LogoSorint} alt="Sorint.lab logo" />
        <p>
          We are the Next Generation System Integrator, leader in the Digital
          Transformation with a flexible and vendor independent approach.
        </p>
      </FooterTop>
      <FooterBottom>
        <h5>In collaboration with</h5>
        <img src={LogoBergamo} alt="Comune di Bergamo logo" />
      </FooterBottom>
    </div>
    <FooterCopyright>
      <small>© Copyright Sorint.lab S.p.A. 2019</small>
    </FooterCopyright>
  </Footer>
);

const Decorator = styled.span`
  position: absolute;
  top: -0.5rem;
  left: 2rem;
  z-index: 10;
  height: 2rem;
  width: 2rem;
  border-radius: 8px;
  background: #ec566e;
  transform: rotate(45deg);
`;

const Decorator2 = styled.span`
  position: absolute;
  top: -10%;
  left: 25%;
  z-index: 10;
  height: 1rem;
  width: 1rem;
  border-radius: 50%;
  border: 4px solid #f8af3c;
`;

const Footer = styled.footer`
  background-color: #201d24;
  color: white;
  position: relative;
  margin-top: 2rem;

  h5 {
    color: white;
  }

  small {
    display: block;
    width: 100%;
    padding: 1rem;
    background-color: #1c1c1e;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    margin-top: -5px;
    background: linear-gradient(to right, #ec566e, #f8af3c);
  }

  @media (min-width: 800px) {
    .container {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-wrap: wrap;
    }
  }
`;
const FooterBottom = styled.div`
  padding: 3rem 1rem 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);

  img {
    max-height: 180px;
    display: block;
    margin: 2rem auto 1rem;
  }

  @media (min-width: 800px) {
    border: 0;
    width: 30%;
  }
`;

const FooterTop = styled.div`
  padding: 3rem 1rem 1rem;

  img {
    max-height: 60px;
    display: block;
    margin: 2rem auto;
  }

  @media (min-width: 800px) {
    width: 30%;
    text-align: left;
    padding: 5rem 1rem 4rem;

    img {
      margin: 2rem 0;
    }

    h5 {
      text-align: left;
    }
  }
`;

const FooterCopyright = styled.div`
  margin: 0;
  font-size: 14px;
  text-align: center;

  @media (min-width: 800px) {
    width: 100%;
  }
`;
