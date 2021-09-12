import styled from "styled-components";

import "./sections.module.css";

const Heading = styled.p`
  color: ${(props) =>
    props.about
      ? "#68f5d9"
      : props.blog
      ? "#68f5d9"
      : props.projects
      ? "#68f5d9"
      : props.contact
      ? "#68f5d9"
      : null};
  font-size: ${(props) =>
    props.about
      ? "73px"
      : props.blog
      ? "73px"
      : props.projects
      ? "73px"
      : props.contact
      ? "73px"
      : null};
  font-weight: ${(props) =>
    props.about
      ? "400"
      : props.aboutOnMobile
      ? "400"
      : props.blog
      ? "400"
      : props.projects
      ? "400"
      : props.contact
      ? "400"
      : null};
  line-height: ${(props) =>
    props.about
      ? "67px"
      : props.blog
      ? "67px"
      : props.projects
      ? "67px"
      : props.contact
      ? "67px"
      : null};
  font-family: ${(props) =>
    props.about
      ? "Oswald"
      : props.blog
      ? "Oswald"
      : props.projects
      ? "Oswald"
      : props.contact
      ? "Oswald"
      : null};
  letter-spacing: ${(props) =>
    props.about
      ? "0.09em"
      : props.blog
      ? "0.09em"
      : props.projects
      ? "0.09em"
      : props.contact
      ? "0.09em"
      : null};
  text-align: ${(props) =>
    props.about
      ? "left"
      : props.blog
      ? "center"
      : props.projects
      ? "center"
      : props.contact
      ? "left"
      : null};
  margin-bottom: ${(props) =>
    props.about
      ? "2%"
      : props.blog
      ? "2%"
      : props.projects
      ? "5%"
      : props.contact
      ? "2%"
      : null};
  margin-left: ${(props) => (props.contact ? "9%" : null)};
  margin-top: ${(props) => (props.contact ? "2%" : null)};
  @media only screen and (max-width: 768px) {
    font-size: ${(props) =>
      props.about
        ? "48px"
        : props.aboutOnMobile
        ? "48px"
        : props.contact
        ? "48px"
        : props.projects
        ? "48px"
        : props.blog
        ? "48px"
        : null};
    text-align: ${(props) =>
      props.about
        ? "center"
        : props.contact
        ? "center"
        : props.aboutOnMobile
        ? "center"
        : null};
    display: ${(props) => (props.about ? "none" : null)};
    margin: ${(props) => (props.aboutOnMobile ? " 10% 0% 10% 0%" : null)};
    font-family: ${(props) => (props.aboutOnMobile ? "Oswald" : null)};
    line-height: ${(props) => (props.aboutOnMobile ? "25px" : null)};
    letter-spacing: ${(props) => (props.aboutOnMobile ? "0.09em" : null)};
    color: ${(props) => (props.aboutOnMobile ? "#68f5d9" : null)};
    font-weight: ${(props) => (props.aboutOnMobile ? "400" : null)};
  }
  @media only screen and (min-width: 768px) {
    display: ${props => props.aboutOnMobile ? "none" : null};
  }
`;
const AboutPara = styled.p`
  color: #fff;
  font-size: 16px;
  line-height: 24px;
  font-family: sans-serif;
  font-weight: 400;
  padding: ${(props) =>
    props.meetme ? "0% 0%" : props.about ? "0% 20% 0% 0%" : null};
  text-align: left;
  @media only screen and (max-width: 768px) {
    font-size: ${(props) => (props.about ? "14px" : null)};
    text-align: ${(props) => (props.about ? "center" : null)};
    padding: ${(props) => (props.about ? "0% 10%" : null)};
  }
`;
const AboutStack = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  margin: 2% 0%;
  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;
const ContactIcons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  /* padding-top: 10%; */
`;
const CardsText = styled.p`
  font-family: ${(props) =>
    props.title ? "Oswald" : props.para ? null : null};
  font-size: ${(props) => (props.title ? "36px" : props.para ? "18px" : null)};
  font-weight: ${(props) => (props.title ? "500" : props.para ? "300" : null)};
  margin: ${(props) => (props.title ? "0px" : props.para ? "10px 0px" : null)};
  color: ${(props) => (props.title ? "#f04653" : props.para ? "#000" : null)};
  &:hover {
    color: ${(props) => (props.title ? "#53c6aa" : props.para ? null : null)};
  }
`;

export { Heading, AboutStack, AboutPara, ContactIcons, CardsText };
