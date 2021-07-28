import React from "react";
import { ImageList, ImageListItem } from "@material-ui/core";
import styles from "./sections.module.css";
import { Heading } from "./sections.module";
import ProjectCard from "../Components/ProjectCard";

// import { wrap } from "yargs";

const imageData = [
  {
    img: "https://f.hubspotusercontent10.net/hubfs/19495563/about/harvest-invoices-overview.png",
    title: "Get Harvest",
  },
  {
    img: "https://mk0ecommdesignocs268.kinstacdn.com/wp-content/uploads/2017/04/unitedbyblue_thumb.jpg",
    title: "United by Blue",
  },
  {
    img: "https://qph.fs.quoracdn.net/main-qimg-a372f268849100e99b3f2e688f5c937f",
    title: "Revv.co.in",
  },
];

export default function Projects() {
  return (
    <div>
      <Heading blog>Projects</Heading>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {imageData.map((item) => {
          return <ProjectCard {...item}/>;
        })}

        {/* <ProjectCard />
        <ProjectCard /> */}
      </div>
    </div>
  );
}
