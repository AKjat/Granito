import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { loginActions } from '../../redux';
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="/">
        Shree Ram Stones
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {
    const dispatch = useDispatch();
    const [showPassword, setShowPassword] = React.useState(false)
    const [showOtpForm, setShowOtpForm] = React.useState(false)
    // const isLoggedIn = useSelector(state=>state.login.isloggedIn)
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      mobile: data.get('mobile'),
    });
    setShowOtpForm(true)
    // dispatch(loginActions.login())
  };
  const handleOTPSubmit = (event) => {
    event.preventDefault();
    dispatch(loginActions.login())
  }
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, backgroundColor: "green"}}>
            <LockOutlinedIcon />
          </Avatar>
          
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Typography variant="caption" >
            or Sign Up
          </Typography>
          {!showOtpForm?(<Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="mobile"
              label="Mobile Number"
              type="name"
              name="mobile"
              autoComplete="mobile"
              autoFocus
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Send OTP
            </Button>
          </Box>):(
            <Box component="form" onSubmit={handleOTPSubmit} noValidate sx={{ mt: 1 }}>
              <FormControl sx={{ mt: "16px",mb: "8px",  }} variant="outlined" fullWidth>
          <InputLabel htmlFor="outlined-adornment-password">Enter OTP</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {!showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
            {/* <TextField
              margin="normal"
              required
              fullWidth
              id="otp"
              label="Enter OTP"
              type="password"
              name="otp"
              autoComplete="password"
              
              autoFocus
            /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              verify Otp
            </Button>
          </Box>
          )}
          
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
  );
}



















// import {
//   Box,
//   Button,
//   Card,
//   FormControl,
//   FormGroup,
//   FormHelperText,
//   Input,
//   InputLabel,
//   Typography,
// } from "@mui/material";
// import React from "react";

// const SignIn = () => {
//     const submitHandler=(e)=>{
//         e.preventDefault();
//         console.log("submitted")
//     }
//   return (
//     <Box
//       display="flex"
//       flexDirection="column"
//       alignItems="center"
//       marginTop={2}
//       whiteSpace={4}
//     >
//       <Card>
//         <Box padding={5} boxShadow={1}>
//           <Box justifyContent="center" marginBottom={10}>
//             <Typography variant="h6">
//               Sign in using your Mobile number
//             </Typography>
//           </Box>
//           <FormGroup onSubmit={submitHandler}>
//             <FormControl>
//               <InputLabel htmlFor="my-input">Mobile number</InputLabel>
//               <Input required id="my-input" type="number" aria-describedby="my-helper-text" />
//               <FormHelperText id="my-helper-text">
//                 We'll never share your number.
//               </FormHelperText>
//             </FormControl>
//             <Button variant="outlined" type="submit">Sign In</Button>
//           </FormGroup>
//         </Box>
//       </Card>
//     </Box>
//   );
// };

// export default SignIn;
