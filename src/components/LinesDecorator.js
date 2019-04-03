import React from "react"
import styled from "styled-components"

export default () => (
  <>
    <Container>
      <Line />
      <Line />
      <Line />
      <Line />
      <Square />
      <Circle />
      <Circle className="mini" />
    </Container>
    <BGSquare />
  </>
)

const Container = styled.div`
  position: absolute;
  top: 70%;
  left: 0;
  width: 200%;
  transform: rotate(45deg) translateX(-30%);
  z-index: -1;
  //overflow: hidden;
`

const Line = styled.div`
  position: relative;
  height: 1px;
  background: rgba(0, 0, 50, 0.15);

  &:nth-child(1) {
    transform: translateY(0);
  }

  &:nth-child(2) {
    transform: translateY(25px);
  }

  &:nth-child(3) {
    transform: translateY(50px);
  }

  &:nth-child(4) {
    transform: translateY(75px);
  }
`

const Square = styled.div`
  top: 0;
  transform: translateX(-10%);
  animation: 7s 2s infinite alternate slide;
  animation-timing-function: cubic-bezier(0.785, 0.135, 0.15, 0.86);
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
`

const Circle = styled(Square)`
  animation: 7s infinite alternate slide2;

  &::after {
    content: "";
    top: 60px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 4px solid #f8af3c;
    background: none;
  }

  &.mini {
    animation-duration: 20s;
    animation-delay: 3s;
    animation-direction: alternate-reverse;

    &::after {
      content: "";
      top: 44px;
      left: 0;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      border: none;
      background: #ec566e;
    }
  }
`

const BGSquare = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  right: 0;
  border-radius: 8px;
  transform: rotate(45deg) translateY(0%) translateX(70%);
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
`
