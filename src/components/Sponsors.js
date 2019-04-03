import React from "react";
import AWSLogo from "../images/aws-logo.svg";
import OracleLogo from "../images/oracle-logo.svg";
import RedhatLogo from "../images/redhat-logo.svg";
import IBMLogo from "../images/ibm-logo.svg";
import A2ALogo from "../images/a2a-logo.png";
import AnciLogo from "../images/anci-logo.png";
import TedXLogo from "../images/tedx-logo.png";
import ValtellinaLogo from "../images/valtellina-logo.png";
import OrioLogo from "../images/orio-logo.png";
import LogFilmLogo from "../images/logfilm-logo.png";

import styled from "styled-components";

export default () => (
  <section>
    <h3>With the participation of</h3>
    <Logos>
      <Logo>
        <img
          src={AWSLogo}
          alt="Amazon Web Services AWS logo"
          style={{ height: "45px" }}
        />
      </Logo>
      <Logo>
        <img src={OracleLogo} alt="Oracle logo" style={{ height: "20px" }} />
      </Logo>
      <Logo>
        <img src={IBMLogo} alt="IBM logo" style={{ height: "35px" }} />
      </Logo>
      <Logo>
        <img src={RedhatLogo} alt="Redhat logo" style={{ height: "40px" }} />
      </Logo>

      <Logo>
        <img src={AnciLogo} alt="Anci logo" />
      </Logo>
      <Logo>
        <img src={TedXLogo} alt="TEDxBergamo logo" />
      </Logo>
      <Logo>
        <img src={ValtellinaLogo} alt="Valtellina logo" />
      </Logo>
      <Logo>
        <img src={OrioLogo} alt="Orio al Serio logo" />
      </Logo>
    </Logos>
    <OtherLogos>
      <Logo>
        <h4>Technical Partner</h4>
        <img src={A2ALogo} alt="a2a Smart City logo" />
      </Logo>
      <Logo>
        <h4>Media Partner</h4>
        <img src={LogFilmLogo} alt="LogFilm logo" />
      </Logo>
    </OtherLogos>
  </section>
);

const Logos = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  list-style-type: none;
`;

const Logo = styled.li`
  width: 50%;
  margin: 1rem 0 2rem;

  img {
    filter: grayscale(1);
    opacity: 0.4;
    transition: opacity 0.25s ease-out;
    display: block;
    max-width: 150px;
    margin: 0 auto;
  }

  &:hover img {
    opacity: 1;
    filter: grayscale(0);
  }

  @media (min-width: 800px) {
    width: 33.33%;
  }

  @media (min-width: 1200px) {
    width: 25%;
    margin: 2rem 0;
  }
`;

const OtherLogos = styled(Logos)`
  align-items: flex-start;

  h4 {
    margin-bottom: 2rem;
  }
  
  @media (min-width: 800px) {
    h4 {
    font-size: 22px;
    margin-bottom: 3rem;
    }
  }
`;
