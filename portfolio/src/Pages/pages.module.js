import styled from "styled-components";

const Button = styled.button`
  background-color: red;
  color: white;
`;
const Section = styled.div`
  display: flex;
`;
const MenuSection = styled.div`
  background-color: #313131;
  flex-basis: 10%;
  position: sticky;
  top:0;
  height: 100vh;
`;
const HTMLTEXT = styled.p`
  font-family: cursive;
  font-size: 14px;
  font-weight: 600;
  color: #4A494B;
  margin-top: 5px;
  margin-bottom: 0px;
  &:hover{
    color: #53C6AA;
  }
`
const MenuLink = styled.li`
  text-align: center;
  padding-top: 10px;
  font-weight: 600;
  font-size: 20px;
  color: #fff;
  list-style-type: none;
  &:hover {
    color: #53C6AA
  };
  cursor: pointer;

  
`


export { Button, Section, MenuSection,HTMLTEXT,MenuLink };
