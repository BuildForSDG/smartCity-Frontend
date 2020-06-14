import { Button } from 'react-bootstrap';
import styled from 'styled-components';

export const CartBtn = styled(Button)`
color: #fff;
float: right;
background-color: rgba(4, 9, 110, 0.95);
transition: background 1s;
:hover {
  background-color: #ffaf30;
  color: rgba(4, 9, 110, 0.95);
}
`;