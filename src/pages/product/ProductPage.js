import React, { useEffect, useState } from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import {
  Box,
  Grid,
  Divider,
  Typography,
  Button,
  Container,
  TextField,
  Collapse,
  Alert,
  IconButton,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import ReactImageMagnify from 'react-image-magnify';
import ImageSelector from "../../components/Ui/layout/ImageSelector";
import { SideBySideMagnifier } from "react-image-magnifiers";
import ProductDetails from "./ProductDetails";
import "./ProductPage.css";

import ImagSelect from "./imagepick/ImagSelect";
import Product from "../../components/product/Product";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import Breadcrumb from "./components/Breadcrumb";

import SpecialReqDialog from "./components/SpecialReqDialog";


import { CartState } from "../../context/Context";
import { useDispatch } from "react-redux";
import { actions, cartActions } from "../../redux";
;

// import { addCart, deleteCart  } from "../../redux/actions/cart/cartActions";


const useStyles = makeStyles((theme) => ({
  hideM: {
    [theme.breakpoints.down("lg")]: {
      display: "none",
    },
    [theme.breakpoints.up("lg")]: {
      display: "block",
    },
  },
}));


const SuccessReq =({success, setSuccess})=>{
  
  return(
    <>
      <Collapse in={success}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setSuccess(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          Your Request has been sent. 
        </Alert>
      </Collapse>
    </>
  );
}
const ProductPage = (props) => {
 
  
  let {  id } = useParams();
  
  const { state: {products} } = CartState();
   const selectedProduct = products.filter(x => x.id === id)
   const { name, img, price} = selectedProduct[0]
   
  const [success, setSuccess] = React.useState(false);
  const [qty, setQty] = React.useState(10);
  const handleChange = (event) => {
    setQty(event.target.value);
  };
  let quantity = parseFloat(qty)
  
  const classes = useStyles();

 
  
  const dispatch = useDispatch();
  const handleAddCart= () => {
    dispatch(cartActions.addCart({
      id,
      name,
      img,
      price,
      quantity,
    }))
  }
  // myArray.filter(x => x.id === '45').map(x => x.foo);
  
//   function isNumber(evt) {
//     evt = (evt) ? evt : window.event;
//     var charCode = (evt.which) ? evt.which : evt.keyCode;
//     if (charCode > 31 && (charCode < 48 || charCode > 57)) {
//         return false;
//     }
//     return true;
// }
 

  return (
    <>
    <Box sx={{ marginLeft: "10px", marginRight: "10px",}} >
      {/* <HomeCateg/> */}
      <Box marginX={1} marginTop={2}>
        <Breadcrumb name={name} />
        <Grid container marginTop={1}>
          <Grid item xs={12} lg={6} marginTop="10px" >
            <ImagSelect data={props.NewArrival} selectedProduct={selectedProduct[0]} />
            
            {/* <ImgPick/> */}
          </Grid>
          <Divider
            className={classes.hideM}
            sx={{ height: "400px !important" }}
            orientation="vertical"
          />
          <Grid marginLeft={1} sx={{marginTop: "10px"}} item xs={12} lg={5}>
          <SuccessReq success={success} setSuccess={setSuccess}/>
            <ProductDetails  selectedProduct={selectedProduct[0]} />

            <Box marginTop={1}>
              <Typography variant="body2">Available offers</Typography>
              <Typography fontSize="small">
                <LocalOfferIcon fontSize="small"  /> {"   "} Get some discount on
                purchase of products
              </Typography>
            </Box>
            
            <Divider />
            <Box display='flex' alignItems='center' justifyContent='space-around' marginTop={1}>
              <Typography variant='body1'> Enter Your Quantity: </Typography>
              <TextField
                size="small"
                type='number'
                id="outlined-name"
                label="Quantity"
                
                value={qty}
                onInput={handleChange}
                helperText="/ Square Feet"
                required
              />
            </Box>

            <Grid
              container
              marginTop={2}
              justifyContent="space-around"
            > 
              
              <Button variant="contained" onClick={handleAddCart}  >Add to truck</Button>
              
              <Button variant="outlined">
                Call 
              </Button>
              {/* <Button variant="outlined">Special Request*</Button> */}
              <SpecialReqDialog setSuccess={setSuccess} />
            </Grid>
          </Grid>
        </Grid>
      </Box>
      </Box>
      <Box  >
        <Box >
        <Box display="flex" marginLeft={2} marginTop={5} marginBottom={1} justifyContent="center" >
          <Typography variant="h5" alignSelf='center'>Related Products</Typography>
        </Box>
        </Box>
        
        <Container >
        <Grid container spacing={2}>
        {props.items.slice(0, 4).map((d, index) => (
                <Grid item key={index} xs={6} md={4} lg={3}   padding={0}>
                  <Product
                    d={d} 
                  />
                </Grid>
              ))}
        </Grid>
        </Container>
      </Box>
    

    </>
  );
};

export default ProductPage;

