import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Button, Container, FormControl, TextField, Grid, Input } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const VisuallyHiddenInput = styled('textfield')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
    marginLeft:"20px"
  });

function Signup() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [pic, setPic] = useState('');

  const handleSignup = (event) => {
    event.preventDefault();
    console.log('Signing up with:', firstName,lastName,email,password,pic);
  };

  return (
    <Container component="main" maxWidth="xs">
        <form onSubmit={handleSignup}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <FormControl margin="normal" fullWidth>
                <TextField
                  label="First Name"
                  name="firstName"
                  variant="outlined"
                  required
                  value={firstName}
                  onChange={(e)=>setFirstName(e.target.value)}
                />
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl margin="normal" fullWidth>
                <TextField
                  label="Last Name"
                  name="lastName"
                  variant="outlined"
                  required
                  value={lastName}
                  onChange={(e)=>setLastName(e.target.value)}
                />
              </FormControl>
            </Grid>
          </Grid>
          <FormControl margin="normal" fullWidth>
            <TextField
              label="Email"
              name="email"
              type="email"
              variant="outlined"
              required
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl margin="normal" fullWidth>
            <TextField
              label="Password"
              name="password"
              type="password"
              variant="outlined"
              required
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
          </FormControl>
          <Button component="label" sx={{ my:2 }} variant="outlined" fullWidth startIcon={<CloudUploadIcon /> } onClick={(e)=> setPic(e.target?.files[0])}>Upload Profile Pic
            <VisuallyHiddenInput type="file" />
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 3 }}
            fullWidth
          >
            Sign Up
          </Button>
        </form>
    </Container>
  );
}

export default Signup;

