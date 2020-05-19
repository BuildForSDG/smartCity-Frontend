import React from 'react';
import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

export const Product = ({ product }) => {
  const { description, name, price, thumbnail } = product;

  return (
    <Card style={{ width: '18rem', margin: 20 }}>
      <Card.Img variant="top" src={`https://backendapi.turing.com/images/products/${thumbnail}`} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant=" outline-primary">${price}</Button>
      </Card.Body>
    </Card>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired
};
