import React from "react";
import { ToastContainer, toast } from "react-toastify";
import styled from "styled-components";

import { Typography } from "@material-ui/core";
import emailjs from "emailjs-com";
import "react-toastify/dist/ReactToastify.css";

import styles from "./sections.module.css";
import { Heading } from "./sections.module";
import { Grid } from "@material-ui/core";

import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineMail,
} from "react-icons/ai";

import { FaPhone, FaGithub, FaLinkedin, FaDev } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { HTMLTEXT } from "../Pages/pages.module";

// import ends here

export default function Contact() {
  const success = () => toast.dark("Successfully Sent");
  const failure = () => toast.error("Something went wrong");

  const P = styled.p`
    font-size: 20px;
    font-weight: 400;
    line-height: 40px;
    margin-bottom: 10px;
    color: white;
    &:hover {
      color: #68f5d9;
    }
  `;

  const LinksCont = styled.div`
    /* margin-top: 33%; */
    margin-left: 100px;
    @media (max-width: 795px) {
      justify-content: center;
    }
    @media (max-width: 600px) {
      margin-left: 0;
    }
  `;

  const footerData = [
    {
      id: 0,
      title: "Mobile",
      display: "+91 9321242018",
      link: "tel:+919321242018",
      icon: <FaPhone className={styles.commonIconsFooter} />,
    },
    {
      id: 1,
      title: "Email",
      display: "shubhamrathod.sr1@gmail.com",
      link: "mailto:shubhamrathod.sr1@gmail.com",
      icon: <SiGmail className={styles.commonIconsFooter} />,
    },
    {
      id: 2,
      title: "Github",
      display: "Github",
      link: "https://github.com/shubham-rathod1",
      icon: <FaGithub className={styles.commonIconsFooter} />,
    },
    {
      id: 3,
      title: "LinkedIn",
      display: "LinkedIn",
      link: "https://www.linkedin.com/in/shubham-rathod-297176181/",
      icon: <FaLinkedin className={styles.commonIconsFooter} />,
    },
    {
      id: 5,
      title: "dev.to",
      display: "DEV",
      link: "https://dev.to/shubhamrathod1",
      icon: <FaDev className={styles.commonIconsFooter} />,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          success();
        },
        (error) => {
          console.log(error.text);
          failure();
        }
      );
    e.target.reset();
  };

  return (
    <Grid className={styles.outerLayout} container>
      <Grid item xs={12} sm={12} md={6} lg={6} className={styles.contacSection}>
        <HTMLTEXT style={{ margin: "0% 0% 0% 6%" }} h1>{`<h1>`}</HTMLTEXT>
        <Heading contact>Contact me</Heading>
        <HTMLTEXT style={{ margin: "0% 0% 0% 73%" }} h1>{`</h1>`}</HTMLTEXT>
        <Typography className={styles.paragraph}>
          I’m interested in projects or opportunities – especially ambitious or
          large projects. However, if you have other request or question, don’t
          hesitate to use the form.
        </Typography>

        <div>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.name_and_email}>
              <input
                required
                className={styles.name}
                placeholder="Your Name"
                name="name"
              />
              <input
                required
                className={styles.email}
                placeholder="Email"
                name="email"
              />
            </div>
            <input
              type="number"
              required
              className={styles.fields}
              placeholder="contact"
              name="contact"
            />
            <textarea
              required
              type="textarea"
              className={styles.fields}
              multiline
              rows="4"
              placeholder="Message"
              name="message"
            />
            <button disableRipple="true" className={` ${styles.btn}`}>
              <span className={styles.btnText}>Submit</span>
            </button>
            <ToastContainer />
          </form>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <p style={{ color: "white", margin: "0% 1% 2% 0%" }}>
              contact me @
            </p>
            <a
              className={styles.contactIcons}
              href="https://www.linkedin.com/in/shubham-rathod-297176181/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineLinkedin />
            </a>
            <a
              className={styles.contactIcons}
              href="https://github.com/shubham-rathod1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineGithub />
            </a>
            <a
              className={styles.contactIcons}
              href="https://mailto:shubhamrathod.sr1@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineMail />
            </a>
          </div>
        </div>
      </Grid>

      <Grid item xs={12} sm={12} md={6} lg={6} className={styles.contactLinks}>
        <LinksCont>
          {footerData.map((item) => (
            <div style={{ display: "flex", alignItems: "center" }}>
              <div style={{ margin: "10px 5% 0px 0px" }}>{item.icon}</div>
              <div style={{ marginTop: "-5px" }}>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={item.link}
                  style={{ textDecoration: "none" }}
                >
                  <P>{item.display}</P>
                </a>
              </div>
            </div>
          ))}
        </LinksCont>
      </Grid>
    </Grid>
  );
}
