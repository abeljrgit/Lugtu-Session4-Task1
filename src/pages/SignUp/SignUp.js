import { Box, Card, Container } from '@mui/material';
import React, { Component } from 'react';
import SignUpForm from './SignUpForm';
import { Images } from '../../assets';

export class SignUp extends Component {
  render() {
    return (
      <section className="center-h section-sign-up ">
        <Container
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Card
            sx={{
              display: 'flex',
              alignItems: 'stretch',
              '@media (max-width: 768px)': {
                flexDirection: 'column-reverse',
              },
            }}
          >
            <SignUpForm />
            <Box sx={{ overflow: 'hidden' }}>
              <img
                className="passion-image"
                src={Images.passionImage}
                alt="Join Us Image"
              />
            </Box>
          </Card>
        </Container>
      </section>
    );
  }
}
