import React from 'react';
import { Card, Button } from 'react-bootstrap';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import config from '../../../../config/system';

const ProductCard = styled(Card)`
  border: none;
  background: rgba(255, 255, 255, 0.3);
  :hover {
    box-shadow: 0px 6px 6px 0px #bdbdbd;
    opacity: 0.9;
  }
  box-shadow: 0px 1px 0px 0px #bdbdbd;
  @media (max-width: 910px) {
    margin: 20px auto !important;
  }
`;
const CartBtn = styled(Button)`
  color: #fff;
  float: right;
  background-color: rgba(4, 9, 110, 0.95);
  transition: background 1s;
  :hover {
    background-color: #ffaf30;
    color: rgba(4, 9, 110, 0.95);
  }
`;

export const Product = ({ product }) => {
  const { description, name, price, filename } = product;
  return (
    <div>
      <ProductCard style={{ width: '17rem' /*,margin:'20px auto'*/ }}>
        <Card.Img variant="top" src={`${config.imageBaseUrl}/${filename}`} style={{ height: 150 }} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description.slice(0, 50)}</Card.Text>
          <Button variant=" outlined primary">${price}</Button>
          <CartBtn variant="primary">Add to cart</CartBtn>
        </Card.Body>
      </ProductCard>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired
};
