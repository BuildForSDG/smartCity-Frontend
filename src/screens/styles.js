import styled from 'styled-components';
import { Card } from 'react-bootstrap';

export const PageDisplay = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ContainerDiv = styled.div`
  padding: 0 5%;
`

export const ItemsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 5% auto;
  width: 100%;
`

export const PlainCard = styled(Card)`
  width: 32%;
  margin: 1% auto;
  border: 1px solid rgba(4, 9, 110, 0.95);
  padding: 1%
  background-color: gold;
  :hover {
    box-shadow: 0px 6px 6px, 0px #FFAF30;
    opacity: 0.9;
    transform: scale(1.08);
    z-index: 2;
  }
  box-shadow: 0px 1px 0px 0px rgba(4, 9, 110, 0.95) !important;
  @media (max-width: 765px) {
    width: 45% !important;
  }
  @media (max-width: 600px) {
    width: 90% !important;
  }
`

export const ButtonPry = styled.button`
  color: #fff;
  background-color: rgba(4, 9, 110, 0.95);
  border: none;
  display: block;
  padding: 0.7rem 1.2rem;
  :hover {
    background-color: #FFAF30;
    color: rgba(4, 9, 110, 0.95)
  }
`