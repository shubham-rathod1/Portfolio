import styled from "styled-components";
import "../../Sections/sections.module.css";


export const A = styled.a`
  outline: none;
  border: none;
  color: #fff;
  text-decoration: none;
  /* border: 1px solid rgb(211, 220, 230); */
  background-color: #fff;
  color: #53c6aa;
  border-radius: 5px;
  padding: 10px;
  margin: 5px;
  &:hover {
    color: #fff;
    background-color: #53c6aa;
    border: 1px solid #53c6aa;
  }
`;

export const BoxDiv = styled.div`
  text-align: center;
  width: 33.3333%;
  @media (max-width: 1025px) {
    width: 50%;
  }
  @media (max-width: 650px) {
    width: 100%;
  }
`;

export const ServiceBox = styled.div`
  padding-bottom: 10px;
  background: #212129;
  box-shadow: 0px 12px 24px rgb(2 30 84 / 10%);
  margin: 20px;
  transition: all 0.5s linear;
  &:hover {
    box-shadow: 0px 5px 10px #383636;
    /* color: #fff; */
  }
`;

export const ProjectDiv = styled.div`
  width: 90%;
  margin: 0 auto;
  @media (max-width: 1125px) {
    width: 95%;
  }
`;
export const ServiceBoxHeader = styled.div`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 15px;
  color: #68f5d9;
  font-family: Oswald;
  letter-spacing: 0.8px;
`;
export const ServiceBoxP = styled.div`
  font-size: 14px;
  color: #fff;
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`;

export const Col4 = styled.div`
  /* width: 33.33333333333333%; */
`;
export const CommonDiv = styled.div`
  width: 33.33333333333333%;
  margin: 20px auto;
  text-align: center;
`;

export const MainHeader = styled.h1`
  font-size: 32px;
  margin-bottom: 20px;
  color: #53c6aa;
`;

export const CommonBorder = styled.div`
  background: black;
  height: 3px;
  width: 100px;
  margin: 30px auto;
`;
