import React from 'react';
import { Form } from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';

const schema = yup.object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().required(),
    phoneNumber: yup.string().required(),
    houseAddress: yup.string(),
    city: yup.string().required(),
    state: yup.string().required()
});

function HireForm() {
    return (
        <Formik
          validationSchema={schema}
          onSubmit={console.log}
          initialValues={{
              firstName: '',
              lastName: '',
              email: '',
              phoneNumber: '',
              houseAddress: '',
              city: '',
              state: ''
          }}
        >
        {({
            handleSumit,
            handleChange,
            handleBlur,
            values,
            touched,
            isValid,
            errors,
        }) => (
            <Form noValidate onSubmit={handleSumit}>
                <Form.Row>
                <Form.Group as={Col} md="6" controlId="validationFormik01">
                    <Form.Control
                    type="text"
                    name="firstName"
                    value={values.firstName}
                    onChange={handleChange}
                    isValid={touched.firstName && !errors.firstName}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validateioFormik02">
                  <form.Control
                    type="text"
                    name="lastName"
                    value={values.lastName}
                    onChange={handleChange}
                    isValid={touched.lastName && !errors.lastName}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validateioFormik03">
                  <form.Control
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    isValid={touched.email && !errors.email}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validateioFormik04">
                  <form.Control
                    type="tel"
                    name="phoneNumber"
                    value={values.phoneNumber}
                    onChange={handleChange}
                    isValid={touched.phoneNumber && !errors.phoneNumber}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validateioFormik05">
                  <form.Control
                    type="text"
                    name="houseAddress"
                    value={values.houseAddress}
                    onChange={handleChange}
                    isValid={touched.houseAddress && !errors.houseAddress}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6">
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validateioFormik06">
                  <form.Control
                    type="text"
                    name="city"
                    value={values.city}
                    onChange={handleChange}
                    isValid={touched.city && !errors.city}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validateioFormik07">
                  <form.Control
                    type="text"
                    name="state"
                    value={values.state}
                    onChange={handleChange}
                    isValid={touched.state && !errors.state}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                </Form.Row>
                <Button type="submit">Submit form</Button>
                </Form>
        )}
        </Formik>
    )
}