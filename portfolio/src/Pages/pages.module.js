import styled from "styled-components";
import "./home.module.css";

const Button = styled.button`
  margin: 20px auto;
  border: none;
  font-size: 36px;
  position: relative;
  background-color: rgba(0, 0, 0, 0);
  border: 1px solid #53c6aa;
  /* font-size: 22px; */
  padding: 10px 70px;

  @media only screen and (max-width: 768px) {
    font-size: 18px;
    margin: 20px auto;
    padding: 8px 40px;
  }

  &::before {
    transition: all 0.4s cubic-bezier(0.68, -0.16, 0.2, 1.1);
    content: "";
    width: 0%;
    height: 100%;
    background: #53c6aa;
    position: absolute;
    top: 0;
    left: 0;
  }
  &:hover::before {
    background: #53c6aa;
    width: 100%;
    cursor: pointer;
  }
`;

const SpanButton = styled.span`
  color: #5cdbbb;
  mix-blend-mode: hard-light;
  &:hover {
    color: black;
    cursor: pointer;
  }
`;

const Section = styled.div`
  display: flex;
`;
const MenuSection = styled.div`
  background-color: #313131;
  flex-basis: 10%;
  position: sticky;
  top: 0;
  height: 100vh;
`;
const HTMLTEXT = styled.p`
  font-family: Montez;
  font-size: 20px;
  font-weight: 600;
  color: #4a494b;
  margin-top: 5px;
  margin-bottom: 0px;
  &:hover {
    color: #53c6aa;
  }
  margin-left: ${(props) =>
    props.html ? "3.7%" : props.body ? "5%" : props.h1 ? "5.8%" : null};
`;
const MenuLink = styled.li`
  text-align: center;
  padding-top: 10px;
  font-weight: 600;
  font-size: 20px;
  color: #fff;
  list-style-type: none;
  &:hover {
    color: #53c6aa;
    text-decoration: line-through;
  }
  cursor: pointer;
`;
const HomeSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  padding-left: 6%;
`;

const Heading = styled.p`
  font-size: 100px;
  font-weight: 600;
  font-family: Oswald;
  color: #fff;
  line-height: 100px;
  padding: 0px;
  margin-bottom: 1.5%;
  margin-top: 0px;
  @media only screen and (max-width: 768px) {
    font-size: 60px;
    /* font-weight: 500; */
    line-height: 80px;
  }
`;
const Paragraph = styled.p`
  margin: 5px;
  color: white;
  font-family: sans-serif;
  font-size: 18px;
  letter-spacing: ${(props) => (props.fullstack ? "0.3em" : null)};
  @media only screen and (max-width: 768px) {
    font-size: ${(props) => (props.fullstack ? "14px" : null)};
  }
`;
export {
  Button,
  Section,
  MenuSection,
  HTMLTEXT,
  MenuLink,
  HomeSection,
  Heading,
  SpanButton,
  Paragraph,
};
