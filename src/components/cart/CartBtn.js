//import React from 'react';
//import PropTypes from 'prop-types';
//import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';
//import {showCart} from '../../store/actions/alerts'

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
/*const CartBtn = ({showCart, alerts, item}) => {
  let { data} = alerts.cart;
  const handleClick = (e) => showCart([...data, e])
  return <Btn size='sm' onClick={() => handleClick(item)}>Add to cart</Btn>
}
CartBtn.propTypes = {
  showCart: PropTypes.func,
  alerts: PropTypes.object,
  item: PropTypes.obj
};
const mapStateToProps = ({ alerts }) => {
  return {
    alerts
  };
};
const mapDispatchToProp = {
  showCart
};
export default connect(mapStateToProps, mapDispatchToProp)(CartBtn);*/
