import React from 'react';
import { Card, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import config from '../../../../config/system';

const ArtisanCard = styled(Card)`
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

export const Artisan = ({ artisan }) => {
  const { description, name, price, filename, _id } = artisan;
  return (
    <div>
      <ArtisanCard style={{ maxWidth: '17rem'}}>
       <Link to={`artisans/${_id}/details`}>
       <Card.Img variant="top" src={`${config.ArtisanImageUrl}/${filename}`} style={{ height: 150 }} />
       </Link>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description.slice(0, 50)}</Card.Text>
          <Button variant=" outlined primary">
          <Link to={`artisans/${_id}/details`}>
          <FontAwesomeIcon icon="eye"/>
          </Link>
          </Button>
          <CartBtn variant="primary" size='sm'>Hire now</CartBtn>
        </Card.Body>
      </ArtisanCard>
    </div>
  );
};

Artisan.propTypes = {
  artisan: PropTypes.object.isRequired
};
