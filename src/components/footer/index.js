import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import LeftColumn from './LeftCol';
import MiddleColumn from './MiddleCol';
import RightColumn from './RightCol';
import BottomRow from './BottomRow';
import ReactWOW from 'react-wow';

const Footer = () => (
    <>
    <ReactWOW animation="zoomIn">
        <FooterWrapper>
        <Container>
        <Row>
            <Col md="5">
                <LeftColumn />
            </Col>
            <Col md="3">
                <MiddleColumn />
            </Col>
            <Col md="4">
                <RightColumn />
            </Col>
        </Row>
        <BottomRow />
        </Container>
        </FooterWrapper>
    </ReactWOW>
    <ScrollBtn  id="myBtn" title="Go to Top"> Top </ScrollBtn>
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

const ScrollBtn = styled.button`
    display: none;
    position: fixed;
    bottom: 110px;
    right: 30px;
    z-index: 9;
    border: none;
    outline: none;
    background-color: rgba(4,9,110,0.95);
    color: #fff;
    cursor: pointer;
    padding: 8px;
    border-radius: 4px;
    opacity: 0.5;

    :hover {
        opacity: 1;
    }
`;