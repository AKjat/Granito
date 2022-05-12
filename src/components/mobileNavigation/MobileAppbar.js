import { AppBar } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import MobileDrawer from '../Ui/MobileDrawer';

const useStyles= makeStyles((theme)=>({
    mobileView: {
         
        // position: 'fixed',
        // backgroundColor: '#fff',
        // bottom: '0',
        // left: '0',
        // width: '100%',
        [theme.breakpoints.down('md')]: {
            display: 'block'
          },
          [theme.breakpoints.up('md')]: {
            display: 'none'
          }
    },
    
}))
const MobileAppbar = () => {
    const classes = useStyles();
  return (
    <div   className={classes.mobileView}>
      <MobileDrawer/>
    </div>
  );
}

export default MobileAppbar;
