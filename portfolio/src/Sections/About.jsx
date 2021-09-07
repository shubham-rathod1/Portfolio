import React from "react";
import { Grid } from "@material-ui/core";
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";
import { FaDev } from "react-icons/fa";

import { Heading, AboutPara, ContactIcons } from "./sections.module";
import styles from "./sections.module.css";

export default function About() {
  return (
    <div className={styles.outerContainer}>
      <Grid container>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <div className={styles.picContainer}>
            <div className={styles.profileImg}></div>
            <ContactIcons className={styles.meetmeContainer}>
              <AboutPara meetme>Meet me @:</AboutPara>
              <a
                rel="noreferrer"
                href="https://www.linkedin.com/in/shubham-rathod-297176181/"
                target="_blank"
              >
                <AiOutlineLinkedin
                  style={{
                    fontSize: "25px",
                    marginLeft: "5px",
                    color: "white",
                  }}
                />
              </a>
              <a
                rel="noreferrer"
                href="https://dev.to/shubhamrathod1"
                target="_blank"
              >
                <FaDev
                  style={{
                    fontSize: "25px",
                    marginLeft: "5px",
                    color: "white",
                  }}
                />
              </a>
              <a
                rel="noreferrer"
                href="https://github.com/shubham-rathod1"
                target="_blank"
              >
                <AiOutlineGithub
                  style={{
                    fontSize: "25px",
                    marginLeft: "5px",
                    color: "white",
                  }}
                />
              </a>
            </ContactIcons>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={8} lg={8}>
          <div className={styles.about}>
            <Heading about>About me...</Heading>
            <AboutPara about>
              Full Stack Developer with experience in designing, developing, and
              implementing applications and solutions using the MERN stack.
              <br />
              <br />
              Always keen on a solution-oriented approach to problems. Strongly
              believe that everything can be solved. Seeking to work in an
              encouraging atmosphere and handle challenging roles as Full Stack
              Developer.
            </AboutPara>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
