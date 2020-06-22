import React from 'react';
import FormDetails from './Form';
import styled from 'styled-components';
import ReactWOW from 'react-wow';

const ContactForm = () => (
    <>
    <ReactWOW animation="zoomIn">
      <DarkHeadings className="py-3 mb-4 mt-0">
      <h1>Contact Us</h1>
      </DarkHeadings>
    </ReactWOW>
    <ContainerDiv>
        <FormDetails />
    </ContainerDiv>
    </>
);

export default ContactForm;

const DarkHeadings = styled.div`
color: #FFAF30;
background-color: rgba(4, 9, 110, 0.8);
text-align: center;
margin-top: 7%; 
`;

const ContainerDiv = styled.div`
  padding: 0 5%;
`;
