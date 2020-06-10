import React from 'react';
import FormDetails from './Form';
import { ContainerDiv, DarkHeadings } from '../styles';

const ContactForm = () => (
    <>
    <ContainerDiv>
    <DarkHeadings className="py-3 mb-4 mt-0">
    <h1>Contact Us</h1>
    </DarkHeadings>
        <FormDetails />
    </ContainerDiv>
    </>
);

export default ContactForm;
