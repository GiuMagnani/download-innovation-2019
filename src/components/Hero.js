import React from "react";
import styled from "styled-components";
import SymbolGenerator from "./SymbolGenerator";

export default () => {
  return (
    <HeroWrapper>
      <HeroContainer className="container">
        <HeroBody>
          <h1>Download Innovation</h1>
          <h2>IT Conference & Festival</h2>
          <h3>
            September 8th & 9th,
            <br /> Bergamo, Italy
          </h3>
          <p>
            Navigating the transmitter won't do anything, we need to copy the
            primary SQL circuit. Navigating the tra.
          </p>
        </HeroBody>
        <SymbolGenerator />
      </HeroContainer>
    </HeroWrapper>
  );
};

const HeroWrapper = styled.section`
  min-height: calc(100vh - 60px);
  position: relative;

  p {
    margin-top: 1rem;
    max-width: 600px;
  }
`;

const HeroBody = styled.div`
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1,
  h2,
  h3 {
    text-align: left;
  }

  h1 {
    font-size: 50px;
    line-height: 45px;
  }

  h2 {
    font-size: 26px;
    margin: 1rem 0 0.25rem;
  }

  h3 {
    font-size: 18px;
    margin: 0;
  }

  @media (min-width: 1200px) {
    h1 {
      font-size: 85px;
      max-width: 400px;
      line-height: 80px;
    }

    h2 {
      margin-top: 2rem;
      font-size: 38px;
      line-height: 36px;
    }

    h3 {
      margin-top: 1rem;
      font-size: 26px;
      line-height: 26px;
    }

    p {
      max-width: 400px;
    }
  }
`;

const HeroContainer = styled.div`
  @media (min-width: 1000px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
