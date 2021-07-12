import styled from "styled-components";

import "./sections.module.css";

const AboutHeading = styled.p`
  color: #68f5d9;
  font-size: 73px;
  font-weight: 400;
  line-height: 67px;
  font-family: Oswald;
  letter-spacing: 0.09em;
  text-align: center;
  margin-bottom: 2%;
`;
const AboutPara = styled.p`
  color: #fff;
  font-size: 16px;
  line-height: 24px;
  font-family: sans-serif;
  font-weight: 400;
  padding: ${params => params.meetme ? "0% 0%" : "0% 20%"}; 
  /* text-align: left; */
  text-align: center;
`;
const AboutStack = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 2% 0%;
`;
const ContactIcons = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export { AboutHeading, AboutStack, AboutPara,ContactIcons };
