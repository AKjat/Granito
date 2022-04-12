import { alpha, Box, Button, IconButton, InputBase } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { makeStyles } from "@mui/styles";
import { orange } from "@mui/material/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    width: theme.spacing(30),
    backgroundColor: "rgba(20, 30, 40, 0.3)",
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    border: "1.5px solid orange",
    borderStyle: 'inset',
    backgroundColor: alpha(orange[500], 0.25),
    "&:hover": {
      backgroundColor: alpha(orange[500], 0.45),
    },
    display: "flex"
  },
  icon: {
      
  },
  mobIcon: {
      display: "none !important",
      
  }
}));
const SearchBar = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <InputBase
        sx={{ ml: 2, flex: 1 }}
        placeholder="Search Products"
        inputProps={{ "aria-label": "search products" }}
      />
      <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
      
    </Box>
  );
};

export default SearchBar;
