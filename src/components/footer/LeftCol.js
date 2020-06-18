import React from 'react';
import styled from 'styled-components';

const LeftColumn = () => (
    <Leftcolstyles>
        <h4>Contact Us</h4>
        <div>
            <h5>Email us</h5>
            <p>
                <a style={{color: '#f7b731'}} href="mailto:buildforsdg@andela.com">buildforsdg@andela.com</a>
            </p>
            <p>
             <a style={{color: '#f7b731'}} href="tel:+2347012345678">+2347012345678</a>
            </p>
        </div>
    </Leftcolstyles>
)

export default LeftColumn;


const Leftcolstyles = styled.div`
    color:#fff;
`;