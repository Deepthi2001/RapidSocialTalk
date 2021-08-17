import React, { useState } from 'react';
import { Button, Container, FormControl, InputAdornment, IconButton, TextField } from '@mui/material';
import {AccountCircle, Lock, Visibility, VisibilityOff } from '@mui/icons-material';
  

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    console.log('Logging in with:', email, password);
    setEmail('');
    setPassword('');
  };

  return (
    <Container component="main" maxWidth="xs">
        <form onSubmit={handleLogin} style={{ width: '100%' }}>
          <FormControl fullWidth margin="normal" variant="outlined">
            <TextField
              label="Email"
              name="email"
              type="email"
              variant="outlined"
              fullWidth
              required
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
          </FormControl>
          <FormControl fullWidth margin="normal" variant="outlined">
            <TextField
              label="Password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              variant="outlined"
              fullWidth
              required
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
              InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                      <Lock />
                    </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleClickShowPassword} edge="end">
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </FormControl>

          <Button type="submit" fullWidth variant="outlined" sx={{ mt: 3, background: "orange" }} onClick={(e)=>{
            setEmail("guest@gmail.com");
            setPassword("guest@123456")
          }}>
            Guest User
          </Button>
          <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mt: 3 }}>
            LOGIN
          </Button>
        </form>
    </Container>
  );
}

export default Login;