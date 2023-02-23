import axios from 'axios';
import React, { Component } from 'react';
import _ from 'lodash';
import { restCountriesAll } from '../services/PokemonApi';
import { Container } from '@mui/material';
import { CountryCard } from '../components';

export class Dashboard extends Component {
  state = {
    countryList: [],
  };

  componentDidMount() {
    axios
      .get(restCountriesAll)
      .then((res) => {
        this.setState({
          countryList: _.slice(res.data, 0, 10),
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const countryCards = this.state.countryList.length ? (
      this.state.countryList.map((country, index) => {
        return <CountryCard country={country} key={index} />;
      })
    ) : (
      <div>No Data.</div>
    );

    return (
      <section className="center-h section-dashboard">
        <Container>
          <div className="cards-grid">{countryCards}</div>
        </Container>
      </section>
    );
  }
}
