import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button, Modal, Table } from 'react-bootstrap';
// import styled from 'styled-components';
import { hideCart, saveCart } from '../../store/actions/alerts';
import { CartItem } from './CartItem';

const Cart = ({ hideCart, alerts, saveCart }) => {
  let { data, open } = alerts.cart;
  console.log(data);
  const handleClose = () => hideCart();
  const cartItems = (() => {
    const counter = {};
    data.forEach(function (obj) {
      var key = JSON.stringify(obj);
      counter[key] = (counter[key] || 0) + 1;
    });
    return Object.entries(counter).map((e) => ({ item: JSON.parse(e[0]), count: e[1] }));
  })();
  console.log('cart:', cartItems);
  const addOne = (item) => {
    saveCart([...data, item]);
  };
  const removeOne = (id) => {
    let index = data.findIndex((e) => e._id === id);
    saveCart([...data.slice(0, index), ...data.slice(index + 1)]);
  };

  return (
    <Modal size="lg" show={open} aria-labelledby="cart-modal" centered>
      <Modal.Header>
        <Modal.Title id="cart-modal">my cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{`${data.length} items in your cart`}</h4>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Item</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Unit Price</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.length ? (
              cartItems.map((e) => <CartItem key={e.item._id} cartItem={e} onRemoveOne={removeOne} onAddOne={addOne} />)
            ) : (
              <tr>
                <td>you cart is empty</td>
              </tr>
            )}
          </tbody>
        </Table>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-primary'>Proceed to Checkout</Button>
        {'  '}
        <Button variant='outline-primary' onClick={handleClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};
Cart.propTypes = {
  hideCart: PropTypes.func,
  alerts: PropTypes.object,
  saveCart: PropTypes.func
};
const mapStateToProps = ({ alerts }) => {
  return {
    alerts
  };
};
const mapDispatchToProp = {
  hideCart,
  saveCart
};
export default connect(mapStateToProps, mapDispatchToProp)(Cart);
