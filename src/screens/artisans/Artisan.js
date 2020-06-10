import React from 'react';
import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { PlainCard, ButtonPry } from '../styles';

export const Artisan = ({ product }) => {

    // const { banner_pic, name, service, detail_desc, contact } = product;
    const { description, name, price, thumbnail } = product;
    const first_name = name.split(" ")[0]
    return (
      <PlainCard>
        <Card className="Artisan__card">
          <Card.Img src={`https://backendapi.turing.com/images/products/${thumbnail}`} alt={name} />
          <Card.Body>
            <Card.Title> {name} </Card.Title>
            <Card.Text>
              {description}
            </Card.Text>
            <Card.Subtitle> NAME <b>{price}</b></Card.Subtitle>
            <br />
            <ButtonPry>Hire {first_name}</ButtonPry>
          </Card.Body>
        </Card>
      </PlainCard>
    )
}

Artisan.propTypes = {
  product: PropTypes.object.isRequired
};

// PlainCard = styled(Card)`
// `
