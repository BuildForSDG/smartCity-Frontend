import React from 'react';
import { Spinner, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

export const LoadingBtn = ({ text }) => (
  <Button variant="primary" disabled size='sm'>
    <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" />
    {text}
  </Button>
);
LoadingBtn.propTypes = {
  text: PropTypes.string
};
