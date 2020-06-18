import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import config from '../../config/system';
import { saveHire } from '../../store/actions/alerts';

const ArtisanCard = styled(Card)`
  border: none;
  font-size: 0.6rem;
  background: rgba(230, 230, 230, 0.2);
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
  transition: background 0.5s;
  :hover {
    background-color: #ffaf30;
    color: rgba(4, 9, 110, 0.95);
  }
`;
const Title = styled(Card.Title)`
  font-size: 0.8rem;
`;

export const Artisan = ({ artisan, saveHire, alerts }) => {
  const { description, name, filename, _id } = artisan;
  let { data } = alerts.hire;
  const handleClickHire = (e) => saveHire([...data, e])
  return (
    <div>
      <ArtisanCard style={{ maxWidth: '14rem' }}>
        <Link to={`artisans/${_id}/details`}>
        <Card.Img variant="top" src={`${config.ArtisanImageUrl}/${filename}`} style={{ height: 150 }} />
        </Link>
        <Card.Body>
          <Title>{name}</Title>
          <Card.Text>{description.slice(0, 50)}</Card.Text>
           <Button size='sm' variant='default'>
           <Link to={`artisans/${_id}/details`}>
           <FontAwesomeIcon icon="eye"/>
           </Link>
           </Button>
            <CartBtn variant="primary" 
              size="sm"
              onClick={() => handleClickHire(artisan)}
            >
              Hire now
            </CartBtn>
        </Card.Body>
      </ArtisanCard>
    </div>
  );
};

Artisan.propTypes = {
  artisan: PropTypes.object.isRequired,
  alerts: PropTypes.object,
  saveHire: PropTypes.func
};

const mapStateToProps = ({ alerts }) => {
  return {
    alerts
  }
};

const mapDispatchToProp = {
  saveHire
};

export default connect(mapStateToProps, mapDispatchToProp)(Artisan);