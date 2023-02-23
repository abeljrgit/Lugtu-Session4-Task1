import { Container } from '@mui/material';
import React, { Component } from 'react';

export class AboutUs extends Component {
  render() {
    return (
      <section className="center-h section-about-us ">
        <Container
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          Hello world
        </Container>
      </section>
    );
  }
}
