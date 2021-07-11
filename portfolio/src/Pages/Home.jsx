import React from "react";
import { Container, CssBaseline } from "@material-ui/core";
import Contact from "../Sections/Contact";

import { Button, MenuSection, Section } from "./pages.module";

export default function Home() {
  return (
    <div style={{ backgroundColor: "#1D1D1D", ovarflow: "hidden" }}>
      <Section>
        <MenuSection>
          <p >hello</p>
        </MenuSection>
        <div
          style={{ display: "flex", flexDirection: "column", width: "100%" }}
        >
          <div style={{ flexBasis: "90%" }}>
            <Contact />
            <Contact />

          </div>
        </div>
      </Section>
    </div>
  );
}
// style={{ position: "sticky", top: "0" }}