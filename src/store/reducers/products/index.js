import {combineReducers} from 'redux';
import all from './all_products.reducer';
import inCategory from './in_category.reducer';
import inLocation from './in_location.reducer';


const products = combineReducers({
    all,
    inLocation,
    fruits: inCategory('fruits'),
    vegetables: inCategory('vegetables'),
    snacks: inCategory('snacks'),
    frozen:  inCategory('frozen'),
    lunch: inCategory('lunch'),
    cakes:  inCategory('cakes')
});

export default products;