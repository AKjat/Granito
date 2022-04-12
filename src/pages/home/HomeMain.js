import { Box, Button, Card, Divider, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import ProductCard from "../../components/product/ProductCard";
import ImgCarousel from "../../components/Ui/ImgCarousel";
import ImgSlider from "../../components/Ui/ImgSlider";
import HomeGridCarousel from "../../components/Categories/HomeGridCarousel";
import Carousel from "react-grid-carousel";
import Slide from "../../components/Slide/Slide";
import Product from "../../components/product/Product";
import { Masks, Title } from "@mui/icons-material";
import MultiItem from "../../components/Carousel/MultiItem";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "400px",
  },
}));

function HomeMain(props) {
  // const filterItem=(categ)=>{
  //   props.handleCateg(categ)
  //       console.log(categ)
  // }
  const classes = useStyles();
  return (
    <Box  marginTop={0.05} >
      {/* <Slide/> ---> landing Page Slider with play and pause */}
      <ImgSlider />
      <Box marginTop={2} marginBottom={0.2} boxShadow={10} paddingBottom={1} marginLeft={1} marginRight={1}>
        <Box display="flex" justifyContent="space-between" alignItems="center" marginLeft={2} marginRight={2} marginBottom={1}>
        <Typography variant="h5" component="h5" align="center">
          Newly Arrivals 
        </Typography>
        <Button variant="outlined" component={Link} to="/products" >View All</Button>
        </Box>
        <Divider/>
      <HomeGridCarousel data={props.NewArrival} />
      </Box>

      <Box marginTop={2} marginBottom={0.2} boxShadow={10} paddingBottom={1} marginLeft={1} marginRight={1}>
      <Box display="flex" justifyContent="space-between" alignItems="center" marginLeft={2} marginRight={2} marginBottom={1}>
        <Typography variant="h5" component="h5" align="center">
          Most Demanding
        </Typography>
        <Button variant="outlined">View All</Button>
        </Box>
        <Divider/>
      <HomeGridCarousel data={props.MostDemanding} />
      </Box>

      {/* <Box>
        <MultiItem/>
      </Box> */}
      

      {/* <Carousel cols={5} showDots loop gap={10} >
        {props.items.slice(0, 7).map((d, i) => (
          <Carousel.Item key={i}>
            <Card>
              <img src={d.img} style={{height: "150px"}}/>
              <div>
                <Typography>{d.name}</Typography>
                
                <span>{d.price}</span>  
              </div>
              
            </Card>
            
          </Carousel.Item>
        ))}
      </Carousel> */}

      {/* <Box id="section1"  height="1000px">
          <h2>About Us</h2>
      </Box> */}
      {/* <Box  marginTop={1} marginBottom={0.2}   boxShadow={1}>
            <Typography   variant="h5" component="h5" align="center">
              Products
            </Typography>
            </Box> */}
      {/* <ProductCard items= {props.items}/> */}
    </Box>
  );
}

export default HomeMain;
