import { Box, Card, Typography } from '@mui/material';
import React, { Component } from 'react';
import { Icons } from '../../assets';

export class ContactCard extends Component {
  render() {
    return (
      <Card
        sx={{
          flex: 1,
          width: '200px',
          display: 'flex',
          flexDirection: 'column',
          p: 2,
          backgroundColor: '#0F6292',
          color: '#FFFFFF',
        }}
      >
        <Typography variant="h5" sx={{ lineHeight: 1 }}>
          Contact Us
        </Typography>
        <Typography variant="body2" sx={{ fontSize: 12, mt: 1 }}>
          <a className="link-style-white" href="tel:6565603224" rel="nofollow">
            +65 6560 3224
          </a>
        </Typography>
        <Typography variant="body2" sx={{ fontSize: 12 }}>
          <a
            className="link-style-white"
            href="mailto:info@geco.asia"
            rel="nofollow"
          >
            info@geco.asia
          </a>
        </Typography>
        <Box
          sx={{
            width: '100%',
            mt: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}
        >
          <a
            href="https://www.facebook.com/gecoasia/"
            target="_blank"
            rel="nofollow"
          >
            <img src={Icons.facebookLogo} alt="Facebook Logo" />
          </a>
          <a
            href="https://www.linkedin.com/company/gecoasia/"
            target="_blank"
            rel="nofollow"
          >
            <img src={Icons.linkedinLogo} alt="Linkedin Logo" />
          </a>
          <a
            href="https://twitter.com/GECO_Asia"
            target="_blank"
            rel="nofollow"
          >
            <img src={Icons.twitterLogo} alt="Twitter Logo" />
          </a>
          <a
            href="https://www.instagram.com/gecoasia/"
            target="_blank"
            rel="nofollow"
          >
            <img src={Icons.instagramLogo} alt="Instagram Logo" />
          </a>
        </Box>
      </Card>
    );
  }
}
