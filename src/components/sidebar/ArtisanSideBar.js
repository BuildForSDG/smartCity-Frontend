import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ArtisanSideBar = () => (
    <div className="mt-3">
      <h5>Artisans</h5>
      <ArtisansCollection className="">
         <LinkStyles to="#"> Beauty & Makeup Artistry </LinkStyles>
         <LinkStyles to="#"> Electrical Works </LinkStyles>
         <LinkStyles to="#">Hair styling (male and female)</LinkStyles>
         <LinkStyles to="#">Barbing saloons</LinkStyles>
         <LinkStyles to="#">Event Plannig & catering</LinkStyles>
         <LinkStyles to="#">Fashion</LinkStyles>
         <LinkStyles to="#">Home & Office cleaning</LinkStyles>
         <LinkStyles to="#">Laundry (dry cleaning )</LinkStyles>
         <LinkStyles to="#">Photography & Arts</LinkStyles>
         <LinkStyles to="#">Creative designs (graphic designs and animations )</LinkStyles>
         <LinkStyles to="#">Web & mobile developers</LinkStyles>
      </ArtisansCollection>
    </div>
);

export default ArtisanSideBar;


const ArtisansCollection = styled.div`
    width: 100%;
`;

const LinkStyles = styled(Link)`
    display: block !important;
    text-decoration: none !important;
    padding: 5px 3px !important;
    border-bottom: 0.2px solid rgba(4, 9, 110, 0.95);
    :hover{
    background-color: #FFAF30;
    }
`