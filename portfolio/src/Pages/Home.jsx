import React from "react";
import Contact from "../Sections/Contact";
import About from "../Sections/About";
import Blog from "../Sections/Blog";
import styles from "./home.module.css";
import { IoHome } from "react-icons/io5";

import {
  Button,
  MenuSection,
  Section,
  HTMLTEXT,
  MenuLink,
  HomeSection,
  Heading,
  SpanButton,
  Paragraph,
  AboutSection,
} from "./pages.module";
import NewProjects from "../Components/Projects/NewProjects";
import Stats from "../Components/Stats/Stats";

export default function Home() {
  const menuLinks = [
    { link: "About", name: "about" },
    { link: "Projects", name: "projects" },
    { link: "Blog", name: "blog" },
    { link: "Stats", name: "stats" },
    { link: "Contact", name: "contact" },
  ];

  return (
    <div style={{ backgroundColor: "#15161B", ovarflow: "hidden" }}>
      <Section>
        <MenuSection className={styles.menusection}>
          <div
            style={{
              height: "27%",
              backgroundColor: "black",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div>
              <a style={{ textDecorationColor: "#fff" }} href="#intro">
                <div className={styles.homeIcon}>
                  <IoHome />
                </div>
              </a>
              <HTMLTEXT>
                <i>{`<p>menu</p>`}</i>
              </HTMLTEXT>
            </div>
          </div>
          <hr />
          {menuLinks.map((item) => {
            return (
              <div>
                <a style={{ textDecoration: "none" }} href={`#${item.name}`}>
                  <MenuLink>{item.link}</MenuLink>
                </a>
                <br />
              </div>
            );
          })}
        </MenuSection>
        <div className={styles.introSection}>
          <a name="intro"></a>
          <div style={{ flexBasis: "90%" }}>
            <HTMLTEXT html>{`<html>`}</HTMLTEXT>
            <HTMLTEXT body>{`<body>`}</HTMLTEXT>
            <HTMLTEXT h1>{`<h1>`}</HTMLTEXT>
            <HomeSection>
              <Heading>
                Hi,
                <br />
                I'm Shubham Rathod,
                <br />
                Web Developer
              </Heading>{" "}
              <HTMLTEXT>{`</h1>`}</HTMLTEXT>
              <HTMLTEXT>{`<p>`}</HTMLTEXT>
              <Paragraph fullstack typewriter>
                Full Stack Web Developer
              </Paragraph>
              <HTMLTEXT>{`</p>`}</HTMLTEXT>
              <div className={styles.introBtns}>
                <div style={{ margin: "0px 5px" }}>
                  <a href="#contact">
                    <Button>
                      <SpanButton>Contact me!</SpanButton>
                    </Button>
                  </a>
                </div>
                <div className={styles.resumeBtn}>
                  <a target="_blank" href="Resume/Shubham_Rathod_resume.pdf">
                    <Button>
                      <SpanButton>Resume</SpanButton>
                    </Button>
                  </a>
                </div>
              </div>
            </HomeSection>
            <AboutSection>
              <a name="about">
                <About />
              </a>
            </AboutSection>
            <a name="projects">
              <NewProjects />
            </a>
            <a name="blog">
              <Blog />
            </a>
            <a name="stats">
              <Stats />
            </a>
            <a name="contact">
              <Contact />
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
}
