import styled from 'styled-components';
import { Card } from 'react-bootstrap';

export const PageDisplay = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ContainerDiv = styled.div`
  padding: 0 5%;
  margin-top: 5%;
`

export const ItemsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 5% auto;
  width: 100%;
`

export const PlainCard = styled(Card)`
  font-size: 80%;
  width: 31%;
  margin: 1% auto;
  border: 1px solid rgba(4, 9, 110, 0.95);
  padding: 1%
  background-color: gold;
  transition: transform 1s;
  :hover {
    box-shadow: 0px 6px 6px, 0px #FFAF30;
    opacity: 0.9;
    transform: scaleX(1.08);
    z-index: 2;
  }
  box-shadow: 0px 1px 0px 0px rgba(4, 9, 110, 0.95) !important;
  @media (max-width: 765px) {
    width: 45% !important;
  }
  @media (max-width: 600px) {
    width: 90% !important;
  }
`;

export const DescribeCard = styled.div`
  display: block;
  @media(max-width: 6000px){
    display: none;
  }
`;

export const ButtonPry = styled.button`
  color: #fff;
  background-color: rgba(4, 9, 110, 0.95);
  border: none;
  display: block;
  padding: 0.7rem 1.2rem;
  transition: background 1s;
  :hover {
    background-color: #FFAF30;
    color: rgba(4, 9, 110, 0.95)
  }
  @media(max-widh: 500px){
    padding: 1rem;
  }
`;

export const DarkHeadings = styled.div`
color: #FFAF30;
background-color: rgba(4, 9, 110, 0.95);
text-align: center;
margin-top: 7%;
border-radius: 10px 5px 0px 0px; 
`;

export const LightHeading = styled.div`
    background-color: #FFAF30;
    color: rgba(4, 9, 110, 0.95);
    border-radius: 5px 5px 0px 0px; 
    text-align: center;
 `;
