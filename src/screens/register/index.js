import React from "react";
import Form from "./form";
import SideBar from "../../components/sidebar";
import styled from "styled-components";
import HamBurger from '../../components/hamburger';

const Div = styled.div`
  background: #81c784;
  padding:30px;
  height:fit-content;
  width: 90%;
  margin: 5em auto;
  -webkit-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.4);
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.4);

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
const HamBurgerMedia = styled(HamBurger)`
    display: none;
    @media (max-width: 769px) {
        display: block;
    }
`;

const SideBarNav = styled(SideBar)`
display: block;
@media (min-width: 578px) {
    display: none;
}
`;

const Register = () => (
  <Section className="row">
    <HamBurgerMedia />
    <SideBarNav />
    <Div>
      <Form />
    </Div>
  </Section>
);
export default Register;
