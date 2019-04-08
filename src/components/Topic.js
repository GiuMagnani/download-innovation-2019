import React from "react";
import styled from "styled-components";

export default ({ className, title, imageUrl }) => (
  <TopicContainer className={className}>
    <TopicImg imageUrl={imageUrl}>
      <div />
    </TopicImg>
    <TopicBody>
      <h4>{title}</h4>
      <p>
        Navigating the transmitter won't do anything, we need to copy the
        primary SQL circuit!
      </p>
    </TopicBody>
    <TopicButton>See Topic</TopicButton>
  </TopicContainer>
);

const TopicContainer = styled.a`
  display: block;
  height: 100%;
  width: 100%;
  
  &.is-active {
    box-shadow: 0 5px 15px rgba(0, 0, 50, 0.15);
  }
`;

const TopicImg = styled.div`
  background-image: ${props => `url(${props.imageUrl})`};
  background-size: cover;
  background-position: 50%;
  height: 180px;
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
    background-color: #e10279;
    animation: 6s 0.2s infinite alternate colorChange;
  }
`;
