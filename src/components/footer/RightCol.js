import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const RightColumn = () => (
    <>
    <h4>Social Media</h4>
    <SocialMedia>
    <Icon>
    <a href="https://api.whatsapp.com/send?phone=2347069746873&text=Hi%20Better%20Life%20Savings" title='whatsapp'>
    <FontAwesomeIcon icon={['fab', 'whatsapp']} size='2x' color='#00e676'/>
    </a>
    <a href='https://twitter.com/scletus40' title='twitter'>
    <FontAwesomeIcon icon={['fab', 'twitter']} size='2x' color='#00b0ff'/>
    </a>
    <a href="https://www.facebook.com/warriisaac.emuohwo" title='facebook'>
    <FontAwesomeIcon icon={['fab', 'facebook']} size='2x' color='#0091ea'/>
    </a>
    <a href="https://www.instagram.com/mcsonnie" title='instagram'>
    <FontAwesomeIcon icon={['fab', 'instagram']} size='2x' color='#ff4081'/>
    </a>
    </Icon>
    </SocialMedia>
    </>
);

export default RightColumn;

const SocialMedia = styled.div`
 color: gold;
 margin-top: 5%;
`;

const Icon = styled.div`
display:flex;
justify-content:space-between;
`;
