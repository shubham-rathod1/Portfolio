import React from "react";

/// internal imports starts
import BlogCards from "../Components/BlogCards";
import { Heading } from "./sections.module";

/// internal imports ends

// blog data

const data = [
  {
    title: "Website design – how to start?",
    image: "https://images4.alphacoders.com/918/918599.jpg",
    para: "If you want to hire a web developer right away without reading , click here and send me a message! What is a web developer? Who is actually a...",
  },
  {
    title: "Website design – how to start?",
    image:
      "https://hdwallsource.com/img/2021/11/mia-melano-desktop-wallpaper-73630-76296-hd-wallpapers.jpg",
    para: "If you want to hire a web developer right away without reading , click here and send me a message! What is a web developer? Who is actually a...",
  },
  {
    title: "Website design – how to start?",
    image:
      "https://c4.wallpaperflare.com/wallpaper/520/421/315/jia-lissa-metart-magazine-redhead-women-indoors-model-hd-wallpaper-preview.jpg",
    para: "If you want to hire a web developer right away without reading , click here and send me a message! What is a web developer? Who is actually a...",
  },
  {
    title: "Website design – how to start?",
    image:
      "https://kdramaone.com/wp-content/uploads/2020/11/Moon-chae-Won-Png.jpg",
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
