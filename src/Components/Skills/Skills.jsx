import React from 'react';
import {
  FaHtml5,
  FaReact,
  FaJs,
  FaNodeJs,
  FaCss3,
  FaLaptopCode,
  FaServer,
  FaHubspot,
  FaHardHat,
} from 'react-icons/fa';
import {
  SiRedux,
  SiMongodb,
  SiSolidity,
  SiEthereum,
  SiExpress,
  SiWeb3Dotjs,
  SiTypescript
} from 'react-icons/si';
import {
  SkillsContainer,
  Col,
  BoxDiv,
  SkillBox,
  SkillBoxText,
  Common,
  H1,
} from './Styles';
import styled from 'styled-components';
import styles from './styles.module.css';
import { HTMLTEXT } from '../../Pages/pages.module';

const Container = styled.div`
  width: 100%;
  padding: 40px 0px;
`;

const Skills = () => {
  const projects = [
    {
      id: 0,
      project_name: 'Solidity',
      project_desc: <SiSolidity className={styles.commonIcons} />,
    },
    {
      id: 1,
      project_name: 'Ethereum',
      project_desc: <SiEthereum className={styles.commonIcons} />,
    },
    {
      id: 2,
      project_name: 'JavaScript',
      project_desc: <FaJs className={styles.commonIcons} />,
    },
    {
      id: 3,
      project_name: 'Hardhat',
      project_desc: <FaHardHat className={styles.commonIcons} />,
    },
    {
      id: 4,
      project_name: 'Web3Js',
      project_desc: <SiWeb3Dotjs className={styles.commonIcons} />,
    },
    {
      id: 5,
      project_name: 'React JS',
      project_desc: <FaReact className={styles.commonIcons} />,
    },
    {
      id: 6,
      project_name: 'Redux',
      project_desc: <SiRedux className={styles.commonIcons} />,
    },
    {
      id: 7,
      project_name: 'HTML',
      project_desc: <FaHtml5 className={styles.commonIcons} />,
    },
    {
      id: 8,
      project_name: 'CSS',
      project_desc: <FaCss3 className={styles.commonIcons} />,
    },
    {
      id: 10,
      project_name: 'TypeScript',
      project_desc: <SiTypescript className={styles.commonIcons} />,
    },
    {
      id: 11,
      project_name: 'Node JS',
      project_desc: <FaNodeJs className={styles.commonIcons} />,
    },
    {
      id: 12,
      project_name: 'Express',
      project_desc: <SiExpress className={styles.commonIcons} />,
    },
    {
      id: 13,
      project_name: 'Mongo DB',
      project_desc: <SiMongodb className={styles.commonIcons} />,
    },
  ];
  const proficiencies = [
    {
      id: 0,
      project_name: 'Frontend',
      project_desc: <FaLaptopCode className={styles.commonIcons} />,
    },
    {
      id: 2,
      project_name: 'Data Structures',
      project_desc: <FaHubspot className={styles.commonIcons} />,
    },
    {
      id: 1,
      project_name: 'Backend',
      project_desc: <FaServer className={styles.commonIcons} />,
    },
  ];

  return (
    <Container className='skills'>
      <SkillsContainer>
        <HTMLTEXT style={{ margin: '0% 0% -6% 30%' }} h1>{`<h1>`}</HTMLTEXT>
        <Common>
          <H1>Technologies</H1>
        </Common>
        <HTMLTEXT style={{ margin: '-3% 0% 4% 68%' }} h1>{`</h1>`}</HTMLTEXT>
        <Col>
          {projects.map((item) => (
            <BoxDiv key={item.id}>
              <SkillBox>
                {item.project_desc}
                <SkillBoxText>{item.project_name}</SkillBoxText>
              </SkillBox>
            </BoxDiv>
          ))}
        </Col>
        <HTMLTEXT style={{ margin: '5% 0% -6% 30%' }} h1>{`<h1>`}</HTMLTEXT>
        <Common>
          <H1>Proficiencies</H1>
        </Common>
        <HTMLTEXT style={{ margin: '-3% 0% 4% 68%' }} h1>{`</h1>`}</HTMLTEXT>
        <Col>
          {proficiencies.map((item) => (
            <BoxDiv key={item.id}>
              <SkillBox>
                {item.project_desc}
                <SkillBoxText>{item.project_name}</SkillBoxText>
              </SkillBox>
            </BoxDiv>
          ))}
        </Col>
      </SkillsContainer>
    </Container>
  );
};

export default Skills;
