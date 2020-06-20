import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup, Image } from 'react-bootstrap';
import config from '../../config/system';
import styled from 'styled-components'

const VendorDetails = styled(ListGroup)`
padding: 30px;
background: #eee;
`
const Span = styled.span`
font-style: italic;
font-weight: bold;
padding: 2px;
background: #eee;
`
const Vendor = ({ data }) => {

  return (
    <VendorDetails horizontal>
    <ListGroup.Item><Image src={`${config.ArtisanImageUrl}/${data.filename}`} thumbnail width={100} height={100} />
      </ListGroup.Item>
  <ListGroup.Item>{data.name}</ListGroup.Item>
  <ListGroup.Item><Span>Location:</Span> {data.location}</ListGroup.Item>
  </VendorDetails>
  )
};
Vendor.propTypes = {
  data: PropTypes.object
};
export default Vendor