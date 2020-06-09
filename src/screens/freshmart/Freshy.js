import React, { useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { PlainCard, ButtonPry } from '../styles'

export const Freshy = ({ product }) => {
    const { description, name, price, thumbnail } = product;
    return (
        <PlainCard>
          <Card.Img style={{ maxHeight: '9rem' }} variant="top" src={`https://backendapi.turing.com/images/products/${thumbnail}`} alt={name} />
          <Card.Body>
            <Card.Text><b>{name}</b></Card.Text>
            <Card.Text>{description}</Card.Text>
            <Button variant="outlined primary">${price}</Button>
            <ButtonPry>Add to Cart</ButtonPry>
          </Card.Body>
        </PlainCard>
    );
};

Freshy.propTypes = {
    product: PropTypes.object.isRequired
}
