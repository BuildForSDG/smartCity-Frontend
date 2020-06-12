import React from 'react';
import styled from 'styled-components';
import Main from './main'
import SideBar from '../../components/sidebar';

const Section = styled.section`
border: 1px solid rgba(255, 255, 255, 0.7);
border-radius:15px;
overflow:hidden;
box-sizing:border-box;
padding:0;
margin:0;

`

const Home = () => (
    <Section className='row'>
        <SideBar />
        <Main />
    </Section>
)
export default Home;