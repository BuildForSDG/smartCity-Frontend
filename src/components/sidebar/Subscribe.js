import React from "react";
import { Form, Button } from "react-bootstrap";
import { Card } from "./Card";
import styled from "styled-components";

const SubForm = styled(Form)`
text-align:left
`
export const Subscribe = () => (
  <Card>
      <h5>News Letter</h5>
    <SubForm>
      <Form.Group controlId="formBasicEmail">
        <Form.Label srOnly>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          Sign up to our newsletter for the latest news and special offers.
        </Form.Text>
      </Form.Group>

      <Button variant="primary" type="submit" size="sm">
        Subscribe
      </Button>
    </SubForm>
  </Card>
);
