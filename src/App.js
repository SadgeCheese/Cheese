import './App.css';

import * as React from 'react';
//import Box from '@mui/material/Box';


const App = () => {
  return (
    <Grid container spacing={2} style={{ height: '50vh', width: '50vw', margin: 'auto' }}>
    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
      <h1>Login</h1>
      <form>
        <TextField
          id="email"
          label="Email"
          type="email"
          fullWidth
          margin="normal"
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          fullWidth
          margin="normal"
        />
        <Button variant="contained" color="primary" type="submit">
          Login
        </Button>
      </form>
    </Grid>
  </Grid>
  );
};

export default App;
