import './App.css';
import Grid from '@mui/material/Grid2';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import * as React from 'react';
//import Box from '@mui/material/Box';


const LoginScreen = () => {
  return (
    <Grid size={{ xs: 12, md: 5 }}>
      <TextField id="outlined-basic" label="Email Address" variant="outlined" />
      <TextField id="outlined-basic" label="Password" variant="outlined" />
      <Button variant="contained">Login</Button>
    </Grid>
  );
};

export default LoginScreen;
