import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { saveReview } from '../store/actions/alerts/review.actions';

const schema = yup.object({
  firstName: yup
    .string()
    .min(2, '*Name too short')
    .max(50, "*Name can't be longer than 50 characters")
    .required('*First Name is required'),
  lastName: yup
    .string()
    .min(2, '*Name is too short')
    .max(50, "*Name can't be longer than 50 characters")
    .required('*Last Name is required'),
  message: yup.string().min(30, "*message can't be shorter than 50 characters").required('*Last message is required')
});

function ReviewForm({ saveReview, id, type }) {
  return (
    <Formik
      validationSchema={schema}
      onSubmit={(value) =>
        saveReview({
          type,
          id,
          review: {
            writer: `${value.firstName} ${value.lastName}`,
            body: value.message,
            rating: parseFloat(Math.random().toFixed(1))+4
          }
        })
      }
      initialValues={{
        firstName: '',
        lastName: '',
        message: ''
      }}
    >
      {({ handleSubmit, touched, errors, getFieldProps }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Group md="4" controlId="Formik01">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              name="firstName"
              placeholder="First Name"
              {...getFieldProps('firstName')}
              isValid={touched.firstName && !errors.firstName}
              isInvalid={touched.firstName && !!errors.firstName}
            />
            <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">{errors.firstName}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group md="4" controlId="Formik02">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              name="lastName"
              placeholder="Last Name"
              {...getFieldProps('lastName')}
              isValid={touched.lastName && !errors.lastName}
              isInvalid={touched.lastName && !!errors.lastName}
            />
            <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">{errors.lastName}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group md="4" controlId="Formik02">
            <Form.Label>Message</Form.Label>
            <Form.Control
              type="textarea"
              name="message"
              placeholder="Message"
              {...getFieldProps('message')}
              isValid={touched.message && !errors.message}
              isInvalid={touched.message && !!errors.message}
            />
            <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">{errors.message}</Form.Control.Feedback>
          </Form.Group>
          <Button type="submit">Submit review</Button>
        </Form>
      )}
    </Formik>
  );
}

ReviewForm.propTypes = {
  saveReview: PropTypes.func,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

const mapDispatchToProp = {
  saveReview
};
export default connect(null, mapDispatchToProp)(ReviewForm);
