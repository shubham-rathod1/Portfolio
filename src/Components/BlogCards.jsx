import React from "react";
import {
  Button,
  CardContent,
  CardMedia,
  Grid,
  Card,
  CardActions,
} from "@material-ui/core";

import styles from "../Sections/sections.module.css";
import { CardsText } from "../Sections/sections.module";

export default function BlogCards({ data }) {
  return (
    <div>
      <Grid container spacing={2}>
        {data.map((item) => {
          return (
            <Grid item sm={6} xs={12} md={6} lg={6}>
              <Card style = {{display: "flex", flexDirection: "column", justifyContent:"space-between"}}>
                <CardMedia className={styles.media} image={item.image} />
                <a
                  rel="noreferrer"
                  href={`${item.link}`}
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  <CardContent>
                    <CardsText
                      title
                      className={styles.blogTypo}
                      variant="h4"
                      gutterBottom
                    >
                      {item.title}
                    </CardsText>
                    <CardsText
                      para
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {item.para}{" "}
                    </CardsText>
                  </CardContent>
                </a>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => window.open(`${item.link}`)}
                  >
                    {" "}
                    Read on dev...
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
