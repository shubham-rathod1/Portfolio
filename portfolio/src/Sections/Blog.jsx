import React from "react";

/// internal imports starts
import BlogCards from "../Components/BlogCards";
import { HTMLTEXT } from "../Pages/pages.module";
import { Heading } from "./sections.module";

/// internal imports ends

// blog data

const data = [
  {
    title: "Web Devleoper – Questions & Answers",
    image:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--3B2-N2Gp--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/mg9zw6pbduuynzhw1yam.jpg",
    para: "Who is actually a web developer? When interpreting the term literally in ...",
    link: "https://dev.to/shubhamrathod1/web-devleoper-questions-answers-m20",
  },
  {
    title: "Website design – how to start?",
    image:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--oDSWRSs7--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/tpv2swcx1d984rulxvud.jpg",
    para: "Designing a website starts with defining the role the website is meant to serve, or its purpose.You’re guessing right – there are different types of websites that are used for different purposes ...",
    link: "https://dev.to/shubhamrathod1/website-design-how-to-start-9fp",
  },
  {
    title: "How we cloned calendly in 3 days.",
    image:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--LgCFsIyH--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/slhuhbwsr1kbjejlq0ib.png",
    para: "We were given a project to clone the website ‘Calendly’ as part of Masai School’s curriculum In this blog I’m telling you the story of how ...",
    link: "https://dev.to/shubhamrathod1/how-we-cloned-calendly-with-html-css-js-in-3-days-2fkf",
  },
  // {
  //   title: "Website design – how to start?",
  //   image:
  //     "https://media.nature.com/lw800/magazine-assets/d41586-018-01414-6/d41586-018-01414-6_15417538.jpg",
  //   para: "If you want to hire a web developer right away without reading , click here and send me a message! What is a web developer? Who is actually a...",
  //   link:"https://dev.to/shubhamrathod1/how-we-cloned-calendly-with-html-css-js-in-3-days-2fkf"
  // },
];

export default function Projects() {
  return (
    <div>
      <HTMLTEXT></HTMLTEXT>
      <HTMLTEXT style={{ margin: "0% 0% -6% 34%" }} h1>{`<h1>`}</HTMLTEXT>
      <Heading blog>My Blogs</Heading>
      <HTMLTEXT style={{ margin: "-1% 0% 4% 64%" }} h1>{`</h1>`}</HTMLTEXT>

      <div style={{ padding: "50px", marginLeft: "5%" }}>
        <BlogCards data={data} />
      </div>
    </div>
  );
}
