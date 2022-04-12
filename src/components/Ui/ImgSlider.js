import React from "react";
import {Link} from "react-router-dom";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { makeStyles } from "@mui/styles";
import { Box, Grid, Button } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  imgB: {
    objectFit: "cover",
  },
  capitalize: {
    textTransform: 'uppercase'
  }
}));
const ImgSlider = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Carousel>
        <Carousel.Item className={classes.imgB} interval={1000}>
          <img
            className="d-block w-100"
            src="img/p4.jpg"
            alt="First slide"
            height={400}
          />
          <Carousel.Caption>
            <Grid container alignItems='center' justifyContent='space-between' spacing={1}>
              <Grid item>
            <p className={classes.capitalize}>An Excellence that realizes dreams</p>
            <h1 className={classes.capitalize}> Always in the pursuit of the Impossible </h1>
              </Grid>
              <Grid item>
                <Button variant="outlined" LinkComponent={ Link } to='/products'> See Our Products </Button>
              </Grid>
            </Grid>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={classes.imgB} interval={1000}>
          <img
            className="d-block w-100"
            src="img/product/p5.jpg"
            alt="Second slide"
            height={400}
          />

          <Carousel.Caption>
          <Grid container alignItems='center' justifyContent='space-between' spacing={1}>
              <Grid item>
            <p className={classes.capitalize}>The most astonishing materials in unusual colours & designs </p>
            <h1 className={classes.capitalize}> Witness Mother nature's finest creations </h1>
              </Grid>
              <Grid item>
                <Button variant="outlined" LinkComponent={ Link } to='/products'> See Our Products </Button>
              </Grid>
            </Grid>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={classes.imgB} interval={1000}>
          <img
            className="d-block w-100"
            src="img/product/p3.jpg"
            alt="Third slide"
            height={400}
          />

          <Carousel.Caption>
          <Grid container alignItems='center' justifyContent='space-between' spacing={1}>
              <Grid item>
              <p className={classes.capitalize}>
              Celebrate the luxury of nature and timeless legacy with our natural stone collection
            </p>
            <h1 className={classes.capitalize}>The Bliss of nature with a dash of splendor</h1>
              </Grid>
              <Grid item>
                <Button variant="outlined" LinkComponent={ Link } to='/products'> See Our Products </Button>
              </Grid>
            </Grid>
            
            
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Box>
  );
};

export default ImgSlider;
