import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Row, Col, Image, Button, Tabs, Tab } from 'react-bootstrap';
import styled from 'styled-components';
import config from '../config/system';
import { getAnArtisan } from '../store/actions';
import { Loading } from './alerts/loading';
import { ErrorAlert } from './alerts/errorAlert';
import { CartBtn } from './CartBtn';

const Details = styled(Container)`
  margin-top: 7vmax;
`;
const Actions = styled(Container)`
  margin: 5vmin 0;
`;
const WishList = styled(Button)`
margin:10px 0;
`

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
                        <Image src={`${config.imageBaseUrl}/${data.filename}`} thumbnail />
                    </Col>
                    <Col sm={6} md={8}>
                        {data.description}
                        <Actions>
                            <Row>
                            <Col sm={6} md={4}>
                                <Tabs defaultActiveKey="reviews" id="review-tab" style={{fontSize:'10px'}}>
                                    <Tab eventKey="reviews" title="Reviews">
                                        <div>No reviews yet</div>
                                    </Tab>
                                    <Tab eventKey="write-review" title="Write">
                                    
                                    </Tab>
                                </Tabs>
                            </Col>
                            <Col sm={6} md={4}>
                            <WishList variant="outline-info">WishList</WishList>
                            </Col>
                            <Col sm={6} md={4}>
                                <CartBtn>Add to cart</CartBtn>
                            </Col>
                            </Row>
                        </Actions>
                    </Col>
                </Row>
            </Details>
        )
    )
};

ArtisanDetails.propTypes = {
    getAnArtisan: PropTypes.func,
    artisan: PropTypes.object
};

const mapStateToProps = ({ artisan }) => {
    return {
        artisan
    }
};
const mapDispatchToProp = {
    getAnArtisan
};

export default connect(mapStateToProps, mapDispatchToProp)(ArtisanDetails);