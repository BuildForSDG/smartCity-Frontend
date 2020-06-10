import React from 'react';
import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import styled  from 'styled-components';

export const Product = ({ product }) => {
  const { description, name, price, thumbnail } = product;
  console.log(product)

  return (
    <PlainCard>
      <Card.Img
        style={{ width: '15rem' }}
        variant="top"
        src={`${process.env.IMAGE_URL}/${thumbnail}`}
      />
      <Card.Body>
        <BoldText>
          <Card.Text>{name}</Card.Text>
        </BoldText>
        <CardText>{description}</CardText>
        <Button variant=" outlined primary">${price}</Button>
        <ButtonPry>Add to Cart</ButtonPry>
      </Card.Body>
    </PlainCard>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired
};

const BoldText = styled.b`
  font-weight: bold;
`;

const CardText = styled(Card.Text)`
  @media (max-width: 20px) {
    display: none !important;
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
