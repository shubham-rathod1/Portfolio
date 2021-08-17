import React from "react";
import { ToastContainer, toast } from "react-toastify";

import { Typography } from "@material-ui/core";
import ReactMapGL from "react-map-gl";
import emailjs from "emailjs-com";
import "react-toastify/dist/ReactToastify.css";

import styles from "./sections.module.css";
import {Heading} from "./sections.module" 
import { Grid } from "@material-ui/core";

import {AiOutlineLinkedin, AiOutlineGithub, AiOutlineMail} from "react-icons/ai"

// mapbox imports
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

// import ends here

export default function Contact() {
  const success = () => toast.dark("Successfully Sent");
  const failure = () => toast.error("Something went wrong");

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

  const [viewport, setViewport] = React.useState({
    latitude: 19.07609,
    longitude: 72.877426,
    zoom: 10,
  });

  return (
    <Grid className={styles.outerLayout} container>
      <Grid item xs={12} sm={12} md={6} lg={6} className={styles.contacSection}>
        <Heading contact>Contact me</Heading>
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
            <button
              disableRipple="true"
              className={` ${styles.btn}`}
            >
              <span className={styles.btnText}>Submit</span>
            </button>
            <ToastContainer />
          </form>
          <div style = {{display: "flex", justifyContent: "center"}}>
            <p style = {{color: "white", margin: "0% 1% 2% 0%"}}>contact me @</p>
            <a className = {styles.contactIcons} href="https://www.linkedin.com/in/shubham-rathod-297176181/" target="_blank" rel="noopener noreferrer"><AiOutlineLinkedin /></a>
            <a className = {styles.contactIcons} href="https://github.com/shubham-rathod1" target="_blank" rel="noopener noreferrer"><AiOutlineGithub /></a>
            <a className = {styles.contactIcons} href="https://mailto:shubhamrathod.sr1@gmail.com" target="_blank" rel="noopener noreferrer"><AiOutlineMail /></a>
          </div>
        </div>
      </Grid>

      <Grid item xs={12} sm={12} md={6} lg={6} className={styles.mapSection}>
        <ReactMapGL
          {...viewport}
          width="100%"
          height="100%"
          onViewportChange={(viewport) => setViewport(viewport)}
          mapboxApiAccessToken={
            "pk.eyJ1Ijoic2h1YmhhbS0xOTk1IiwiYSI6ImNrcXlhdzQwZjB5aHYyeXF5ZjJhdnhrcGEifQ.EcpR8DQU2Q8sBcT0RnNEaQ"
          }
        ></ReactMapGL>
      </Grid>
    </Grid>
  );
}
