import { combineReducers } from 'redux';
import products from './products';
import product from './product';
import artisans from './artisans';
import artisan from './artisan';
import alerts from './alerts';
import users from './users';

const createReducer = (asyncReducers) =>
  combineReducers({
    artisan,
    artisans,
    products,
    product,
    alerts,
    users,
    ...asyncReducers
  });

export default createReducer;
