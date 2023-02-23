import {
  Box,
  Card,
  Container,
  Fade,
  FormControlLabel,
  Switch,
  Typography,
} from '@mui/material';
import React, { Component } from 'react';
import { Images } from '../../assets';

export class AboutUs extends Component {
  state = {
    isChecked: false,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isChecked: true,
      });
    }, 1000);
  }

  render() {
    return (
      <section className="center-h section-about-us ">
        <Container
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Box className="cards-grid">
            <Fade in={this.state.isChecked} timeout={{ enter: 500 }}>
              <Card
                sx={{
                  width: '300px',
                  height: 'auto',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Box>
                  <img src={Images.passionImage} className="passion-image" />
                </Box>
                <Box sx={{ p: 2 }}>
                  <Typography variant="h6">Software Development</Typography>
                  <Typography variant="body2">
                    We provide services like Web or Mobile application
                    development using cutting edge technologies.
                  </Typography>
                </Box>
              </Card>
            </Fade>
            <Fade in={this.state.isChecked} timeout={{ enter: 2000 }}>
              <Card
                sx={{
                  width: '300px',
                  height: 'auto',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <img src={Images.passionImage} className="passion-image" />
                <Box sx={{ p: 2 }}>
                  <Typography variant="h6">Digital Marketing</Typography>
                  <Typography variant="body2">
                    Social Media, SEO, and Creative media are the most popular
                    nowadays in which we could refer you to our experts.
                  </Typography>
                </Box>
              </Card>
            </Fade>
            <Fade in={this.state.isChecked} timeout={{ enter: 3500 }}>
              <Card
                sx={{
                  width: '300px',
                  height: 'auto',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <img src={Images.passionImage} className="passion-image" />
                <Box sx={{ p: 2 }}>
                  <Typography variant="h6">Technology Consultation</Typography>
                  <Typography variant="body2">
                    We provide solution-oriented experts for your business needs
                    to be able to catch up on current technologies.
                  </Typography>
                </Box>
              </Card>
            </Fade>
          </Box>
        </Container>
      </section>
    );
  }
}
