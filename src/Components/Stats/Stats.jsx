import React from "react";
import styled from "styled-components";

import {
  StatsContCont,
  StatsCont,
  StatsContDiv,
  StatsContH1,
  StatsContH3,
  LastStat,
} from "./Styles";

const Container = styled.div`
  width: 100%;
  padding: 40px 0px;
  margin: 5% 0% 10% 0%;
`;

const Stats = () => {
  return (
    <Container>
      <StatsContCont>
        <StatsCont>
          <StatsContDiv>
            <StatsContH1>1200+</StatsContH1>
            <StatsContH3>Hours of coding</StatsContH3>
          </StatsContDiv>
          <StatsContDiv>
            <StatsContH1>350+</StatsContH1>
            <StatsContH3>Git Commits</StatsContH3>
          </StatsContDiv>
          <StatsContDiv>
            <StatsContH1>4+</StatsContH1>
            <StatsContH3>Projects</StatsContH3>
          </StatsContDiv>
          <LastStat>
            <StatsContH1>100+</StatsContH1>
            <StatsContH3>Hours of Soft Skill</StatsContH3>
          </LastStat>
        </StatsCont>
      </StatsContCont>
      <img
        src="https://ghchart.rshah.org/021F34/shubham-rathod1"
        alt="fdsdf"
        style={{ width: "80%", display: "block", margin: "auto" }}
      />
    </Container>
  );
};
export default Stats;
