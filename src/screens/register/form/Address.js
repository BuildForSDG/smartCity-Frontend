import React from "react";
import PropTypes from 'prop-types';
import { Form } from "react-bootstrap";
import { PreviousButton } from "./navbuttons/PreviousButton"
import { NextButton } from "./navbuttons/NextButton"

export const Address = ({ step, formik, next, previous }) => {
  if (step !== 3) return null;
  const { getFieldProps, touched, errors } = formik;
  return (
    <>
      <Form.Group md="4" controlId="Formik05">
        <Form.Label>Address Line 1</Form.Label>
        <Form.Control
          type="text"
          name="address1"
          placeholder="Address Line 1"
          {...getFieldProps("address1")}
          isValid={touched.address1 && !errors.address1}
          isInvalid={touched.address1 && !!errors.address1}
        />
        <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">
          {errors.address1}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group md="4" controlId="Formik06">
        <Form.Label>Address Line 2</Form.Label>
        <Form.Control
          type="text"
          name="address2"
          placeholder="Address Line 2"
          {...getFieldProps("address2")}
        />
      </Form.Group>
      <PreviousButton step={step} previous={previous} />
      <NextButton step={step} next={next} disabled={!!errors.address1} />
    </>
  );
};
Address.propTypes = {
  step: PropTypes.number,
  next: PropTypes.func,
  previous: PropTypes.func,
  formik: PropTypes.object
};