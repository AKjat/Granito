import { Box, Button, Container, Divider, Grid, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import Product from "../../../components/product/Product";
import ProductCard from "../../../components/product/ProductCard";
import BreadCrumbs from "../../../components/Ui/Breadcrumbs";
import MobileCategory from "../../../components/Ui/drawer/MobileCategory";
import MobileFilter from "../../../components/Ui/drawer/MobileFilter";
import Filter from "./Filter";
import Categ from "../../../components/categlist/Categ";
import productDetails from "../../../data/Details";
import { CartState } from "../../../context/Context";
import {connect, useDispatch, useSelector} from 'react-redux';


const useStyles = makeStyles((theme) => ({
  hideM: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },
  hideD: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  },
}));

const Filterpage = (props) => {
  const classes = useStyles();
  const { state: {products} } = CartState();
  const [items, setItems] = useState(productDetails);

  const handleCateg = (categ) => {
    const updatedItems = productDetails.filter((curElem) => {
      return curElem.type === categ;
    });
    setItems(updatedItems);
  };
  const handleAll = () => {
    const pdetails = productDetails.filter((curElem) => {
      return curElem;
    });
    setItems(pdetails);
  };
  //-->fetch API
  // const [Aproducts, setAProducts] = useState();

  // useEffect(() => {
  //   getData();
  // }, []);

  // const getData = () => {
  //   fetch("https://retoolapi.dev/CmTFgM/data")
  //     .then((res) => res.json())
  //     .then((data) => setAProducts(data))
  //     .catch((err) => console.log(err));
  //     console.log(Aproducts)
  // };
  //<---fetch API
  

  return (
    <>
      <Box>
        <Paper className="CategPaper">
          {/* <Categ handleCateg={handleCateg} handleAll={handleAll} /> */}
        </Paper>
      </Box>
      <Container  >
        <Grid container justifyContent="space-between">
          <Grid item xs={0} md={2}  className={classes.hideM}>
            <Filter />
          </Grid>


          <Grid item xs={12} md={9} lg={9} marginTop={1} >
            <BreadCrumbs />
            <Grid container justifyContent="space-between" marginTop={1}>
              <Box className={classes.hideD}>
                <MobileCategory />
              </Box>
              <Box className={classes.hideD}>
                <MobileFilter className={classes.hideD} />
              </Box>
            </Grid>
            <Grid container spacing={2} marginTop={0}>
              {products.map((d, index) => (
                <Grid item key={index} xs={6} lg={4} sm={4} md={5} padding={0}>
                  <Product
                    d={d}
                    index={index}
                    handleClickOpen={props.handleClickOpen}
                    
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Filterpage;

