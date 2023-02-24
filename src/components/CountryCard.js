import { Box, Card, Typography } from '@mui/material';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class CountryCard extends Component {
  render() {
    return (
      <Card
        className="card"
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div className="card-img">
          <img
            src={this.props.country.flags.png}
            alt={`Flag of ${this.props.country.name.common}`}
          />
        </div>
        <Box sx={{ p: 2, mt: 'auto' }}>
          <Link className="card-map__link" to={`/${this.props.country.cca2}`}>
            <Typography variant="h6">
              {this.props.country.name.common}
            </Typography>
          </Link>
          <Typography
            variant="body1"
            sx={{ fontSize: 14 }}
          >{`Population: ${this.props.country.population}`}</Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: 14 }}
          >{`Capital: ${this.props.country.capital[0]}`}</Typography>
          <Typography sx={{ fontSize: 12, color: '#E96479' }}>
            <a
              className="card-map__link"
              href={this.props.country?.maps?.googleMaps ?? ''}
              target="_blank"
            >
              Google Map
            </a>
          </Typography>
        </Box>
      </Card>
    );
  }
}
