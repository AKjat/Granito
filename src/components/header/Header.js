import React from "react";
// import SearchAppBar from "./search/SearchSection";
import {
  AppBar,
  Toolbar,
  Grid,
  Button,
  Tooltip,
  IconButton,
  Badge,
  ThemeProvider,
  Box,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import MenuButton from "../Ui/MenuButton";

import SearchSection from "./search/SearchSection";
import SearchAppbar from "./search/SearchAppbar";
import SearchBar from "./search/SearchBar";
import NewSearch from "./search/NewSearch";
import HoverMenu from "../Ui/new/HoverMenu";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { useSelector } from "react-redux";


const useStyles = makeStyles((theme) => ({
  hide: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },
}));
const Header = () => {
  const classes = useStyles();
  const totalCartItems = useSelector(state=> state.cart.totalQuantity)
  console.log(totalCartItems)
  return (
    <AppBar elevation={5} color="secondary" position="sticky">
      <Toolbar sx={{ height: "80px" }}>
        <Grid
          container
          spacing={2}
          // sx={{ innerHeight: "100px" }}
          // container
          // flexDirection='row'
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid component={Link} to="/" item xs={1} sm={2} md={1} lg={1}>
            <Box >
            <img height={60} src="img/logo/logo1.png" alt="" />
            </Box>
          </Grid>
          <Grid item   xs={3} sm={3} md={3} lg={4}>
            <Box>
              {/* <SearchAppbar/> */}
            {/* <SearchSection /> */}
            <NewSearch/>
              {/* <SearchBar/> */}
            </Box>
          </Grid>

          <Grid className={classes.hide}  item  xs={1} lg={1}>
            <Box marginLeft={0}  >
              {/* {<HoverMenu/>} */}
              {/* <MenuButton /> */}
            </Box>
          </Grid>

          <Grid className={classes.hide} item xs={1} lg={1}>
            <Box>
            <Button
                component={Link}
                to="/"
                variant="contained"
                color="primary"
                size="small"
                endIcon={<PersonIcon />}
              >
                Login
              </Button>
            </Box>
          </Grid>
          <Grid className={classes.hide} item xs={1} lg={1}>
              <Box>
              <Badge badgeContent={totalCartItems} color="primary">
              <Button
                component={Link}
                to="/cart"
                size="small"
                variant="outlined"
                endIcon={<LocalShippingIcon />}
              >
                Truck
              </Button>
              </Badge>
              </Box>
            </Grid> 
          
          <Grid item xs={1} lg={1} marginRight={1} >
              <Box>
              <Tooltip title="Notifications">
                <IconButton>
                  <Badge badgeContent={4} color="primary">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
              </Tooltip>
              </Box>
            </Grid>

         
        </Grid>
        {/* <Grid container spacing={2}>
  <Grid item xs={8}>
    <Item>xs=8</Item>
  </Grid>
  <Grid item xs={4}>
    <Item>xs=4</Item>
  </Grid>
  <Grid item xs={4}>
    <Item>xs=4</Item>
  </Grid>
  <Grid item xs={8}>
    <Item>xs=8</Item>
  </Grid>
</Grid> */}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
