import React from 'react';
import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { PlainCard, ButtonPry } from '../styles';


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

// const imgHeight = {
//   max-height: '3rem'
// }
// export default Profession;
