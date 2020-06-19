import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Image, Button, Tabs, Tab } from 'react-bootstrap';
import styled from 'styled-components';
import config from '../config/system';
import { getAnArtisan } from '../store/actions';
import { Loading } from './alerts/loading';
import { ErrorAlert } from './alerts/errorAlert';
import ReviewFrom from './ReviewForm';

const Details = styled(Container)`
  margin-top: 7vmax;
`;
const Actions = styled(Container)`
  margin: 5vmin 0;
`;
const WishList = styled(Button)`
  margin: 10px 0;
`;
const Rdiv = styled.div`
  font-size: 10px;
  margin: 25px 0;
  border: 1px solid #f5f5f5;
  padding: 10px;
  p {
    color: grey;
    margin: auto;
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

const ArtisanDetails = ({ getAnArtisan, artisan }) => {
  let { data, error, isLoading } = artisan.item;
  const { id } = useParams();
  useEffect(() => {
    getAnArtisan({
      type: 'artisans',
      id
    });
  }, []);
  
  const state = error ? <ErrorAlert /> : isLoading || !data.filename ? <Loading /> : null;
  return (
    state || (
      <Details>
        <Row>
          <Col sm={6} md={4}>
            <Image src={`${config.ArtisanImageUrl}/${data.filename}`} thumbnail />
          </Col>
          <Col sm={6} md={8}>
            <div>{data.description}</div>
            <Actions>
              <Row>
                <Col sm={6} md={4}>
                  <Tabs defaultActiveKey="reviews" id="review-tab" style={{ fontSize: '10px' }}>
                    <Tab eventKey="reviews" title="Reviews">
                      {data.reviews.length ? (
                        data.reviews.map((e) => (
                          <Rdiv key={e._id}>
                            <span>{new Date(e.date).toDateString()}</span>
                            <div>{e.writer}</div>
                            <p>{e.body}</p>
                          </Rdiv>
                        ))
                      ) : (
                        <div>No reviews yet</div>
                      )}
                    </Tab>
                    <Tab eventKey="write-review" title="Write">
                      <ReviewFrom id={id} type="artisans" />
                    </Tab>
                  </Tabs>
                </Col>
                <Col sm={6} md={4}>
                  <WishList variant="outline-info" size="sm">
                    Wishlist
                  </WishList>
                </Col>
                <Col sm={6} md={4}>
                  <CartBtn size="sm">Hire now</CartBtn>
                </Col>
              </Row>
            </Actions>
          </Col>
        </Row>
      </Details>
    )
  );
};

ArtisanDetails.propTypes = {
  getAnArtisan: PropTypes.func,
  artisan: PropTypes.object
};
const mapStateToProps = ({ artisan }) => {
  return {
    artisan
  };
};
const mapDispatchToProp = {
  getAnArtisan
};
export default connect(mapStateToProps, mapDispatchToProp)(ArtisanDetails);
