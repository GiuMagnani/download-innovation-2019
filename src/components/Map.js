import React from "react";
import styled from "styled-components";
import LinesDecorator from "./LinesDecorator";

export default () => (
  <MapSection>
    {/*<LinesDecorator />*/}
    <h3>When & Where</h3>
    <MapContainer>
      <Body>
        <strong>September 8th & 9th,</strong>
        Centro Sportivo Lazzaretto,
        <br /> Bergamo, Italy
      </Body>
      <MapWrapper />
    </MapContainer>
  </MapSection>
);

const MapSection = styled.div`
  position: relative;
  max-width: 1040px;
  margin: 0 auto;
`;

const MapContainer = styled.div`
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 50, 0.15);
  background-color: white;
  margin: 2rem 0;
`;

const Body = styled.div`
  padding: 2rem;

  strong {
    margin-bottom: 1rem;
    display: block;
  }
`;
const MapWrapper = styled.div`
  height: 400px;
  background: rgb(255, 240, 250);
  
  @media (min-width: 1200px) {
    height: 600px;
  }
`;
