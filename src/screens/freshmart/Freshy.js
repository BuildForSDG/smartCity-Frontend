import React, { useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

export const Freshy = ({ product }) => {
    const { description, name, price, thumbnail } = product;
    return (
        <Card style={{ width: '18rem', margin: 20 }}>
          <Card.Img variant="top" src={`https://backendapi.turing.com/images/products/${thumbnail}`} alt={name} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Button variant="outlined primary">${price}</Button>
          </Card.Body>
        </Card>
    );
};

Freshy.propTypes = {
    product: PropTypes.object.isRequired
}
