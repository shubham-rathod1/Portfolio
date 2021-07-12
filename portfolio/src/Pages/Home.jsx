import React from "react";
import { Container, CssBaseline, styled } from "@material-ui/core";
import Contact from "../Sections/Contact";
import About from "../Sections/About";
import icon from "./icon2.svg";
import styles from "./home.module.css";

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
  AboutSection
} from "./pages.module";

export default function Home() {
  const menuLinks = ["About", "Projects", "Work", "Blog", "Contact"];

  return (
    <div style={{ backgroundColor: "#1D1D1D", ovarflow: "hidden" }}>
      <Section>
        <MenuSection>
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
              <svg className={styles.svgicons}
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="80"
                fill="#fff"
                viewBox="-3 -3 30 30"
              >
                <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 17h-12v-2h12v2zm0-4h-12v-2h12v2zm0-4h-12v-2h12v2z" />
              </svg>
              <HTMLTEXT>
                <i>{`<p>menu</p>`}</i>
              </HTMLTEXT>
            </div>
          </div>
          <hr />
          {menuLinks.map((item) => {
            return (
              <div>
                <MenuLink>{item}</MenuLink>;
              </div>
            );
          })}
        </MenuSection>
        <div
          style={{ display: "flex", flexDirection: "column", width: "100%" }}
        >
          <div style={{ flexBasis: "90%" }}>
            <HTMLTEXT html>{`<html>`}</HTMLTEXT>
            <HTMLTEXT body>{`<body>`}</HTMLTEXT>
            <HTMLTEXT h1>{`<h1>`}</HTMLTEXT>
            <HomeSection>
              <Heading>
                Hi,
                <br />
                I'm Shubham,
                <br />
                Web Developer
              </Heading>{" "}
              <HTMLTEXT>{`</h1>`}</HTMLTEXT>
              <HTMLTEXT>{`<p>`}</HTMLTEXT>
              <Paragraph fullstack typewriter>
                Full Stack Web Developer
              </Paragraph>
              <HTMLTEXT>{`</p>`}</HTMLTEXT>
              <div>
                <Button>
                  <SpanButton>Contact me!</SpanButton>
                </Button>
              </div>
            </HomeSection>
            <AboutSection>
              <About />
            </AboutSection>
            {/* <Contact />
            <Contact /> */}
          </div>
        </div>
      </Section>
    </div>
  );
}
