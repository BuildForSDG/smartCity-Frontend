import React from 'react';
import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

export const Artisan = ({ product }) => {

    // const { banner_pic, name, service, detail_desc, contact } = product;
    const { description, name, price, thumbnail } = product;
    return (
        <Card className="Artisan__card">
          <Card.Img src={`https://backendapi.turing.com/images/products/${thumbnail}`} alt={name} />
          <Card.ImgOverlay className="Artisan__Overlay">
             <Card.Text>
               {description}
             </Card.Text>
             <Button>Contact Me {name}</Button>
          </Card.ImgOverlay>
          <Card.Body>
            <Card.Title> {name} </Card.Title>
            <Card.Subtitle> NAME <b>{price}</b></Card.Subtitle>
          </Card.Body>
        </Card>
    )
}

Artisan.propTypes = {
  product: PropTypes.object.isRequired
};

