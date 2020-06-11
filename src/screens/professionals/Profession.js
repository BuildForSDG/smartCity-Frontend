import React from 'react';
import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import styled from 'styled-components';


export const Profession = ({ product }) => {
    const { name, price, thumbnail, description } = product;

    return (
        <PlainCard className="Artisan__card">
          <Card.Img style={{ maxHeight: '9rem' }} src={`https://backendapi.turing.com/images/products/${thumbnail}`} alt={name} />
          <Card.Body>
            <Card.Title style={{ color: 'rgba(4, 9, 110, 0.95)'}}> {name} </Card.Title>
            <Card.Text>
              {description}
            </Card.Text>
            <Card.Subtitle> NAME <b>{price}</b></Card.Subtitle>
            <ButtonPry>Contact Me {name}</ButtonPry>
          </Card.Body>
        </PlainCard>
    )
}

Profession.propTypes = {
    product: PropTypes.object.isRequired
}

const PlainCard = styled(Card)`
  font-size: 80%;
  width: 31%;
  margin: 1% auto;
  border: 1px solid rgba(4, 9, 110, 0.95);
  padding: 1%
  background-color: gold;
  transition: transform 1s;
  :hover {
    box-shadow: 0px 6px 6px, 0px #FFAF30;
    opacity: 0.9;
    transform: scaleX(1.08);
    z-index: 2;
  }
  box-shadow: 0px 1px 0px 0px rgba(4, 9, 110, 0.95) !important;
  @media (max-width: 765px) {
    width: 45% !important;
  }
  @media (max-width: 600px) {
    width: 90% !important;
  }
`;

const ButtonPry = styled.button`
  color: #fff;
  background-color: rgba(4, 9, 110, 0.95);
  border: none;
  display: block;
  padding: 0.7rem 1.2rem;
  transition: background 1s;
  :hover {
    background-color: #FFAF30;
    color: rgba(4, 9, 110, 0.95)
  }
  @media(max-widh: 500px){
    padding: 1rem;
  }
`;
