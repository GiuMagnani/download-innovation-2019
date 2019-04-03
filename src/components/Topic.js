import React from "react";
import styled from "styled-components";

export default () => (
  <TopicContainer>
    <TopicImg>
      <div />
    </TopicImg>
    <TopicBody>
      <h4>50+ Talks</h4>
      <p>
        Navigating the transmitter won't do anything, we need to copy the
        primary SQL circuit!
      </p>
    </TopicBody>
    <TopicButton>See Topic</TopicButton>
  </TopicContainer>
);

const TopicContainer = styled.div`
  box-shadow: 0 5px 15px rgba(0, 0, 50, 0.15);
  background-color: white;
  margin: 2rem 0;
  width: 100%;

  @media (min-width: 800px) {
    margin: 2rem 1rem;
    width: calc(50% - 2rem);
  }

  @media (min-width: 1100px) {
    width: calc(33.33% - 2rem);
  }
`;

const TopicImg = styled.div`
  background-image: url("https://images.unsplash.com/photo-1508144763612-c39d41eda06c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60");
  background-size: cover;
  background-position: 50%;
  height: 150px;
  width: 100%;
  
  @media (min-width: 1200px) {
    height: 200px;
  }
`;

const TopicBody = styled.div`
  padding: 1.5rem;

  h4 {
    text-align: left;
    font-size: 22px;
  }

  p {
    font-size: 16px;
  }
`;

const TopicButton = styled.a`
  width: 100%;
  display: block;
  padding: 1rem;
  background: #f2f2f2;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
  position: relative;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    top: -5px;
    right: 0;
    height: 5px;
    width: 50px;
    background: linear-gradient(to right, #ec566e, #f8af3c);
  }

  &:hover {
  color: white;
    background-color: #E10279;
    animation: 6s 0.2s infinite alternate colorChange;
  }
\`;
`;
