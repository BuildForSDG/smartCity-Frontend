import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const FreshMartSideBar = () => (
    <>
      <h5>Fresh Mart</h5>
      <FreshMartCollections>
        <LinkStyles to="#">Fruits</LinkStyles>
        <LinkStyles to="#">Vegetables</LinkStyles>
        <LinkStyles to="#">Snacks</LinkStyles>
        <LinkStyles to="#">Frozen foods</LinkStyles>
        <LinkStyles to="#">Lunch</LinkStyles>
        <LinkStyles to="#">Cakes</LinkStyles>
      </FreshMartCollections>
    </>
);

export default FreshMartSideBar;

const FreshMartCollections = styled.div`
    width: 100%;
`;

const LinkStyles = styled(Link)`
    display: block !important;
    text-decoration: none !important;
    border-bottom: 0.2px solid rgba(4, 9, 110, 0.95);
    :hover{
      background-color: #FFAF30;
    }
`;