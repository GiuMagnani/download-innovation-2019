import React from "react";
import styled from "styled-components";
import Decorator from "./Decorator";

export default () => (
  <TopicContainer>
    <Decorator type="square" />
    <Decorator type="circle-border" />
    <TopicImg>
      <div />
    </TopicImg>
    <TopicBody>
      <h4>IT Conference & Festival</h4>
      <p>
        Navigating the transmitter won't do anything, we need to copy the
        primary SQL circuit. Navigating the transmitter won't do anything, we
        need to copy the primary SQL circuit. Navigating the tra.
      </p>
    </TopicBody>
  </TopicContainer>
);

const TopicContainer = styled.div`
  box-shadow: 0 5px 15px rgba(0, 0, 50, 0.15);
  background-color: white;
  margin: 5rem auto;
  position: relative;
  max-width: 500px;

  @media (min-width: 1200px) {
    max-width: 1040px;
    box-shadow: none;
    background-color: transparent;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    height: 50vh;
  }
`;

const TopicImg = styled.div`
  background-image: url("https://images.unsplash.com/photo-1508144763612-c39d41eda06c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60");
  background-size: cover;
  background-position: 50%;
  height: 250px;
  width: 100%;

  @media (min-width: 1200px) {
    position: absolute;
    top: 0;
    left: 0;
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
    background: white;
    box-shadow: 0 5px 15px rgba(0, 0, 50, 0.15);
    //transform: translateX(100%) translateY(100%);

    &::after {
      left: 2.5rem;
    }
  }
`;
