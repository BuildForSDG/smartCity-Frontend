import React from 'react';
import * as yup from 'yup';
import { Formik } from 'formik';
import { Form, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import ReactWOW from 'react-wow';




const FormDetails =  () => {
    return (
      <ReactWOW animation="bounceIn">
      <ContactWrapper>
      <h3 className="text-center mb-5">Get In Touch</h3>
        <Formik
          initialValues={{ fullName: '', subject: '', email: '', message: '' }}
          validationSchema={yup.object({
            fullName: yup.string()
              .max(50, 'Must be 50 characters or less')
              .required('Your full name is required'),
            email: yup.string()
              .email('Invalid email address')
              .required('Email is required'),
            subject: yup.string()
              .max(50, 'Must be 50 characters or less')
              .required('Subject is required'),
            message: yup.string()
              .required('Message is required')
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {formik => (
            <Form onSubmit={formik.handleSubmit}>
              <Row>
                <Col sm="4">
                  <Form.Label htmlFor="fullName">Full Name</Form.Label>
                </Col>
                <Col sm="8">
                <Form.Group controlId="contactform">
                  <Form.Control type="text" {...formik.getFieldProps('fullName')} placeholder="Full Name"  />
                  {formik.touched.fullName && formik.errors.fullName ? (
                    <div className="text-danger">{formik.errors.fullName}</div>
                  ) : null}
                </Form.Group>
                </Col>
              </Row>
              <Row>
                  <Col sm="4">
                    <Form.Label htmlFor="email">Email Address</Form.Label>
                  </Col>
                  <Col sm="8">
                    <Form.Group controlId="contactform">
                      <Form.Control type="email" {...formik.getFieldProps('email')} placeholder="Enter your email" />
                      {formik.touched.email && formik.errors.email ? (
                        <div className="text-danger">{formik.errors.email}</div>
                      ) : null}
                    </Form.Group>
                  </Col>
              </Row>
              <Row>
                <Col sm="4">
                  <Form.Label htmlFor="subject">Subject</Form.Label>
                </Col>
                <Col sm="8">
                  <Form.Group controlId="contactForm">
                    <Form.Control type="text" {...formik.getFieldProps('subject')} placeholder="Subject" />
                    {formik.touched.subject && formik.errors.subject ? (
                      <div className="text-danger">
                      {formik.errors.subject}
                    </div>
                    ) : null}
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col sm="4">
                <Form.Label  htmlFor="message">Message</Form.Label>
                </Col>
                <Col sm="8">
                  <Form.Group controlId="contactForm">
                    <Form.Control as="textarea" rows="5"  {...formik.getFieldProps('message')} placeholder="Write message here" />
                    {formik.touched.message && formik.errors.message ? (
                      <div type="invalid"  className="text-danger">
                        {formik.errors.message}
                      </div>
                    ) : null}
                  </Form.Group>
                </Col>
              </Row>
                <SendBtn type="submit" className="btn btn-primary">Submit</SendBtn>
              
            </Form>
          )}
        </Formik>
      </ContactWrapper>
      </ReactWOW>
    );
  };

  export default FormDetails;
  
  
  const ContactWrapper = styled.div`
    max-width: 45rem;
    margin: 0 auto;
    background: linear-gradient(rgba(4,9,110,0.1), #FFAF30, #FFAF30);
    padding: 1rem 0.7rem;
    -webkit-box-shadow: 5px 5px 5px 2px rgba(0,0,0,0.4);
    -moz-box-shadow: 5px 5px 5px 2px rgba(0,0,0,0.4);
    box-shadow: 5px 5px 5px 2px rgba(0,0,0,0.4);
  `;

  const SendBtn = styled.button`
  color: #fff;
  background-color: rgba(4, 9, 110, 0.95);
  border: none;
  display: block;
  padding: 0.7rem 1.2rem;
  transition: background 1s;
  :hover {
    opacity: 9;
    color: #FFAF30
  }
  @media(max-widh: 500px){
    padding: 1rem;
  }
  `;