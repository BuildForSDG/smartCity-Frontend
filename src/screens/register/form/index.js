import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { Form, ProgressBar } from "react-bootstrap";
import styled from 'styled-components'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {postUsers} from '../../../store/actions/user'
import { EmailAndPhone } from "./EmailAndPhone";
import { Name } from "./Name";
import { Address } from "./Address";
import { StateCityGenderBirth } from "./StateCity";
import {UsernameAndPassword} from './UsernameAndPass'
const Div = styled.div`
padding: 20px 0;
`

const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;
const schema = yup.object({
  firstname: yup
    .string()
    .min(2, "*Name too short")
    .max(50, "*Name can't be longer than 50 characters")
    .required("*First Name is required"),
  lastname: yup
    .string()
    .min(2, "*Name is too short")
    .max(50, "*Name can't be longer than 50 characters")
    .required("*Last Name is required"),
  email: yup
    .string()
    .email("*Enter a valid email address")
    .required("*Email is required"),
  phone: yup
    .string()
    .min(11, "*Phone number is too short")
    .max(14, "*Phone number is too long")
    .matches(phoneRegExp, "*Phone number is not valid")
    .required("*Phone number required"),
  address1: yup
    .string()
    .min(10, "*Address is too short")
    .required("*Address is required"),
  city: yup
    .string()
    .min(3, "*Too short")
    .max(30, "*City can't be longer than 30 characters")
    .required("*City is required"),
  state: yup
    .string()
    .min(3, "*Too short")
    .max(30, "*State can't be longer than 30 characters")
    .required("*State is required"),
  gender: yup.string().required("*Select gender"),
  dob: yup.string().required("*Select date of birth"),
  username: yup
    .string()
    .min(5, "*Username is too short")
    .required("*Username is required"),
  password: yup
    .string()
    .min(8, "*Password is too short")
    .required("*Password is required")
  /*terms: yup.bool().required(),*/
});

function RegisterationForm({postUsers, users}) {
  const [step, setStep] = React.useState(0);
  React.useEffect(() => {
    console.log(step);
  });
  const next = () => setStep(step >= 3 ? 4 : step + 1);
  const previous = () => setStep(step <= 0 ? 0 : step - 1);

  return (
    <Formik
      validationSchema={schema}
      onSubmit={(value) => postUsers({type: 'register', user: value})}
      initialValues={{
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
        gender: "",
        dob: "",
        username: '',
        password: ''
      }}
    >
      {(formik) => (
        <Form noValidate onSubmit={formik.handleSubmit}>
          <Div>
          <ProgressBar now={step*25} label={`${step*100/4}%`} />
          </Div>
          <Name formik={formik} step={step} next={next} previous={previous} />
          <EmailAndPhone
            formik={formik}
            step={step}
            next={next}
            previous={previous}
          />
          <Address
            formik={formik}
            step={step}
            next={next}
            previous={previous}
          />
          <StateCityGenderBirth
            formik={formik}
            step={step}
            next={next}
            previous={previous}
          />
           <UsernameAndPassword
            formik={formik}
            step={step}
            next={next}
            previous={previous}
            isLoading = {users.user.isLoading}
          />
        </Form>
      )}
    </Formik>
  );
}
RegisterationForm.propTypes = {
  users: PropTypes.object,
  postUsers: PropTypes.func
};
const mapStateToProps = ({users }) => {
  return {
    users
  };
};
const mapDispatchToProp = {
  postUsers
};
export default connect(mapStateToProps, mapDispatchToProp)(RegisterationForm);
