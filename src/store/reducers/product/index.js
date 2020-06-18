import { combineReducers } from 'redux';
import item from './single_product.reducer';
import details from './product_details.reducer';

const product = combineReducers({
  item,
  details
});

export default product;
