import React from "react";
import styled from "styled-components";
import Decorator from "./Decorator";
import img2018 from "../images/download-2018.jpg";

export default () => (
  <IntroSection>
    <Decorator type="square" />
    <Decorator type="circle-border" />
    <IntroContent className="container">
      <TopicImg style={{ backgroundImage: `url(${img2018})` }}>
        <div />
      </TopicImg>
      <TopicBody>
        <h4>IT Conference & Festival</h4>
        <p>
          Download Innovation is the conference of IT, innovation, youth
          opportunities and future… <strong>free and open!</strong>
          <br />
          <br />2 days of knowledge, learning, sharing, projects, inspirations,
          creativity… to share experiences and skills on the most innovative
          trends and technologies in a stimulating and informal environment.
        </p>
      </TopicBody>
    </IntroContent>
  </IntroSection>
);

const IntroSection = styled.section`
  margin: 5rem auto;
  position: relative;
  max-width: 500px;

  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`;

const IntroContent = styled.div`
  @media (min-width: 1200px) {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    min-height: 50vh;
    margin: 5rem auto 12rem;
  }
`;

const TopicImg = styled.div`
  background-size: cover;
  background-position: 50%;
  height: 250px;
  width: 100%;
  box-shadow: 0 5px 15px rgba(0, 0, 50, 0.15);

  @media (min-width: 1200px) {
    box-shadow: 0;
    position: absolute;
    top: 0;
    left: 1rem;
    width: 600px;
    height: 400px;
    z-index: -1;
  }
`;

const TopicBody = styled.div`
  padding: 1.5rem;
  position: relative;
  z-index: 1;
  max-width: 600px;
  background-color: white;
  box-shadow: 0 5px 15px rgba(0, 0, 50, 0.15);

  h4 {
    text-align: left;
    font-size: 26px;
  }

  p {
    font-size: 16px;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 1rem;
    height: 5px;
    width: 50px;
    background: linear-gradient(to right, #ec566e, #f8af3c);
  }

  @media (min-width: 1200px) {
    h4 {
      margin-bottom: 1.5rem;
      font-size: 30px;
    }

    padding: 2.5rem 2.5rem;
    transform: translateY(7rem);

    &::after {
      left: 2.5rem;
    }
  }
`;
