import React, { useState, useRef } from "react";
import { Link } from "react-router-dom"

import ProductCategory from '../../categlist/ProductCategory'
import { makeStyles } from "@mui/styles";
import { Button, MenuItem, Popover } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import HoverMenuCateg from "../../Categories/HoverMenuCateg";
import CList from '../../../data/CategList'
const useStyles = makeStyles(theme => ({
  popover: {
    pointerEvents: "none"
  },
  popoverContent: {
    pointerEvents: "auto"
  }
}));

const HoverMenu = ({ loading, login, wrong, clearWrongLogin, filterItem, filterIte }) => {
  const [openedPopover, setOpenedPopover] = useState(false);
  const popoverAnchor = useRef(null);

  const classes = useStyles();

  const popoverEnter = ({ currentTarget }) => {
    setOpenedPopover(true);
  };

  const popoverLeave = ({ currentTarget }) => {
    setOpenedPopover(false);
  };

  return (
    <div style={{display: 'flex', alignItems:'center'}}>
        <Button
        sx={{color: 'white'}}
        ref={popoverAnchor}
        aria-owns="mouse-over-popover"
        aria-haspopup="true"
        // onClick={openedPopover? popoverLeave : popoverEnter}
        onMouseEnter={popoverEnter}
        onMouseLeave={popoverLeave}
        endIcon={openedPopover ? <ExpandLess /> : <ExpandMore />} 
        onClick={()=>filterIte('')}
        >
        Products
        </Button>
      {/* <span ref={popoverAnchor} aria-owns="mouse-over-popover" aria-haspopup="true" onMouseEnter={popoverEnter}
        onMouseLeave={popoverLeave}
      >
        Hover this el !
      </span> */}
      <Popover
        id="mouse-over-popover"
        className={classes.popover}
        classes={{
          paper: classes.popoverContent
        }}
        open={openedPopover}
        anchorEl={popoverAnchor.current}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left"
        }}
        PaperProps={{ onMouseEnter: popoverEnter, onMouseLeave: popoverLeave }}
      >
        {CList.map((d, index, array)=>(
          
           <HoverMenuCateg d={d} key = {index} filterItem={filterItem}/>
        ))}
       
        {/* <ProductCategory/>
        
         <MenuItem onClick={popoverLeave}>Profile</MenuItem>
          <MenuItem onClick={popoverLeave}>My account</MenuItem>
         <MenuItem onClick={popoverLeave}>Logout</MenuItem> 
         */}
      </Popover>
    </div>
  );
};

export default HoverMenu;



















// import React, { useState } from "react";


// import { Button,  createMuiTheme,  Menu, MenuItem } from "@mui/material";
// import { ThemeProvider } from "@mui/styles";
// function HoverMenu() {
//     const [anchorEl, setAnchorEl] = React.useState(null);
  
//     function handleClick(event) {
//       if (anchorEl !== event.currentTarget) {
//         setAnchorEl(event.currentTarget);
//       }
//     }
  
//     function handleClose() {
//       setAnchorEl(null);
//     }
  
//     return (
//       <div >
//         <Button
//           aria-owns={anchorEl ? "simple-menu" : undefined}
//           aria-haspopup="true"
//           onClick={handleClick}
//           onMouseOver={handleClick}
          
//         >
//           Open Menu
//         </Button>
//         <Menu
//           id="simple-menu"
//           anchorEl={anchorEl}
//           open={Boolean(anchorEl)}
//           onClose={handleClose}
//           MenuListProps={{ onMouseLeave: handleClose }}
//         >
//           <MenuItem onClick={handleClose}>Profile</MenuItem>
//           <MenuItem onClick={handleClose}>My account</MenuItem>
//           <MenuItem onClick={handleClose}>Logout</MenuItem>
//         </Menu>
//       </div>
//     );
//   }
  
//   export default HoverMenu;