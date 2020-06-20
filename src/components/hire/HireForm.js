import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Form, Button, Modal, Col } from 'react-bootstrap';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Vendor from './Vendor';
import { hideHire } from '../../store/actions/alerts';

const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;
const schema = yup.object({
  firstname: yup
    .string()
    .min(2, '*Name too short')
    .max(50, "*Name can't be longer than 50 characters")
    .required('*First Name is required'),
  lastname: yup
    .string()
    .min(2, '*Name is too short')
    .max(50, "*Name can't be longer than 50 characters")
    .required('*Last Name is required'),
  email: yup.string().email('*Enter a valid email address').required('*Email is required'),
  phone: yup
    .string()
    .min(11, '*Phone number is too short')
    .max(14, '*Phone number is too long')
    .matches(phoneRegExp, '*Phone number is not valid')
    .required('*Phone number required'),
  address: yup.string().min(10, '*Address is too short').required('*Address is required'),
  city: yup
    .string()
    .min(3, '*Too short')
    .max(30, "*City can't be longer than 30 characters")
    .required('*City is required')
});

const Div = styled.div`
  padding: 30px;
`;

function HireForm({ alerts, hideHire }) {
  let { data, open } = alerts.hire;

  const handleClose = () => hideHire();

  return (
    <Formik
      validationSchema={schema}
      onSubmit={(value) => console.log(value)}
      initialValues={{
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        address: '',
        city: ''
      }}
    >
      {({ getFieldProps, touched, errors, handleSubmit }) => (
        <Modal centered show={open} onHide={handleClose}>
          <Modal.Header closeButton>
              <p>Fill the form below to contact this vendor</p>
          </Modal.Header>
          <Vendor data={data}/>
          <Div>
            <Form noValidate onSubmit={handleSubmit}>
              <Form.Row>
                <Form.Group as={Col} md="6" controlId="fname">
                  <Form.Control
                    type="text"
                    name="firstname"
                    placeholder="Firstname"
                    {...getFieldProps('firstname')}
                    isValid={touched.firstname && !errors.firstname}
                    isInvalid={touched.firstname && !!errors.firstname}
                  />
                  <Form.Control.Feedback type="invalid">{errors.firstname}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="lname">
                  <Form.Control
                    type="text"
                    name="lastName"
                    placeholder="Lastname"
                    {...getFieldProps('lastname')}
                    isValid={touched.lastname && !errors.lastname}
                    isInvalid={touched.lastname && !!errors.lastname}
                  />
                  <Form.Control.Feedback type="invalid">{errors.lastname}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="email">
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Email"
                    {...getFieldProps('email')}
                    isValid={touched.email && !errors.email}
                    isInvalid={touched.email && !!errors.email}
                  />
                  <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="phone">
                  <Form.Control
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    {...getFieldProps('phone')}
                    isValid={touched.phone && !errors.phone}
                    isInvalid={touched.phone && !!errors.phone}
                  />
                  <Form.Control.Feedback type="invalid">{errors.phnone}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="address">
                  <Form.Control
                    type="text"
                    name="address"
                    placeholder="Address"
                    {...getFieldProps('address')}
                    isValid={touched.address && !errors.address}
                    isInvalid={touched.address && !!errors.address}
                  />
                  <Form.Control.Feedback type="invalid">{errors.address}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="city">
                  <Form.Control
                    type="text"
                    name="city"
                    placeholder="City"
                    {...getFieldProps('city')}
                    isValid={touched.city && !errors.firscity}
                    isInvalid={touched.city && !!errors.city}
                  />
                  <Form.Control.Feedback type="invalid">{errors.city}</Form.Control.Feedback>
                </Form.Group>
              </Form.Row>
              <Button type="submit" style={{ float: 'right' }}>
                Send
              </Button>
            </Form>
          </Div>
        </Modal>
      )}
    </Formik>
  );
}
HireForm.propTypes = {
  alerts: PropTypes.object,
  hideHire: PropTypes.func
};
const mapStateToProps = ({ alerts }) => {
  return {
    alerts
  };
};
const mapDispatchToProp = {
  hideHire
};
export default connect(mapStateToProps, mapDispatchToProp)(HireForm);
