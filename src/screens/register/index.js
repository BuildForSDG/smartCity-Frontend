import React from "react";
import Form from "./form";
import styled from "styled-components";

const Div = styled.div`
  border: 1px solid #eee;
  padding:30px;
  height:fit-content;
  border-radius: 15px;
  width: 90%;
  margin: 5em auto;
  @media(min-width: 786px) {
    width: 60%;
  }
  `;

const Section = styled.section`
  border: 1px solid rgba(255, 255, 255, 0.7);
  border-radius: 15px;
  overflow: hidden;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
`;

const Register = () => (
  <Section className="row">
    <Div>
      <Form />
    </Div>
  </Section>
);
export default Register;
