import { Box, Card, Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { restCountryByCode } from '../../services';
import axios from 'axios';

export const Country = ({}) => {
  const [responseData, setResponseData] = useState([]);
  const params = useParams();

  useEffect(() => {
    axios
      .get(`${restCountryByCode}/${params.country_code}`)
      .then((res) => {
        // console.log(res.data);
        // setResponseData(res.data[0].flags);
        setResponseData(res.data);
        // console.log(res.data[0].flags);
        // console.log(res.data[0].name);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section className="center-h section-about-us ">
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Card
          className="card"
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div className="card-img">
            <img
              src={responseData[0]?.flags?.png}
              alt={`Flag of ${responseData[0]?.name?.common}`}
            />
          </div>
          <Box sx={{ p: 2, mt: 'auto' }}>
            <Typography variant="h6">
              {responseData[0]?.name?.common}
            </Typography>

            <Typography
              variant="body1"
              sx={{ fontSize: 14 }}
            >{`Population: ${responseData[0]?.population}`}</Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: 14 }}
            >{`Capital: ${responseData[0]?.capital[0]}`}</Typography>
            <Typography sx={{ fontSize: 12, color: '#E96479' }}>
              <a
                className="card-map__link"
                href={responseData[0]?.maps?.googleMaps ?? ''}
                target="_blank"
              >
                Google Map
              </a>
            </Typography>
          </Box>
        </Card>
      </Container>
    </section>
  );
};
