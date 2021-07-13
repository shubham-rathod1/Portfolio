import React from "react";
import {
  Button,
  CardContent,
  CardMedia,
  Grid,
  Typography,
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
              <Card>
                <CardMedia className={styles.media} image={item.image} />
                <CardContent>
                  <CardsText title
                    className={styles.blogTypo}
                    variant="h4"
                    gutterBottom
                  >
                    {item.title}
                  </CardsText>
                  <CardsText para
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {item.para}{" "}
                  </CardsText>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
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
