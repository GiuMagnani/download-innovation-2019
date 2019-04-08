import React from "react";
import styled from "styled-components";
import LinesDecorator from "./LinesDecorator";
import GoogleMap from "./GoogleMap";

export default () => (
  <MapSection>
    <LinesDecorator type="2" />
    <h3>When & Where</h3>
    <MapContainer className="container">
      <Body>
        <strong>September 8th & 9th,</strong>
        Centro Sportivo Lazzaretto,
        <br /> Bergamo, Italy
      </Body>
      <MapWrapper>
        <GoogleMap
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${
            process.env.GATSBY_GOOGLE_MAPS_API_KEY
          }&v=3.exp&libraries=geometry,drawing,places`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </MapWrapper>
    </MapContainer>
  </MapSection>
);

const MapSection = styled.div`
  position: relative;
  overflow: hidden;
  padding-bottom: 4rem;
`;

const MapContainer = styled.div`
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 50, 0.15);
  background-color: white;
`;

const Body = styled.div`
  padding: 2rem 0;

  strong {
    margin-bottom: 1rem;
    display: block;
  }
`;
const MapWrapper = styled.div`
  height: 400px;
  background: rgb(255, 240, 250);
  margin-bottom: 2rem;
  width: calc(100% + 2rem);
  margin-left: -1rem;

  @media (min-width: 1200px) {
    height: 600px;
    margin-bottom: 4rem;
  }
`;
