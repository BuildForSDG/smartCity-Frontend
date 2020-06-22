import React from 'react';
import styled from 'styled-components';
import ReactWOW from 'react-wow';

const LeftColumn = () => (
    <ReactWOW animation="fadeInUp">
    <Leftcolstyles>
        <h4>Contact Us</h4>
        <div>
            <h6>Email</h6>
            <p>
                <a style={{color: '#f7b731'}} href="mailto:buildforsdg@andela.com">buildforsdg@andela.com</a>
            </p>
            <h6>Call:</h6>
            <p>
             <a style={{color: '#f7b731'}} href="tel:+2347012345678">+2347012345678</a>
            </p>
        </div>
    </Leftcolstyles>
    </ReactWOW>
)

export default LeftColumn;


const Leftcolstyles = styled.div`
    color:#fff;
`;