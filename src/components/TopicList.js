import React from "react";
import Topic from "./Topic";
import styled from "styled-components";

export default () => (
  <TopicSection>
    <div className="container">
      <h3>Main Topics</h3>
      <Topics>
        <Topic />
        <Topic />
        <Topic />
      </Topics>
      <h5>And much more!</h5>
    </div>
  </TopicSection>
);

const TopicSection = styled.div`
  margin: 6rem 0;

  h5 {
    margin-top: 1rem;
  }
  @media (min-width: 800px) {
    h5 {
      font-size: 20px;
    }
  }
`;
const Topics = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
`;
