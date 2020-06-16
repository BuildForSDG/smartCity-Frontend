import React from 'react';
import PropTypes from 'prop-types';
import { Button, Image } from 'react-bootstrap';
import config from '../../config/system';

export const CartItem = ({ cartItem, onAddOne, onRemoveOne }) => {
  const { item, count } = cartItem;
  return (
    <tr>
      <td>
        <Image src={`${config.imageBaseUrl}/${item.filename}`} thumbnail width={100} height={100} />
      </td>
      <td>{item.name}</td>
      <td>
        <Button onClick={() => onRemoveOne(item._id)}>-</Button> <Button>{count}</Button>{' '}
        <Button onClick={() => onAddOne(item)}>+</Button>
      </td>
      <td>{item.price}</td>
      <td>{parseFloat(item.price) * parseFloat(count)}</td>
    </tr>
  );
};
CartItem.propTypes = {
  cartItem: PropTypes.object,
  onAddOne: PropTypes.func,
  onRemoveOne: PropTypes.func
};
