import React from "react";
import styled from "styled-components";

export default ({ type }) => (
  <>
    <Container className={`type-${type}`}>
      <Line />
      <Line />
      <Line />
      <Line />
      <Square />
      <Circle />
      <Circle className="mini" />
    </Container>
    <BGSquare className={`type-${type}`} />
  </>
);

const Container = styled.div`
  /* position: absolute;
  top: 40%;
  left: 0;
  width: 200%;
  transform: rotate(45deg) translateX(-30%);
  z-index: -1; */
  /* overflow: hidden; */

  position: absolute;
  top: 25%;
  left: 0;
  width: 200%;
  transform: rotate(45deg) translateX(-20%) translateY(0%);
  z-index: -1;
  transform-origin: 0 0;

  @media (min-width: 1200px) {
    top: 5%;
    width: 200%;
  }
`;

const Line = styled.div`
  position: relative;
  height: 1px;
  background: rgba(230, 230, 250, 1);

  &:nth-child(1) {
    transform: translateY(0);
  }

  &:nth-child(2) {
    transform: translateY(35px);
  }

  &:nth-child(3) {
    transform: translateY(70px);
  }

  &:nth-child(4) {
    transform: translateY(105px);
  }
`;

const Square = styled.div`
  top: 0;
  transform: translateX(-10%);
  animation: 15s 4s infinite alternate slide;
  animation-timing-function: ease-in-out;
  width: 100%;

  &::after {
    content: "";
    position: absolute;
    top: -25px;
    left: 0;
    width: 40px;
    height: 40px;
    border-radius: 8px;
    background: #ec566e;
  }

  @media (min-width: 1200px) {
    animation-duration: 15s;
  }
`;

const Circle = styled(Square)`
  animation: 15s infinite alternate slide2;

  &::after {
    content: "";
    top: 90px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 4px solid #f8af3c;
    background: none;
  }

  &.mini {
    animation-duration: 20s;
    animation-delay: 6s;
    animation-direction: alternate-reverse;

    &::after {
      content: "";
      top: 63px;
      left: 0;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      border: none;
      background: #ec566e;
    }
  }

  @media (min-width: 1200px) {
    animation-duration: 15s;
  }
`;

const BGSquare = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  top: 0;
  right: 0;
  border-radius: 8px;
  transform: rotate(45deg) translateY(-30%) translateX(70%);
  transform-origin: 50% 50%;
  background: linear-gradient(to right, #ec566e, #f8af3c);
  z-index: -2;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 8px;
    height: 100%;
    background: linear-gradient(to right, #f8af3c, #ec566e);
  }

  @media (min-width: 1200px) {
    width: 400px;
    height: 400px;
    top: 30%;
    transform: rotate(45deg) translateY(-30%) translateX(30%);
  }
`;
