import React, {useContext } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { Form, Button, Spinner, Modal } from "react-bootstrap";
import styled from 'styled-components';
import {Link} from 'react-router-dom';

import { AuthContext } from '../context/authContext'

const schema = yup.object({
  username: yup
    .string()
    .min(5, "*Username is too short")
    .required("*Username is required"),
  password: yup
    .string()
    .min(8, "*Password is too short")
    .required("*Password is required"),
});

const Div = styled.div`
padding: 20px;
`

function LoginForm() {
  const user = useContext(AuthContext);

  const {loading, login, showLogin, closeLogin} = user;

  const Btn = loading ?  <Button variant="primary" disabled>
<Spinner
  as="span"
  animation="border"
  size="sm"
  role="status"
  aria-hidden="true"
/>
Loading...
</Button> : <Button type='submit'  style={{float:'right'}}>Login</Button>

  return (
    <Formik
      validationSchema={schema}
      onSubmit={(value) => login(value)}
      initialValues={{
        username: "",
        password: ""
      }}
    >
      {({getFieldProps, touched, errors, handleSubmit}) => (
          <Modal centered show={showLogin} onHide={closeLogin}>
              <Modal.Header closeButton>
                  <p onClick={closeLogin}>Do not have account yet? <Link to='/register'>Register</Link></p>
        </Modal.Header>
        <Div>
        <Form noValidate onSubmit={handleSubmit}>
      <Form.Group md="4" controlId="login-username">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          name="username"
          placeholder='username'
          {...getFieldProps("username")}
          isValid={touched.username && !errors.username}
          isInvalid={touched.username && !!errors.username}
        />
        <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">
          {errors.username}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group md="4" controlId="login-pass">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          placeholder='password'
          {...getFieldProps("password")}
          isValid={touched.password && !errors.password}
          isInvalid={touched.password && !!errors.password}
        />
        <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">
          {errors.password}
        </Form.Control.Feedback>
      </Form.Group>
          {Btn}
        </Form>
        <p onClick={closeLogin}>Forgot password ?<Link to='/password-reset'> Click here</Link></p>
        </Div>
        </Modal>
      )}
    </Formik>
  );
}
export default LoginForm;
