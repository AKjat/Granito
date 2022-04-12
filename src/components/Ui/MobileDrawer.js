import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Badge, Grid, IconButton } from '@mui/material';
import {Link} from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from '@mui/icons-material/Person';

import { makeStyles } from '@mui/styles';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import './MobileDrawer.css';
import { useSelector } from 'react-redux';

const useStyles = makeStyles({
    // [theme.bre]
})
export default function MobileDrawer() {
  const totalCartItems = useSelector(state=> state.cart.totalQuantity)

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : '100vw' }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
          <Grid container justifyContent='space-between'>
            <Grid component={Link} to='/' item lg={1} marginTop={3} marginLeft={3}>
                <img  height={50} src="img/logo/logo1.png" alt="logo" />
            </Grid>
              <Grid item marginTop={3} marginRight={3} >
                  <CloseIcon/>
              </Grid>
          </Grid>
        {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))} */}
      </List>
      <Divider />
      <List>
        
            
        
        {/* {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))} */}
      </List>
    </Box>
  );

  return (
    <div >
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
            
          <Grid container justifyContent='space-around' alignItems='center' height={60} >
            <Grid item>
                <Button startIcon={<Badge  color='primary'><MenuOpenIcon fontSize='medium'/></Badge>} onClick={toggleDrawer("left", true)}></Button>
            </Grid>
            <Grid item >
                
                <Button component={Link} to="/" startIcon={<Badge  color='primary'><HomeIcon fontSize='medium'/></Badge>}></Button>
                {/* <Link to='/'><HomeIcon sx={{height: "40px"}}/></Link> */}
                {/* <Button  startIcon={<HomeIcon sx={{height: "40px"}}/>}></Button> */}
            </Grid>
            <Grid item>
                
                    <Button  component={Link} to="/cart" startIcon={<Badge badgeContent={totalCartItems} color='primary'><LocalShippingIcon fontSize='medium' /></Badge>}></Button>
                
            </Grid>
            <Grid>
                <Button component={Link} to="/login" startIcon={<Badge  color='primary'><PersonIcon fontSize='medium'/></Badge>}></Button>
            </Grid>
          </Grid>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor) } 
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
