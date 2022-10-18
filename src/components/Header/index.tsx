import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import 'animate.css';


export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" >
        <Toolbar sx={{p: 0, m: 0}}>
          <Typography  
          className='animate__animated animate__lightSpeedInLeft animate__slower'
          variant='h4'
          component="div" sx={{ flexGrow: 1 }}>
            Tarefas
          </Typography>
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}