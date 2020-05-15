import { combineReducers } from 'redux';
import products from './products';
import product from './product';
import alerts from './alerts'

const createReducer = (asyncReducers) =>
  combineReducers({
    products,
    product,
    alerts,
    ...asyncReducers
  });

export default createReducer;
