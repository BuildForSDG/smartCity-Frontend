import React from 'react';
import styled from 'styled-components';
import Main from './main'
import SideBar from '../../components/sidebar';
import HamBurger from '../../components/hamburger';

const Section = styled.section`
border: 1px solid rgba(255, 255, 255, 0.7);
border-radius:15px;
overflow:hidden;
box-sizing:border-box;
padding:0;
margin:0;

`
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

const Home = () => (
    <Section className="row">
        <HamBurgerMedia />
        <SideBar />
        <Main md="9" xs="12" />
    </Section>
)
export default Home;