import React from 'react';
import styled from 'styled-components';
import bg from '../images/store-banner.jpg';
import { Button } from 'react-bootstrap';
const Div = styled.div`
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align:center
  flex-direction: column;
  color: white;
  border-radius: 15px;
  background-image: url(${bg});
  background-size: cover;
  background-position: center;
`;
const Banner = () => (
  <Div>
    <div style={{ textAlign: 'center', background: 'rgba(0, 0, 0, 0.65)', height:'fit-content', padding: '50px 10px' }}>
      <h2 style={{ fontWeight: 'bold'}}>All your snacks, cakes, vegetable and fruits vendors, now accessible online. We have equally got all your casual service providers now orderable online</h2>
      <h4>
      Search through our store, select the fresh delivery/ lunch of your choice and have it delivered to your doorstep in hours. Book any service, from home carwash to pro web services online
        <br />
      </h4>
      <Button variant="primary" size="sm">
        Explore our store
      </Button>
    </div>
  </Div>
);
export default Banner;
