import React from "react";
import PropTypes from 'prop-types';
import { Form } from "react-bootstrap";
import {PreviousButton} from './navbuttons/PreviousButton';
import {NextButton} from './navbuttons/NextButton';

export const EmailAndPhone = ({ step, formik, next, previous }) => {
  if (step !== 2) return null;
  const { getFieldProps, touched, errors } = formik;
  return (
    <>
      <Form.Group md="4" controlId="Formik03">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder='Email'
          {...getFieldProps("email")}
          isValid={touched.email && !errors.email}
          isInvalid={touched.email && !!errors.email}
        />
        <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">
          {errors.email}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group md="4" controlId="Formik04">
        <Form.Label>Phone</Form.Label>
        <Form.Control
          type="tel"
          name="phone"
          placeholder='Phone'
          {...getFieldProps("phone")}
          isValid={touched.phone && !errors.phone}
          isInvalid={touched.phone && !!errors.phone}
        />
        <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">
          {errors.phone}
        </Form.Control.Feedback>
      </Form.Group>
      <PreviousButton step={step} previous={previous}  />
          <NextButton step={step} next={next} disabled={!!errors.email  || !!errors.phone} />
    </>
  );
};
EmailAndPhone.propTypes = {
  step: PropTypes.number,
  next: PropTypes.func,
  previous: PropTypes.func,
  formik: PropTypes.object
};