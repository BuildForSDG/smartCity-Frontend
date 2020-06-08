import React from 'react';
import styled from 'styled-components';


const BottomRow = () => (
    <StyleBottomRow>

        <p>&copy;2020 <span> <a style={{color: '#FFAF30'}} href="#">BuildForSDG</a>. All rights reserved. </span> </p>
        
        <p>Courtesy <span> <a style={{color: '#FFAF30'}} href="#">Team-241</a> </span></p>
        
    </StyleBottomRow>
)

export default BottomRow;

const StyleBottomRow = styled.div`
    text-align: center;
    padding: 2rem auto;
    margin: 5% auto;
    display: flex;
    justify-content: space-between;
`;
