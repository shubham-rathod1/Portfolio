import "../../Sections/sections.module.css";

import styled from "styled-components";

export const SkillsDiv = styled.div`
  width: 100%;
  padding: 6px 0;
`;
export const SkillsContainer = styled.div`
  width: 90%;
  margin: 0 auto;
`;
export const Common = styled.div`
  margin: 20px auto;
  text-align: center;
`;
export const H1 = styled.h1`
  font-size: 73px;
  margin-bottom: 20px;
  font-family: Oswald;
  font-weight: 400;
  color: #68F5D9;
  @media only screen and (max-width: 768px) {
    font-size: 45px;
    margin-top: 0px;
  }
`;
export const Col = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
`;

export const BoxDiv = styled.div`
  text-align: center;
  width: 220px;
`;

export const SkillBox = styled.div`
  padding: 40px;
  background:  #2E3544;
  border-radius: 5px;
  color: whitesmoke;
  box-shadow: 0px 12px 24px rgb(2 30 84 / 10%);
  margin: 20px;
  transition: all 0.5s linear;
  &:hover {
    background: #68F5D9;
    color: black;
  }
`;

export const SkillBoxText = styled.p`
  font-size: 14px;
  font-weight: 500;
`;