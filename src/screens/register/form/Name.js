import React from "react";
import PropTypes from 'prop-types';
import { Form } from "react-bootstrap";
import { PreviousButton } from "./navbuttons/PreviousButton";
import { NextButton } from "./navbuttons/NextButton";

export const Name = ({ step, formik, next, previous }) => {
  if (step !== 0) return null;
  const { getFieldProps, touched, errors } = formik;

  return (
    <>
      <Form.Group md="4" controlId="Formik01">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          name="firstname"
          placeholder='First Name'
          {...getFieldProps("firstname")}
          isValid={touched.firstname && !errors.firstname}
          isInvalid={touched.firstname && !!errors.firstname}
        />
        <Form.Control.Feedback type="invalid">
          {errors.firstname}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group md="4" controlId="Formik02">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          name="lastname"
          placeholder='Last Name'
          {...getFieldProps("lastname")}
          isValid={touched.lastname && !errors.lastname}
          isInvalid={touched.lastname && !!errors.lastname}
        />
        <Form.Control.Feedback type="invalid">
          {errors.lastname}
        </Form.Control.Feedback>
      </Form.Group>
      <PreviousButton step={step} previous={previous} />
      <NextButton
        step={step}
        next={next}
        disabled={!!errors.firstname || !!errors.lastname}
      />
    </>
  );
};
Name.propTypes = {
  step: PropTypes.number,
  next: PropTypes.func,
  previous: PropTypes.func,
  formik: PropTypes.object
};
