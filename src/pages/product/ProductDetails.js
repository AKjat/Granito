import { Alert, Box, Collapse, Divider, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import LineWeightIcon from "@mui/icons-material/LineWeight";
import AspectRatioIcon from "@mui/icons-material/AspectRatio";



const ProductDetails = ({selectedProduct}) => {
  
  return (
    <Box overflow="hidden">
      <Box>
        <Typography variant="h5" gutterBottom>
          {selectedProduct.name}
        </Typography>
      </Box>
      
      
      <Grid container alignItems="center" >
        <Grid item xs={3}>
          <Typography sx={{opacity: "0.7"}} variant="body1">
          Available Pieces : {" "}
          </Typography>
        </Grid>
        <Grid item xs={9}>
            <Typography marginLeft={1} variant="body1" >10000 </Typography>
        </Grid>  
      </Grid>
      

      <Grid
        container
        marginTop={0}
        spacing={3}
        direction="row"
        justifyContent="space-around"
        margin={0}
        bgcolor="gainsboro"
      >
        <Grid
          item
          xs={4}
          justifyContent="center"
          sx={{ paddingLeft: "0 !important" }}
        >
          <Box
            sx={{ display: "flex", flexDirection: "column" }}
            alignItems="center"
          >
            <Grid item>
              <CurrencyRupeeIcon />
            </Grid>
            <Grid item>
              <Typography variant="body1">Price / sq. feet</Typography>
            </Grid>
            <Grid item>
              <Divider width="60px" light={true} />
            </Grid>
            <Grid item>
              <Box display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="body1" color="green">₹{"  "}{selectedProduct.price}</Typography>
              <Typography
                variant="body2"
                style={{ textDecoration: "line-through", opacity: "0.6" }}
              >
                ₹{"  "}8000
              </Typography>
              </Box>
              
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={4} sx={{ paddingLeft: "0 !important" }}>
          <Box
            sx={{ display: "flex", flexDirection: "column" }}
            alignItems="center"
          >
            <Grid item>
              <LineWeightIcon />
            </Grid>
            <Grid item>
              <Typography variant="body1">Thickness</Typography>
            </Grid>
            <Grid item>
              <Divider width="40px" light={true} />
            </Grid>
            <Grid item>
              <Typography variant="body2">15 MM</Typography>
            </Grid>
          </Box>
        </Grid>
        {/* <Grid item xs={4} sx={{ paddingLeft: "0 !important" }}>
          <Box
            sx={{ display: "flex", flexDirection: "column" }}
            alignItems="center"
          >
            <Grid item>
              <AspectRatioIcon />
            </Grid>
            <Grid item>
              <Typography variant="body1">Slab Size</Typography>
            </Grid>
            <Grid item>
              <Divider width="40px" light={true} />
            </Grid>
            <Grid item>
              <Typography variant="body2">5' × 6'</Typography>
            </Grid>
          </Box>
        </Grid> */}
      </Grid>
      <Grid container alignItems="center" >
        <Grid item xs={3}>
          <Typography sx={{opacity: "0.7"}} variant="body1" >
          Color : {" "}
          </Typography>
        </Grid>
        <Grid item xs={9}>
            <Typography marginLeft={1} variant="body1" >White</Typography>
        </Grid>  
      </Grid>
      <Divider/>
      <Grid container alignItems="center" >
        <Grid item xs={3}>
          <Typography sx={{opacity: "0.7"}} variant="body1" >
          Usage : {" "}
          </Typography>
        </Grid>
        <Grid item xs={9}>
            <Typography marginLeft={1} variant="body1" >Flooring, Walls</Typography>
        </Grid>  
      </Grid>
      
      <Divider/>
      <Grid container alignItems="center" >
        <Grid item xs={3}>
          <Typography sx={{opacity: "0.7"}} variant="body1">
          Origin : {" "}
          </Typography>
        </Grid>
        <Grid item xs={9}>
            <Typography marginLeft={1} variant="body1" >India</Typography>
        </Grid>  
      </Grid>
      <Divider />

    </Box>
  );
};

export default ProductDetails;
