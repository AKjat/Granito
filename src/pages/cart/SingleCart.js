import { Box, Grid, IconButton, Typography, Divider } from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { makeStyles } from "@mui/styles";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../redux";
import RefreshIcon from '@mui/icons-material/Refresh';

const useStyles = makeStyles((theme) => ({
  hideD: {
    [theme.breakpoints.up("sm")]: {
      display: "none !important",
    },
    [theme.breakpoints.down("sm")]: {
      display: "block !important",
    },
  },
  hideM: {
    [theme.breakpoints.up("sm")]: {
      display: "block !important",
    },
    [theme.breakpoints.down("sm")]: {
      display: "none !important",
    },
  },
}));

const SingleCart = ({ d }) => {
  const cart = useSelector((state)=> state.cart.itemList)
  const dispatch = useDispatch();
  
  const [value, setValue] = useState(d.quantity);
  let val = parseFloat(value)
  const id = d.id
  const setChange = (t) => {
    setValue(t.value);
    dispatch(cartActions.setQuantity({
      id:id,
      qty1:parseFloat(t.value)
    }))
    console.log(val)
  };
  
  console.log(value)
  const classes = useStyles();
 
  
  const handleRemoveCart = () => {
    dispatch(cartActions.removeCart(d.id))
  }
 
  return (
    <>
      <Box className={classes.hideD}>
        <Grid container marginTop={1} spacing={1} padding={1}>
          <Grid item xs={4}>
            <Box sx={{ height: "150px" }}>
              <img style={{ objectFit: "cover", width: "100%", height: "100%" }} src={d.image} alt="Cart" />
              
            </Box>
          </Grid>
          <Grid
            item
            xs={6}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Box>
              <Typography>{d.name}</Typography>
            </Box>

            <Box display="flex" justifyContent="space-between">
              <Typography variant="subtitle2" color="green">
              ₹{d.price}
              </Typography>
              <Box display="flex" justifyContent="space-between">
                <Typography variant="subtitle2">SubTotal:</Typography>
                <Typography variant="subtitle2" color="green">
                ₹{d.totalPrice}
                  {/* ${d.price * value} */}
                </Typography>
              </Box>
            </Box>
            <Box>
              <input
                type="number"
                style={{ width: "40%" }}
                value={value}
                onChange={(e) => setChange(e.target)}
                
              />
              
            </Box>
          </Grid>
          <Grid item xs={2} display="flex" flexDirection="column" justifyContent="space-between">
            <IconButton onClick={handleRemoveCart}>
              <CloseIcon color="error" />
            </IconButton>
            
          </Grid>
        </Grid>
        <Divider />
      </Box>

      <Grid item className={classes.hideM}>
        <Grid container alignItems="center" minHeight={70}>
          <Grid item xs={2} display="flex">
            <Box>
              <IconButton onClick={handleRemoveCart}>
                <CloseIcon color="error" />
              </IconButton>
            </Box>
            <Box height={40} width={60}>
              <img
                style={{ objectFit: "contain", width: "100%", height: "100%" }}
                src={d.image}
                alt=""
              />
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="body1"> {d.name} </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="body1" color="green">
              {" "}
              ₹{d.price}{" "}
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <input
              type="number"
              min="1"
              style={{ width: "40%" }}
              value={value}
              onChange={(e) => setChange(e.target)}
            />
          </Grid>
          <Grid item xs={2}>
            <Typography variant="body1" color="green">
              {" "}
              ₹{d.totalPrice}
              {/* ${d.price * value}{" "} */}
            </Typography>
            
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default SingleCart;
