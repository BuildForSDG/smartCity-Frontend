import React from "react";
import { Button } from "react-bootstrap";
import PropTypes from 'prop-types';

const styles = {
  float: "left"
};
export function PreviousButton({ step, previous }) {
  if (step !== 0) {
    return (
      <Button
        style={styles}
        className="btn btn-secondary"
        type="button"
        onClick={previous}
      >
        Back
      </Button>
    );
  }
  return null;
}
PreviousButton.propTypes = {
  step: PropTypes.number,
  previous: PropTypes.func
};