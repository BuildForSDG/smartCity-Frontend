import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import LeftColumn from './LeftCol';
import MiddleColumn from './MiddleCol';
import RightColumn from './RightCol';
import BottomRow from './BottomRow';

const Footer = () => (
    <>
        <FooterWrapper>
        <Container>
        <Row>
            <Col>
                <LeftColumn />
            </Col>
            <Col>
                <MiddleColumn />
            </Col>
            <Col>
                <RightColumn />
            </Col>
        </Row>
        <BottomRow />
        </Container>
        </FooterWrapper>
    </>
);

export default Footer;

const FooterWrapper = styled.footer`
    width: 100%;
    background-color: rgba(4,9,110,0.95);
    color: #fff;
    margin-top: 2rem;
    padding: 3rem 1%;
`;
export const styleLinks = {
    color: 'gold !important'
}