import React, { useState } from "react";
import posed, { PoseGroup } from "react-pose";
import styled from "styled-components";

const Symbol = posed.div({
  enter: {
    scale: 1,
    opacity: 1,
    rotate: 0,
    originX: "50%",
    originY: "50%",
    transition: { duration: 150 },
  },
  exit: {
    originX: "50%",
    originY: "50%",
    rotate: 15,
    scale: 0.7,
    opacity: 0,
    transition: { duration: 150 },
  },
});

export default () => {
  const [input, setInput] = useState("");

  const getZIndex = letter => {
    switch (letter) {
      case "x":
      case "s":
      case "p":
      case "r":
      case "m":
        return 0;
      case "y":
      case "n":
      case "f":
      case "e":
      case "g":
        return 1;
      case "z":
      case "v":
      case "w":
      case "a":
      case "b":
      case "o":
        return 2;
      case "d":
      case "t":
      case "l":
      case "i":
      case "u":
        return 3;
      case "c":
      case "j":
      case "k":
      case "q":
      case "h":
        return 4;
      default:
        return 0;
    }
  };

  return (
    <SymbolWrapper>
      <SymbolContainer>
        <PoseGroup style={{ position: "relative" }}>
          {input.split("").map((x, index) => {
            if (!/^[a-zA-Z]+$/.test(x)) return;
            return (
              <Symbol
                key={index}
                pose={x ? "visible" : "hidden"}
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  height: "200px",
                  width: "200px",
                  zIndex: getZIndex(x),
                }}>
                {
                  <img
                    alt={`Symbol of the letter ${x}`}
                    style={{ height: "200px", margin: "0 auto" }}
                    src={`assets/${x}.svg`}
                  />
                }
              </Symbol>
            );
          })}
        </PoseGroup>
        <Background>
          <div />
        </Background>
      </SymbolContainer>
      <SymbolAction>
        <p>Be sure to receive the latest from us!</p>
        <Input
          type="text"
          placeholder="example@mail.com"
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <Button>Sign up to Newsletter</Button>
      </SymbolAction>
    </SymbolWrapper>
  );
};

const SymbolWrapper = styled.div`
  @media (min-width: 1000px) {
    box-shadow: 0 5px 15px rgba(0, 0, 50, 0.15);
    background-color: white;
    padding: 5rem 2rem 0;
    margin: 2rem 0 2rem 2rem;
    max-width: 430px;
  }
`;

const Input = styled.input`
  border: 2px solid #ddd;
  height: 56px;
  line-height: 52px;
  padding: 0 1rem;
  width: 100%;
  max-width: 320px;
  margin: 0 auto;
  display: block;
  outline: 0;
  transition: border-color 0.2s ease-in-out;

  &:focus {
    border-color: #f8af3c;
  }

  @media (min-width: 1000px) {
    max-width: none;
    width: 100%;
  }
`;

const Button = styled.button`
  border: 2px solid black;
  height: 56px;
  line-height: 52px;
  padding: 0 0.5rem;
  background-color: white;
  width: 100%;
  display: block;
  max-width: 320px;
  margin: 1rem auto;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out,
    border-color 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    color: white;
    border-color: transparent;
    background-color: #e10279;
    animation: 6s 0.2s infinite alternate colorChange;
  }

  @media (min-width: 1000px) {
    max-width: none;
    width: 100%;
    margin: 1rem auto;
  }
`;

const SymbolContainer = styled.div`
  position: relative;
  height: 200px;
  width: 200px;
  margin: 2rem auto 5rem;
  z-index: 1;
  /* &::after {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 1px solid rgba(0,0,40,0.2);
  } */
`;

const Background = styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* border-radius: 50%;
  border: 1px solid rgba(0,0,40,0.2); */

  &::after {
    content: "";
    position: absolute;
    top: -30%;
    left: 50%;
    width: 1px;
    height: 160%;
    background: rgba(0, 0, 40, 0.2);
  }

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: -30%;
    width: 160%;
    height: 1px;
    background: rgba(0, 0, 40, 0.2);
  }

  > div {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: relative;
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 40, 0.2);

    &::before {
      content: "";
      position: absolute;
      width: 130%;
      height: 130%;
      top: -15%;
      left: -15%;
      border-radius: 50%;
      border: 1px solid rgba(0, 0, 40, 0.2);
    }

    &::after {
      content: "";
      position: absolute;
      width: 70%;
      height: 70%;
      top: 15%;
      left: 15%;
      border-radius: 50%;
      border: 1px solid rgba(0, 0, 40, 0.2);
    }
  }
`;

const SymbolAction = styled.div`
  text-align: center;
  margin: 6rem 0 4rem;

  p {
    margin-bottom: 2rem;
  }
`;
