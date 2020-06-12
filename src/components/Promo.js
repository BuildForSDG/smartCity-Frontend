import React from 'react'
import styled from "styled-components";
import {Col, Row} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Column = styled(Col)`
display:flex;
justify-content:center;
align-items: center;
`
const Card = styled.div`
border: 1px solid #eee;
margin-top: 50px;
padding: 10px;
overflow: hidden;
`

export const Promo = ()=>(
    <Card>
    <Row>
    <Col sm='4' style={{borderRight:'1px solid #eee'}}>
    <Row>
    <Column sm='6'>
    <FontAwesomeIcon icon='truck-moving' size='4x' color='#ffaf30'/>
    </Column>
    <Col sm='6'>
    <p>Instant doorstep delivery</p>
    <small>orders over #1500</small>
    </Col>
    </Row>
    </Col>

    <Col sm='4' style={{borderRight:'1px solid #eee'}}>
    <Row>
    <Column sm='6'>
    <FontAwesomeIcon icon='money-bill-alt' size='4x' color='#ffaf30'/>
    </Column>
    <Col sm='6'>
    <p>Moneyback guarantee</p>
    <small>On all orders</small>
    </Col>
    </Row>
    </Col>

    <Col sm='4'>
    <Row>
    <Column sm='6'>
    <FontAwesomeIcon icon='headset' size='4x' color='#ffaf30'/>
    </Column>
    <Col sm='6'>
    <p>Best online Support</p>
    <small>24 hours daily</small>
    </Col>
    </Row>
    </Col>
    
    </Row>
    </Card>
)