import React from 'react';
import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { PlainCard, ButtonPry } from '../styles';
import styled from 'styled-components';

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
