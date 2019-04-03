import React from "react"
import styled from "styled-components"

export default ({ type }) => {
  return type === "square" ? <DecoratorSquare /> : <DecoratorCircleBorder />
}

const DecoratorObject = styled.span`
  position: absolute;
  z-index: 10;
  pointer-events: none;
`

const DecoratorSquare = styled(DecoratorObject)`
  top: -0.5rem;
  left: 2rem;
  height: 2rem;
  width: 2rem;
  border-radius: 8px;
  background: #ec566e;
  transform: rotate(45deg);
`

const DecoratorCircleBorder = styled(DecoratorObject)`
  top: -10%;
  left: 25%;
  z-index: 10;
  height: 1rem;
  width: 1rem;
  border-radius: 50%;
  border: 4px solid #f8af3c;
`
