import { combineReducers } from 'redux';
import products from './products';
import product from './product';
import artisans from './artisans';
import artisan from './artisan';
import alerts from './alerts';
import user from './user';

const createReducer = (asyncReducers) =>
  combineReducers({
    artisan,
    artisans,
    products,
    product,
    alerts,
    user,
    ...asyncReducers
  });

export default createReducer;
