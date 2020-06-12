import React, { useState } from 'react';
import styled from 'styled-components';
import { Alert } from 'react-bootstrap';

const Error = styled(Alert)`
margin: 100px auto;
width: 70%;
`
export const ErrorAlert = () => {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Error variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>Refresh the page to try again.</p>
      </Error>
    );
  }
  return null;
};
