import React from "react";
import PropTypes from 'prop-types';
import { Form, Col, Row } from "react-bootstrap";
import { PreviousButton } from "./navbuttons/PreviousButton";
import { NextButton } from "./navbuttons/NextButton";

export const StateCityGenderBirth = ({ step, formik, next, previous }) => {
  console.dir(formik);
  if (step !== 4) return null;
  const { getFieldProps, touched, errors, setFieldValue, values } = formik;
  return (
    <>
      <Form.Row>
        <Form.Group as={Col} controlId="Formik07">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            name="city"
            placeholder="City"
            {...getFieldProps("city")}
            isValid={touched.city && !errors.city}
            isInvalid={touched.city && !!errors.city}
          />
          <Form.Control.Feedback type="valid">
            Looks good!
          </Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            {errors.city}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} controlId="Formik08">
          <Form.Label>State</Form.Label>
          <Form.Control
            type="text"
            name="state"
            placeholder="State"
            {...getFieldProps("state")}
            isValid={touched.state && !errors.state}
            isInvalid={touched.state && !!errors.state}
          />
          <Form.Control.Feedback type="valid">
            Looks good!
          </Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            {errors.state}
          </Form.Control.Feedback>
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Col sm={6}>
          <fieldset>
            <Form.Group as={Row} controlId="Formik09">
              <Form.Label as="legend" column sm={6}>
                Gender
              </Form.Label>
              <Col sm={6}>
                <Form.Check
                  style={{ textAlign: "left" }}
                  type="radio"
                  label="Female"
                  name="gender"
                  value="female"
                  checked={values.gender === "female"}
                  onChange={() => setFieldValue("gender", "female")}
                />
                <Form.Check
                  style={{ textAlign: "left" }}
                  type="radio"
                  label="Male"
                  name="gender"
                  value="male"
                  checked={values.gender === "male"}
                  onChange={() => setFieldValue("gender", "male")}
                />
              </Col>
              <div
                style={{
                  margin: "5px auto",
                  color: "#d84315",
                  fontSize: "13px"
                }}
              >
                {touched.gender && !!errors.gender ? errors.gender : ""}
              </div>
            </Form.Group>
          </fieldset>
        </Col>
        <Form.Group as={Col} controlId="Formik10" sm={6}>
          <Form.Label>Date Of Birth</Form.Label>
          <Form.Control
            type="date"
            name="dob"
            {...getFieldProps("dob")}
            isValid={touched.dob && !errors.dob}
            isInvalid={touched.dob && !!errors.dob}
          />
          <Form.Control.Feedback type="valid">
            Looks good!
          </Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            {errors.dob}
          </Form.Control.Feedback>
        </Form.Group>
      </Form.Row>

      <PreviousButton step={step} previous={previous} />
      <NextButton
        step={step}
        next={next}
        disabled={!!errors.city || !!errors.state || errors.gender}
      />
    </>
  );
};
StateCityGenderBirth.propTypes = {
  step: PropTypes.number,
  next: PropTypes.func,
  previous: PropTypes.func,
  formik: PropTypes.object
};