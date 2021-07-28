import React from "react";

/// internal imports starts
import BlogCards from "../Components/BlogCards";
import { Heading } from "./sections.module";

/// internal imports ends

// blog data

const data = [
  {
    title: "Website design – how to start?",
    image: "https://media.nature.com/lw800/magazine-assets/d41586-018-01414-6/d41586-018-01414-6_15417538.jpg",
    para: "If you want to hire a web developer right away without reading , click here and send me a message! What is a web developer? Who is actually a...",
  },
  {
    title: "Website design – how to start?",
    image:
      "https://media.nature.com/lw800/magazine-assets/d41586-018-01414-6/d41586-018-01414-6_15417538.jpg",
    para: "If you want to hire a web developer right away without reading , click here and send me a message! What is a web developer? Who is actually a...",
  },
  {
    title: "Website design – how to start?",
    image:
      "https://media.nature.com/lw800/magazine-assets/d41586-018-01414-6/d41586-018-01414-6_15417538.jpg",
    para: "If you want to hire a web developer right away without reading , click here and send me a message! What is a web developer? Who is actually a...",
  },
  {
    title: "Website design – how to start?",
    image:
      "https://media.nature.com/lw800/magazine-assets/d41586-018-01414-6/d41586-018-01414-6_15417538.jpg",
    para: "If you want to hire a web developer right away without reading , click here and send me a message! What is a web developer? Who is actually a...",
  },
];

export default function Projects() {
  return (
    <div>
      <Heading blog>My Blogs</Heading>
      <div style={{ padding: "50px", marginLeft: "5%" }}>
        <BlogCards data={data} />
      </div>
    </div>
  );
}
