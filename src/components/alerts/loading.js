import React from 'react';
import styled from 'styled-components';
import { Spinner } from 'react-bootstrap';

const Loader = styled(Spinner)`
  margin: 100px 48% !important;
`;
export const Loading = () => (
  <Loader animation="border" role="status" variant="info">
    <span className="sr-only">Loading...</span>
  </Loader>
);
