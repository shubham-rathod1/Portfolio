import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import { makeStyles, Typography } from "@material-ui/core";
import ReactMapGL from "react-map-gl";
import emailjs from "emailjs-com";
import "react-toastify/dist/ReactToastify.css";

import styles from "./sections.module.css";
import {Heading} from "./sections.module" 
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  
 
}));

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

  const classes = useStyles();

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
              className={`${classes.fields} ${styles.btn}`}
            >
              <span className={styles.btnText}>Submit</span>
            </button>
            <ToastContainer />
          </form>
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
