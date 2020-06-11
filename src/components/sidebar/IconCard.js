import React from 'react'
import styled from "styled-components";
import {Card} from './Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Icon = styled.div`
display:flex;
justify-content:space-between;
padding:0 20px;
`
const Button = styled.button`
background:none;
border:0;
cursor:pointer
`
export const IconCard = ()=>(
    <Card>
    <h5>Stay In Touch</h5>
    <Icon>
    <a href="https://api.whatsapp.com/send?phone=2347086902001&text=Hi%20Better%20Life%20Savings" title='whatsapp'>
    <FontAwesomeIcon icon={['fab', 'whatsapp']} size='2x' color='#00e676'/>
    </a>
    <Button>
    <FontAwesomeIcon icon={['fab', 'twitter']} size='2x' color='#00b0ff'/>
    </Button>
    <a href="https://www.facebook.com/MrJerrytheajoguy" title='facebook'>
    <FontAwesomeIcon icon={['fab', 'facebook']} size='2x' color='#0091ea'/>
    </a>
    <a href="https://www.instagram.com/MrJerrytheajoguy/" title='instagram'>
    <FontAwesomeIcon icon={['fab', 'instagram']} size='2x' color='#ff4081'/>
    </a>
    <a href="contact" title='contact us'>
    <FontAwesomeIcon icon='envelope' size='2x' color='#00b0ff'/>
    </a>
    
    </Icon>
    </Card>
)