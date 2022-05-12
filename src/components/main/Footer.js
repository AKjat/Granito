import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root:{
      width: "100%",
      backgroundColor: "gray",
      [theme.breakpoints.down('sm')]:{
        padding: theme.spacing(3)
      },
      [theme.breakpoints.up('sm')]:{
        padding: theme.spacing(5)
      },
      marginTop: theme.spacing(1)
    }
}));

const Footer = () => {
const classes = useStyles()
  return (
      
    <Grid container component="footer" className={classes.root} justifyContent="space-around">
        <Grid item xs={3} >
          <Box sx={{height: 70, marginBottom: 1}}>
            <img src="img/logo/logo1.png" height="100%" style={{objectFit: "contain"}} alt="" />
          </Box>
          <Typography variant='body2'>
            Establiashed in 1987, are well-known manufacturers, suppliers, and exporters of premium quality Granite, Marbles, and All Natural Stones.
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Box display='flex' flexDirection="column"  >
            <Typography variant='h6' fontStyle='revert' >
              Contact Us <ContactSupportIcon/>
            </Typography>
            <Typography variant='body2'>
            Shree Ram Expo Office:
            </Typography>
            <Typography variant='caption'>
            RIICO Industrial Area,
            </Typography>
            <Typography variant='caption'>
            Madanganj- Kishangarh
            </Typography>
            <Typography variant='caption'>
            Dist. Ajmer 305801 (Raj.) INDIA
            
            </Typography>
            <Typography variant='caption'>
             <PhoneIcon color='secondary' fontSize='small' />  +91-95715 10000
            </Typography>
            <Typography variant='caption'>
             <EmailIcon color='secondary' fontSize='small'/> info@shreeramexpo.in
            </Typography>
          </Box>
        </Grid>

        {/* <Grid item xs={3}>
            
        </Grid> */}
    </Grid>
  );
}

export default Footer;
