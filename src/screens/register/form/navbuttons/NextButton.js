import React from "react";
import { Button } from "react-bootstrap";
import PropTypes from 'prop-types';

const styles = {
  float: "right"
};
export function NextButton({ step, disabled, next }) {
  if (step < 4) {
    return (
      <Button
        style={styles}
        className="btn btn-secondary"
        type="button"
        onClick={next}
        disabled={disabled}
      >
        Next
      </Button>
    );
  }
  return (
    <Button type="submit" style={styles}>
      Submit
    </Button>
  );
}
NextButton.propTypes = {
  step: PropTypes.number,
  next: PropTypes.func,
  disabled: PropTypes.bool
};