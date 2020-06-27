import React from 'react';
import { Button, Spinner } from 'react-bootstrap';
import PropTypes from 'prop-types';

const styles = {
  float: 'right'
};
export function NextButton({ step, disabled, next, isLoading }) {
  if (step < 4) {
    return (
      <Button style={styles} className="btn btn-secondary" type="button" onClick={next} disabled={disabled}>
        Next
      </Button>
    );
  }
  return isLoading ? (
    <Button variant="primary" size='sm' disabled style={styles}>
      <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
      submitting...
    </Button>
  ) : (
    <Button type="submit" style={styles}>
      Submit
    </Button>
  );
}
NextButton.defaultProps = {
  isLoading: false
};
NextButton.propTypes = {
  step: PropTypes.number,
  next: PropTypes.func,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool
};
