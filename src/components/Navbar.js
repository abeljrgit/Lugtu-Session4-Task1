import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import { Container } from '@mui/material';

export function Navbar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#0F6292' }}>
      <Container sx={{ py: 2 }}>
        <Link to="/" className="header-link">
          <Button color="inherit" sx={{ mr: 2 }}>
            <Typography>HOME</Typography>
          </Button>
        </Link>
        <Link to="/about-us" className="header-link">
          <Button color="inherit" sx={{ mr: 2 }}>
            <Typography>ABOUT US</Typography>
          </Button>
        </Link>
        <Link to="/contact-us" className="header-link">
          <Button color="inherit" sx={{ mr: 2 }}>
            <Typography>CONTACT US</Typography>
          </Button>
        </Link>
        <Link to="/sign-up" className="header-link">
          <Button color="inherit" sx={{ mr: 2 }}>
            <Typography>SIGN UP</Typography>
          </Button>
        </Link>
      </Container>
    </AppBar>
  );
}
