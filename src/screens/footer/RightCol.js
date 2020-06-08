import React from 'react';
import styled from 'styled-components';

const RightColumn = () => (
    <>
    <h4>Social Media</h4>
    <SocialMedia>
        <a style={{color: '#FFAF30'}} href="#">Facebook</a>
        <a style={{color: '#FFAF30'}} href="#">Instagram</a>
        <a style={{color: '#FFAF30'}} href="#">Twitter</a>
    </SocialMedia>
    </>
);

export default RightColumn;

const SocialMedia = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 12rem;
`;
