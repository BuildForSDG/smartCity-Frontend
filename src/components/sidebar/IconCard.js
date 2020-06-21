import React from 'react'
import styled from "styled-components";
import {Card} from './Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icon = styled.div`
display:flex;
justify-content:space-between;
padding:0 20px;
`
export const IconCard = ()=>(
    <Card>
    <h5>Stay In Touch</h5>
    <Icon>
    <a href="https://api.whatsapp.com/send?phone=2347069746873&text=Hi%20Better%20Life%20Savings" title='whatsapp'>
    <FontAwesomeIcon icon={['fab', 'whatsapp']} size='2x' color='#00e676'/>
    </a>
    <a href='https://twitter.com/scletus40' title='twitter'>
    <FontAwesomeIcon icon={['fab', 'twitter']} size='2x' color='#00b0ff'/>
    </a>
    <a href="https://web.facebook.com/mcsonnie" title='facebook'>
    <FontAwesomeIcon icon={['fab', 'facebook']} size='2x' color='#0091ea'/>
    </a>
    <a href="https://www.instagram.com/mcsonnie" title='instagram'>
    <FontAwesomeIcon icon={['fab', 'instagram']} size='2x' color='#ff4081'/>
    </a>
    <a href="contact" title='contact us'>
    <FontAwesomeIcon icon='envelope' size='2x' color='#00b0ff'/>
    </a>
    
    </Icon>
    </Card>
)