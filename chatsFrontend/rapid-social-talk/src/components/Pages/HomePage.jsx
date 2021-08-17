import React from 'react'
import { styled } from '@mui/system';
import { Tab, Tabs, Box, Container } from '@mui/material';
import Login from '../Authentication/Login';
import Signup from '../Authentication/Signup';

const StyledContainer = styled(Container)`
  display: flex;
  align-items: center;
  color: 'white !important';
`;

const HomePage = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  console.log("value",value)

  return (
      <StyledContainer maxWidth="sm">
        <Box sx={{bgcolor: 'white', opacity: 0.8, borderRadius: '10px', padding: '10% 0%', color: 'whitesmoke !important'}}>
        <Tabs
        value={value}
        onChange={handleChange}
        textColor="primary"
        indicatorColor="primary"
        centered
      >
        <Tab label="Login" />
        <Tab label="Signup" />
      </Tabs>
      <Box p={3}>
        {value ? <Signup /> : <Login />}
      </Box>
        </Box>
       
        
      </StyledContainer>
  )
}

export default HomePage
