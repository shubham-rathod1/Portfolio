import React, { useState } from "react";
import { FaGithub, FaNodeJs, FaLink } from "react-icons/fa";
import styled from "styled-components";
import ModalVideo from "react-modal-video";

import {
  ProjectDiv,
  Row,
  ServiceBox,
  ServiceBoxHeader,
  ServiceBoxP,
  A,
  BoxDiv,
} from "./Styles";

import { FaHtml5, FaReact, FaJs, FaCss3 } from "react-icons/fa";
import { SiMongodb, SiRedux } from "react-icons/si";
import { Heading } from "../../Sections/sections.module";
import { HTMLTEXT } from "../../Pages/pages.module";
import "./video.scss";
// import 'node_modules/react-modal-video/scss/modal-video.scss';

const Container = styled.div`
  width: 100%;
  padding: 40px 0px;
  background-color: #15161b;
`;

const Projects = () => {
  const projects = [
    {
      id: 0,
      project_name: "Revv Clone",
      image: "Project_images/revvnew.png",
      project_desc:
        "Revv is a self drive car rental service that provides you with all the privacy, without the hassles of owning and maintaining one.",
      deploy_link: "https://revvcars.netlify.app/",
      repo_link: "https://github.com/avinashkumarsinha007/revv_clone",
      tech_stack: [
        <FaReact />,
        <FaNodeJs />,
        <SiMongodb />,
        <SiRedux />,
        <FaJs />,
        <FaCss3 />,
      ],
    },
    {
      id: 1,
      project_name: "Get Harvest",
      image: "Project_images/getharvest.png",
      project_desc:
        "Harvest is modern time tracking software – for less effort, more joy, and improved profitability.",
      deploy_link: "https://harvestclone.netlify.app/#/",
      repo_link: "https://github.com/shubham-rathod1/getharvest_clone",
      tech_stack: [<FaReact />, <SiRedux />, <FaJs />, <FaHtml5 />, <FaCss3 />],
    },
    {
      id: 2,
      project_name: "United by Blue",
      image: "Project_images/united_by_blue.png",
      project_desc:
        "Eco-Friendly E-commerce Fashion Brand. Removes 1 pound of trash from ocean for every single product purchase.",
      deploy_link: "#",
      repo_link: "https://github.com/shubham-rathod1/united_by_blue_clone",
      tech_stack: [
        <FaReact />,
        <FaNodeJs />,
        <SiMongodb />,
        <SiRedux />,
        <FaJs />,
        <FaCss3 />,
      ],
    },
    {
      id: 3,
      project_name: "Calendly Clone",
      image: "Project_images/calendly.png",
      project_desc:
        "Calendly is a web application for scheduling appointments, meetings, and events.Making planning simpler.",
      deploy_link: "https://calendly-clone-nu.vercel.app/",
      repo_link: "https://github.com/shubham-rathod1/Calendly-Clone",
      tech_stack: [<FaJs />, <FaHtml5 />, <FaCss3 />],
    },
    {
      id: 4,
      project_name: "Fathom Health",
      image: "Project_images/fathom_health.png",
      project_desc:
        "AI built for medical coding, combined with human infrastructure to maximize speed and accuracy.",
      deploy_link: "https://fathomhealth.netlify.app/",
      repo_link: "https://github.com/shubham-rathod1/FathomHealth_Project",
      tech_stack: [<FaJs />, <FaHtml5 />, <FaCss3 />],
    },
  ];
  const [isOpen, setOpen] = useState(false);
  return (
    <Container>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="BNC6slYCj50"
        onClose={() => setOpen(false)}
      />

      <ProjectDiv>
        <HTMLTEXT style={{ margin: "0% 0% -7% 33%" }} h1>{`<h1>`}</HTMLTEXT>
        <Heading projects>Projects</Heading>
        <HTMLTEXT style={{ margin: "-4% 0% 4% 63%" }} h1>{`</h1>`}</HTMLTEXT>
        <Row>
          {projects.map((item) => (
            <BoxDiv key={item.id}>
              <ServiceBox>
                <div
                  style={{
                    backgroundImage: `url(${item.image})`,
                    height: "200px",
                    backgroundSize: "100% 200px",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center center",
                  }}
                ></div>
                <div
                  style={{
                    margin: "25px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <ServiceBoxHeader style={{ textAlign: "center" }}>
                    {item.project_name}
                  </ServiceBoxHeader>
                  <ServiceBoxP>{item.project_desc}</ServiceBoxP>
                  <div
                    style={{
                      margin: "20px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    {item.tech_stack.map((item) => (
                      <div
                        style={{
                          color: "#fff",
                          fontSize: "20px",
                          padding: "0px 4px",
                        }}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                    }}
                  >
                    <A
                      href={item.repo_link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub /> Code
                    </A>
                    {item.id === 2 ? (
                      <A
                        onClick={() => setOpen(true)}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaLink /> Demo
                      </A>
                    ) : (
                      <A
                        href={item.deploy_link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaLink /> Demo
                      </A>
                    )}
                    {/* <A
                      href={item.deploy_link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLink /> Demo
                    </A> */}
                  </div>
                </div>
              </ServiceBox>
            </BoxDiv>
          ))}
        </Row>
      </ProjectDiv>
    </Container>
  );
};

export default Projects;
