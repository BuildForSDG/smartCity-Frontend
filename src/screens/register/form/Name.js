import React from "react";
import PropTypes from 'prop-types';
import { Form } from "react-bootstrap";
import { PreviousButton } from "./navbuttons/PreviousButton";
import { NextButton } from "./navbuttons/NextButton";

export const Name = ({ step, formik, next, previous }) => {
  if (step !== 1) return null;
  const { getFieldProps, touched, errors } = formik;

  return (
    <>
      <Form.Group md="4" controlId="Formik01">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          name="firstName"
          placeholder='First Name'
          {...getFieldProps("firstName")}
          isValid={touched.firstName && !errors.firstName}
          isInvalid={touched.firstName && !!errors.firstName}
        />
        <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">
          {errors.firstName}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group md="4" controlId="Formik02">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          name="lastName"
          placeholder='Last Name'
          {...getFieldProps("lastName")}
          isValid={touched.lastName && !errors.lastName}
          isInvalid={touched.lastName && !!errors.lastName}
        />
        <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">
          {errors.lastName}
        </Form.Control.Feedback>
      </Form.Group>
      <PreviousButton step={step} previous={previous} />
      <NextButton
        step={step}
        next={next}
        disabled={!!errors.firstName || !!errors.lastName}
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
