import React from 'react';
import styled from 'styled-components';
import bg from '../images/store-banner.jpg';
import { Button } from 'react-bootstrap';
import ReactWOW from 'react-wow';

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
  <ReactWOW animation="zoomIn">
    <Div>
      <div style={{ textAlign: 'center', background: 'rgba(0, 0, 0, 0.65)', height:'fit-content', padding: '50px 10px' }}>
        <h4>
        Goal 9 ( the idea of a smartcity- where all kinds of perishables and all kinds of services can be ordered online and delivered to the clients door step).<b/>
This will create jobs, and enhance agricultural productivity, by providing a large market for large outputs of perishable products. Also enhancing employment status by ensuring petty service providers get adequate patronage.

        </h4>
        <Button variant="primary" size="sm">
          see our vendors
        </Button>
      </div>
    </Div>
  </ReactWOW>
);
export default Banner;
